import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import BaseLayout from '@components/layout/BaseLayout';
import Copyright from '@components/Copyright';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Title from '@components/pages/Dashboard/Title';
import { DeleteOutline, EditOutlined, RowingSharp } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Dashboard = () => {

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'date', headerName: 'Tanggal', width: 190 },
    { field: 'name', headerName: 'Nama Sampah', width: 190 },
    { field: 'heavy', headerName: 'Berat Sampah', width: 190 },
    { field: 'total', headerName: 'Total', width: 190 },
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
    { id: 1, date: 'Snow', name: 'Jon@email.com', heavy:'', total:''},
    { id: 2, date: 'Lannister', name: 'Cersei@email.com', heavy:'', total:''},
    { id: 3, date: 'Lannister', name: 'Jaime@email.com', heavy:'', total:'' },
    { id: 4, date: 'Stark', name: 'Arya@email.com', heavy: '', total:''},
    { id: 5, date: 'Targaryen', name: 'Daenerys@email.com', heavy:'', total:''},
    { id: 6, date: 'Melisandre', name: 'Pikki@email.com', heavy:'', total:''},
    { id: 7, date: 'Clifford', name: 'Ferrara@email.com', heavy:'', total:''},
    { id: 8, date: 'Frances', name: 'Rossini@email.com', heavy:'', total:' '},
    { id: 9, date: 'Roxie', name: 'Harvey@email.com', heavy: '', total: ''},
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
                    <Title>Laporan Transaksi</Title>
                  </Grid>
                  <Grid item xs={6} md={6} alignContent={'end'}>
                      <Button href="/trash/new" variant="contained" sx={{float: 'right'}}>
                        Buat Laporan
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
                checkboxSelection={true}
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