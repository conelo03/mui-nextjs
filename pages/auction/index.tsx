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
    { field: 'nama', headerName: 'Nama Lelang', width: 190 },
    { field: 'start', headerName: 'Waktu Mulai', width: 190 },
    { field: 'finish', headerName: 'Waktu Selesai', width: 190 }, 
    { field: 'multiple', headerName: 'Minimum Bid', width: 190 },
    { field: 'minimum', headerName: 'Kelipatan Bid', width: 190 },
    { field: 'keterangan', headerName: 'Keterangan', width: 190 },
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
    { id: 1, nama: 'Plastik Bening', start: 'Friday, june 9, 2023 at 10:45 AM', finish: 'Saturday, june 10, 2023 at 10:45 AM', multiple: '500', minimum:'2000', keterangan:''},
    { id: 2, nama: 'Botol Bening', start: 'Friday, june 9, 2023 at 11:45 AM', finish: 'Saturday, june 10, 2023 at 11:45 AM', multiple: '500', minimum:'3000', keterangan:''},
    { id: 3, nama: 'Botol Warna', start: 'Friday, june 9, 2023 at 12:45 AM', finish: 'Saturday, june 10, 2023 at 12:45 AM', multiple: '500', minimum:'1000', keterangan:''},
    { id: 4, nama: 'Tutup Galon', start: 'Friday, june 9, 2023 at 13:45 AM', finish: 'Saturday, june 10, 2023 at 13:45 AM', multiple: '500', minimum:'3500', keterangan:''},
    { id: 5, nama: 'Gelas Plastik', start: 'Friday, june 9, 2023 at 14:45 AM',finish: 'Saturday, june 10, 2023 at 14:45 AM', multiple: '500', minimum:'5000', keterangan:''},
    { id: 6, nama: 'Tutup Botol', start: 'Friday, june 9, 2023 at 10:45 AM',finish: 'Saturday, june 10, 2023 at 10:45 AM', multiple: '500', minimum:'2500', keterangan:''},
    { id: 7, nama: 'Minyak Jelantah', start: 'Friday, june 9, 2023 at 11:45 AM', finish: 'Saturday, june 10, 2023 at 11:45 AM', multiple: '500', minimum:'4000', keterangan:''},
    { id: 8, nama: 'Kardus Kering', start: 'Friday, june 9, 2023 at 12:45 AM',finish: 'Saturday, june 10, 2023 at 12:45 AM', multiple: '500', minimum:'2000', keterangan:''},
    { id: 9, nama: 'Koran/Buku', start: 'Friday, june 9, 2023 at 13:45 AM', finish: 'Saturday, june 10, 2023 at 13:45 AM', multiple: '500', minimum:'1000', keterangan:''},
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
                  <Grid item xs={12} md={6}>
                    <Title>Kelola Lelang Room</Title>
                  </Grid>
                  <Grid item xs={12} md={6} alignContent={'end'}>
                      <Button href="/auction/new" variant="contained" sx={{float: 'right'}}>
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