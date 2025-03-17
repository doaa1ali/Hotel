import React, { useState } from "react";
import { Box, Paper, Table as MuiTable, TableHead, TableRow, TableCell, TableBody, TableContainer, Divider, Pagination } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useLocation } from "react-router-dom";

const ApartmentsTable = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [page, setPage] = useState(0);
  const rowsPerPage = 18;
  const totalRows = 100;

  const data = Array.from({ length: totalRows }, (_, i) => ({
    id: i + 1,
    ReqSender: "Name",
    UnitNo: "084",
    Status: i % 3 === 0 ? "Active" : i % 3 === 1 ? "Done" : "Pending",
    ReqTime: "Yearly",
    Employee: "Name",
    AcceptTime: "2:15 Pm",
    ArriveTime: "2:15 Pm",
    DoneTime: "2:15 Pm",
    Pending: "2:15 Pm",
  }));

  const menuItems = [
    { name: "All Requests (2490)", path: "/dashboard/help-requests", filter: "All" },
    { name: "Maintenance (50)", path: "/dashboard/maintenance", filter: "Maintenance" },
    { name: "Facility Care (1256)", path: "/dashboard/help-facility", filter: "Facility Care" },
    { name: "Users (1256)", path: "/dashboard/users", filter: "Users" },
  ];

  return (
    <div style={{ padding: "20px" , minHeight: "100vh" }}>
      {/* Tabs */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "50px", mb: 2 }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <h1
                style={{
                  fontSize: "22px",
                  cursor: "pointer",
                  color: location.pathname === item.path ? "#182775" : "#8594E6",
                  borderBottom: location.pathname === item.path ? "2px solid #182775" : "#8594E6",
                  transition: "color 0.3s ease"
                }}
                onClick={() => navigate(item.path)}
                onMouseEnter={(e) => (e.target.style.color = "#182775")}
                onMouseLeave={(e) => (e.target.style.color = location.pathname === item.path ? "#182775" : "#8594E6")}
              >
                {item.name}
              </h1>
              {index !== menuItems.length - 1 && <h3>|</h3>}
            </React.Fragment>
          ))}
        </Box>
      </Box>

      {/* Search Box */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Box
          sx={{
            width: "100%",
            height: "50px",
            padding: "8px 12px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            flexGrow: 1,
          }}
        >
          <SearchIcon sx={{ color: "#475FD9", mr: 1 }} />
          <input
            type="text"
            placeholder="Search Apartments Name..."
            style={{
              width: "100%",
              height: "100%",
              padding: "8px",
              fontSize: "0.9rem",
              borderRadius: "5px",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
          />
        </Box>
      </Box>

      {/* Table */}
      <Paper sx={{ width: "100%", overflow: "hidden", mt: 3 ,}}>
        <TableContainer>
          <MuiTable>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#C2CAF2"}}>
                {["ReqSender", "UnitNo", "Status", "ReqTime", "Employee", "AcceptTime", "ArriveTime", "DoneTime", "Pending"].map((col, index) => (
                  <TableCell key={index} sx={{ textAlign: "center", fontSize: "12px", color: "#182775" }}>
                    {col}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <TableRow key={row.id} sx={{ borderBottom: "1px solid #ddd" }}>
                  <TableCell sx={{ textAlign: "center", color: index === 0 ? "#1C9FE2" : "#182775" }}>{row.ReqSender}</TableCell>
                  <TableCell sx={{ textAlign: "center", color: index === 0 ? "#1C9FE2" : "#182775" }}>{row.UnitNo}</TableCell>
                  <TableCell sx={{ textAlign: "center", color: index === 0 ? "#1C9FE2" : "#182775" }}>{row.Status}</TableCell>
                  <TableCell sx={{ textAlign: "center", color: index === 0 ? "#1C9FE2" : "#182775" }}>{row.ReqTime}</TableCell>
                  <TableCell sx={{ textAlign: "center", color: index === 0 ? "#1C9FE2" : "#182775" }}>{row.Employee}</TableCell>
                  <TableCell sx={{ textAlign: "center", color: index === 0 ? "#1C9FE2" : "#182775" }}>{row.AcceptTime}</TableCell>
                  <TableCell sx={{ textAlign: "center", color: index === 0 ? "#1C9FE2" : "#182775" }}>{row.ArriveTime}</TableCell>
                  <TableCell sx={{ textAlign: "center", color: index === 0 ? "#1C9FE2" : "#182775" }}>{row.DoneTime}</TableCell>
                  <TableCell sx={{ textAlign: "center", color: index === 0 ? "#1C9FE2" : "#182775" }}>{row.Pending}</TableCell>
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
