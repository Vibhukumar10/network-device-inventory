import {
  Avatar,
  Button,
  IconButton,
  Modal,
  Card,
  CardContent,
  Grid,
  TextField,
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
import { useRouter } from "next/dist/client/router";
import { makeStyles } from "@material-ui/core/styles";

function Sidebar() {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);

  // const createInventory = () => {
  //   setNewInventory(true);
  //   setClose(true);
  // };

  const handleModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  return (
    <>
      <CreateModal
        // aria-labelledby="transition-modal-title"
        // aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={open}>
          <FormCard className={classes.paper}>
            <h2 style={{ textAlign: "center" }} id="transition-modal-title">
              Create a new Inventory
            </h2>
            <FormCardContent>
              <FormGrid container spacing={1}>
                <FormGrid xs={12} item>
                  <FormInput
                    label="Name"
                    variant="outlined"
                    placeholder="Enter a name"
                    fullWidth
                    required
                  />
                </FormGrid>
                <FormGrid xs={12} item>
                  <FormInput
                    label="Name"
                    variant="outlined"
                    placeholder="Enter a name"
                    required
                  />
                </FormGrid>
              </FormGrid>
            </FormCardContent>
            {/* <div>
              <p id="transition-modal-description">
                react-transition-group animates me.
              </p>
            </div> */}
          </FormCard>
        </Fade>
      </CreateModal>
      <Container>
        <Header>
          <UserAvatar src={user?.photoURL} onClick={() => auth.signOut()} />
          {/* Icons */}
          <IconsContainer>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                setClose((prev) => !prev);
              }}
            >
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
        <SidebarButton onClick={handleModal}>
          <AddIcon />
          Create a new Inventory
        </SidebarButton>
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
  /* max-width: 25%; */
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

const SidebarButton = styled(Button)`
  width: 100%;

  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;

const CreateModal = styled(Modal)``;

const FormCard = styled(Card)``;

const FormCardContent = styled(CardContent)``;

const FormGrid = styled(Grid)``;

const FormInput = styled(TextField)``;
