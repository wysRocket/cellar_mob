import React, { ReactNode, useMemo } from 'react'

import type {} from '@mui/lab/themeAugmentation'

import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'

type Props = {
  children?: ReactNode
}

const ThemeProvider = ({ children }: Props) => {
  const theme = useMemo(() => createTheme(), [])
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider
