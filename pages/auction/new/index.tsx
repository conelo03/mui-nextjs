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
        Tambah Data Lelang Room
      </Typography>
      <Box component="form" >
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <TextField
              name="Name"
              fullWidth
              required
              id="TrashName"
              label="Nama Lelang"
              autoComplete="price"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              fullWidth
              id="Price"
              label="Waktu Mulai"
              name="Trash Price"
              autoComplete="price"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              fullWidth
              id="Price"
              label="Waktu Selesai"
              name="Trash Price"
              autoComplete="price"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              fullWidth
              id="Price"
              label="Minimum Bid"
              name="Trash Price"
              autoComplete="price"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              fullWidth
              id="Price"
              label="Kelipatan Bid"
              name="Trash Price"
              autoComplete="price"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              fullWidth
              id="Price"
              label="Keterangan"
              name="Trash Price"
              autoComplete="price"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Tambah Sampah
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