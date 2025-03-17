import React, { useReducer, useRef, useState } from "react";
import { HelpOutline, People, IosShare, Build, SupportAgent, AttachFile as AttachFileIcon, InsertPhoto as InsertPhotoIcon, 
    Mic as MicIcon, Send as SendIcon , CheckCircle, HourglassEmpty, AccessTime } from "@mui/icons-material";
import { Avatar, Box, Button, Divider, IconButton, InputAdornment, Paper, TextField, Typography, LinearProgress } from "@mui/material";
import imageicon1 from "../../assets/images/image1.png";
import imageicon2 from "../../assets/images/image2.png";


const initialState = {
  newMessage: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NEW_MESSAGE":
      return { ...state, newMessage: action.payload };
    default:
      return state;
  }
};

const User = ({ src, currentStep }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
  
    const togglePlayPause = () => {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };
  
    const handleTimeUpdate = () => {
      if (audioRef.current) {
        const { currentTime, duration } = audioRef.current;
        setCurrentTime(currentTime);
        setDuration(duration);
        setProgress((currentTime / duration) * 100);
      }
    };

    const steps = [
        { label: "Pending", icon: <AccessTime sx={{ fontSize: "30px" }} />, id: 1 },
        { label: "Active", icon: <HourglassEmpty sx={{ fontSize: "30px" }} />, id: 2 },
        { label: "Done", icon: <CheckCircle sx={{ fontSize: "30px" }} />, id: 3 },
      ];
      

  return (
    <div style={{ padding: "16px" }}>
        <Box sx={{ display: "flex", gap: "40px", marginBottom: "30px" }}>
            <Box sx={{ borderRadius: "10px", border: "1px solid #ddd", backgroundColor: "#fff", width: "450px", padding: "20px" , height: "430px"}}>
                <Typography variant="h4" sx={{ fontFamily: "Poppins", fontWeight: "500", width: "100%", color: "#333333", fontSize: "32px" }}>
                    Help Request
                </Typography>
                <Divider sx={{ marginY: "16px" }} />

                <Box sx={{ backgroundColor: "#FFFFFF", borderRadius: "8px", width: "380px", p: 2 }}>
                
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: "15px", textAlign: "left", backgroundColor: "#F6F8FA", height: "60px", width: "380px", borderRadius: "6px", padding: "10px" }}>
                        <HelpOutline sx={{ color: "#182775" }} />
                        <Typography sx={{ fontSize: "14px", color: "#333" }}>Cleanliness</Typography>
                    </Box>

                    
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: "15px", textAlign: "left", backgroundColor: "#F6F8FA", height: "60px", width: "380px", borderRadius: "6px", padding: "10px" }}>
                        <Build sx={{ color: "#182775" }} />
                        <Typography sx={{ fontSize: "14px", color: "#333" }}>Maintenance</Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: "8px", textAlign: "left", backgroundColor: "#F6F8FA", height: "60px", width: "380px", borderRadius: "6px", padding: "10px" }}>
                        <SupportAgent sx={{ color: "#182775" }} />
                        <Typography sx={{ fontSize: "14px", color: "#333" }}>Fast Support</Typography>
                    </Box>

                    <Button variant="contained" sx={{ width: "380px", backgroundColor: "#182775", color: "white", textTransform: "none", borderRadius: "6px" }}>
                    Send
                    </Button>
                </Box>
            </Box>

            <Box flex={1} display="flex" flexDirection="column" p={2} component={Paper} sx={{ border: "1px solid #ddd", borderRadius: "8px", height: "100%" , gap:"12px"}} >

                 <Box display="flex" alignItems="center" justifyContent="center" gap={2} sx={{width: "550", height: "115px", padding: "10px" }}>
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                onClick={() => setActiveStep(step.id)} sx={{ cursor: "pointer" }}
                            >
                                <Box
                                sx={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor:  "#182775" ,
                                    color: "#fff",
                                    border: " 2px solid  #182775" ,
                                    transition: "all 0.3s ease-in-out",
                                }}
                                >
                                {step.icon}
                                </Box>

                            <Typography
                            sx={{
                                marginTop: "8px",
                                fontSize: "16px",
                                fontWeight: "500",
                                color: "#182775" ,
                                textAlign: "center",
                            }}
                            >
                            {step.label}
                            </Typography>
                        </Box>

                        {index < steps.length - 1 && (
                            <Box
                            sx={{
                                width: 50,
                                height: 2,
                                borderBottom: "2px dashed #182775",
                                alignSelf: "center",
                            }}
                            />
                        )}
                        </React.Fragment>
                    ))}
                </Box>




                <Box flex={1} overflow="auto" p={2} sx={{ backgroundColor: "#F7F7FD", borderRadius: "8px" }}>
    
                    
                    <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>

                        <Avatar src={imageicon2} sx={{ width: 60, height: 60, mr: 1 }} />

                        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px", width: "360px" }}>
                            
                            <Typography sx={{ fontSize: "16px", fontWeight: "400", color: "#333333" }}>
                                Client Work
                            </Typography>

                            <Box sx={{ bgcolor: "#FFFFFF", color: "#5C5C5C", p: 1, borderRadius: "10px", maxWidth: "410px", fontSize: "16px" }}>
                                The problem has been solved. Have a nice day
                            </Box>

                            <Typography variant="caption" sx={{ color: "#182775", textAlign: "right", maxWidth: "410px", fontSize: "14px" }}>
                                10:45 PM | 12 March 2025
                            </Typography>

                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2, justifyContent: "flex-end" }}>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px", width: "360px", alignSelf: "flex-end", textAlign: "right" }}>

                            <Typography sx={{ fontSize: "16px", fontWeight: "400", color: "#333333", alignSelf: "flex-end" }}>
                                Name Client
                            </Typography>

                            <Box sx={{ bgcolor: "#FFFFFF", color: "#5C5C5C", p: 1, borderRadius: "10px", maxWidth: "410px", fontSize: "16px", textAlign: "left" ,alignSelf: "flex-end" }}>
                                Thank you very much
                            </Box>

                            <Typography variant="caption" sx={{ color: "#182775", textAlign: "left", maxWidth: "410px", fontSize: "14px" , alignSelf: "flex-end" }}>
                                10:45 PM | 12 March 2025
                            </Typography>

                        </Box>

                        <Avatar src={imageicon1} sx={{ width: 60, height: 60, ml: 1 }} />

                    </Box>



                    <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2, justifyContent: "flex-end" }}>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px", width: "500px", alignSelf: "flex-end", textAlign: "right" }}>

                            <Typography sx={{ fontSize: "16px", fontWeight: "400", color: "#333333", alignSelf: "flex-end" }}>
                                Name Client
                            </Typography>

                            <Box sx={{ bgcolor: "#FFFFFF", color: "#5C5C5C", p: 1, borderRadius: "10px", maxWidth: "500px", fontSize: "16px", textAlign: "left" ,alignSelf: "flex-end" }}>
                            "Thank you to the support team for resolving my issue quickly 
                            and efficiently. Excellent service and professional handling! Highly recommended."
                            </Box>

                            <Typography variant="caption" sx={{ color: "#182775", textAlign: "left", maxWidth: "500px", fontSize: "14px"  }}>
                                10:45 PM | 12 March 2025
                            </Typography>

                        </Box>

                        <Avatar src={imageicon1} sx={{ width: 60, height: 60, ml: 1 }} />

                    </Box>

                </Box>


               

                <Box sx={{ display: "flex", gap: "16px", mt: 2 }}>
                    <Box
                        p={2}
                        sx={{
                        backgroundColor: "#F7F7FD",
                        borderRadius: "15px",
                        width: "570px",
                        height: "60px",
                        display: "flex",
                        alignItems: "center" ,
                        justifyContent:"center",
                        padding: "5px"
                        
                        }}
                    >
                        <TextField
                            sx={{
                                border: "none",
                                height: "100%",
                                width: "100%",
                                "& .MuiOutlinedInput-root": {
                                "& fieldset": { border: "none" }, 
                                "&:hover fieldset": { border: "none" },
                                "&.Mui-focused fieldset": { border: "none" },
                                },
                            }}
                            variant="outlined" 
                            placeholder="Type a message..."
                            onChange={(e) => setMessage(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton sx={{ color: "#182775" }}>
                                    <AttachFileIcon />
                                    </IconButton>
                                    <IconButton sx={{ color: "#182775" }}>
                                    <InsertPhotoIcon />
                                    </IconButton>
                                    <IconButton sx={{ color: "#182775" }}>
                                    <MicIcon />
                                    </IconButton>
                                </InputAdornment>
                                ),
                            }}
                            />

                    </Box>

                    <Box 
                        display="flex" 
                        alignItems="center" 
                        justifyContent="center" 
                        sx={{ backgroundColor: "#F7F7FD", borderRadius: "50%", width: "60px", height: "60px" }}
                    >
                        <IconButton 
                            sx={{ color: "#182775" }}
                        >
                            <SendIcon />
                        </IconButton>
                    </Box>
                </Box>

            </Box>



            
        </Box>



    </div>
  );
};


export default User;
