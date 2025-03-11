import * as React from "react";
import { styled } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom"; 
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import { Outlet } from 'react-router-dom';


const drawerWidth = 136; 
const topBarHeight = 124; 

const Main = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: "8px 24px",
  marginLeft: `${drawerWidth}px`, 
  marginTop: `${topBarHeight}px`, 
  marginRight: "24px",
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  minHeight: "100vh", 
  width: `calc(100% - ${drawerWidth}px)`, 
  backgroundColor: "#FFFFFF", 
}));

export default function AppLayout() {
  return (
    <Box sx={{ display: "flex", backgroundColor: "#F8F8F8", minHeight: "100vh" }}> 
      <CssBaseline />
      <TopBar />
      <SideBar />
      <Main >
        <Outlet />
      </Main>
    </Box>
  );
}





















// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import SideBar from './components/SideBar';
// import TopBar from './components/TopBar';

// const drawerWidth = 240;

// // ✅ تعريف DrawerHeader هنا
// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }));

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: open ? 0 : `-${drawerWidth}px`, // ✅ تصحيح ال marginLeft
//   })
// );

// export default function PersistentDrawerLeft() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <TopBar open={open} handleDrawerOpen={handleDrawerOpen} />
//       <SideBar open={open} handleDrawerClose={handleDrawerClose} />
//       <Main open={open}>
//         <DrawerHeader />
//         <Typography sx={{ marginBottom: 2 }}>
//           {/* يمكنك إضافة محتوى هنا */}
//         </Typography>
//       </Main>
//     </Box>
//   );
// }
