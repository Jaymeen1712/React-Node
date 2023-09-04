import React from "react";
import CustomGrid from "../../../components/table";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <CustomGrid />
    </div>
  );
};

export default Table;
