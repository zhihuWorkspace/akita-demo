import { useObservableState } from 'observable-hooks';
import React, { FunctionComponent, useState } from 'react';
import { Button, Grid, Avatar, Typography, TextField } from '@mui/material';

import { name$, avatar$, loading$, sessionService } from '../../services/session';

export interface Demo1Props { }

export const Demo1: FunctionComponent<Demo1Props> = () => {
  const name = useObservableState(name$, '');
  const avatar = useObservableState(avatar$, '');
  const loading = useObservableState(loading$, null);
  const [id, setId] = useState('');

  //142368
  return <>
    <TextField onChange={(e) => { setId(e.target.value) }} />
    <Button onClick={() => sessionService.signIn(id)}>登陆 {loading ? '...' : ''}</Button>
    <Button onClick={() => sessionService.signOut()}>登出</Button>
    <Grid>
      <Avatar
        alt={name}
        src={avatar}
        sx={{ width: 124, height: 124 }}
      />
      <Typography variant="h6">{name}</Typography>
    </Grid>
  </>
};
