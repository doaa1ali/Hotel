import React, { useState } from "react";
import { FaDollarSign, FaMoneyBillWave, FaBuilding, FaBriefcase } from "react-icons/fa";
import { Edit, Delete, Visibility, Add, Tune } from "@mui/icons-material"; 
import { Box, Button, IconButton, Divider, Pagination,Typography,Table, TableHead, TableRow, TableCell, TableBody, TableContainer,TablePagination, Paper, } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate} from "react-router-dom";
import { Inventory, Build, Apartment, People } from "@mui/icons-material";
import all_requests from "../../assets/images/all_requests.png";
import Icon2 from "../../assets/images/icon2.png";
import Icon3 from "../../assets/images/icon3.png";


const Facilities = () => {

    const [page, setPage] = useState(0);
    const rowsPerPage = 5;
    const totalRows = 15;

    const navigate = useNavigate();

    const handlePageChange = (_, newPage) => {
        setPage(newPage)
    };

    const data = Array.from({ length: totalRows }, (_, i) => ({
        id: i + 1,
        Item_Name:`Kattle ${i + 1}`,
        apartment: `Name ${i + 1}`,
        Code: "032",
        Count: `${(i + 1) * 10}`,
        condition: i % 2 === 0 ? "New" : "Used",
        statusColor:  i % 2 === 0 ? "#00CB22" : "#CDA903",
        statusBg:  i % 2 === 0 ? "#EAFBF3" : "#FFF3CD",
        Cost: `${(i + 1) * 110}`,
        date: "20/11/24",
        admin: "Name",
        description: `Description ${i +1}`,
        price: 900 + (i + 1) * 20,
    }));

    const [selectedCard, setSelectedCard] = useState("allRequests");
    const cards = [
        { id: "allRequests", title: "All Requests", count: 2490, icon: <Inventory sx={{ fontSize: 30 }} /> },
        { id: "maintenance", title: "Maintenance", count: 50, icon: <Build sx={{ fontSize: 30 }} /> },
        { id: "facilityCare", title: "Facility Care", count: 1265, icon: <Apartment sx={{ fontSize: 30 }} /> },
        { id: "users", title: "Users", count: 1265, icon: <People sx={{ fontSize: 30 }} /> },
      ];

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
                        Help Center
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
            ({card.count})
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
                            <TableCell sx={{width:"120px", textAlign:"center" , color:"#182775", fontSize:"12px"}}>Item Name</TableCell>
                            <TableCell sx={{width:"110px", textAlign:"center" , color:"#182775", fontSize:"12px"}}>Apartment</TableCell>
                            <TableCell sx={{width:"120px", textAlign:"center" , color:"#182775", fontSize:"12px"}}>Code</TableCell>
                            <TableCell sx={{width:"120px", textAlign:"center" , color:"#182775", fontSize:"12px"}}>Count</TableCell>
                            <TableCell sx={{width:"110px", textAlign:"center" , color:"#182775", fontSize:"12px"}}>condition</TableCell>
                            <TableCell sx={{width:"120px", textAlign:"center" , color:"#182775", fontSize:"12px"}}>Cost</TableCell>
                            <TableCell sx={{width:"120px", textAlign:"center" , color:"#182775", fontSize:"12px"}}>Date</TableCell>
                            <TableCell sx={{ width:"88px", textAlign:"center" , color:"#182775", fontSize:"12px"}}>Admin</TableCell>
                            <TableCell sx={{width:"230px", textAlign:"center" , color:"#182775", fontSize:"12px"}}>Notes</TableCell>
                            <TableCell sx={{ width:"88px", textAlign:"center" , color:"#182775", fontSize:"12px" }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>


                        <TableBody>
                            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow key={row.id} sx={{ borderBottom: "1px solid #ddd" }}>
                                <TableCell sx={{width:"120px", textAlign:"center"}}>{row.Item_Name}</TableCell>
                                <TableCell sx={{width:"120px", textAlign:"center"}}>{row.apartment}</TableCell>
                                <TableCell sx={{width:"120px", textAlign:"center"}}>{row.Code}</TableCell>
                                <TableCell sx={{width:"120px", textAlign:"center"}}>{row.Count}</TableCell>
                                <TableCell sx={{width:"120px", textAlign:"center"}}>
                                    <Box sx={{ textAlign: "center", padding: "5px", borderRadius: "5px", width: "90px", height: "30px", color: row.statusColor, backgroundColor: row.statusBg, fontWeight: "bold",}}>
                                        {row.condition}
                                    </Box>
                                </TableCell>
                                <TableCell sx={{width:"120px", textAlign:"center"}}>{row.Cost}</TableCell>
                                <TableCell sx={{width:"120px", textAlign:"center"}}>{row.date}</TableCell>
                                <TableCell sx={{ width:"88px", textAlign:"center" }} >{row.admin}</TableCell>
                                <TableCell sx={{width:"230px", textAlign:"center"}}>{row.description}</TableCell>

                                <TableCell sx={{ width:"88px", textAlign:"center" }}>
                                <Box sx={{display:"flex"}}>
                                    <IconButton onClick={() => navigate("/dashboard/edit-Facilities")}>
                                        <Edit sx={{ color: "#475467" }} />
                                    </IconButton>
                                    <IconButton>
                                        <Delete sx={{ color: "#475467" }} />
                                    </IconButton>
                                </Box>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            <Divider sx={{ my: 3 }} />

            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                    <Pagination 
                      count={Math.ceil(totalRows / rowsPerPage)} 
                      page={page} 
                      onChange={handlePageChange} 
                      color="primary"
                    />
            </Box>
        </div>

    );
};





export default Facilities;
