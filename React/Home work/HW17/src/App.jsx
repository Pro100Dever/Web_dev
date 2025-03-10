import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
    },
  })
  const [CurrentTheme, setCurrentTheme] = useState(theme)
  const handleChange = () => {
    setCurrentTheme(
      CurrentTheme.palette.mode === 'dark'
        ? createTheme({ palette: { mode: 'light' } })
        : createTheme({ palette: { mode: 'dark' } })
    )
  }

  return (
    <ThemeProvider theme={CurrentTheme}>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CssBaseline />
        <Typography variant='h3'>
          {CurrentTheme.palette.mode === 'light' ? 'Light' : 'Dark'} Mode
        </Typography>
        <Button
          sx={{ mt: 1.5 }}
          variant={
            CurrentTheme.palette.mode === 'light' ? 'contained' : 'outlined'
          }
          onClick={handleChange}
        >
          Toggle Theme
        </Button>
      </div>
    </ThemeProvider>
  )
}

export default App
