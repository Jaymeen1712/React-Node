// @ts-nocheck

import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import axios from "axios";

interface RowData {
  id: number;
  name: string;
  age: number;
}

const fetchData = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4042/contactForm/api/v1/getForm"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const makeColumnDefs = (data) => {
  return Object.keys(data[0]).map((val) => ({
    field: val,
  }));
};

function CustomGrid() {
  const [columnDefs, setColumnDefs] = useState(null);
  const [rowData, setRowData] = useState(null);

  const gridOptions = {
    pagination: true,
    paginationPageSize: 5,
  };

  useEffect(() => {
    const fetchAndSetData = async () => {
      try {
        const data = await fetchData();
        setRowData(data);
        const columns = makeColumnDefs(data);
        setColumnDefs(columns);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAndSetData();
  }, []);

  return (
    <>
      {rowData && columnDefs && (
        <div
          className="ag-theme-alpine"
          style={{ height: "400px", width: "100%" }}
        >
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            gridOptions={gridOptions}
          />
        </div>
      )}
    </>
  );
}

export default CustomGrid;
