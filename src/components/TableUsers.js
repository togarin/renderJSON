import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Snackbar,
} from "@material-ui/core";
import User from "./User";
import { catchMessages } from "../services/utils";
import axios from "axios";

const TableUsers = () => {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const apiUrl = "http://localhost:3001/users";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await axios(apiUrl);
        setUsers(result.data);
      } catch (error) {
        catchMessages(error, setErrorMessage);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Имя</TableCell>
              <TableCell align="left">Телефон</TableCell>
              <TableCell align="left">Возраст</TableCell>
            </TableRow>
          </TableHead>
          <User users={users} />
        </Table>
      </TableContainer>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={errorMessage !== ""}
        autoHideDuration={1000}
        onClose={() => setErrorMessage("")}
        message={errorMessage}
      />
    </>
  );
};

export default TableUsers;
