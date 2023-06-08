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
    { id: 1, name: 'Topik', role: 'Admin', idPeg: 'A001', email: 'Topik@email.com', noTelp:'0895340079534', address:'Subang'},
    { id: 2, name: 'Hendriansyah', role: 'Direktur BSI', idPeg: 'A002', email: 'Hendriansyah@email.com', noTelp:'0895340079539', address:'Subang'},
    { id: 3, name: 'Dewi', role: 'Kepala Dinas LH', idPeg: 'A003', email:'Dewi@email.com', noTelp:'0895340079532', address:'Subang' },
    { id: 4, name: 'Oman', role: 'Petugas BSI', idPeg: 'A004', email:'Oman@email.com', noTelp: '0895340079533', address:'Subang'},
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
                      <Button href="/official/new" variant="contained" sx={{float: 'right'}}>
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