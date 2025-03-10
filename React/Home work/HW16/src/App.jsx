import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Homework 16
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: 2, marginLeft: 25 }}>
        <Typography variant='h3' component='h3'>
          Welckome to unsere App!
        </Typography>
        <Button
          justify='center'
          sx={{ display: 'block', marginTop: 2 }}
          variant='contained'
          onClick={() => setOpen(true)}
        >
          Show Dialog Window
        </Button>
      </Container>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Dialog Window</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a dialog window. You can close it by clicking the button
            below.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>No way</Button>
          <Button onClick={() => setOpen(false)}>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default App
