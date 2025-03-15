import React, { useState } from 'react';
import { Person, Phone, Email, Badge, CreditCard,  Edit, Delete, Visibility, Add, Tune, MoreHoriz, HelpOutline,People, IosShare, } from "@mui/icons-material";
import { Box, Button, IconButton, Divider, Pagination,Typography,Table, TableHead, TableRow, TableCell, TableBody, TableContainer,TablePagination, Paper, Avatar, Menu, MenuItem, ListItemIcon } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Star } from "@mui/icons-material";
import LocationOn from "@mui/icons-material/LocationOn";
import image1 from "../../assets/images/image1.png";
import userimage1 from "../../assets/images/userimage1.png";
import userimage2 from "../../assets/images/userimage2.png";
import userimage3 from "../../assets/images/userimage3.png";
import userimage4 from "../../assets/images/userimage4.png";
import userimage5 from "../../assets/images/userimage5.png";
import userimage6 from "../../assets/images/userimage6.png";
import userimage7 from "../../assets/images/userimage7.png";

import { useNavigate } from "react-router-dom";

const User = () => {

      const [page, setPage] = useState(0);
        const rowsPerPage = 5;
        const totalRows = 15;
    
        const navigate = useNavigate();
    
        const handlePageChange = (_, newPage) => {
            setPage(newPage)
        };
    
        const data = Array.from({ length: totalRows }, (_, i) => ({
            condition: i % 2 === 0 ? "Silver" : (i % 3 === 0 ? "Diamond" : "Gold"),
            statusColor: i % 2 === 0 ? "#B0B0B0" : (i % 3 === 0 ? "#4A90E2" : "#FFD700"), // فضي، أزرق، ذهبي
            statusBg: i % 2 === 0 ? "#F0F0F0" : (i % 3 === 0 ? "#E6F7FF" : "#FFF8DC"), 
    
        }));


  return (
    <div style={{ padding: "16px" }}>

        <Box sx={{ display: "flex", gap: "40px",marginBottom:"30px" }}>
            <Box sx={{ borderRadius: "10px",border:"1px solid #ddd", backgroundColor: "#fff", width:"450px",padding: "32px", }}>
                <Box sx={{  backgroundColor: "#fff", width: "100%" }}>
                    <Typography variant="h4" sx={{ fontFamily: "Poppins", fontWeight: "bold", width: "100%" }}>
                        User Details
                    </Typography>
                    <Divider sx={{ marginY: "16px" }} />
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "20px",
                        borderRadius: "5px",
                        width: "100%",
                        height: "105px",
                        backgroundColor: "#475FD9" ,
                        color:  "#FFFFFF" ,
                        gap: "12px",
                        marginBottom: "15px",
                        cursor: "pointer",
                        transition: "all 0.3s ease", }}
                    >
                        <Avatar alt="image1" src={image1} sx={{ width: 73, height: 73, border: "none" }} />
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography variant="h6" sx={{ fontFamily: "Poppins", fontWeight: "500" }}>
                                Client Name
                            </Typography>
                            <Box sx={{
                                color: "#FFFFFF" ,
                                fontSize: "14px", lineHeight: "0.2", fontWeight: "275" }}>
                                <p>Unit Number: 023</p>
                                <p>Rent Type: Monthly</p>
                            </Box>
                        </Box>

                    </Box>

                    <Box sx={{  backgroundColor: "#FFFFFF", borderRadius: "8px",  width:"100%" , marginBottom:"12px", }}>

                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginBottom: "15px" , backgroundColor:"#F6F8FA", height:"63px", borderRadius: "6px", padding:"10px", }}>
                            {/* قسم Wallet */}
                            <Box sx={{ textAlign: "center", paddingRight: "20px",}}>
                                <Typography sx={{ fontSize: "20px", fontWeight: "bold", color: "#182775" }}>
                                    $140.00
                                </Typography>
                                <Typography sx={{ fontSize: "14px", color: "#666" }}>
                                    Wallet
                                </Typography>
                            </Box>

                            <Box sx={{ textAlign: "center",  }}>
                                <Typography sx={{ fontSize: "30px", fontWeight: "bold", color: "#182775" }}>
                                    |
                                </Typography>
                                
                            </Box>

                            {/* قسم Deals */}
                            <Box sx={{ textAlign: "center", paddingLeft: "20px" ,}}>
                                <Typography sx={{ fontSize: "20px", fontWeight: "bold", color: "#182775" }}>
                                15
                                </Typography>
                                <Typography sx={{ fontSize: "14px", color: "#666" }}>
                                Deals
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: "15px", textAlign: "left", paddingRight: "20px" ,backgroundColor:"#F6F8FA", height:"48px", borderRadius: "6px", padding:"10px", }}>
                            <Person sx={{ color: "#182775" }} />
                            <Typography sx={{ fontSize: "14px", color: "#333" }}>
                                First Name
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: "15px", textAlign: "left", paddingRight: "20px" ,backgroundColor:"#F6F8FA", height:"48px", borderRadius: "6px", padding:"10px", }}>
                            <Phone sx={{ color: "#182775" }} />
                            <Typography sx={{ fontSize: "14px", color: "#333" }}>
                                Mobile Phone
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: "15px", textAlign: "left", paddingRight: "20px" ,backgroundColor:"#F6F8FA", height:"48px", borderRadius: "6px", padding:"10px", }}>
                            <Email sx={{ color: "#182775" }} />
                            <Typography sx={{ fontSize: "14px", color: "#666" }}>
                                E-mail Address
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: "15px", textAlign: "left", paddingRight: "20px" ,backgroundColor:"#F6F8FA", height:"48px", borderRadius: "6px", padding:"10px", }}>
                            <Badge sx={{ color: "#182775" }} />
                            <Typography sx={{ fontSize: "14px", color: "#666" }}>
                                Number of National ID
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: "15px", textAlign: "left", paddingRight: "20px" ,backgroundColor:"#F6F8FA", height:"48px", borderRadius: "6px", padding:"10px", }}>
                            <CreditCard sx={{ color: "#182775" }} />
                            <Typography sx={{ fontSize: "14px", color: "#666" }}>
                                Online Payment Card
                            </Typography>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Box>

         <Divider sx={{ marginY: "16px" }} />
        
        {/* الأزرار */}
        <Box sx={{ display: "flex", justifyContent: "flex-start", gap: "16px" }}>

            <Button 
                variant="outlined"
                sx={{ color: "#182775", textTransform: "none" }}
                onClick={() => navigate("/dashboard/users-statistics")}
            >
                Back
            </Button>
        </Box>    
    </div>
  );
};

export default User;



