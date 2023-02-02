import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import TableRowsIcon from '@mui/icons-material/TableRows';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';

import useBottombar from '@/store/bottombar';

export default function Bottombar() {
  const [value, onChange] = useBottombar();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <BottomNavigation showLabels value={value} onChange={onChange}>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="History" icon={<WorkHistoryIcon />} />
        <BottomNavigationAction label="Locations" icon={<TableRowsIcon />} />
        <BottomNavigationAction label="Map" icon={<MapIcon />} />
      </BottomNavigation>
    </Box>
  );
}
