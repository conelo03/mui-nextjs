import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import BaseLayout from '@components/layout/BaseLayout';
import Copyright from '@components/Copyright';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Title from '@components/pages/Dashboard/Title';
import { Check, Clear, ClearAll, DeleteOutline, EditOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

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
    { field: 'name', headerName: 'Nama Nasabah', width: 190 },
    { field: 'saldo', headerName: 'Saldo Penarikan', width: 190 },
    {
      field: 'action',
      headerName: 'Aksi',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <React.Fragment>
            <Check />
            <Clear />
          </React.Fragment>
        )
      }
    },
  ];
      
  const rows = [
    { id: 1, name: 'Snow', saldo: '103.000'},
    { id: 2, name: 'Lannister', saldo: '210.000'},
    { id: 3, name: 'Lannister', saldo: '151.000'},
    { id: 4, name: 'Stark', saldo: '75.000'},
    { id: 5, name: 'Targaryen', saldo: '100.000'},
    { id: 6, name: 'Melisandre', saldo: '231.000'},
    { id: 7, name: 'Clifford', saldo: '140.000'},
    { id: 8, name: 'Frances', saldo: '121.000'},
    { id: 9, name: 'Roxie', saldo: '124.000'},
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
                    <Title>Kelola Penarikan Saldo</Title>
                  </Grid>
                  <Grid item xs={6} md={6} alignContent={'end'}>
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