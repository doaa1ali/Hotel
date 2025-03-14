import React, { useState } from 'react';
import { Box, Button, Typography, Divider, TextField } from "@mui/material";
import Inventory1 from "../../assets/images/inventory1.png"; 
import { useNavigate } from "react-router-dom";

const Table = () => {
    const [uploadedImage, setUploadedImage] = useState(null); 
    const navigate = useNavigate();

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setUploadedImage(imageUrl);
        }
    };

    return (
        <div style={{ padding: "16px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                <Typography variant="h4" sx={{ fontFamily: "Poppins", fontWeight: "bold" }}>
                    Edit - Inventory
                </Typography>
                <Typography variant="body1" sx={{ color: "#666" }}>
                    Fill in the data to edit an Inventory.
                </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: "40px" }}>
                <Box sx={{ flex: 2, borderRadius: "8px", backgroundColor: "#fff", width: "792px" }}>
                    <Box sx={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
                    
                        <Box >
                            <Typography variant="subtitle2" sx={{ color: "#182775" }}>Item Name</Typography>
                            <TextField fullWidth variant="outlined" placeholder="X Name" sx={{ width:"380px", height:"50px"}}/>
                        </Box>
        
                        <Box >
                            <Typography variant="subtitle2" sx={{ color: "#182775" }}>Quantity</Typography>
                            <TextField fullWidth variant="outlined" placeholder="500" sx={{ width:"380px", height:"50px"}} />
                        </Box>
        
                        <Box>
                            <Typography variant="subtitle2" sx={{ color: "#182775" }}>Typ</Typography>
                            <TextField fullWidth variant="outlined" placeholder="Fix" sx={{ width:"380px", height:"50px"}}/>
                        </Box>
        
                    </Box> 

                    <Box sx={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
                    
                        <Box >
                            <Typography variant="subtitle2" sx={{ color: "#182775" }}>Cost</Typography>
                            <TextField fullWidth variant="outlined" placeholder="150" sx={{ width:"380px", height:"50px"}}/>
                        </Box>
        
                        <Box >
                            <Typography variant="subtitle2" sx={{ color: "#182775" }}>IN</Typography>
                            <TextField fullWidth  variant="outlined" placeholder="40" sx={{ width:"380px", height:"50px"}} />
                        </Box>

                        <Box >
                            <Typography variant="subtitle2" sx={{ color: "#182775" }}>Out</Typography>
                            <TextField fullWidth  variant="outlined" placeholder="150" sx={{ width:"380px", height:"50px"}} />
                        </Box>
        
                    </Box> 

                    <Box sx={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
                        <Box sx={{ width: "50%", height: "230px",marginTop: "16px" }}>
                            <Typography variant="subtitle1">Description</Typography>
                            <TextField fullWidth variant="outlined" multiline minRows={7} placeholder="Type your message here" />
                        </Box>

                        {/* صندوق رفع الصورة */}
                        <Box sx={{ marginTop: "8px", width:"50%" }}>
                            <Typography variant="subtitle1" sx={{ marginBottom: "8px" }}>Image</Typography>
                            <Box sx={{height: "190px",borderRadius: "8px",overflow: "hidden",border: "1px solid #ddd",display: "flex",alignItems: "center",justifyContent: "center",backgroundColor: "#F6F8FA", cursor: "pointer",position: "relative"}}>
                               
                                                               
                                <img
                                    src={Inventory1}
                                    alt="Inventory1"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                                                              
                            
                            </Box>
                        </Box>

                    </Box>

                    <Box sx={{ width: "100%", marginTop: "16px" }}>
                        <Divider sx={{ marginY: "16px" }} />

                        <Box sx={{ display: "flex", justifyContent: "flex-start", gap: "16px" }}>
                            <Button 
                                variant="contained" 
                                sx={{ backgroundColor: "#182775", "&:hover": { backgroundColor: "#121E5B" }, textTransform: "none" }}
                                onClick={() => navigate("/dashboard/inventory-list")}
                            >
                                Add
                            </Button>
                            <Button 
                                variant="outlined"
                                sx={{ color: "#182775", textTransform: "none" }}
                                onClick={() => navigate("/dashboard/inventory-list")}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default Table;
