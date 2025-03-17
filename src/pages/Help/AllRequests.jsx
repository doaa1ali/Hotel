import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Paper, Table as MuiTable, TableHead, TableRow, TableCell, TableBody, TableContainer, Divider, Pagination } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const ApartmentsTable = () => {
  const navigate = useNavigate();
  const { register, watch } = useForm();
  const searchQuery = watch("search", "");

  const [page, setPage] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("All");
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
    category: i % 2 === 0 ? "Maintenance" : "Facility Care",
  }));

  const menuItems = [
    { name: "All Requests (2490)", path: "/dashboard/help-requests", filter: "All" },
    { name: "Maintenance (50)", path: "/dashboard/maintenance", filter: "Maintenance" },
    { name: "Facility Care (1256)", path: "/dashboard/help-facility", filter: "Facility Care" },
    { name: "Users (1256)", path: "/dashboard/users", filter: "Users" },
  ];

  const handleFilterChange = (filter, path) => {
    setSelectedFilter(filter);
    setPage(0); 
    navigate(path);
  };

  const filteredData = data.filter(item => 
    (selectedFilter === "All" || item.category === selectedFilter) &&
    item.ReqSender.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", minHeight: "100vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "50px", mb: 2 }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <h1
                style={{
                  fontSize: "22px",
                  cursor: "pointer",
                  color: selectedFilter === item.filter ? "#182775" : "#8594E6",
                  borderBottom: selectedFilter === item.filter ? "2px solid #182775" : "none",
                  transition: "color 0.3s ease"
                }}
                onClick={() => handleFilterChange(item.filter, item.path)}
              >
                {item.name}
              </h1>
              {index !== menuItems.length - 1 && <h3>|</h3>}
            </React.Fragment>
          ))}
        </Box>
      </Box>

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
            {...register("search")}
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

      <Paper sx={{ width: "100%", overflow: "hidden", mt: 3 }}>
        <TableContainer>
          <MuiTable>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#C2CAF2" }}>
                {["ReqSender", "UnitNo", "Status", "ReqTime", "Employee", "AcceptTime", "ArriveTime", "DoneTime", "Pending"].map((col, index) => (
                  <TableCell key={index} sx={{ textAlign: "center", fontSize: "12px", color: "#182775" }}>
                    {col}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} style={{ textAlign: "center", color: "red" }}>
                    No data found
                  </TableCell>
                </TableRow>
              ) : (
                filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                  <TableRow key={row.id} sx={{ borderBottom: "1px solid #ddd" }}>
                    {Object.values(row).slice(1, 10).map((value, idx) => (
                      <TableCell key={idx} sx={{ textAlign: "center", color: "#182775" }}>{value}</TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </MuiTable>
        </TableContainer>
      </Paper>
      <Divider sx={{ my: 3 }} />
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Pagination count={Math.ceil(filteredData.length / rowsPerPage)} page={page + 1} onChange={(_, newPage) => setPage(newPage - 1)} color="primary" />
      </Box>
    </div>
  );
};

export default ApartmentsTable;