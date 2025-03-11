import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import { BarChartOutlined } from '@mui/icons-material';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Groups2Icon from '@mui/icons-material/Groups2';
import { useNavigate } from 'react-router-dom';

import passwordCheck from "../assets/images/passwordCheck.png";
import box from "../assets/images/box.png"; 
import star from "../assets/images/star.png"; 
import messagetext from "../assets/images/messagetext.png"; 
import activeVectorIcon from "../assets/images/Vector-Active.png"; 
import defaultVectorIcon from "../assets/images/Vector.png"; 

const drawerWidth = 112;

export default function SideBar() {
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (path) => {
        setSelectedItem(path);
        navigate(path);
    };

    const Array1 = [
        { 
            "icon": <BarChartOutlined style={{ 
              backgroundColor: "#475FD9", 
              color: "white", 
              borderRadius: "5px", 
              width: 28, 
              height: 28,
             }} />, 
            "path": "/vector" 
        },
        { 
           "icon": (
              <div style={{ 
                  backgroundColor: selectedItem === "apartments-list" ? "#182775" : "transparent",  
                  borderRadius: "50%",      
                  width: selectedItem === "apartments-list" ? "38px" : "28px",    
                  height: selectedItem === "apartments-list" ? "38px" : "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 0.3s ease"
              }}>
                  <img 
                      
                    src={selectedItem === "apartments-list" ? activeVectorIcon : defaultVectorIcon} 
                    alt="Vector Icon" 
                    style={{ 
                      width: selectedItem === "apartments-list" ? "20px" : "28px",    
                      height: selectedItem === "apartments-list" ? "20px" : "28px",
                    }} 
                
                  />
              </div>
          ),


            "path": "apartments-list"
        },
        { "icon": <PeopleAltOutlinedIcon style={{ color: "#475FD9" }} />, "path": "/PeopleProfile" },
        {
            "icon": (
                <div style={{ 
                    borderBottom: "3px solid #FF3333", 
                    paddingBottom: "10px",
                    width: 28,    
                    height: 28,     
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    
                }}>
                    <Groups2Icon style={{ color: "#475FD9" }} />
                </div>
            ),
            "path": "/Groups"
        }
    ];

    const Array2 = [
        {
            "icon": (
                <div style={{ 
                    borderBottom: "3px solid #FF3333", 
                    paddingBottom: "10px",
                    width: 28,    
                    height: 28,     
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                }}>
                    <LiveHelpIcon style={{ color: "#475FD9" }} />
                </div>
            ),
            "path": "/Help"
        },
        {
            "icon": (
                <div style={{ 
                    borderBottom: "3px solid #FF3333", 
                    paddingBottom: "10px",
                    width: 28,    
                    height: 28,     
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                }}>
                    <NotificationImportantIcon style={{ color: "#475FD9" }} />
                </div>
            ),
            "path": "/notificationimportant"
        },
        {
            "icon": (
                <img 
                    src={passwordCheck} 
                    alt="password-Check" 
                    style={{ width: 28, height: 28 }}
                />
            ),
            "path": "/Checkpassword"
        }
    ];

    const Array3 = [
        {
            "icon": (
                <img 
                    src={box} 
                    alt="box" 
                    style={{ width: 24, height: 24 }}
                />
            ),
            "path": "/box"
        },
        {
            "icon": (
                <img 
                    src={star} 
                    alt="star" 
                    style={{ width: 24, height: 24 }}
                />
            ),
            "path": "/star"
        },
        {
            "icon": (
                <div style={{ 
                    display: "flex", flexDirection: "column", 
                    alignItems: "center", borderBottom: "2px solid red", paddingBottom: "4px" 
                }}>
                    <img 
                        src={messagetext} 
                        alt="message-text" 
                        style={{ width: 24, height: 24 }} 
                    />
                </div>
            ),
            "path": "/messagetext"
        }
    ];

    return (
        <Drawer
            sx={{
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    position: 'fixed', 
                    alignItems: "center", 
                    justifyContent: "center",
                    height: '100vh',  
                    paddingBottom: "32px",
                    paddingTop: "32px",
                    gap: "8px",
                },
            }}
            variant="permanent" 
            anchor="left"
        >
            <List>
                {Array1.map((item) => (
                    <ListItem key={item.path} disablePadding>
                        <ListItemButton onClick={() => handleItemClick(item.path)}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <List style={{ gap: "18px" }}>
                {Array2.map((item) => (
                    <ListItem key={item.path} disablePadding>
                        <ListItemButton onClick={() => handleItemClick(item.path)}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <List>
                {Array3.map((item) => (
                    <ListItem key={item.path} disablePadding>
                        <ListItemButton onClick={() => handleItemClick(item.path)}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}
