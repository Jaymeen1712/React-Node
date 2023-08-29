import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Input,
} from "@mui/material";
import axios from "axios";

interface LoginFormProps {
  // You can define any props you need here
}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [masterData, setMasterData] = useState<
    | {
        id: number;
        uuid: string;
        name: string;
        note: string;
        completed: boolean | null;
        createdAt: string;
        updatedAt: string;
      }[]
    | null
    | undefined
  >(null);

  const [editMode, setEditMode] = useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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

    await axios.request(config);
    await handleGetMasterData();
  };

  const handleGetMasterData = async () => {
    const response = await axios.get(`http://localhost:4040/post/getData`);
    setMasterData(response.data);
  };

  const handleClearData = () => {
    setMasterData(null);
  };

  const handleDeleteData = async (uuid: string) => {
    await axios.delete(`http://localhost:4040/post/deleteData/${uuid}`);
    await handleGetMasterData();
  };

  const handleDataEditChange = (uuid: string, value: string, name: string) => {
    const updatedData = masterData?.map((data) => {
      if (data.uuid === uuid) {
        return { ...data, [name]: value };
      } else {
        return data;
      }
    });
    setMasterData(updatedData);
  };

  const handleEditData = async (uuid: string) => {
    const updatedData = masterData?.find((data) => data.uuid === uuid);
    const updatedObj = {
      username: updatedData?.name,
      password: updatedData?.note,
    };
    if (editMode) {
      const response = await axios.put(
        `http://localhost:4040/post/updateData/${uuid}`,
        updatedObj
      );
      console.log(response);
    }
    setEditMode(prev => !prev);
  };

  useEffect(() => {
    console.log(masterData);
  }, [masterData]);

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

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleGetMasterData}
            >
              Get all data
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleClearData}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </form>
      <Container maxWidth="xs" style={{ marginTop: "20px" }}>
        {masterData &&
          masterData.map((data) => (
            <Paper
              key={data.id}
              elevation={3}
              style={{
                padding: "10px",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Input
                  value={data.name}
                  onChange={(e) =>
                    handleDataEditChange(data.uuid, e.target.value, "name")
                  }
                  disabled={!editMode}
                />
                <Input
                  value={data.note}
                  onChange={(e) =>
                    handleDataEditChange(data.uuid, e.target.value, "note")
                  }
                  disabled={!editMode}
                />
              </div>
              <div>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDeleteData(data.uuid)}
                >
                  Delete
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleEditData(data.uuid)}
                >
                  {editMode ? "Save" : "Update"}
                </Button>
              </div>
            </Paper>
          ))}
      </Container>
    </Container>
  );
};

export default LoginForm;
