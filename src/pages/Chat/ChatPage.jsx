import React, { useState, useEffect } from "react";
import { Avatar, Box, TextField, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography, InputAdornment, Badge, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InfoIcon from "@mui/icons-material/Info";
import ShareIcon from "@mui/icons-material/Share";

const chatsData = [
  { id: 1, name: "Ahmed", lastMessage: "Hello! How are you?", avatar: "https://randomuser.me/api/portraits/men/1.jpg", date: "12 Mar", time: "12:30 PM", unread: 2 },
  { id: 2, name: "Sara", lastMessage: "See you later!", avatar: "https://randomuser.me/api/portraits/women/2.jpg", date: "Yesterday", time: "8:45 PM", unread: 0 },
  { id: 3, name: "Omar", lastMessage: "Let's meet tomorrow.", avatar: "https://randomuser.me/api/portraits/men/3.jpg", date: "Monday", time: "5:15 PM", unread: 5 },
];

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(chatsData[0]);
  const [chatMessages, setChatMessages] = useState({
    1: [{ text: "Hello!", sender: "me" }, { text: "How are you?", sender: "other" }],
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
    <Box display="flex" height="100vh">
      {/* قائمة المحادثات */}
      <Paper elevation={3} sx={{ width: "30%", p: 2, display: "flex", flexDirection: "column" }}>
        {/* شريط البحث */}
        <TextField
          variant="outlined"
          placeholder="Search chats..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* قائمة الدردشة */}
        <List sx={{ flex: 1, overflowY: "auto" }}>
          {filteredChats.length > 0 ? (
            filteredChats.map((chat) => (
              <ListItem
                key={chat.id}
                button
                onClick={() => handleSelectChat(chat)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: chat.unread > 0 ? "#f0f0f0" : "transparent",
                  fontWeight: chat.unread > 0 ? "bold" : "normal",
                }}
              >
                <ListItemAvatar>
                  <Avatar src={chat.avatar} />
                </ListItemAvatar>
                <ListItemText primary={chat.name} secondary={chat.lastMessage} />
                <Box sx={{ textAlign: "right", ml: 1 }}>
                  <Typography variant="body2" color="textSecondary">{chat.date}</Typography>
                  <Typography variant="caption" color="textSecondary">{chat.time}</Typography>
                </Box>
                {chat.unread > 0 && (
                  <Badge badgeContent={chat.unread} color="error" sx={{ ml: 2 }}>
                    <NotificationsIcon />
                  </Badge>
                )}
                {/* زر الذهاب للبروفايل */}
                <Button 
                  variant="contained" 
                  color="primary" 
                  endIcon={<ArrowForwardIcon />} 
                  onClick={() => alert(`فتح بروفايل ${chat.name}`)} 
                  sx={{ ml: 2 }}
                >
                  Profile
                </Button>
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
         <Box p={2} display="flex" alignItems="center" justifyContent="space-between" bgcolor="primary.main" color="white">
          <Box display="flex" alignItems="center">
            <Avatar src={selectedChat.avatar} />
            <Box ml={2}>{selectedChat.name}</Box>
          </Box>
          <Box>
            <IconButton color="inherit" onClick={() => alert("عرض التفاصيل")}> 
              <InfoIcon />
            </IconButton>
            <IconButton color="inherit" onClick={() => alert("مشاركة المحادثة")}> 
              <ShareIcon />
            </IconButton>
          </Box>
        </Box>

        {/* الرسائل */}
        <Box flex={1} overflow="auto" p={2}>
          {chatMessages[selectedChat.id]?.map((msg, index) => (
            <Box
              key={index}
              sx={{
                alignSelf: msg.sender === "me" ? "flex-end" : "flex-start",
                bgcolor: msg.sender === "me" ? "primary.light" : "grey.300",
                color: msg.sender === "me" ? "white" : "black",
                p: 1,
                borderRadius: 1,
                maxWidth: "70%",
                mb: 1,
              }}
            >
              {msg.text}
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
