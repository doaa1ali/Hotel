import React, { useState, useEffect } from "react";
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please enter both email and password.");
      return;
    }
    

    let users = {};
    try {
      users = JSON.parse(localStorage.getItem("users")) || {};

    } catch (error) {
      console.error("Error parsing users data:", error);
    }

    if (users[email] && users[email].password === password) {
      alert("Login successful!");
      localStorage.setItem("loggedInUser", email);
      navigate("/dashboard");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <Box height="100vh" display="flex" justifyContent="center" alignItems="center" bgcolor="#f4f4f4" p={4}>
      <Paper elevation={3} sx={{ padding: 3, width: "90%", maxWidth: 1100, borderRadius: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" justifyContent="flex-start" mb={1} mt={-10}>
              <img src={logo} alt="Group Icon" style={{ width: "130px", height: "60px", objectFit: "contain" }} />
            </Box>
            <Typography variant="h5" fontWeight="bold" color="#333" textAlign="center" mb={1}>
              Welcome Back!
            </Typography>
            <Typography fontSize="1rem" color="#4D4D4D" textAlign="center" mb={3}>
              Log in to Royal Hostel Management System
            </Typography>

            <form onSubmit={handleLogin}>
              <Typography fontWeight="bold" fontSize="1rem" mb={1}>
                Email or Username
              </Typography>
              <TextField
                label="Email or Username"
                type="text"
                variant="outlined"
                fullWidth
                margin="dense"
                value={email} // استخدام value بدلاً من defaultValue
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Typography fontWeight="bold" fontSize="1rem" mt={2} mb={1}>
                Password
              </Typography>
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
                        <IconButton
                          onClick={() => setShowPassword((prev) => !prev)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />


              <Box textAlign="right" mt={1} mb={2}>
                <Link to="/forgot-password" style={{ textDecoration: "none", color: "#182775", fontSize: "0.9rem" }}>
                  Forgot Password?
                </Link>
              </Box>

              <Button variant="contained" fullWidth type="submit" sx={{ backgroundColor: "#182775", py: 1.2 }}>
                Login
              </Button>
            </form>

            <Typography mt={2} align="center">
              Don't have an account? <Link to="/signup">Register Now</Link>
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

export default Login;