import React, { useState } from "react";
import { FaDollarSign, FaMoneyBillWave, FaBuilding, FaBriefcase } from "react-icons/fa";
import { Edit, Delete, Visibility, Add, Tune } from "@mui/icons-material"; 
import { Box, Button, IconButton, Divider, Pagination,Typography,Table, TableHead, TableRow, TableCell, TableBody, TableContainer,TablePagination, Paper, } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate} from "react-router-dom";
import Icon1 from "../../assets/images/icon1.png";
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

    const [activeTab, setActiveTab] = useState("Monthly");

    return (
        <div style={{ padding: "20px" }}>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "65px", width:"100%", lineHeight:"100%", marginBottom:"12px" }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                    <h1
                        style={{
                        fontSize: "32px",
                        cursor: "pointer",
                        color: "#333",
                        }}
                    >
                        Utilities cost
                    </h1> 
                </Box>
                <Box sx={{ width: "300px",height:"65px",display: "flex",gap: "12px",border: "1px solid #ddd", borderRadius: "8px",padding: "12px 16px",justifyContent: "space-around", backgroundColor: "#FFFFFF",}} >
                    {["Day", "Monthly", "Yearly"].map((tab) => (
                        <Button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        sx={{
                            px: 2,
                            py: 1,
                            fontSize: "0.875rem",
                            fontWeight: "bold",
                            borderRadius: "6px",
                            transition: "0.3s",
                            textTransform: "none",
                            color: activeTab === tab ? "white" : "#555",
                            backgroundColor: activeTab === tab ? "#182775" : "transparent",
                            "&:hover": {
                            backgroundColor: activeTab === tab ? "#0f1d52" : "#e0e0e0",
                            },
                        }}
                        >
                            {tab}
                        </Button>
                    ))}
                </Box>
            </Box>

     
            <Box sx={{  width:"100%",height:"151px",display: "flex",gap: "12px",boxShadow: 2, borderRadius: "5px", padding: "12px 16px",justifyContent: "space-around", backgroundColor: "#FFFFFF",Top:"128px", Left:"24px", marginBottom:"20px"}} >
               

                <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "white", gap: 2, borderRight: "1px solid #ddd",height:"87px" , marginTop:"20px", width:"260px"}}>
                    <Box sx={{ width: 60, height: 60, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", backgroundColor: "#D3FFE7",}}>
                        <Box sx={{ color: "#00AC4F", display: "flex", alignItems: "center", }}>
                            <img 
                                src={Icon1} 
                                alt="icon" 
                                style={{ width: "35px", height: "35px" }}
                            />
                        </Box>
                    </Box>

                    <Box sx={ {width:"197px", }}>
                        <Typography variant="body2" color="#333">
                            Monthly Rate of this Apart
                        </Typography>
                        <Typography sx={{ fontSize: "24px", fontWeight: "bold", color: "#182775" }}>
                            $10,00k
                        </Typography>
                    </Box>
                </Box>
                
                <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "white",  gap: 2, borderRight: "1px solid #ddd",height:"87px" , marginTop:"20px", width:"260px"}}>
                    <Box sx={{ width: 60, height: 60, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", backgroundColor: "#D3FFE7",}}>
                        <Box sx={{ color: "#00AC4F", display: "flex", alignItems: "center", }}>
                            <img 
                                src={Icon2} 
                                alt="icon" 
                                style={{ width: "35px", height: "35px" }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{width:"197px", }}>
                        <Typography variant="body2" color="#333">
                            Salary paid for exchange
                        </Typography>
                        <Typography sx={{ fontSize: "24px", fontWeight: "bold", color: "#182775" }}>
                            $2.4k
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "white",  gap: 2, borderRight: "1px solid #ddd",height:"87px" , marginTop:"20px", width:"260px"}}>
                    <Box sx={{ width: 60, height: 60, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", backgroundColor: "#D3FFE7",}}>
                        <Box sx={{ color: "#00AC4F", display: "flex", alignItems: "center", }}>
                            <img 
                                src={Icon1} 
                                alt="icon" 
                                style={{ width: "35px", height: "35px" }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{width:"197px", }}>
                        <Typography variant="body2" color="#333">
                            Yearly Rate of this Apart
                        </Typography>
                        <Typography sx={{ fontSize: "24px", fontWeight: "bold", color: "#182775" }}>
                        $89k
                        </Typography>
                    </Box>
                </Box>


                <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "white",  gap: 2, borderRight: "none",height:"87px" , marginTop:"20px", width:"260px"}}>
                    <Box sx={{ width: 60, height: 60, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", backgroundColor: "#FFA3CF",}}>
                        <Box sx={{ color: "#00AC4F", display: "flex", alignItems: "center", }}>
                            <img 
                                src={Icon3} 
                                alt="icon" 
                                style={{ width: "35px", height: "35px" }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ width:"197px", }}>
                        <Typography variant="body2" color="#333">
                            Total Employees Salary
                        </Typography>
                        <Typography sx={{ fontSize: "24px", fontWeight: "bold", color: "#182775" }}>
                            $89k
                        </Typography>
                    </Box>
                </Box>
                
            </Box>
        



            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "50px", mb: 2 }}>
                <Box sx={{ display: "flex", gap: 2, Top:"156px" }}>
                    <h1
                        style={{
                        fontSize: "22px",
                        cursor: "pointer",
                        color: "#333",
                        }}
                    >
                        Facilities List
                    </h1> 
                
                </Box>

                <Button 
                    variant="contained"
                    sx={{ backgroundColor: "#182775", "&:hover": { backgroundColor: "#0F1A4D" }, width: "200px", height: "50px", borderRadius: "6px", textTransform: "none", display: "flex", alignItems: "center", gap: 1 }}
                    onClick={() => navigate("/dashboard/add-Facilities")}

                    >
                    <IconButton sx={{ color: "white", borderRadius: "50%" }}>
                        <Add />
                    </IconButton>
                    Add Facilities
                </Button>
            </Box>


            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                <Box sx={{ maxWidth: "650px", height: "50px", position: "relative", padding: "8px 12px", borderRadius: "5px", border: "1px solid #ddd", display: "flex", alignItems: "center", backgroundColor: "white", flexGrow: 1 }}>
                <SearchIcon sx={{ position: "absolute", left: "12px", color: "#475FD9" }} />
                <input
                    type="text"
                    placeholder="Search Facilities Name..."
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
