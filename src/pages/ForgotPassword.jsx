import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[email]) {
      setMessage("A password reset link has been sent to your email.");
      // هنا يمكنك تنفيذ إرسال بريد إلكتروني فعلي إذا كان لديك API
    } else {
      setMessage("Email not found. Please check and try again.");
    }
  };

  return (
    <Box height="100vh" display="flex" justifyContent="center" alignItems="center" bgcolor="#f4f4f4">
      <Paper elevation={3} sx={{ padding: 3, width: "90%", maxWidth: 500, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
          Reset Your Password
        </Typography>

        <form onSubmit={handleResetPassword}>
          <TextField
            label="Enter your email"
            type="email"
            variant="outlined"
            fullWidth
            margin="dense"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Button variant="contained" fullWidth type="submit" sx={{ mt: 2, backgroundColor: "#182775" }}>
            Reset Password
          </Button>
        </form>

        {message && (
          <Typography textAlign="center" mt={2} color="green">
            {message}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default ForgotPassword;