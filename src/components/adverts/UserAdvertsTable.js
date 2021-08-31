import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUserAdverts } from "../../actions/advertActions";
import {
  Button,
  Paper,
  TableContainer,
  TableHead,
  Toolbar,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const UserAdvertsTable = () => {
  const dispatch = useDispatch();
  const userAdvertList = useSelector((state) => state.userAdvertList);
  const { adverts, loading, error } = userAdvertList;

  useEffect(() => {
    dispatch(listUserAdverts());
  }, []);

  return (
    <Paper>
      {loading ? (
        <span>Loading</span>
      ) : (
        <>
          <Toolbar>
            <Typography>My adverts</Typography>
            <Button text="Create" variant="outlined" startIcon={<AddIcon />} />
          </Toolbar>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {adverts.map((advert) => (
                  <TableRow>
                    <TableCell>{advert.name}</TableCell>
                    <TableCell>{advert.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Paper>
  );
};

export default UserAdvertsTable;
