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
    { field: 'name', headerName: 'Nama Pengepul', width: 190 },
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
    { id: 1, name: 'Snow', email: 'Jon@email.com', noTelp:'0895340079534', address:'Subang'},
    { id: 2, name: 'Lannister', email: 'Cersei@email.com', noTelp:'0895340079534', address:'Subang'},
    { id: 3, name: 'Lannister', email: 'Jaime@email.com', noTelp:'0895340079534', address:'Subang' },
    { id: 4, name: 'Stark', email: 'Arya@email.com', noTelp: '0895340079534', address:'Subang'},
    { id: 5, name: 'Targaryen', email: 'Daenerys@email.com', noTelp:'0895340079534', address:'Subang'},
    { id: 6, name: 'Melisandre', email: 'Pikki@email.com', noTelp:'0895340079534', address:'Subang'},
    { id: 7, name: 'Clifford', email: 'Ferrara@email.com', noTelp:'0895340079534', address:'Subang'},
    { id: 8, name: 'Frances', email: 'Rossini@email.com', noTelp:'0895340079534', address:'Subang'},
    { id: 9, name: 'Roxie', email: 'Harvey@email.com', noTelp: '0895340079534', address: 'Subang'},
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
                    <Title>Master Pengepul</Title>
                  </Grid>
                  <Grid item xs={6} md={6} alignContent={'end'}>
                      <Button href="/collector/new" variant="contained" sx={{float: 'right'}}>
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