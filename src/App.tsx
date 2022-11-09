import React, { FC, ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { DashBoard } from './pages/dashboard/Dashboard';
import { CustomTheme } from './theme/CustomTheme';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create a client
const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={CustomTheme}>
        <CssBaseline />
        <DashBoard />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
