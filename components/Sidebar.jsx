import {
  Avatar,
  Button,
  IconButton,
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
import styled from "styled-components";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import AddIcon from "@material-ui/icons/Add";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

function Sidebar() {
  // const router = useRouter();
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const [inventory, setInventory] = useState({
    name: "",
    model: "",
    os: "",
    location: "",
    install: new Date(),
    eol: new Date(),
    owner: "",
  });

  // const createInventory = () => {
  //   setNewInventory(true);
  //   setClose(true);
  // };

  const handleModal = () => {
    setOpen(true);
  };

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      // placeItems: "center",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      maxWidth: "720px",
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 2),
    },
    formControl: {
      margin: theme.spacing(1.5, 0),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
    },
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inventory);
  };

  const classes = useStyles();
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={open}>
          <Card className={classes.paper}>
            <h2 style={{ textAlign: "center" }} id="transition-modal-title">
              Create a new Inventory
            </h2>
            <CardContent>
              <FormContainer onSubmit={handleSubmit}>
                <Grid
                  onSubmit={handleSubmit}
                  container
                  spacing={1}
                  style={{ justifyContent: "center" }}
                >
                  <Grid xs={12} spacing={1} item>
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
                  <Grid lg={6} xs={6} item>
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
                  <Grid lg={6} xs={6} item>
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
                  <Grid xs={12} item>
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
                  <Grid lg={6} xs={12} item>
                    <FormControl className={classes.formControl} fullWidth>
                      <TextField
                        type="date"
                        label="Installation date"
                        // defaultValue="2017-05-24"
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        fullWidth
                      />
                    </FormControl>
                  </Grid>
                  <Grid lg={6} xs={12} item>
                    <FormControl className={classes.formControl} fullWidth>
                      <TextField
                        type="date"
                        label="End of Life"
                        // defaultValue="2017-05-24"
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        fullWidth
                      />
                    </FormControl>
                  </Grid>
                  <Grid xs={12} item>
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
                  <ButtonContainer>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      style={{ textAlign: "center", marginTop: "20px" }}
                    >
                      Submit
                    </Button>
                  </ButtonContainer>
                </Grid>
              </FormContainer>
            </CardContent>
          </Card>
        </Fade>
      </Modal>

      {/*  */}
      <Container>
        <Header>
          <UserAvatar src={user?.photoURL} onClick={() => auth.signOut()} />
          {/* Icons */}
          <IconsContainer>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </IconsContainer>
          {/*  */}
        </Header>
        <Search>
          <SearchIcon />
          <SearchInput placeholder="Seach Inventories" />
        </Search>
        {/* New Inventory */}
        <ButtonContainer>
          <SidebarButton
            variant="contained"
            color="primary"
            onClick={handleModal}
          >
            <AddIcon />
            Create a new Inventory
          </SidebarButton>
        </ButtonContainer>
        {/* Inventories */}
      </Container>
    </>
  );
}

export default Sidebar;

const UserAvatar = styled(Avatar)`
  cursor: pointer;
`;

const Container = styled.div`
  background-color: whitesmoke;
  height: 100vh;
  border-right: 1px solid lightgray;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid lightgray;
`;

const AddInventory = styled.div``;

const IconsContainer = styled.div``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

const SearchInput = styled.input`
  border: none;
  flex: 1;
  :focus {
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SidebarButton = styled(Button)``;

const FormContainer = styled.form``;
