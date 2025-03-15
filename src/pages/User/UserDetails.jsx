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



            <Box sx={{ borderRadius: "10px",border:"1px solid #ddd", backgroundColor: "#fff", width:"750px",padding: "32px", }}>
                <Box sx={{  backgroundColor: "#fff", width: "100%" }}>
                    <Typography variant="h4" sx={{ fontFamily: "Poppins", fontWeight: "bold", width: "100%" }}>
                        Saved List
                    </Typography>

                    <Divider sx={{ marginY: "16px"}} />

                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: "20px", marginTop: "16px" }}>

                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            {/* الصورة الكبيرة */}
                            <Box
                                sx={{
                                    width: "380px",
                                    height: "200px",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                    border: "1px solid #ddd",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#F6F8FA",
                                }}
                            >
                                <img
                                    src={userimage1}
                                    alt="Default Image 5"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </Box>

                            {/* معلومات الشقة */}
                            <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "8px", padding: "0 10px" }}>
                                <Typography sx={{ fontSize: "14px", color: "#666" }}>
                                    Name Apartment
                                </Typography>

                                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <Star sx={{ color: "#FFD700", fontSize: "18px" }} />
                                    <Typography sx={{ fontSize: "14px", color: "#1C9FE2" }}>
                                        4.8
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "8px", padding: "0 10px" }}>
                                
                                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <LocationOn sx={{ color: "#182775", fontSize: "14px" }} /> 
                                    <Typography sx={{ fontSize: "14px", color: "#182775" }}>
                                        Dubai,Building
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <Typography sx={{ fontSize: "12px", color: "#182775" }}>
                                        120$
                                    </Typography>
                                    <Typography sx={{ fontSize: "11px", color: "#182775" }}>
                                        /Monthly
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>


                        {/* العمود الأول من الصور الصغيرة */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <Box
                                sx={{
                                    width: "130px",
                                    height: "90px",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                    border: "1px solid #ddd",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#F6F8FA",
                                }}
                            >
                                <img
                                    src={userimage2}
                                    alt="Default Image"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </Box>

                            <Box
                                sx={{
                                    width: "130px",
                                    height: "90px",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                    border: "1px solid #ddd",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#F6F8FA",
                                }}
                            >
                                <img
                                    src={userimage4}
                                    alt="Default Image"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </Box>
                        </Box>

                        {/* العمود الثاني من الصور الصغيرة */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <Box
                                sx={{
                                    width: "130px",
                                    height: "90px",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                    border: "1px solid #ddd",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#F6F8FA",
                                }}
                            >
                                <img
                                    src={userimage3}
                                    alt="Default Image"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </Box>

                            <Box
                                sx={{
                                    width: "130px",
                                    height: "90px",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                    border: "1px solid #ddd",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#F6F8FA",
                                }}
                            >
                                <img
                                    src={userimage5}
                                    alt="Default Image"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </Box>
                        </Box>
                    </Box>


                    <Box sx={{ 
                        display: "grid", 
                        gridTemplateColumns: "repeat(2, 1fr)", // صفين وعمودين 
                        gap: "20px", 
                        marginTop: "16px"
                    }}>
                    {/* كارد رقم 1 */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: "14px",  borderRadius: "8px", border: "1px solid #ddd", width: "330", height:"120px", padding: "10px",  }}>
                        <Box sx={{ width: "95px", height: "95px", borderRadius: "8px",  border: "1px solid #ddd",  }}>
                            <img src={userimage7} alt="Image 1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </Box>
                        <Box sx={{width: "200px",  }}>
                            <Typography sx={{ fontSize: "18px", color: "#333" }}>Unit Name | Apart</Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <LocationOn sx={{ color: "#182775", fontSize: "14px" }} /> 
                                <Typography sx={{ fontSize: "14px", color: "#182775" }}>
                                    Komodo Island, Indonesia
                                </Typography>
                            </Box>
                            <Typography sx={{ fontSize: "10px", color: "#333" }}>Modern, spacious apartment with full amenities perfect for comfortable living.</Typography>
                            <Box sx={{ width: "100%", display: "flex", gap:"10px", marginTop: "8px", }}>
                                
                                <Box sx={{ display: "flex", gap: "2px" }}>
                                    <Typography sx={{ fontSize: "12px", color: "#182775" }}>
                                        $120
                                    </Typography>
                                    <Typography sx={{ fontSize: "11px", color: "#333" }}>
                                        /Monthly
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                                    <Typography sx={{ fontSize: "12px", color: "#182775" }}>
                                        $120
                                    </Typography>
                                    <Typography sx={{ fontSize: "11px", color: "#333" }}>
                                        /Daliy
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        
                    </Box>

                    {/* كارد رقم 2 */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: "14px",  borderRadius: "8px", border: "1px solid #ddd", width: "330", height:"120px", padding: "10px",  }}>
                        <Box sx={{ width: "95px", height: "95px", borderRadius: "8px",  border: "1px solid #ddd",  }}>
                            <img src={userimage5} alt="Image 1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </Box>
                        <Box sx={{width: "200px",  }}>
                            <Typography sx={{ fontSize: "18px", color: "#333" }}>Unit Name | Apart</Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <LocationOn sx={{ color: "#182775", fontSize: "14px" }} /> 
                                <Typography sx={{ fontSize: "14px", color: "#182775" }}>
                                    Komodo Island, Indonesia
                                </Typography>
                            </Box>
                            <Typography sx={{ fontSize: "10px", color: "#333" }}>Modern, spacious apartment with full amenities perfect for comfortable living.</Typography>
                            <Box sx={{ width: "100%", display: "flex", gap:"10px", marginTop: "8px", }}>
                                
                                <Box sx={{ display: "flex", gap: "2px" }}>
                                    <Typography sx={{ fontSize: "12px", color: "#182775" }}>
                                        $120
                                    </Typography>
                                    <Typography sx={{ fontSize: "11px", color: "#333" }}>
                                        /Monthly
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                                    <Typography sx={{ fontSize: "12px", color: "#182775" }}>
                                        $120
                                    </Typography>
                                    <Typography sx={{ fontSize: "11px", color: "#333" }}>
                                        /Daliy
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        
                    </Box>

                    {/* كارد رقم 3 */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: "14px",  borderRadius: "8px", border: "1px solid #ddd", width: "330", height:"120px", padding: "10px",  }}>
                        <Box sx={{ width: "95px", height: "95px", borderRadius: "8px",  border: "1px solid #ddd",  }}>
                            <img src={userimage6} alt="Image 1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </Box>
                        <Box sx={{width: "200px",  }}>
                            <Typography sx={{ fontSize: "18px", color: "#333" }}>Unit Name | Apart</Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <LocationOn sx={{ color: "#182775", fontSize: "14px" }} /> 
                                <Typography sx={{ fontSize: "14px", color: "#182775" }}>
                                    Komodo Island, Indonesia
                                </Typography>
                            </Box>
                            <Typography sx={{ fontSize: "10px", color: "#333" }}>Modern, spacious apartment with full amenities perfect for comfortable living.</Typography>
                            <Box sx={{ width: "100%", display: "flex", gap:"10px", marginTop: "8px", }}>
                                
                                <Box sx={{ display: "flex", gap: "2px" }}>
                                    <Typography sx={{ fontSize: "12px", color: "#182775" }}>
                                        $120
                                    </Typography>
                                    <Typography sx={{ fontSize: "11px", color: "#333" }}>
                                        /Monthly
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                                    <Typography sx={{ fontSize: "12px", color: "#182775" }}>
                                        $120
                                    </Typography>
                                    <Typography sx={{ fontSize: "11px", color: "#333" }}>
                                        /Daliy
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        
                    </Box>

                    {/* كارد رقم 4 */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: "14px",  borderRadius: "8px", border: "1px solid #ddd", width: "330", height:"120px", padding: "10px",  }}>
                        <Box sx={{ width: "95px", height: "95px", borderRadius: "8px",  border: "1px solid #ddd",  }}>
                            <img src={userimage3} alt="Image 1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </Box>
                        <Box sx={{width: "200px",  }}>
                            <Typography sx={{ fontSize: "18px", color: "#333" }}>Unit Name | Apart</Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <LocationOn sx={{ color: "#182775", fontSize: "14px" }} /> 
                                <Typography sx={{ fontSize: "14px", color: "#182775" }}>
                                    Komodo Island, Indonesia
                                </Typography>
                            </Box>
                            <Typography sx={{ fontSize: "10px", color: "#333" }}>Modern, spacious apartment with full amenities perfect for comfortable living.</Typography>
                            <Box sx={{ width: "100%", display: "flex", gap:"10px", marginTop: "8px", }}>
                                
                                <Box sx={{ display: "flex", gap: "2px" }}>
                                    <Typography sx={{ fontSize: "12px", color: "#182775" }}>
                                        $120
                                    </Typography>
                                    <Typography sx={{ fontSize: "11px", color: "#333" }}>
                                        /Monthly
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                                    <Typography sx={{ fontSize: "12px", color: "#182775" }}>
                                        $120
                                    </Typography>
                                    <Typography sx={{ fontSize: "11px", color: "#333" }}>
                                        /Daliy
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        
                    </Box>
                </Box>
      
                </Box>
            </Box>

        </Box> 

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "65px", width:"100%", lineHeight:"100%", marginBottom:"12px" }}>
            <Box sx={{ display: "flex", gap: 2 }}>
                <h1
                    style={{
                    fontSize: "32px",
                    cursor: "pointer",
                    color: "#333",
                    }}
                >
                    Affiliate
                </h1> 
            </Box>
                
            <Button 
                variant="contained"
                sx={{ 
                    backgroundColor: "white", 
                    color: "#182775",
                    border: "1px solid #182775",
                    width: "200px", 
                    height: "50px", 
                    borderRadius: "6px", 
                    textTransform: "none", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    gap: 1 
                }}
                onClick={() => navigate("/dashboard/add-apartments")}
            >
                <IosShare sx={{ color: "#182775", fontSize: "20px" }} />  
                Export
            </Button>
        </Box>


         <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2, marginTop:"40px" }}>
            <Box sx={{ maxWidth: "650px", height: "50px", position: "relative", padding: "8px 12px", borderRadius: "5px", border: "1px solid #ddd", display: "flex", alignItems: "center", backgroundColor: "white", flexGrow: 1 }}>
            <SearchIcon sx={{ position: "absolute", left: "12px", color: "#475FD9" }} />
            <input
                type="text"
                placeholder="Search Affiliate..."
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
                        <TableCell sx={{width:"120px", textAlign:"center" , color:"#182775", fontSize:"12px"}}>Date</TableCell>
                        <TableCell sx={{width:"120px", textAlign:"center" , color:"#182775", fontSize:"12px"}}>Rent Type</TableCell>
                        <TableCell sx={{width:"110px", textAlign:"center" , color:"#182775", fontSize:"12px"}}>Wallet</TableCell>
                        <TableCell sx={{width:"120px", textAlign:"center" , color:"#182775", fontSize:"12px"}}>Deals</TableCell>
                        <TableCell sx={{ width:"88px", textAlign:"center" , color:"#182775", fontSize:"12px"}}>Price</TableCell>
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
                                <TableCell sx={{width:"120px", textAlign:"center"}}>20/11/24</TableCell>
                                <TableCell sx={{width:"120px", textAlign:"center"}}>1500 UEA</TableCell>
                                <TableCell sx={{width:"120px", textAlign:"center"}}>140,00 $</TableCell>
                                <TableCell sx={{width:"120px", textAlign:"center"}}>15</TableCell>
                                <TableCell sx={{width:"120px", textAlign:"center"}}>500 UEA</TableCell>

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



