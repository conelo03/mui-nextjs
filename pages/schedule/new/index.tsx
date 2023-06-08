import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BaseContainer from '@components/layout/Container';
import { AddAPhoto } from '@mui/icons-material';
import { ListItemButton, ListItemIcon } from '@mui/material';

const New = () => {
  return (
    <BaseContainer title={'Tambah Data'}>
      <Typography component="h1" variant="h5">
        Kelola Jadwal
      </Typography>
      <Box component="form" >
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <TextField
              name="Name"
              fullWidth
              required
              id="official"
              label="Nama Petugas"
              autoComplete="official"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              fullWidth
              id="name"
              label="Nama Nasabah"
              name="customer"
              autoComplete="customer"
            />
          </Grid>
          <Grid item xs={12} sm={12}> 
            <TextField 
              required
              fullWidth
              id="date"
              label=" Pilih Hari "
              name="date"
              autoComplete="date"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Tambah Jadwal
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
          </Grid>
        </Grid>
      </Box>
    </BaseContainer>
  )
}

export default New