import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import BaseLayout from '@components/layout/BaseLayout';
import Copyright from '@components/Copyright';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Title from '@components/pages/Dashboard/Title';
import { AddOutlined, DeleteOutline, EditOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Box, Button, Link } from '@mui/material';
import router from 'next/router';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nama', headerName: 'Nama Sampah', width: 190 },
    { field: 'harga', headerName: 'Harga Sampah/KG', width: 190 },
    { field: 'stok', headerName: 'Stok Sampah/KG', width: 190 }, 
    { field: 'gambar', headerName: 'Gambar', width: 190 },
    {
      field: 'action',
      headerName: 'Aksi',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <React.Fragment>
            <EditOutlined />
            <DeleteOutline />
          </React.Fragment>
        )
      }
    },
  ];
      
  const rows = [
    { id: 1, nama: 'Plastik Campur', harga: '2000', stok: '2', gambar: ' ' },
    { id: 2, nama: 'Botol Bening', harga: '3000', stok: '3', gambar: ' '},
    { id: 3, nama: 'Botol Warna', harga: '1000', stok: '4', gambar: ' '},
    { id: 4, nama: 'Tutup Galon', harga: '3500', stok: '2', gambar: ' '},
    { id: 5, nama: 'Gelas Plastik', harga: '5000',stok: '5', gambar: ' '},
    { id: 6, nama: 'Tutup Botol', harga: '2500',stok: '2', gambar: ' '},
    { id: 7, nama: 'Minyak Jelantah', harga: '4000', stok: '6', gambar: ' '},
    { id: 8, nama: 'Kardus Kering', harga: '2000',stok: '4', gambar: ' '},
    { id: 9, nama: 'Koran/Buku', harga: '1000', stok: '12', gambar: ' ' },
  ];

  return (
    <BaseLayout title='New'>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ flexGrow: 1 }} marginBottom={'20'}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6}>
                    <Title>Kelola Sampah</Title>
                  </Grid>
                  <Grid item xs={6} md={6} alignContent={'end'}>
                      <Button href="/trash/new" variant="contained" sx={{float: 'right'}}>
                        Tambah Data
                      </Button>
                  </Grid>
                </Grid>
              </Box>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection={false}
              />
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </BaseLayout>
  )
}

export default Dashboard