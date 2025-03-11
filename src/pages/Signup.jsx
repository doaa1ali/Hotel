import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  IconButton,
  InputAdornment,
  Grid,
  Avatar,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import loginImage from "../assets/images/Login_image.png";
import logo from "../assets/images/logo.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    let users = {};
    try {
      users = JSON.parse(localStorage.getItem("users")) || {};
    } catch (error) {
      console.error("Error parsing users data:", error);
    }

    if (users[email]) {
      alert("This email is already registered. Please log in.");
      navigate("/");
    } else {
      users[email] = { email, password };
      localStorage.setItem("users", JSON.stringify(users));
      alert("Account created successfully! Please log in.");
      navigate("/");
    }
  };

  return (
    <Box height="100vh" display="flex" justifyContent="center" alignItems="center" bgcolor="#f4f4f4" p={4}>
      <Paper elevation={3} sx={{ padding: 3, width: "90%", maxWidth: 1100, borderRadius: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" justifyContent="flex-start" mb={1} mt={-14}>
              <img src={logo} alt="Group Icon" style={{ width: "130px", height: "60px", objectFit: "contain" }} />
            </Box>
            <Typography variant="h5" fontWeight="bold" color="#333" textAlign="center" mb={1}>
              Create an Account
            </Typography>
            <Typography fontSize="1rem" color="#4D4D4D" textAlign="center" mb={3}>
              Sign up for Royal Hostel Management System
            </Typography>

            <form onSubmit={handleSignUp}>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="dense"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                margin="dense"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Confirm Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                margin="dense"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button variant="contained" fullWidth type="submit" sx={{ backgroundColor: "#182775", py: 1.2, mt: 2 }}>
                Sign Up
              </Button>
            </form>

            <Typography mt={2} align="center">
              Already have an account? <Link to="/">Login</Link>
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <img
              src={loginImage}
              alt="Login Illust ration"
              style={{width:"100%",maxWidth: "600px", borderRadius: "10px" , height:"600px" , paddingLeft:" 20px"}}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Signup;