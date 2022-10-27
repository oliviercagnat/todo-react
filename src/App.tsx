import React, { FC, ReactElement } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { DashBoard } from './pages/dashboard/Dashboard'
import { CustomTheme } from './theme/CustomTheme'

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={CustomTheme}>
      <CssBaseline />
      <DashBoard />
    </ThemeProvider>
  )
}
export default App
