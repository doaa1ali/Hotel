import React, { useState } from "react";
import { Edit, Delete, Add, Tune,Visibility } from "@mui/icons-material";
import { Box, Button, IconButton, Divider, Pagination,  Table as MuiTable, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useLocation } from "react-router-dom";
import Inventory1 from "../../assets/images/inventory1.png"; 
import Inventory2 from "../../assets/images/inventory2.png"; 
import Inventory3 from "../../assets/images/inventory3.png"; 


const ApartmentsTable = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const rowsPerPage = 5;
  const totalRows = 15;
  const images = [Inventory1, Inventory2, Inventory3];
  const type = ["Fix", "Stock", "Clean"];

  return (
    <div style={{ padding: "20px" }}>

         <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "50px", mb: 2 }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                    <h1
                    style={{
                    fontSize: "22px",
                    cursor: "pointer",
                    color:  "#182775" 
                    }}
                    >
                        Inventory
                    </h1> 
                </Box>
        
                <Button 
                    variant="contained"
                    sx={{ backgroundColor: "#182775", "&:hover": { backgroundColor: "#0F1A4D" }, width: "200px", height: "50px", borderRadius: "6px", textTransform: "none", display: "flex", alignItems: "center", gap: 1 }}
                    onClick={() => navigate("/dashboard/add-inventory")}
        
                    >
                    <IconButton sx={{ color: "white", borderRadius: "50%" }}>
                        <Add />
                    </IconButton>
                    Add Inventory
                </Button>
        
        </Box>



      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Box sx={{ maxWidth: "650px", height: "50px", position: "relative", padding: "8px 12px", borderRadius: "5px", border: "1px solid #ddd", display: "flex", alignItems: "center", backgroundColor: "white", flexGrow: 1 }}>
          <SearchIcon sx={{ position: "absolute", left: "12px", color: "#475FD9" }} />
          <input
            type="text"
            placeholder="Search Inventory Name..."
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

      {/* Table */}
      <Paper sx={{ width: "100%", overflow: "hidden", mt: 3 }}>
        <TableContainer>
          <MuiTable>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#F6F8FA", color: "#182775" }}>
                {["Image", "Items Name", "Description", "quantity","IN","Out", "Cost" ,"Type", "Actions"].map((col, index) => (
                  <TableCell key={index} sx={{ textAlign: "center", fontSize: "12px", color: "#182775" }}>
                    {col}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
                {Array.from({ length: totalRows })
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) 
                    .map((_, index) => (
                    <TableRow key={index} sx={{ borderBottom: "1px solid #ddd" }}>
                        <TableCell sx={{ textAlign: "center" }}>
                        <img 
                            src={images[index % images.length]}  
                            alt="Inventory" 
                            style={{ width: "85px", height: "55px", borderRadius: "5px" }} 
                        />
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>Name</TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                            Durable plumbing wrenches for easy use.
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>500</TableCell>
                        <TableCell sx={{ textAlign: "center" }}>120</TableCell>
                        <TableCell sx={{ textAlign: "center" }}>40</TableCell>
                        <TableCell sx={{ textAlign: "center" }}>150</TableCell>
                        <TableCell sx={{ textAlign: "center" }}>{type[index % type.length]}</TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                            <IconButton onClick={() => navigate("/dashboard/edit-inventory")}><Edit sx={{ color: "#475467" }} /></IconButton>
                            <IconButton><Delete sx={{ color: "#475467" }} /></IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
          </MuiTable>
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

export default ApartmentsTable;
