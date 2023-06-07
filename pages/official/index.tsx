import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import BaseLayout from '@components/layout/BaseLayout';
import Copyright from '@components/Copyright';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Title from '@components/pages/Dashboard/Title';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

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
    { field: 'name', headerName: 'Nama Pegawai', width: 190 },
    { field: 'role', headerName: 'Jabatan', width: 190 },
    { field: 'idPeg', headerName: 'Nomor Pegawai', width: 190 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'noTelp', headerName: 'Nomor Handphone', width: 190 },
    { field: 'address', headerName: 'Alamat', width: 190 },
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
    { id: 1, name: 'Snow', role: 'Jon', idPeg: 'senin', email: '', noTelp:'', address:''},
    { id: 2, name: 'Lannister', role: 'Cersei', idPeg: 'selasa', email: '', noTelp:'', address:''},
    { id: 3, name: 'Lannister', role: 'Jaime', idPeg: 'selasa', email:'', noTelp:'', address:'' },
    { id: 4, name: 'Stark', role: 'Arya', idPeg: 'kamis', email:'', noTelp: '', address:''},
    { id: 5, name: 'Targaryen', role: 'Daenerys',idPeg: 'rabu', email: '', noTelp:'', address:''},
    { id: 6, name: 'Melisandre', role: 'Pikki',idPeg: 'kamis', email: '', noTelp:'', address:''},
    { id: 7, name: 'Clifford', role: 'Ferrara', idPeg: 'selasa',email: '', noTelp:'', address:''},
    { id: 8, name: 'Frances', role: 'Rossini',idPeg: 'jumat', email: '', noTelp:'', address:' '},
    { id: 9, name: 'Roxie', role: 'Harvey', idPeg: 'jumat', email: '', noTelp: '', address: ''},
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
                    <Title>Master Pegawai</Title>
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