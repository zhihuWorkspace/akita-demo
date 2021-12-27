import { useObservableState } from 'observable-hooks';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Button, TableBody, TableRow, TableHead, TableCell, Avatar, Table, Paper, TableContainer } from '@mui/material';

import { shows$, activeShow$, showsService } from '../../services/shows';

export interface Demo2Props { }

export const Demo2: FunctionComponent<Demo2Props> = () => {
  const shows = useObservableState(shows$, null);
  const activeShow = useObservableState(activeShow$, null);
  console.log('activeShow', activeShow);
  useEffect(() => {
    showsService.get()
  }, [])
  return <>
    <Button onClick={() => showsService.update('2', { name: 'davy hi' + Date.now() })}>修改第二个名字</Button>
    <Button onClick={() => showsService.setActive('3')}>active 3</Button>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>封面</TableCell>
            <TableCell align="right">名称</TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
};
