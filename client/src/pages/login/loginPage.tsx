import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, FormControl } from '@mui/material';
import CustomHyperlink from '../../components/buttons/hyperlink';
import axios from '../../components/axiosWrapper';
import CustomButton from "../../components/buttons/customButton.tsx";
import '../../boards/css/loginPage.css';
import '../../boards/css/buttons.css';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { email, password });
        axios.post('/api/Users/Login', { email, password })
            .then(response => {
                console.log('Login successful:', response.data);
            })
            .catch(error => {
                console.error('Login failed:', error);
            });
    };
    return (
        <div className="loginPage">

            <div className="loginContainer" id="loginContainer">

                <div className="loginPage_topDiv">
                    <h1 className="loginPage_title">Welcome back!</h1>
                </div>

                <div className="loginPage_loginDiv">
                    <TextField 
                        variant='outlined'
                        label="Email"
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderWidth: '4px',
                                    borderColor: '#FFF8E8', // Default border color
                                },
                                '&:hover fieldset': {
                                    borderWidth: '3px',
                                    borderColor: '#FFF8E8', // Border color on hover
                                },
                                '&.Mui-focused fieldset': {
                                    borderWidth: '3px',
                                    borderColor: '#1976d2', // Border color when focused
                                },
                        
                                width: '100%',
                            },
                        }}
                    />
                    <TextField 
                        label="Password"
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        type="password"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderWidth: '4px',
                                    borderColor: '#FFF8E8', // Default border color
                                },
                                '&:hover fieldset': {
                                    borderWidth: '3px',
                                    borderColor: '#FFF8E8', // Border color on hover
                                },
                                '&.Mui-focused fieldset': {
                                    borderWidth: '3px',
                                    borderColor: '#1976d2', // Border color when focused
                                },
                        
                                width: '100%',
                            },
                        }}
                    />
                    <CustomButton label="Login" className="loginButton" id="loginPage_loginButton" onClick={() => {
                        if (!email || !password) {
                            if (!email) {
                                alert('Please fill in the email.');
                            } else if (!password) {
                                alert('Please fill in the password.');
                            }
                        } else {
                            handleSubmit(new Event('submit') as unknown as React.FormEvent);
                        }
                    }}/>
                </div>

                <div className="loginPage_bottomDiv">
                    <h1 className="loginPage_noAccountText">Don't have an account?</h1>

                    <div className="loginPage_links">
                        <CustomHyperlink href="/register" label="Register " className="hyperlink" onClick={() => navigate("/register")} />
                        <span className="smallText"> or </span>
                        <CustomHyperlink href="/guest" label=" continue as guest" className="hyperlink" onClick={() => navigate("/home")} />
                    </div>

                {/* <CustomButton label="Return" className="loginPage_returnButton" onClick={() => handlePageChange("selectionPage")}/> */}
                </div>

            </div>

        </div>

        // <Container maxWidth="sm" className="shadow-lg bg-grey p-10" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        //     <Box>
        //     <Box mb={10}>
        //         <Typography variant="h3" className="text-center mb-6">Login</Typography>
        //     </Box>
        //     <Box component="form" onSubmit={handleSubmit} className="space-y-4">
        //         <TextField
        //         fullWidth
        //         label="Email"
        //         type="email"
        //         variant="outlined"
        //         value={email}
        //         onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        //         required
        //         />
        //         <TextField
        //         fullWidth
        //         label="Password"
        //         type="password"
        //         variant="outlined"
        //         value={password}
        //         onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        //         required
        //         />
        //         <Button 
        //             type="submit" 
        //             variant="contained" 
        //             color="primary" 
        //             fullWidth
        //             onClick={() => {
        //                 if (!email || !password) {
        //                     if (!email) {
        //                         //alert('Please fill in the email.');
        //                     } else if (!password) {
        //                         //alert('Please fill in the password.');
        //                     }
        //                 } else {
        //                     handleSubmit(new Event('submit') as unknown as React.FormEvent);
        //                 }
        //             }}
        //         >
        //             Login
        //         </Button>
        //     </Box>
        //         <Box mt={4} className="text-center">
        //             <Typography variant="body1">
        //                 <Button color="secondary" onClick={() => navigate("/")}>
        //                     Continue as Guest
        //                 </Button>
        //             </Typography>
        //             <Typography variant="body1">
        //                 Don't have an account? <Button color="secondary" onClick={() => navigate("/register")}>Sign up</Button>
        //             </Typography>
        //         </Box>
        //     </Box>
        // </Container>
    );
};
export default LoginPage;

