import React, { useState, useEffect } from "react";
import { 
  Avatar, Box, TextField, IconButton, List, ListItem, 
  ListItemAvatar, ListItemText, Paper, Typography, 
  InputAdornment, Badge, Button 
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";  
import MoreVertIcon from "@mui/icons-material/MoreVert";    
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DoneAllIcon from "@mui/icons-material/DoneAll";


const chatsData = [
  { id: 1, name: "Ahmed", lastMessage: "Apartment Name | Unit Name", avatar: "https://randomuser.me/api/portraits/men/1.jpg", date: "12 Mar", time: "12:30 PM", unread: 2 },
  { id: 2, name: "Sara", lastMessage: "Apartment Name | Unit Name", avatar: "https://randomuser.me/api/portraits/women/2.jpg", date: "Yesterday", time: "8:45 PM", unread: 0 },
  { id: 3, name: "Omar", lastMessage: "Apartment Name | Unit Name", avatar: "https://randomuser.me/api/portraits/men/3.jpg", date: "Monday", time: "5:15 PM", unread: 5 },
  { id: 1, name: "Ahmed", lastMessage: "Apartment Name | Unit Name", avatar: "https://randomuser.me/api/portraits/men/1.jpg", date: "12 Mar", time: "12:30 PM", unread: 2 },
  { id: 2, name: "Sara", lastMessage: "Apartment Name | Unit Name", avatar: "https://randomuser.me/api/portraits/women/2.jpg", date: "Yesterday", time: "8:45 PM", unread: 0 },
  { id: 3, name: "Omar", lastMessage: "Apartment Name | Unit Name", avatar: "https://randomuser.me/api/portraits/men/3.jpg", date: "Monday", time: "5:15 PM", unread: 5 },
];

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(chatsData[0]);
  const [chatMessages, setChatMessages] = useState({
    1: [{ text: "Hello!", sender: "me" }, { text: "Hello! Finally found the time to write to you I need your help in creating interactive animations for my mobile application.", sender: "other" }],
    2: [{ text: "Hey there!", sender: "me" }, { text: "See you later!", sender: "other" }],
    3: [{ text: "Let's meet tomorrow.", sender: "me" }],
  });
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [unreadChats, setUnreadChats] = useState(chatsData);
  const [newMessageAlert, setNewMessageAlert] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomChat = Math.floor(Math.random() * unreadChats.length);
      let updatedChats = [...unreadChats];
      updatedChats[randomChat].unread += 1;
      updatedChats[randomChat].lastMessage = "New message received!";
      setUnreadChats(updatedChats);
      setNewMessageAlert(true);
    }, 10000);

    return () => clearInterval(interval);
  }, [unreadChats]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    setChatMessages((prevMessages) => ({
      ...prevMessages,
      [selectedChat.id]: [...(prevMessages[selectedChat.id] || []), { text: newMessage, sender: "me" }]
    }));

    setNewMessage("");
  };

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
    let updatedChats = unreadChats.map(c =>
      c.id === chat.id ? { ...c, unread: 0 } : c
    );
    setUnreadChats(updatedChats);
  };

  const filteredChats = unreadChats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box display="flex" height="100%" sx={{ gap: 2 }}>
      {/* قائمة المحادثات */}
      <Paper elevation={3} sx={{ width: "450px", p: 2, display: "flex", flexDirection: "column", border: "1px solid #ccc" , borderRadius: "8px",height:"100%", }}>
        {/* شريط البحث */}
        <TextField
          variant="outlined"
          placeholder="Search chats..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 2 , }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* قائمة الدردشة */}
        <List sx={{ flex: 1, overflowY: "none", height:"100%" }}>
            {filteredChats.length > 0 ? (
              filteredChats.map((chat) => (
                <ListItem
                  key={chat.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: chat.unread > 0 ? "#F6F8FA" : "transparent",
                    fontWeight: chat.unread > 0 ? "bold" : "normal",
                    marginBottom: 1,
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    position: "relative",
                    
                  }}
                >
              {/* الصورة مع علامة "نشط الآن" */}
              <ListItemAvatar sx={{ position: "relative" }}>
                <Avatar src={chat.avatar} sx={{ width: "54px", height: "54px" }} />

                {/* الدائرة الخضراء لعلامة "نشط الآن" */}
                <Box
                  sx={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: "#00AB1D",
                    borderRadius: "50%",
                    position: "absolute",
                    bottom: "3px",
                    right: "3px",
                    border: "2px solid white",

                  }}
                />
              </ListItemAvatar>

              {/* الاسم + الرسائل مع الدائرة الصغيرة بجوار الاسم */}
              <ListItemText
                primary={
                  <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <Typography sx={{ fontWeight: "bold", marginRight:"8px" }}>{chat.name}</Typography>

                    <Badge
                      badgeContent={5}
                      color="success"
                      sx={{
                        "& .MuiBadge-badge": {
                          minWidth: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          fontSize: "10px",
                          fontWeight: "bold",
                          padding: "5px"
                        }
                      }}
                    />
                  </Box>
                }
                secondary={
                  <>
                    <Typography variant="body2" color="textSecondary">
                      {chat.lastMessage}
                    </Typography>
                    <Typography variant="body2" color="#00AB1D">
                      Sample with client text here.....
                    </Typography>
                  </>
                }
                sx={{ flex: 1, ml: 2 }}
              />

              {/* التاريخ والوقت فوق الزر */}
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="body2" color="textSecondary">
                  {chat.date} | {chat.time}
                </Typography>

                {/* زر الذهاب للبروفايل */}
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => alert(`فتح بروفايل ${chat.name}`)}
                  sx={{ textTransform: "none", backgroundColor: "#182775", color: "white", mt: 1 }}
                >
                  Profile
                </Button>
              </Box>
            </ListItem>
          ))
        ) : (
          <Typography color="textSecondary" sx={{ textAlign: "center", mt: 2 }}>
            No chats found
          </Typography>
        )}
        </List>


      </Paper>

      {/* منطقة الدردشة */}
      <Box flex={1} display="flex" flexDirection="column" p={2} component={Paper} elevation={3}>
         <Box p={2} display="flex" alignItems="center" justifyContent="space-between" sx={{ backgroundColor:"#F6F8FA", color:"#333333"}}>
         <Box display="flex" alignItems="center" sx={{ gap: 2 }}>
          {/* الصورة مع علامة "نشط الآن" */}
          <Box sx={{ position: "relative" }}>
            <Avatar src={selectedChat.avatar} sx={{ width: 56, height: 56 }} />

            {/* الدائرة الخضراء لعلامة "نشط الآن" */}
            <Box
              sx={{
                width: 12,
                height: 12,
                backgroundColor: "#00AB1D",
                borderRadius: "50%",
                position: "absolute",
                bottom: 3,
                right: 3,
                border: "2px solid white",
              }}
            />
          </Box>

          <Box>
            <Typography variant="body1" fontWeight="bold">{selectedChat.name}</Typography>
            <Typography variant="body2" color="textSecondary">last seen today at 1:00 PM</Typography>
          </Box>
        </Box>

        <Box>
 
          <IconButton color="inherit" onClick={() => alert("إرفاق ملف")}>
            <AttachFileIcon />
          </IconButton>

    
          <IconButton color="inherit" onClick={() => alert("فتح القائمة")}>
            <MoreVertIcon />
          </IconButton>
        </Box>

        </Box>

        {/* الرسائل */}
        <Box flex={1} overflow="auto" p={2}>
          {chatMessages[selectedChat.id]?.map((msg, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: msg.sender === "me" ? "flex-end" : "flex-start",
                mb: 1,
              }}
            >
              {/* صورة المستلم (في الرسائل المستلمة فقط) */}
              {msg.sender !== "me" && (
                <Avatar src={selectedChat.avatar} sx={{ width: 36, height: 36, mr: 1 }} />
              )}

              {/* محتوى الرسالة */}
              <Box
                sx={{
                  bgcolor: msg.sender === "me" ? "#DCF8C6" : "#FFF",
                  color: "black",
                  p: 1,
                  borderRadius: "10px",
                  maxWidth: "70%",
                  position: "relative",
                }}
              >
                {msg.text}

                {msg.sender === "me" && (
                  <DoneAllIcon sx={{ fontSize: 16, color: "#34B7F1", position: "absolute", bottom: -3, right: 5 }} />
                )}
            </Box>

            {msg.sender === "me" && (
              <Avatar src={"my-avatar-url.jpg"} sx={{ width: 36, height: 36, ml: 1 }} />
            )}
            </Box>
            ))}
        </Box>

        {/* إدخال الرسائل */}
        <Box display="flex" p={2} borderTop="1px solid #ccc">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
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
