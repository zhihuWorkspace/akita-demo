import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import React, { FunctionComponent } from 'react';

export interface LayoutpProps {
  children: React.ReactNode;
}

export const MainLayout: FunctionComponent<LayoutpProps> = ({ children }) => {
  // const { sysName } = useParams<{ sysName: string }>();
  // useEffect(() => {
  //   configService.setSystemName(sysName);
  // }, [sysName]);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">{children}</Container>
    </>
  );
};
