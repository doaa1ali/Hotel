import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Edit, Delete, Tune } from "@mui/icons-material"; 
import { Box, Button, IconButton, Typography, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { Inventory, Build, Apartment, People } from "@mui/icons-material";

const Facilities = () => {
    const { register, handleSubmit } = useForm();
    const [page, setPage] = useState(0);
    const rowsPerPage = 5;
    const totalRows = 15;
    const navigate = useNavigate();

    const data = Array.from({ length: totalRows }, (_, i) => ({
        id: i + 1,
        Item_Name: `Kettle ${i + 1}`,
        apartment: `Name ${i + 1}`,
        Code: "032",
        Count: `${(i + 1) * 10}`,
        condition: i % 2 === 0 ? "New" : "Used",
        statusColor: i % 2 === 0 ? "#00CB22" : "#CDA903",
        statusBg: i % 2 === 0 ? "#EAFBF3" : "#FFF3CD",
        Cost: `${(i + 1) * 110}`,
        date: "20/11/24",
        admin: "Name",
        description: `Description ${i + 1}`,
        price: 900 + (i + 1) * 20,
    }));

    const [selectedCard, setSelectedCard] = useState("allRequests");

    const cards = [
        { id: "allRequests", title: "All Requests", count: 2490, icon: <Inventory sx={{ fontSize: 30 }} /> },
        { id: "maintenance", title: "Maintenance", count: 50, icon: <Build sx={{ fontSize: 30 }} /> },
        { id: "facilityCare", title: "Facility Care", count: 1265, icon: <Apartment sx={{ fontSize: 30 }} /> },
        { id: "users", title: "Users", count: 1265, icon: <People sx={{ fontSize: 30 }} /> },
    ];

    const onSubmit = (formData) => {
        console.log("Search Data:", formData);
    };

    return (
        <div style={{ padding: "20px" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "65px", marginBottom: "10px" }}>
                <h1 style={{ fontSize: "32px", cursor: "pointer", color: "#333" }}>Help Center</h1>
            </Box>

            <Box sx={{ display: "flex", gap: "16px", justifyContent: "space-between", padding: "16px", backgroundColor: "#FFFFFF" }}>
                {cards.map((card) => (
                    <Box
                        key={card.id}
                        onClick={() => {
                            setSelectedCard(card.id);
                            navigate("/dashboard/help-requests");
                        }}
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
                        
                        <Typography variant="body1" sx={{ fontWeight: "400", fontSize: "18px", color: selectedCard === card.id ? "#FFFFFF" : "#333" }}>
                          {card.icon}
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: "400", fontSize: "18px", color: selectedCard === card.id ? "#FFFFFF" : "#333" }}>
                            {card.title}
                        </Typography>
                        <Typography variant="caption" sx={{ color: selectedCard === card.id ? "#FFFFFF" : "#182775", fontSize: "14px", fontWeight: "bold" }}>
                            ({card.count})
                        </Typography>
                    </Box>
                ))}
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginTop: "40px" }}>
                <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", gap: "10px", width: "100%" }}>
                    <TextField
                        {...register("search")}
                        placeholder="Search User Name..."
                        variant="outlined"
                        sx={{ flexGrow: 1 }}
                        InputProps={{
                            startAdornment: <SearchIcon sx={{ color: "#475FD9", marginRight: "8px" }} />,
                        }}
                    />
                    <Button type="submit" variant="contained" sx={{ backgroundColor: "#182775", "&:hover": { backgroundColor: "#354AB6" }, width: "130px" ,textTransform:"none"}} startIcon={<Tune />}>
                        Filter
                    </Button>
                </form>
            </Box>

            <Paper sx={{ width: "100%", overflow: "hidden", mt: 3 }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#F6F8FA" }}>
                                {["Item Name", "Apartment", "Code", "Count", "Condition", "Cost", "Date", "Admin", "Notes", "Actions"].map((header) => (
                                    <TableCell key={header} sx={{ textAlign: "center", color: "#182775", fontSize: "12px" }}>
                                        {header}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell sx={{ textAlign: "center" }}>{row.Item_Name}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>{row.apartment}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>{row.Code}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>{row.Count}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>
                                        <Box sx={{ padding: "5px", borderRadius: "5px", color: row.statusColor, backgroundColor: row.statusBg, fontWeight: "bold" }}>{row.condition}</Box>
                                    </TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>{row.Cost}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>{row.date}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>{row.admin}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>{row.description}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>
                                        <IconButton onClick={() => navigate("/dashboard/edit-Facilities")}>
                                            <Edit sx={{ color: "#475467" }} />
                                        </IconButton>
                                        <IconButton>
                                            <Delete sx={{ color: "#FF4D4D" }} />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
};

export default Facilities;
