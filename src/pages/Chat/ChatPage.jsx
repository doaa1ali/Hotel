import React, { useReducer, useEffect } from "react";
import {
  Avatar, Box, TextField, IconButton, List, ListItem,
  ListItemAvatar, ListItemText, Paper, Typography,
  InputAdornment, Badge, Button
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import MicIcon from "@mui/icons-material/Mic";


const initialState = {
  selectedChat: null,
  chatMessages: {},
  newMessage: "",
  searchTerm: "",
  unreadChats: [],
  newMessageAlert: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_CHATS":
      return { ...state, unreadChats: action.payload, selectedChat: action.payload[0] };
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };
    case "SELECT_CHAT":
      return { ...state, selectedChat: action.payload, unreadChats: state.unreadChats.map(c => c.id === action.payload.id ? { ...c, unread: 0 } : c) };
    case "SEND_MESSAGE":
      return {
        ...state,
        chatMessages: {
          ...state.chatMessages,
          [state.selectedChat.id]: [...(state.chatMessages[state.selectedChat.id] || []), { text: state.newMessage, sender: "me" }]
        },
        newMessage: ""
      };
    case "SET_NEW_MESSAGE":
      return { ...state, newMessage: action.payload };
    default:
      return state;
  }
}

const Chat = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const chatsData = [
      { id: 1, name: "Ahmed", title: "Apartment Name | Unit Name", lastMessage: "Sampel with client text here.....", avatar: "https://randomuser.me/api/portraits/men/1.jpg", date: "12 Mar", time: "12:30 PM", unreadCount: 2 },
      { id: 2, name: "Sara", title: "Apartment Name | Unit Name", lastMessage: "Sampel with client text here.....", avatar: "https://randomuser.me/api/portraits/women/2.jpg", date: "Yesterday", time: "8:45 PM", unreadCount: 0 },
      { id: 3, name: "Omar", title: "Apartment Name | Unit Name", lastMessage: "Sampel with client text here.....", avatar: "https://randomuser.me/api/portraits/men/3.jpg", date: "Monday", time: "5:15 PM", unreadCount: 5 }
    ];
    dispatch({ type: "SET_CHATS", payload: chatsData });
  }, []);

  const handleSendMessage = () => {
    if (state.newMessage.trim() === "") return;
    dispatch({ type: "SEND_MESSAGE" });
  };

  return (
    <Box display="flex" height="100%" sx={{ gap: 1, }}>
      <Paper sx={{ width: "460px", p: 2, display: "flex", flexDirection: "column", borderRadius: "8px", height: "100%", border: "1px solid #ddd" }}>
        <TextField
          variant="outlined"
          placeholder="Search chats..."
          value={state.searchTerm}
          onChange={(e) => dispatch({ type: "SET_SEARCH_TERM", payload: e.target.value })}
          sx={{ mb: 2 }}
          InputProps={{ 
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#182775" }} /> {/* 🔍 أيقونة زرقاء */}
              </InputAdornment>
            ) 
          }}
        />
          <List sx={{ flex: 1, overflowY: "auto", height: "100%", width: "430px" }}>
            {state.unreadChats
              .filter(chat => chat.name.toLowerCase().includes(state.searchTerm.toLowerCase()))
              .map(chat => (
                <ListItem key={chat.id} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1, p: 2, gap: 1, borderRadius: "8px", backgroundColor:"#F6F8FA", position: "relative" }}>

                  <ListItemAvatar sx={{ position: "relative" }}>
                    <Avatar src={chat.avatar} sx={{ width: "54px", height: "54px" }} />
                    <Box sx={{
                      position: "absolute",
                      bottom: 2,
                      right: 2,
                      width: "14px",
                      height: "14px",
                      bgcolor: "green",
                      borderRadius: "50%",
                      border: "2px solid white"
                    }} />
                  </ListItemAvatar>

                  <ListItemText
                    primary={
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography sx={{ fontWeight: "bold" }}>{chat.name}</Typography>
                        {/* 🟢 دائرة بعدد الرسائل غير المقروءة */}
                        <Box sx={{
                          width: "20px",
                          height: "20px",
                          bgcolor: "green",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          fontSize: "12px",
                          fontWeight: "bold"
                        }}>
                          {chat.unreadCount}
                        </Box>
                      </Box>
                    }
                    secondary={
                      <>
                        <Typography variant="body2" color="textPrimary">{chat.title}</Typography>
                        <Typography variant="body2" sx={{ color: "green" }}>{chat.lastMessage}</Typography>
                      </>
                    }
                  />

                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography variant="body2" color="textSecondary">{chat.date} | {chat.time}</Typography>
                    <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={{ mt: 1, backgroundColor: "#182775", color: "white", textTransform: "none" }}>Profile</Button>
                  </Box>

                </ListItem>
              ))}
          </List>
        </Paper>

      <Box flex={1} display="flex" flexDirection="column" p={2} component={Paper}  sx={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          height: "100%",
        }}>
        <Box p={2} display="flex" alignItems="center" justifyContent="space-between" sx={{ backgroundColor: "#F6F8FA" }}>
          <Box display="flex" alignItems="center" sx={{ gap: 2 }}>
            <Avatar src={state.selectedChat?.avatar} sx={{ width: 56, height: 56 }} />
            <Box>
              <Typography variant="body1" fontWeight="bold">{state.selectedChat?.name}</Typography>
              <Typography variant="body2" color="textSecondary">last seen today</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton 
                sx={{ 
                  backgroundColor: "white", 
                  borderRadius: "50%", 
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)" 
                }}
              >
                <AttachFileIcon />
              </IconButton>
              <IconButton 
                sx={{ 
                  backgroundColor: "white", 
                  borderRadius: "50%", 
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)" 
                }}
              >
                <MoreVertIcon />
              </IconButton>
          </Box>

        </Box>
        <Box flex={1} overflow="auto" p={2}>
          <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
            <Avatar src={state.selectedChat?.avatar} sx={{ width: 40, height: 40, mr: 1 }} />
          
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Box sx={{ 
                bgcolor: "#182775", 
                color: "white", 
                p: 1, 
                borderRadius: "10px", 
                width: "480px"
              }}>
                Hello! Finally found the time to write to you. I need your help in creating interactive animations for my mobile application.
              </Box>

              <Box sx={{ 
                bgcolor: "#182775", 
                color: "white", 
                p: 1.5, 
                borderRadius: "10px", 
                width: "180px"
              }}>
                Can I send you files?

              </Box>
              <Typography variant="caption" sx={{ color: "gray", textAlign: "left", mt: "2px" }}>
                10:45 PM
              </Typography>
            </Box>
         </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1, flexDirection: "column", alignItems: "flex-end" }}>
            <Box sx={{ 
              bgcolor: "white", 
              color: "#182775",  
              border: "2px solid #182775", 
              p: 1, 
              borderRadius: "10px", 
              maxWidth: "70%", 
              display: "flex", 
              alignItems: "center", 
              gap: "5px"
            }}>
              Hey! Okay, send out.
              <DoneAllIcon sx={{ fontSize: "16px", color: "#182775" }} /> 
            </Box>

            <Typography variant="caption" sx={{ color: "gray", textAlign: "right", mt: "2px" }}>
              12:45 PM
            </Typography>
          </Box>

        </Box>



        <Box display="flex" p={2} borderTop="1px solid #ccc">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type a message..."
            value={state.newMessage}
            onChange={(e) => dispatch({ type: "SET_NEW_MESSAGE", payload: e.target.value })}
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
          <IconButton color="primary" onClick={handleSendMessage}>
            <SendIcon />
          </IconButton>
        </Box>

      </Box>
    </Box>
  );
};
export default Chat;
