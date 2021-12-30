import { useObservableState } from 'observable-hooks';
import React, { FunctionComponent, useEffect, } from 'react';
import { Button, TableBody, TableRow, TableHead, TableCell, Avatar, Table, Paper, TableContainer } from '@mui/material';

import { shows$, activeShow$, showsStore$, showsService } from '../../services/shows';

export interface Demo2Props { }

const mockData = () => ({
  id: Math.random(),
  name: `davy-${Date.now()}`,
  image: {
    medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/1815.jpg',
    original: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/1815.jpg',
  },
  summary: 'xxxxxxxxxxx'
})

export const Demo2: FunctionComponent<Demo2Props> = () => {
  const shows = useObservableState(shows$, null);

  const showsStore = useObservableState(showsStore$, null);
  const activeShow = useObservableState(activeShow$, null);
  console.log('showsStore', showsStore);
  useEffect(() => {
    showsService.get()
  }, [])
  return <>
    <Button onClick={() => showsService.update(2, { name: 'davy hi' + Date.now() })}>change 2nd name</Button>
    <Button onClick={() => showsService.setActive(3)}>active 3</Button>
    <Button onClick={() => showsService.setNextActive()}>next active</Button>
    <Button onClick={() => showsService.add(mockData(), { prepend: true })}>preappend</Button>
    <Button onClick={() => showsService.move(0, 1)}>change index</Button>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>封面</TableCell>
            <TableCell align="right">名称</TableCell>
            <TableCell align="right">简介</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shows && shows.map((show) => (
            <TableRow
              key={show.id}
              style={{ backgroundColor: (activeShow && show.id === activeShow.id) ? 'red' : '' }}
            >
              <TableCell>
                <Avatar src={show.image.medium} />
              </TableCell>
              <TableCell component="th" scope="row">
                {show.name}
              </TableCell>
              <TableCell component="th" scope="row">
                <span dangerouslySetInnerHTML={{ "__html": show.summary }}></span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
};
