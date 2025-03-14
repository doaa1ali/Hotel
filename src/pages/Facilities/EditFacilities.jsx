import React, { useState } from 'react';
import { useDropzone } from "react-dropzone";
import { Box, Avatar, TextField, MenuItem, Button, Typography,InputAdornment, Divider, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ImageIcon from "@mui/icons-material/Image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import image6 from "../../assets/images/image6.png";
import { useNavigate } from "react-router-dom";

const Table = () => {

  const navigate = useNavigate();

  return (
    <div style={{ padding: "16px" }}>
      {/* العنوان والوصف */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
        <Typography variant="h4" sx={{ fontFamily: "Poppins", fontWeight: "bold" }}>
          Edit - Facilities
        </Typography>
        <Typography variant="body1" sx={{ color: "#666" }}>
          Fill in the data to edit an facilities.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: "40px", }}>
        <Box sx={{ flex: 2,  borderRadius: "8px", backgroundColor: "#fff", width:"792px", }}>
          

            <Box sx={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
                <Box >
                    <Typography variant="subtitle2" sx={{ color: "#182775" }}>Item Name</Typography>
                    <TextField fullWidth variant="outlined" placeholder="Enter Item Name" sx={{ width:"380px", height:"50px"}} />
                </Box>
                
                <Box >
                    <Typography variant="subtitle2" sx={{ color: "#182775" }}>Apartment</Typography>
                    <TextField fullWidth variant="outlined" placeholder="Enter Apartment" sx={{ width:"380px", height:"50px"}}/>
                </Box>

                <Box >
                    <Typography variant="subtitle2" sx={{ color: "#182775" }}>Code</Typography>
                    <TextField fullWidth variant="outlined" placeholder="Enter Code" sx={{ width:"380px", height:"50px"}}/>
                </Box>
            </Box>

            <Box sx={{ display: "flex", gap: "12px", marginBottom: "16px" }}>

                <Box >
                    <Typography variant="subtitle2" sx={{ color: "#182775" }}>Count</Typography>
                    <TextField fullWidth variant="outlined" placeholder="Enter Count" sx={{ width:"380px", height:"50px"}}/>
                </Box>

                <Box >
                    <Typography variant="subtitle2" sx={{ color: "#182775" }}>Condition</Typography>
                    <TextField fullWidth variant="outlined" placeholder="Enter Condition" sx={{ width:"380px", height:"50px"}} />
                </Box>

                <Box>
                    <Typography variant="subtitle2" sx={{ color: "#182775" }}>Cost</Typography>
                    <TextField fullWidth variant="outlined" placeholder="Enter Cost" sx={{ width:"380px", height:"50px"}}/>
                </Box>

             </Box>   

             <Box sx={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
                <Box>
                    <Typography variant="subtitle2" sx={{ color: "#182775" }}>Date</Typography>
                    <TextField fullWidth variant="outlined" type="date" sx={{ width:"380px", height:"50px"}}/>
                </Box>

                <Box>
                    <Typography variant="subtitle2" sx={{ color: "#182775" }}>Admin</Typography>
                    <TextField fullWidth variant="outlined" placeholder="Enter Admin" sx={{ width:"380px", height:"50px"}} />
                </Box>

            </Box>

   
            <Box sx={{ width: "100%", marginTop: "16px",  }}>
                <Typography variant="subtitle1">Description</Typography>
                <TextField fullWidth variant="outlined" multiline minRows={5} placeholder="Type your message here" />
            </Box>

            <Box sx={{ width: "100%", marginTop: "16px" }}>

                {/* خط فاصل */}
                <Divider sx={{ marginY: "16px" }} />

                {/* الأزرار */}
                <Box sx={{ display: "flex", justifyContent: "flex-start", gap: "16px" }}>
                    <Button 
                        variant="contained" 
                        sx={{ backgroundColor: "#182775", "&:hover": { backgroundColor: "#121E5B" }, textTransform: "none" }}
                        onClick={() => navigate("/dashboard/Facilities-list")}
                    >
                        Save
                    </Button>
                    <Button 
                        variant="outlined"
                        sx={{ color: "#182775", textTransform: "none" }}
                        onClick={() => navigate("/dashboard/Facilities-list")}
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
