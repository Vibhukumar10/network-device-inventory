import { Avatar, IconButton } from "@material-ui/core";
import styled from "styled-components";

import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import CreateModal from "./CreateModal";

function Dashboard() {
  const [user] = useAuthState(auth);

  return (
    <>
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
        <CreateModal />
        {/* Inventories */}
      </Container>
    </>
  );
}

export default Dashboard;

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
