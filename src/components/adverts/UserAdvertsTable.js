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
  makeStyles,
} from "@material-ui/core";
import { Add, Close, EditOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: 0,
  },
}));

const UserAdvertsTable = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userAdvertList = useSelector((state) => state.userAdvertList);
  const { adverts, loading, error } = userAdvertList;

  useEffect(() => {
    dispatch(listUserAdverts());
  }, []);

  return (
    <Paper className={classes.root}>
      {loading ? (
        <span>Loading</span>
      ) : (
        <>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h5">My adverts</Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Add />}
              size="large"
            >
              Create
            </Button>
          </Toolbar>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {adverts.map((advert) => (
                  <TableRow>
                    <TableCell>{advert.name}</TableCell>
                    <TableCell align="right">
                      <Button>
                        <EditOutlined fontSize="small" />
                      </Button>
                      <Button>
                        <Close fontSize="small" />
                      </Button>
                    </TableCell>
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
