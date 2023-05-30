import { useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

const TodoTable = ({ todos }) => {
  const [columnDefs] = useState([
    { field: "description", sortable: true, suppressMovable: true },
    { field: "date", sortable: true, suppressMovable: true },
    { field: "status", sortable: true, suppressMovable: true },
  ]);
  return (
    <div
      className="ag-theme-material"
      style={{
        height: 400,
        width: 600,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <AgGridReact
        rowData={todos}
        columnDefs={columnDefs}
        animateRows={true}
      ></AgGridReact>
    </div>
  );
};

export default TodoTable;
