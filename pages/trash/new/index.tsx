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
        Tambah Data Sampah
      </Typography>
      <Box component="form" >
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <TextField
              name="Name"
              fullWidth
              required
              id="TrashName"
              label="Nama Sampah"
              autoComplete="price"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              fullWidth
              id="Price"
              label="Harga Sampah"
              name="Trash Price"
              autoComplete="price"
            />
          </Grid>
          <Grid item xs={12} sm={12}> 
            <TextField 
              type="file"
              required
              fullWidth
              id="Upload"
              label=" "
              name="Upload"
              autoComplete="Upload"
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