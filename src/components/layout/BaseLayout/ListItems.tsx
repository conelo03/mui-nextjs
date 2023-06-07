import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { AppRegistration, DeleteOutlineOutlined, MonetizationOn, MoneyOff, PictureAsPdfRounded } from '@mui/icons-material';
import { SpeedDialIcon } from '@mui/material';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton href={'/dashboard'}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton href={'/trash'}>
      <ListItemIcon>
        <DeleteOutlineOutlined />
      </ListItemIcon>
      <ListItemText primary="Data Sampah" />
    </ListItemButton>
    <ListItemButton href={'/auction'}>
      <ListItemIcon>
        <DeleteOutlineOutlined />
      </ListItemIcon>
      <ListItemText primary="Lelang Sampah" />
    </ListItemButton>
    <ListItemButton href={'/schedule'}>
      <ListItemIcon>
        <AppRegistration />
      </ListItemIcon>
      <ListItemText primary="Jadwal" />
    </ListItemButton>
    <ListItemButton href={'/official'}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Master Pegawai" />
    </ListItemButton>
    <ListItemButton href={'/customer'}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Master Nasabah" />
    </ListItemButton>
    <ListItemButton href={'/collector'}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Master Pengepul" />
    </ListItemButton>
    <ListItemButton href={'/customerBalanced'}>
      <ListItemIcon>
        <MonetizationOn />
      </ListItemIcon>
      <ListItemText primary="Penarikan Saldo" />
    </ListItemButton>
    <ListItemButton href={'/transactionReports'}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Laporan Transaksi" />
    </ListItemButton>
    <ListItemButton href={'/auctionReports'}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Laporan Lelang" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
    Report Completed
    </ListSubheader >
    <ListItemButton href={'/reportsComplete'}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Laporan Selesai" />
    </ListItemButton>
  </React.Fragment>
);