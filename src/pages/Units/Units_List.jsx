import React, { useState } from "react";
import { Edit, Delete, Visibility, Add, Tune } from "@mui/icons-material"; 
import { Box, Button, IconButton, Divider, Pagination } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useLocation } from "react-router-dom";


const Table = () => {
  const [activeTab, setActiveTab] = useState("apartments");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const totalRows = 15; 

  const navigate = useNavigate();
  const location = useLocation();

  const handlePageChange = (event, value) => {
    setPage(value);
  };



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
            Add units
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

      <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
        <thead>
          <tr style={{ backgroundColor: "#F6F8FA", color: "#182775" }}>
            <th style={cellStyle}>Apartment</th>
            <th style={cellStyle}>Building</th>
            <th style={cellStyle}>Area</th>
            <th style={cellStyle}>Status</th>
            <th style={cellStyle}>No. of units</th>
            <th style={cellStyle}>Client Rent</th>
            <th style={cellStyle}>Type</th>
            <th style={cellStyle}>Start & End</th>
            <th style={cellStyle}>Expenses</th>
            <th style={cellStyle}>Price</th>
            <th style={cellStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rowsPerPage }, (_, i) => {
            const rowIndex = (page - 1) * rowsPerPage + i + 1;
            return rowIndex <= totalRows ? (
              <tr key={rowIndex} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={cellStyle}>Apartment {rowIndex}</td>
                <td style={cellStyle}>B-{rowIndex}</td>
                <td style={cellStyle}>{rowIndex * 10} m²</td>
                <td style={cellStyle}>
                    <Box 
                        sx={{
                        textAlign:"center",
                        padding: "5px",
                        borderRadius: "5px",
                        width:"90px",
                        height:"30px",
                        color: rowIndex % 3 === 1 ? "#00CB22" : rowIndex % 3 === 0 ? "#C8443A" : "#CDA903",
                        backgroundColor: rowIndex % 3 === 1 ? "#EAFBF3" : rowIndex % 3 === 0 ? "#FCE8E6" : "#FFF3CD",
                        fontWeight: "bold",
                        }}
                    >
                        {rowIndex % 3 === 1 ? "Available" : rowIndex % 3 === 0 ? "Occupied" : "Partly"}
                    </Box>
                </td>


                <td style={cellStyle}>{Math.ceil(Math.random() * 5)} of 5</td>
                <td style={cellStyle}>Client {rowIndex}</td>
                <td style={cellStyle}>Yearly</td>
                <td style={cellStyle}>8/22 - 8/23</td>
                <td style={cellStyle}>{720 + rowIndex * 10}</td>
                <td style={cellStyle}>{900 + rowIndex * 20}</td>
                <td style={cellStyle}>
                  <Box sx={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                    <Visibility sx={iconStyle} />
                    
                    <Edit sx={iconStyle}
                        onClick={() => navigate("/dashboard/edit-units")}
                    />
                    <Delete sx={iconStyle} />
                  </Box>
                </td>
              </tr>
            ) : null;
          })}
        </tbody>
      </table>

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

const cellStyle = { padding: "10px", border: "1px solid #ddd" };
const iconStyle = { cursor: "pointer", color: "#182775" };

export default Table;
