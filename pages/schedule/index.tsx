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
    { field: 'petugas', headerName: 'Petugas BSI', width: 190 },
    { field: 'nasabah', headerName: 'Nasabah', width: 190 },
    { field: 'jadwal', headerName: 'Jadwal', width: 190 },
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
    { id: 1, petugas: 'Snow', nasabah: 'Jon', jadwal: 'senin'},
    { id: 2, petugas: 'Lannister', nasabah: 'Cersei', jadwal: 'selasa'},
    { id: 3, petugas: 'Lannister', nasabah: 'Jaime', jadwal: 'selasa'},
    { id: 4, petugas: 'Stark', nasabah: 'Arya', jadwal: 'kamis'},
    { id: 5, petugas: 'Targaryen', nasabah: 'Daenerys',jadwal: 'rabu'},
    { id: 6, petugas: 'Melisandre', nasabah: 'Pikki',jadwal: 'kamis'},
    { id: 7, petugas: 'Clifford', nasabah: 'Ferrara', jadwal: 'selasa'},
    { id: 8, petugas: 'Frances', nasabah: 'Rossini',jadwal: 'jumat'},
    { id: 9, petugas: 'Roxie', nasabah: 'Harvey', jadwal: 'jumat'},
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
                    <Title>Kelola Jadwal</Title>
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