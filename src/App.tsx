import React, {FC, ReactElement} from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './theme/customTheme';
import { DashBoard } from './pages/dashboard/dashboard';

const App: FC = (): ReactElement => {
  return(
  <ThemeProvider theme={customTheme}>
    <CssBaseline />
    <DashBoard />
  </ThemeProvider>
  );
}
export default App;
