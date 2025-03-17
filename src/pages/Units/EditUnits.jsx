import React, { useState } from 'react';
import { Box, Avatar, TextField, MenuItem, Button, Typography,InputAdornment, Divider, Grid } from "@mui/material";
import { Person, Phone, Email, Badge, CreditCard } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import Edit_image1 from "../../assets/images/Edit_image1.png";
import Edit_image2 from "../../assets/images/Edit_image2.png";
import Edit_image3 from "../../assets/images/Edit_image3.png";
import Edit_image4 from "../../assets/images/Edit_image4.png";
import { useNavigate } from "react-router-dom";

const Table = () => {

    const [images, setImages] = useState ([Edit_image2, Edit_image3, Edit_image4]);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file && images.length < 4) { 
            const imageUrl = URL.createObjectURL(file);
            setImages((prevImages) => [...prevImages, imageUrl]); // إضافة الصورة الجديدة
        }
    };

    const remainingSlots = 4 - images.length;
    const [selectedIndex, setSelectedIndex] = useState(null);

    const clients = [
      { image: image1 , name: "Client 1", unit: "023", rent: "Monthly" },
      { image: image2, name: "Client 2", unit: "045", rent: "Yearly" },
      { image: image3, name: "Client 3", unit: "078", rent: "Weekly" },
    ];
    const navigate = useNavigate();

  return (
    <div style={{ padding: "16px" }}>
      {/* العنوان والوصف */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
        <Typography variant="h4" sx={{ fontFamily: "Poppins", fontWeight: "500", fontSize: "32px", color:"#333333"  }}>
          Edit - Units
        </Typography>
        <Typography variant="body1" sx={{  color: "#5C5C5C",fontFamily: "Poppins", fontWeight: "200", fontSize: "20px", }}>
          Fill in the data to edit an apartment.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: "40px", }}>
        <Box sx={{ flex: 2,  borderRadius: "8px", backgroundColor: "#fff", width:"792px", }}>
          
          {/* الحقول */}
            <Box sx={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
                <Box sx={{ flex: 1 , height: "50px"}}>
                <Typography variant="subtitle1">Apartment</Typography>
                <TextField fullWidth variant="outlined" placeholder="Name"/>
                </Box>
                <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1">Building</Typography>
                <TextField fullWidth variant="outlined" placeholder="Bulid No."/>
                </Box>
            </Box>

            <Box sx={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1">Area</Typography>
                    <TextField fullWidth variant="outlined" placeholder="Area x" />
                </Box>

                <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1">Location</Typography>
                    <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="https://goo.gl/m...."
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <LocationOnIcon color="primary" />
                        </InputAdornment>
                        ),
                    }}
                    sx={{ input: { color: "#1C9FE2" } }} // تغيير لون النص إلى الأزرق
                    />
                </Box>
            </Box>

            <Box sx={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1">Partners</Typography>
                    <TextField fullWidth variant="outlined" select defaultValue="name">
                    <MenuItem value="name">Name</MenuItem>
                    <MenuItem value="Rented">Rented</MenuItem>
                    <MenuItem value="Maintenance">Maintenance</MenuItem>
                    </TextField>
                </Box>

                <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1">Reserved</Typography>
                    <TextField fullWidth variant="outlined" select defaultValue="Available">
                    <MenuItem value="Available">Available</MenuItem>
                    <MenuItem value="Rented">Rented</MenuItem>
                    <MenuItem value="Maintenance">Maintenance</MenuItem>
                    </TextField>
                </Box>
            </Box>


            <Box sx={{ display: "flex", gap: "16px", marginBottom: "16px" }}>

                <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1">Price</Typography>
                    <TextField fullWidth variant="outlined" select defaultValue="UAE">
                    <MenuItem value="UAE">Y: 12.000 UAE</MenuItem>
                    <MenuItem value="AED">Y: 12.000 AED</MenuItem>
                   
                    </TextField>
                </Box>

                <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1">Total item Cost</Typography>
                <TextField fullWidth variant="outlined" type="number" placeholder="(635)" />
                </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: "16px", width:"600px" }}>

                <Box
                    sx={{display: "flex", alignItems: "center", padding: "20px", borderRadius: "5px", width: "200px", color: "#182775", height: "50px", backgroundColor: "#F6F8FA", fontWeight: "bold", gap: "12px", flex: 1,}}
                > Total Salary: 5200 </Box>

                <Box
                    sx={{display: "flex", alignItems: "center", padding: "20px", borderRadius: "5px", width: "200px", color: "#182775", height: "50px", backgroundColor: "#F6F8FA", fontWeight: "bold", gap: "12px", flex: 1,}}
                > Monthly rate : 1200 </Box>


                <Button variant="contained"  sx={{ height: "50px", minWidth: "150px", padding: "8px 16px", backgroundColor:"#182775", textTransform: "none" }}>
                    Apple
                </Button>
            </Box>

   
            <Box sx={{ width: "100%", marginTop: "16px",  }}>
                <Typography variant="subtitle1">Description</Typography>
                <TextField fullWidth variant="outlined" multiline minRows={5} placeholder="Type your message here" />
            </Box>

            <Box sx={{ width: "100%", marginTop: "16px" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "16px" }}>
                    
                    <Box
                            sx={{
                                width: "500px",
                                height: "200px",
                                borderRadius: "8px",
                                overflow: "hidden",
                                border: "1px solid #ddd",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#F6F8FA"
                            }}
                        >
                            <img
                                src={Edit_image1}
                                alt="Default Image 5"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </Box>
                    {/* عرض الصور الثابتة + حقل الرفع إذا كانت أقل من 4 */}
                    <Grid container spacing={2} sx={{ width: "270px", flexWrap: "wrap" }}>
                        {images.map((image, index) => (
                            <Grid item xs={6} key={index}>
                                <Box
                                    sx={{
                                        width: "124px",
                                        height: "90px",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        border: "1px solid #ddd",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "#F6F8FA"
                                    }}
                                >
                                    <img
                                        src={image}
                                        alt={`default-${index}`}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                </Box>
                            </Grid>
                        ))}

                        {/* عرض حقول الرفع إذا كان هناك أماكن فارغة */}
                        {[...Array(remainingSlots)].map((_, index) => (
                            <Grid item xs={6} key={`upload-${index}`}>
                                <Box
                                    sx={{
                                        width: "124px",
                                        height: "90px",
                                        borderRadius: "8px",
                                        border: "none",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        backgroundColor: "#F6F8FA",
                                        position: "relative"
                                    }}
                                    onClick={() => document.getElementById(`fileInput-${index}`).click()}
                                >
                                    <input 
                                        type="file" 
                                        id={`fileInput-${index}`} 
                                        accept="image/*" 
                                        style={{ display: "none" }} 
                                        onChange={handleImageUpload} 
                                    />
                                    <AddIcon sx={{ fontSize: 30, color: "#182775" }} />
                                </Box>
                            </Grid>
                        ))}  
                    </Grid>

                </Box>
            </Box>
            

            <Divider sx={{ marginY: "16px" }} />

            {/* الأزرار */}
            <Box sx={{ display: "flex", justifyContent: "flex-start", gap: "16px" }}>
                <Button 
                    variant="contained" 
                    sx={{ backgroundColor: "#182775", "&:hover": { backgroundColor: "#121E5B" }, textTransform: "none" }}
                >
                    Save
                </Button>
                <Button 
                    variant="outlined"
                    sx={{ color: "#182775", textTransform: "none" }}
                    onClick={() => navigate("/dashboard/units-list")}
                >
                    Cancel
                </Button>
            </Box>

        </Box>

        {/* قائمة العملاء */}
        <Box sx={{ flex: 1, padding: "20px", backgroundColor: "#fff", borderRadius: "11px", width: "350px" }}>
            {clients.map((client, index) => (
                <Box key={index}>
                    <Box
                        onClick={() => setSelectedIndex(index === selectedIndex ? null : index)}
                        sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "20px",
                        borderRadius: "5px",
                        width: "100%",
                        height: "105px",
                        backgroundColor: selectedIndex === index ? "#182775" : "#F6F8FA",
                        color: selectedIndex === index ? "#FFFFFF" : "#182775",
                        gap: "12px",
                        marginBottom: "15px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        }}
                    >
                        <Avatar alt={client.name} src={client.image} sx={{ width: 73, height: 73, border: "none" }} />
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography variant="h6" sx={{ fontFamily: "Poppins", fontWeight: "500" }}>
                                Client Name
                            </Typography>
                            <Box sx={{
                                color:selectedIndex === index ? "#FFFFFF" : "#666",
                                fontSize: "14px", lineHeight: "0.2", fontWeight: "275" }}>
                                <p>Unit Number: 023</p>
                                <p>Rent Type: Monthly</p>
                            </Box>
                        </Box>

                    </Box>

                {/* عرض الحقول عند الضغط */}
                {selectedIndex === index && (
                    <Box sx={{  backgroundColor: "#FFFFFF", borderRadius: "8px",  width:"100%" , marginBottom:"12px", }}>

                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginBottom: "15px" , border: "1px solid #ccc", height:"63px", borderRadius: "6px", padding:"10px", }}>
                            {/* قسم Wallet */}
                            <Box sx={{ textAlign: "center", paddingRight: "20px",}}>
                                <Typography sx={{ fontSize: "20px", fontWeight: "bold", color: "#182775" }}>
                                    $140.00
                                </Typography>
                                <Typography sx={{ fontSize: "14px", color: "#666" }}>
                                    Wallet
                                </Typography>
                            </Box>

                            <Box sx={{ textAlign: "center",  }}>
                                <Typography sx={{ fontSize: "30px", fontWeight: "bold", color: "#182775" }}>
                                    |
                                </Typography>
                                
                            </Box>

                            {/* قسم Deals */}
                            <Box sx={{ textAlign: "center", paddingLeft: "20px" ,}}>
                                <Typography sx={{ fontSize: "20px", fontWeight: "bold", color: "#182775" }}>
                                15
                                </Typography>
                                <Typography sx={{ fontSize: "14px", color: "#666" }}>
                                Deals
                                </Typography>
                            </Box>
                        </Box>
    
                        
                        <TextField fullWidth variant="outlined" placeholder="First Name" sx={{ mb: "10px" }} InputProps={{ startAdornment: (<InputAdornment position="start"><Person sx={{ color: "#182775" }} /></InputAdornment>) }} />
                        <TextField fullWidth variant="outlined" placeholder="Mobile Phone" sx={{ mb: "10px" }} InputProps={{ startAdornment: (<InputAdornment position="start"><Phone sx={{ color: "#182775" }} /></InputAdornment>) }} />
                        <TextField fullWidth variant="outlined" placeholder="E-mail Address" sx={{ mb: "10px" }} InputProps={{ startAdornment: (<InputAdornment position="start"><Email sx={{ color: "#182775" }} /></InputAdornment>) }} />
                        <TextField fullWidth variant="outlined" placeholder="Number of National ID" sx={{ mb: "10px" }} InputProps={{ startAdornment: (<InputAdornment position="start"><Badge sx={{ color: "#182775" }} /></InputAdornment>) }} />
                        <TextField fullWidth variant="outlined" placeholder="Online Payment Card" sx={{ mb: "10px" }} InputProps={{ startAdornment: (<InputAdornment position="start"><CreditCard sx={{ color: "#182775" }} /></InputAdornment>) }} />
                        <Button 
                            variant="contained"  
                            fullWidth 
                            sx={{ backgroundColor: "#182775", "&:hover": { backgroundColor: "#0F1A4D" }, marginBottom: "10px", borderRadius:"6px", height:"50px" , textTransform:"none"}}
                            onClick={() => alert("Notification Sent!")}
                            >
                            Send Notification
                        </Button>

                        <Button 
                            variant="contained"  
                            fullWidth 
                            sx={{ backgroundColor: "#182775", "&:hover": { backgroundColor: "#0F1A4D" }, borderRadius:"6px", height:"50px" , textTransform:"none" }}
                            onClick={() => alert("Starting Conversation...")}
                            >
                            Talk with
                        </Button>
                    </Box>
                    )}

                </Box>
            ))}
        </Box>
    </Box>
    </div>
  );
};

export default Table;



