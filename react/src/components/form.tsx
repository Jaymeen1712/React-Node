import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import axios from "axios";

interface LoginFormProps {
    // You can define any props you need here
}

const LoginForm: React.FC<LoginFormProps> = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleUsernameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (username && password) {
            // You can perform login or validation logic here
            const formData = {
                username,
                password,
                completed: true,
            };

            let config = {
                method: "post",
                maxBodyLength: Infinity,
                url: "http://localhost:4040/post/createData",
                headers: {
                    "Content-type": "application/json",
                },
                data: JSON.stringify(formData),
            };

            const response = await axios.request(config);
            console.log(
                "🚀 ~ file: form.tsx:45 ~ handleSubmit ~ response:",
                response
            );
        }
    };

    return (
        <Container maxWidth="xs">
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default LoginForm;
