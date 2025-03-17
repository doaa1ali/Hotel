import React, { useState } from 'react';
import { Box, Button, Typography, Divider, TextField } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
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
                <Typography variant="h4" sx={{ fontFamily: "Poppins", fontWeight: "500", fontSize: "32px", color:"#333333" }}>
                    Add - Inventory
                </Typography>
                <Typography variant="body1" sx={{ color: "#5C5C5C",fontFamily: "Poppins", fontWeight: "200", fontSize: "20px",  }}>
                    Fill in the data to add an Inventory.
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
                            <Typography variant="subtitle2" sx={{ color: "#182775" }}>Date</Typography>
                            <TextField fullWidth type="date" variant="outlined" placeholder="20/11/2024" sx={{ width:"380px", height:"50px"}} />
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
                            <Box sx={{height: "190px",borderRadius: "8px",overflow: "hidden",border: "1px solid #ddd",display: "flex",alignItems: "center",justifyContent: "center",backgroundColor: "#F6F8FA", cursor: "pointer",position: "relative"}}
                                onClick={() => document.getElementById("fileInput").click()}>

                                <input 
                                    type="file" 
                                    id="fileInput" 
                                    accept="image/*" 
                                    style={{ display: "none" }} 
                                    onChange={handleImageUpload} 
                                />

                                {uploadedImage ? (
                                    <img 
                                        src={uploadedImage} 
                                        alt="Uploaded" 
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                                        onClick={() => document.getElementById("fileInput").click()} // يسمح بتغيير الصورة عند النقر عليها
                                    />
                                ) : (
                                    <>
                                        <ImageIcon sx={{ fontSize: 40, color: "#182775" }} />
                                        <Typography sx={{ fontWeight: "bold", color: "#182775" }}>
                                            Upload Image
                                        </Typography>
                                        <Typography variant="caption">Click to upload</Typography>
                                    </>
                                )}
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
