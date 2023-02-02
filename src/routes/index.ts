import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import TableRowsIcon from '@mui/icons-material/TableRows';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Home]: {
    component: asyncComponentLoader(() => import('@/pages/Home')),
    path: '/',
    title: 'Home',
    icon: HomeIcon,
  },
  [Pages.History]: {
    component: asyncComponentLoader(() => import('@/pages/History')),
    path: 'history',
    title: 'History',
    icon: WorkHistoryIcon,
  },
  [Pages.Locations]: {
    component: asyncComponentLoader(() => import('@/pages/Locations')),
    path: 'locations',
    title: 'Locations',
    icon: TableRowsIcon,
  },
  [Pages.Map]: {
    component: asyncComponentLoader(() => import('@/pages/Map')),
    path: 'map',
    title: 'Map',
    icon: MapIcon,
  },
  [Pages.Settings]: {
    component: asyncComponentLoader(() => import('@/pages/Settings')),
    path: 'settings',
    title: 'Settings',
    icon: WorkHistoryIcon,
  },
  [Pages.New]: {
    component: asyncComponentLoader(() => import('@/pages/New')),
    path: 'new',
    title: 'New',
    icon: WorkHistoryIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
};

export default routes;
