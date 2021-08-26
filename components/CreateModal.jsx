import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useState } from "react";
import firebase from "firebase/app";

import styled from "styled-components";
import {
  Button,
  Modal,
  Card,
  CardContent,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

function CreateModal() {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const [inventory, setInventory] = useState({
    name: "",
    model: "",
    os: "",
    location: "",
    install: "",
    eol: "",
    owner: "",
  });

  const handleModal = () => {
    setOpen(true);
  };

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: theme.spacing(0, 3),
    },
    grid: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: theme.spacing(1, 0),
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      maxWidth: "600px",
      border: "1px solid #0101",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 2),
    },
    formControl: {
      margin: theme.spacing(1, 1, 0),
    },
  }));

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("inventories").add({
      inventory: inventory,
      userId: user.uid,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInventory({
      name: "",
      model: "",
      os: "",
      location: "",
      install: "",
      eol: "",
      owner: "",
    });

    setOpen(false);
  };

  const handleClose = () => {
    setInventory({
      name: "",
      model: "",
      os: "",
      location: "",
      install: "",
      eol: "",
      owner: "",
    });
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={open}>
          <Card className={classes.paper}>
            <CardContent>
              <FormContainer onSubmit={handleSubmit}>
                <Grid container style={{ justifyContent: "center" }}>
                  <Grid
                    className={(classes.grid, classes.formControl)}
                    xs={12}
                    item
                  >
                    <TextField
                      label="Name"
                      variant="outlined"
                      placeholder="Enter a name"
                      value={inventory.name}
                      onChange={(e) => {
                        setInventory({ ...inventory, name: e.target.value });
                      }}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid className={classes.grid} lg={6} sm={6} xs={12} item>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                      required
                      fullWidth
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Switch Model
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={inventory.model}
                        onChange={(e) => {
                          setInventory({ ...inventory, model: e.target.value });
                        }}
                        label="Switch Model"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>KVM Switch</MenuItem>
                        <MenuItem value={20}>Managed Switch</MenuItem>
                        <MenuItem value={30}>Unmanaged Switch</MenuItem>
                        <MenuItem value={40}>Smart Switch</MenuItem>
                        <MenuItem value={50}>PoE Switch</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid className={classes.grid} lg={6} sm={6} xs={12} item>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                      fullWidth
                      required
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        OS Versions
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={inventory.os}
                        onChange={(e) => {
                          setInventory({ ...inventory, os: e.target.value });
                        }}
                        label="OS Versions"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Novell NetWare</MenuItem>
                        <MenuItem value={20}>Microsoft Windows</MenuItem>
                        <MenuItem value={30}>Mac OS X Server</MenuItem>
                        <MenuItem value={40}>UNIX</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid
                    className={(classes.grid, classes.formControl)}
                    xs={12}
                    item
                  >
                    <TextField
                      label="Physical Location"
                      variant="outlined"
                      placeholder="Enter the location of the Network Device"
                      value={inventory.location}
                      onChange={(e) => {
                        setInventory({
                          ...inventory,
                          location: e.target.value,
                        });
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid className={classes.grid} lg={6} sm={6} xs={12} item>
                    <FormControl className={classes.formControl} fullWidth>
                      <TextField
                        type="date"
                        label="Installation date"
                        value={inventory.install}
                        onChange={(e) => {
                          setInventory({
                            ...inventory,
                            install: e.target.value,
                          });
                        }}
                        // defaultValue="2017-05-24"
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        fullWidth
                      />
                    </FormControl>
                  </Grid>
                  <Grid className={classes.grid} lg={6} sm={6} xs={12} item>
                    <FormControl className={classes.formControl} fullWidth>
                      <TextField
                        type="date"
                        label="End of Life"
                        // defaultValue="2017-05-24"
                        variant="outlined"
                        value={inventory.eol}
                        onChange={(e) => {
                          setInventory({
                            ...inventory,
                            eol: e.target.value,
                          });
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        fullWidth
                      />
                    </FormControl>
                  </Grid>
                  <Grid
                    className={(classes.grid, classes.formControl)}
                    xs={12}
                    item
                  >
                    <TextField
                      label="Owner"
                      variant="outlined"
                      placeholder="Enter the Owner's Name"
                      value={inventory.owner}
                      onChange={(e) => {
                        setInventory({
                          ...inventory,
                          owner: e.target.value,
                        });
                      }}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid
                    xs={12}
                    lg={12}
                    className={(classes.grid, classes.formControl)}
                    style={{ marginTop: "15px" }}
                    item
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth
                    >
                      Create
                    </Button>
                  </Grid>
                </Grid>
              </FormContainer>
            </CardContent>
          </Card>
        </Fade>
      </Modal>
      <ButtonContainer>
        <CreateButton variant="contained" color="primary" onClick={handleModal}>
          <AddIcon />
          Create a new Inventory
        </CreateButton>
      </ButtonContainer>
    </>
  );
}

export default CreateModal;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 2rem;
`;

const CreateButton = styled(Button)``;

const FormContainer = styled.form``;
