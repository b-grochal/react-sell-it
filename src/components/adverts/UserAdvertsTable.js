import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAdvert,
  listUserAdvertsAction,
} from "../../actions/advertActions";
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
  Tooltip,
} from "@material-ui/core";
import { Add, Close, EditOutlined } from "@material-ui/icons";
import { useHistory } from "react-router";
import { ADVERT_DELETE_RESET } from "../../constants/advertConstants";
import { requestConfirmation } from "../../actions/confirmationDialogActions";

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
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const userAdvertList = useSelector((state) => state.userAdvertList);
  const { adverts, loading, error } = userAdvertList;
  const advertDelete = useSelector((state) => state.advertDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = advertDelete;

  const deleteHandler = (advert) => {
    dispatch(
      requestConfirmation(
        true,
        "Delete the advert",
        `Are you sure you want to delete ${advert.name}?`,
        () => {
          dispatch(deleteAdvert(advert.advertId));
        }
      )
    );
  };

  useEffect(() => {
    if (successDelete) {
      dispatch({ type: ADVERT_DELETE_RESET });
    }
    dispatch(listUserAdvertsAction());
  }, [successDelete]);

  return (
    <Paper className={classes.root}>
      {loading || loadingDelete ? (
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
              onClick={() => history.push("/adverts/create")}
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
                      <Tooltip title="Update">
                        <Button
                          onClick={() =>
                            history.push(`/adverts/${advert.advertId}/update`)
                          }
                        >
                          <EditOutlined fontSize="small" />
                        </Button>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <Button onClick={() => deleteHandler(advert)}>
                          <Close fontSize="small" />
                        </Button>
                      </Tooltip>
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
