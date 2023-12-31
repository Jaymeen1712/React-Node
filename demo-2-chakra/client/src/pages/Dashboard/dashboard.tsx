import React from "react";
import ContactForm from "../../components/form";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate("table")}>Table</Button>
      <ContactForm />
    </div>
  );
};

export default Dashboard;
