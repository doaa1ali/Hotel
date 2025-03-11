import { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, Stack, Avatar, Badge } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; 
import ExpandLessIcon from "@mui/icons-material/ExpandLess"; 

const TopBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        left: "116px",
        width: "calc(100% - 116px)", 
        height: "100px",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", height: "100px", px: 3 }}>
        
        <Box>
          <Typography variant="body1" sx={{ fontWeight: "bolder", color: "#333333" }}>
            Welcome Back!
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "gray" }}>
            Let’s check your update today
          </Typography>
        </Box>

        <Box 
          sx={{ 
            flexGrow: 1, 
            maxWidth: "500px", 
            height: "50px",
            position: "relative", 
            mx: "auto", 
            padding: "8px 12px", 
            borderRadius: "5px",
            border: "1px solid #ddd",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white" 
          }}
          >
            <SearchIcon 
              sx={{ 
                position: "absolute", 
                left: "12px", 
                color: "#475FD9", 
                width: "24px", 
                height: "24px",
              }} 
            />
            
            <input
              type="text"
              placeholder="Search..."
              style={{
                width: "100%",
                height: "100%",
                padding: "8px 12px 8px 40px",
                fontSize: "0.9rem",
                borderRadius: "5px",
                border: "none", 
                outline: "none",
                backgroundColor: "transparent"
              }}
            />
      </Box>

        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton>
            <Badge color="error" variant="dot" overlap="circular">
              <NotificationsNoneOutlinedIcon sx={{ color: "#475FD9" ,background:"#F6F8FA",}} />
            </Badge>
          </IconButton>

          <IconButton>
            <TextsmsOutlinedIcon sx={{ color: "#475FD9", background:"#F6F8FA", }} />
          </IconButton>

          <Typography sx={{ fontSize: 20, color: "#5C5C5C", mx: 1 }}>|</Typography>

          <Stack direction="row" alignItems="center" spacing={1} onClick={() => setOpen(!open)} sx={{ cursor: "pointer" }}>
            <Avatar alt="Hossam" src="/images/Container.png" sx={{ width: 50, height: 50, border: "2px solid gray" }} />
            <Box sx={{ textAlign: "left" }}>
              <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#333333", fontFamily: "Poppins" }}>
                Hossam
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#5C5C5C", fontFamily: "Poppins", fontWeight: 400 }}>
                Super Admin
              </Typography>
            </Box>
            {open ? <ExpandLessIcon sx={{ color: "#333333" }} /> : <ExpandMoreIcon sx={{ color: "#333333" }} />}
          </Stack>
        </Stack>

      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
