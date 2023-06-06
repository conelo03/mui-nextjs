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
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'address', headerName: 'Address', width: 200 },
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
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, address: 'subang' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, address: 'subang' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, address: 'subang' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, address: 'subang' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, address: 'subang' },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150, address: 'subang' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, address: 'subang' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, address: 'subang' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, address: 'subang' },
  ];

  return (
    <BaseLayout title='Trash'>
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
                    <Button variant='contained'> 
                      <AddOutlined /> Tambah Data
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