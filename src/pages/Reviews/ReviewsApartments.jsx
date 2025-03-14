import React, { useState } from "react";
import { Edit, Delete, Add, Tune,Visibility } from "@mui/icons-material";
import { 
  Box, Button, IconButton, Divider, Pagination, 
  Table as MuiTable, TableHead, TableRow, TableCell, TableBody, 
  TableContainer, Paper
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useLocation } from "react-router-dom";

const ApartmentsTable = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [page, setPage] = useState(0);
  const rowsPerPage = 5;
  const totalRows = 15;

  return (
    <div style={{ padding: "20px" }}>
       <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "50px", mb: 2 }}>
        <Box sx={{ display: "flex", gap: 2 }}>
            <h1
                style={{
                fontSize: "22px",
                cursor: "pointer",
                color: location.pathname === "/dashboard/reviews-apartments" ? "#182775" : "#555",
                borderBottom: location.pathname === "/dashboard/reviews-apartments" ? "2px solid #182775" : "none"
                }}
                onClick={() => navigate("/dashboard/reviews-apartments")}
            >
                Apartments
            </h1> 
        
            <h3>|</h3>

            <h1
                style={{
                fontSize: "22px",
                cursor: "pointer",
                color: location.pathname === "/dashboard/reviews-units" ? "#182775" : "#555",
                borderBottom: location.pathname === "/dashboard/reviews-units" ? "2px solid #182775" : "none"
                }}
                onClick={() => navigate("/dashboard/reviews-units")}
            >
                Units
            </h1>

            <h3>|</h3>

            <h1
                style={{
                fontSize: "22px",
                cursor: "pointer",
                color: location.pathname === "/dashboard/reviews-clints" ? "#182775" : "#555",
                borderBottom: location.pathname === "/dashboard/reviews-clints" ? "2px solid #182775" : "none"
                }}
                onClick={() => navigate("/dashboard/reviews-clints")}
            >
                Client
            </h1>

            <h3>|</h3>

            <h1
                style={{
                fontSize: "22px",
                cursor: "pointer",
                color: location.pathname === "/dashboard/reviews-stuff" ? "#182775" : "#555",
                borderBottom: location.pathname === "/dashboard/reviews-stuff" ? "2px solid #182775" : "none"
                }}
                onClick={() => navigate("/dashboard/reviews-stuff")}
            >
                Stuff
            </h1>

        </Box>


      </Box>


      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Box sx={{ maxWidth: "650px", height: "50px", position: "relative", padding: "8px 12px", borderRadius: "5px", border: "1px solid #ddd", display: "flex", alignItems: "center", backgroundColor: "white", flexGrow: 1 }}>
          <SearchIcon sx={{ position: "absolute", left: "12px", color: "#475FD9" }} />
          <input
            type="text"
            placeholder="Search Apartments Name..."
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
                {["Apartment", "Client Name", "Client Review", "Rating of client", "Date", "Actions"].map((col, index) => (
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
                        <TableCell sx={{ textAlign: "center" }}>Apartment {index + 1}</TableCell>
                        <TableCell sx={{ textAlign: "center" }}>John Doe</TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                        Great client! Smooth interaction, looking forward to working again.
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>3/5</TableCell>
                        <TableCell sx={{ textAlign: "center" }}>1/1/2025</TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                        <IconButton ><Edit sx={{ color: "#475467" }} /></IconButton>
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
