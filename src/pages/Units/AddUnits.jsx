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

    const [files, setFiles] = useState([]); // لتخزين الصور المرفوعة
    const [uploadedImage, setUploadedImage] = useState(null); // الصورة الخاصة بحقل الرفع
    const [isUploadReplaced, setIsUploadReplaced] = useState(false); // استبدال حقل الرفع

    // عند رفع صورة من المستخدم
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);

            if (files.length === 4) { 
                setUploadedImage(imageUrl);
                setIsUploadReplaced(true);
            } else {
                setFiles([...files, file]);
            }
        }
    };


    // دالة السحب والإفلات
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        multiple: true,
        maxFiles: 5,
        onDrop: (acceptedFiles) => {
            const remainingSlots = 4 - files.length;
            if (remainingSlots > 0) {
                const newFiles = acceptedFiles.slice(0, remainingSlots);
                setFiles((prevFiles) => [...prevFiles, ...newFiles]);
            } else if (!isUploadReplaced && acceptedFiles.length > 0) {
                setUploadedImage(URL.createObjectURL(acceptedFiles[0]));
                setIsUploadReplaced(true);
            }
        },
    });
      

    const navigate = useNavigate();

  return (
    <div style={{ padding: "16px" }}>
      {/* العنوان والوصف */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
        <Typography variant="h4" sx={{ fontFamily: "Poppins", fontWeight: "500", fontSize: "32px", color:"#333333"  }}>
          Add - Units
        </Typography>
        <Typography variant="body1" sx={{ color: "#5C5C5C",fontFamily: "Poppins", fontWeight: "200", fontSize: "20px", }}>
          Fill in the data to add an apartment.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: "40px", }}>
        <Box sx={{ flex: 2,  borderRadius: "8px", backgroundColor: "#fff", width:"792px", }}>
          
          {/* الحقول */}
            <Box sx={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
                <Box sx={{ flex: 1 , height: "50px"}}>
                <Typography variant="subtitle1">Apartment</Typography>
                <TextField fullWidth variant="outlined" />
                </Box>
                <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1">Building</Typography>
                <TextField fullWidth variant="outlined" />
                </Box>
            </Box>

            <Box sx={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1">Area</Typography>
                    <TextField fullWidth variant="outlined" />
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
                    
                    {/* صندوق الرفع أو الصورة الخامسة */}
                    {!isUploadReplaced ? (
                        <Box
                            sx={{
                                width: "500px",
                                height: "200px",
                                border: "none",
                                borderRadius: "8px",
                                backgroundColor: "#F6F8FA",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                flexShrink: 0,
                                cursor: "pointer"
                            }}
                            onClick={() => document.getElementById("fileInput").click()}
                        >
                            <input 
                                type="file" 
                                id="fileInput" 
                                accept="image/*" 
                                style={{ display: "none" }} 
                                onChange={handleImageUpload} 
                            />
                            <ImageIcon sx={{ fontSize: 40, color: "#182775" }} />
                            <Typography sx={{ fontWeight: "bold", color: "#182775" }}>
                                Upload Image
                            </Typography>
                            <Typography variant="caption">Click to upload</Typography>
                        </Box>
                    ) : (
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
                                src={uploadedImage}
                                alt="Uploaded"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </Box>
                    )}

                    {/* عرض الصور المرفوعة */}
                    <Grid container spacing={2} sx={{ width: "270px", flexWrap: "wrap" }}>
                        {files.map((file, index) => (
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
                                        backgroundColor: "#F6F8FA",
                                    }}
                                >
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt="uploaded"
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                </Box>
                            </Grid>
                        ))}

                        {/* زر إضافة صورة جديدة */}
                        {[...Array(4 - files.length)].map((_, index) => (
                            <Grid item xs={6} key={index}>
                                <Box
                                    onClick={() => document.querySelector("input[type='file']").click()}
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
                                    }}
                                >
                                    <AddIcon sx={{ fontSize: 30, color: "#182775" }} />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>



                {/* خط فاصل */}
                <Divider sx={{ marginY: "16px" }} />

                {/* الأزرار */}
                <Box sx={{ display: "flex", justifyContent: "flex-start", gap: "16px" }}>
                    <Button 
                        variant="contained" 
                        sx={{ backgroundColor: "#182775", "&:hover": { backgroundColor: "#121E5B" }, textTransform: "none" }}
                    >
                        Add
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

        </Box>

        {/* قائمة العملاء */}
        <Box sx={{ flex: 1, padding: "20px", backgroundColor: "#fff", borderRadius: "11px", width: "350px" }}>
          {[image1, image2, image3, image4, image5, image6 ].map((image, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "20px",
                borderRadius: "5px",
                width: "100%",
                color: "#00CB22",
                height: "105px",
                backgroundColor: "#F6F8FA",
                fontWeight: "bold",
                gap: "12px",
                marginBottom: "15px",
              }}
            >
              <Avatar alt={`image${index + 1}`} src={image} sx={{ width: 73, height: 73, border: "none" }} />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h6" sx={{ fontFamily: "Poppins", fontWeight: "500", color:"#182775" }}>
                        Client Name
                    </Typography>
                    <Box sx={{
                        color: "#666",
                            fontSize: "14px", lineHeight: "0.2", fontWeight: "275" }}>
                        <p>Unit Number: 023</p>
                        <p>Rent Type: Monthly</p>
                    </Box>
                </Box>
            </Box>
          ))}
        </Box>
    </Box>
    </div>
  );
};

export default Table;
