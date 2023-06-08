import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import BaseLayout from '@components/layout/BaseLayout';
import Copyright from '@components/Copyright';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Title from '@components/pages/Dashboard/Title';
import { Check, DeleteOutline, EditOutlined, FileOpen, List, RowingSharp } from '@mui/icons-material';
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
    {
      field: 'action',
      headerName: 'Status Laporan',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <React.Fragment>
            <Check />
          </React.Fragment>
        )
      }
    },
  ];
  const columns2: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'date', headerName: 'Tanggal', width: 190 },
    {
      field: 'action',
      headerName: 'Status Laporan',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <React.Fragment>
            <Check />
          </React.Fragment>
        )
      }
    },
  ];
      
  const rows = [
    { id: 1, date: 'Saturday, 10 June, 2023'},
    { id: 2, date: 'Saturday, 10 June, 2023'},
    { id: 4, date: 'Saturday, 10 June, 2023'},
    { id: 5, date: 'Saturday, 10 June, 2023'},
    { id: 6, date: 'Saturday, 10 June, 2023'},
    { id: 7, date: 'Saturday, 10 June, 2023'},
    { id: 8, date: 'Saturday, 10 June, 2023'},
    { id: 9, date: 'Saturday, 10 June, 2023'},
  ];

  const rows2 = [
    { id: 1, date: 'Saturday, 10 June, 2023'},
    { id: 2, date: 'Saturday, 10 June, 2023'},
    { id: 4, date: 'Saturday, 10 June, 2023'},
    { id: 5, date: 'Saturday, 10 June, 2023'},
    { id: 6, date: 'Saturday, 10 June, 2023'},
    { id: 7, date: 'Saturday, 10 June, 2023'},
    { id: 8, date: 'Saturday, 10 June, 2023'},
    { id: 9, date: 'Saturday, 10 June, 2023'},
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
                    <Title>Status Laporan Transaksi</Title>
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
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ flexGrow: 1 }} marginBottom={'20'}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6}>
                    <Title>Status Laporan Lelang</Title>
                  </Grid>
                  <Grid item xs={6} md={6} alignContent={'end'}>
                  </Grid>
                </Grid>
              </Box>
              <DataGrid
                rows={rows2}
                columns={columns2}
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