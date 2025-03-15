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

  const data = Array.from({ length: totalRows }, (_, i) => ({
    id: i + 1,
    apartment: `Apartment ${i + 1}`,
    building: `B-${i + 1}`,
    area: `${(i + 1) * 10} m²`,
    status: i % 3 === 1 ? "Available" : i % 3 === 0 ? "Occupied" : "Partly",
    statusColor: i % 3 === 1 ? "#00CB22" : i % 3 === 0 ? "#C8443A" : "#CDA903",
    statusBg: i % 3 === 1 ? "#EAFBF3" : i % 3 === 0 ? "#FCE8E6" : "#FFF3CD",
    units: `${Math.ceil(Math.random() * 5)} of 5`,
    client: `Client ${i + 1}`,
    type: "Yearly",
    duration: "8/22 - 8/23",
    expenses: 720 + (i + 1) * 10,
    price: 900 + (i + 1) * 20,
  }));

  return (
    <div style={{ padding: "20px" }}>
       <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "50px", mb: 2 }}>
        <Box sx={{ display: "flex", gap: 2 }}>
            <h1
                style={{
                fontSize: "22px",
                cursor: "pointer",
                color: location.pathname === "/dashboard/apartments-list" ? "#182775" : "#555",
                borderBottom: location.pathname === "/dashboard/apartments-list" ? "2px solid #182775" : "none"
                }}
                onClick={() => navigate("/dashboard/apartments-list")}
            >
                Apartments List
            </h1> 
        
            <h3>|</h3>

            <h1
                style={{
                fontSize: "22px",
                cursor: "pointer",
                color: location.pathname === "/dashboard/units-list" ? "#182775" : "#555",
                borderBottom: location.pathname === "/dashboard/units-list" ? "2px solid #182775" : "none"
                }}
                onClick={() => navigate("/dashboard/units-list")}
            >
                Units List
            </h1>
        </Box>

        <Button 
            variant="contained"
            sx={{ backgroundColor: "#182775", "&:hover": { backgroundColor: "#0F1A4D" }, width: "200px", height: "50px", borderRadius: "6px", textTransform: "none", display: "flex", alignItems: "center", gap: 1 }}
            onClick={() => navigate("/dashboard/add-units")}

            >
            <IconButton sx={{ color: "white", borderRadius: "50%" }}>
                <Add />
            </IconButton>
            Add Units
        </Button>

      </Box>


      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Box sx={{ maxWidth: "650px", height: "50px", position: "relative", padding: "8px 12px", borderRadius: "5px", border: "1px solid #ddd", display: "flex", alignItems: "center", backgroundColor: "white", flexGrow: 1 }}>
          <SearchIcon sx={{ position: "absolute", left: "12px", color: "#475FD9" }} />
          <input
            type="text"
            placeholder="Search Units Name..."
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
                {["Apartment", "Building", "Area", "Status", "No. of units", "Client Rent", "Type", "Start & End", "Expenses", "Price", "Actions"].map((col, index) => (
                  <TableCell key={index} sx={{ textAlign: "center", fontSize: "12px", color: "#182775" }}>
                    {col}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow key={row.id} sx={{ borderBottom: "1px solid #ddd" }}>
                  <TableCell sx={{ textAlign: "center" }}>{row.apartment}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{row.building}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{row.area}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Box sx={{ padding: "5px", borderRadius: "5px", color: row.statusColor, backgroundColor: row.statusBg, fontWeight: "bold" }}>
                      {row.status}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{row.units}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{row.client}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{row.type}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{row.duration}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{row.expenses}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{row.price}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <IconButton ><Visibility sx={{ color: "#475467" }} /> </IconButton>
                    <IconButton onClick={() => navigate("/dashboard/edit-units")}><Edit sx={{ color: "#475467" }} /></IconButton>
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
