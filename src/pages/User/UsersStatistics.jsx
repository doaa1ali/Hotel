import React, { useState } from "react";
import { FaDollarSign, FaMoneyBillWave, FaBuilding, FaBriefcase } from "react-icons/fa";
import { Edit, Delete, Visibility, Add, Tune, MoreHoriz, HelpOutline } from "@mui/icons-material";
import { Box, Button, IconButton, Divider, Pagination,Typography,Table, TableHead, TableRow, TableCell, TableBody, TableContainer,TablePagination, Paper, Avatar, Menu, MenuItem, ListItemIcon } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate} from "react-router-dom";
import { Inventory, Build, Apartment, People } from "@mui/icons-material";
import all_requests from "../../assets/images/all_requests.png";
import Icon2 from "../../assets/images/icon2.png";
import Icon3 from "../../assets/images/icon3.png";
import image1 from "../../assets/images/image3.png";

const Users = () => {

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

    const [selectedCard, setSelectedCard] = useState("allRequests");

    const cards = [
        { id: "allRequests", title: "All User", count: 490, icon: <People sx={{ fontSize: 30 }} /> },
        { id: "maintenance", title: "Firstly Users", count: 490, icon: <People sx={{ fontSize: 30 }} /> },
        { id: "facilityCare", title: "Current Clients", count: 490, icon: <People sx={{ fontSize: 30 }} /> },
        { id: "users", title: "Past Customers", count: 490, icon: <People sx={{ fontSize: 30 }} /> },
        { id: "Brokerusers", title: "Broker Users", count: 490, icon: <People sx={{ fontSize: 30 }} /> },
      ];

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleMenuOpen = (event, rowId) => {
        setAnchorEl(event.currentTarget); // تخزين العنصر الذي تم النقر عليه
        setSelectedRow(rowId); // تحديد الصف المختار
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedRow(null);
    };
    


    return (
        <div style={{ padding: "20px" }}>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "65px", width:"100%", lineHeight:"100%", marginBottom:"10px" }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                    <h1
                        style={{
                        fontSize: "32px",
                        cursor: "pointer",
                        color: "#333",
                        }}
                    >
                        Users Statistics
                    </h1> 
                </Box>
            </Box>

     
            <Box
            sx={{
                display: "flex",
                gap: "16px",
                justifyContent: "space-between",
                padding: "16px",
                backgroundColor: "#FFFFFF",
            }}
            >
                {cards.map((card) => (
                    <Box
                    key={card.id}
                    onClick={() => setSelectedCard(card.id)}
                    sx={{
                        width: "290px",
                        height: "150px",
                        borderRadius: "10px",
                        backgroundColor: selectedCard === card.id ? "#182775" : "#F6F8FA",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "background 0.3s ease-in-out",
                        boxShadow: selectedCard === card.id ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
                    }}
                    >
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: "bold",
                            color: selectedCard === card.id ? "#FFFFFF" : "#182775",
                        }}
                    >
                        {card.icon}
                    </Typography>
                    

                    <Typography
                        variant="body1"
                        sx={{
                        fontWeight: "400",
                        fontSize:"18px",
                        color: selectedCard === card.id ? "#FFFFFF" : "#333",
                        }}
                    >
                        {card.title}
                    </Typography>
                    <Typography
                        variant="caption"
                        sx={{
                        color: selectedCard === card.id ? "#FFFFFF" : "#182775",
                        fontSize: "14px",
                        fontWeight: "bold",
                        }}
                    >
                        {card.count}
                    </Typography>
                    </Box>
                ))}
            </Box>


            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2, marginTop:"40px" }}>
                <Box sx={{ maxWidth: "650px", height: "50px", position: "relative", padding: "8px 12px", borderRadius: "5px", border: "1px solid #ddd", display: "flex", alignItems: "center", backgroundColor: "white", flexGrow: 1 }}>
                <SearchIcon sx={{ position: "absolute", left: "12px", color: "#475FD9" }} />
                <input
                    type="text"
                    placeholder="Search User Name..."
                    style={{ width: "100%", height: "100%", padding: "8px 12px 8px 40px", fontSize: "0.9rem", borderRadius: "5px", border: "none", outline: "none", backgroundColor: "transparent" }}
                />
                </Box>

                <Button 
                variant="contained"
                sx={{ backgroundColor: "#182775", "&:hover": { backgroundColor: "#354AB6" }, width: "130px", height: "50px", borderRadius: "6px", textTransform: "none", display: "flex", alignItems: "center", gap: 1 }}
                onClick={() => alert("تصفية البيانات")}
                startIcon={<Tune />}
                >
                Filter
                </Button>
            </Box>

            <Paper sx={{ width: "100%", overflow: "hidden", mt: 3 }}>
                <TableContainer>
                    <Table sx={{ border:"none"}}>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#F6F8FA", color: "#182775" }}>
                            <TableCell sx={{width:"120px", textAlign:"center" , color:"#182775", fontSize:"12px"}}>User ID</TableCell>
                            <TableCell sx={{width:"120px", textAlign:"center" , color:"#182775", fontSize:"12px"}}>Client Name</TableCell>
                            <TableCell sx={{width:"110px", textAlign:"center" , color:"#182775", fontSize:"12px"}}>Apartment</TableCell>
                            <TableCell sx={{width:"120px", textAlign:"center" , color:"#182775", fontSize:"12px"}}>Mobile</TableCell>
                            <TableCell sx={{width:"110px", textAlign:"center" , color:"#182775", fontSize:"12px"}}>Email</TableCell>
                            <TableCell sx={{width:"120px", textAlign:"center" , color:"#182775", fontSize:"12px"}}>National ID</TableCell>
                            <TableCell sx={{width:"120px", textAlign:"center" , color:"#182775", fontSize:"12px"}}>Date</TableCell>
                            <TableCell sx={{ width:"88px", textAlign:"center" , color:"#182775", fontSize:"12px"}}>membership</TableCell>
                            <TableCell sx={{ width:"88px", textAlign:"center" , color:"#182775", fontSize:"12px" }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>


                        <TableBody>
                            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell sx={{width:"120px", textAlign:"center"}}>#034</TableCell>
                                    <TableCell sx={{ textAlign: "center", display: "flex", alignItems: "center", gap: 1, fontSize:"12px"}}>
                                        <Avatar src={image1} alt="User" sx={{ width: 40, height: 40 }} />
                                        Name
                                    </TableCell>
                                    <TableCell sx={{width:"120px", textAlign:"center"}}>Name</TableCell>
                                    <TableCell sx={{width:"220px", textAlign:"center"}}>(406) 555-0120</TableCell>
                                    <TableCell sx={{width:"120px", textAlign:"center"}}>@gmail.con</TableCell>
                                    <TableCell sx={{width:"120px", textAlign:"center"}}>65938142</TableCell>
                                    <TableCell sx={{width:"120px", textAlign:"center"}}>20/11/24</TableCell>
                                    <TableCell sx={{width:"120px", textAlign:"center"}}>
                                        <Box sx={{ textAlign: "center", padding: "5px", borderRadius: "5px", width: "90px", height: "30px", color: row.statusColor, backgroundColor: row.statusBg, fontWeight: "bold",}}>
                                            {row.condition}
                                        </Box>
                                    </TableCell>

                                    <TableCell sx={{ width: "160px", textAlign: "center" }}>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>

                                            <IconButton  sx={{ color: "#475467" }}>
                                                <Edit fontSize="small" />
                                            </IconButton>

                                            <IconButton onClick={() => alert("Delete")} sx={{ color: "#475467" }}>
                                                <Delete fontSize="small" />
                                            </IconButton>


                                            <IconButton onClick={(event) => handleMenuOpen(event, row.id)}>
                                                <MoreHoriz />
                                            </IconButton>
                                        </Box>

               
                                        <Menu
                                            anchorEl={anchorEl}
                                            open={Boolean(anchorEl) && selectedRow === row.id}
                                            onClose={handleMenuClose}
                                        >
                                            <MenuItem onClick={() => navigate("/dashboard/users-details")}>
                                                <ListItemIcon><Visibility fontSize="small" /></ListItemIcon>
                                                Overview
                                            </MenuItem>
                                            <MenuItem onClick={() => navigate("/dashboard/users-pending")}>
                                                <ListItemIcon><HelpOutline fontSize="small" /></ListItemIcon>
                                                Help Request
                                            </MenuItem>
                                        </Menu>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>


            {/* Pagination */}
            <Divider sx={{ my: 3 }} />
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Pagination count={Math.ceil(totalRows / rowsPerPage)} page={page + 1} onChange={(_, newPage) => setPage(newPage - 1)} color="primary" />
            </Box>
        </div>

    );
};





export default Users;
