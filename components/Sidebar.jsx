import { Avatar, Button, IconButton } from "@material-ui/core";
import styled from "styled-components";

import AddIcon from "@material-ui/icons/Add";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import { auth } from "../firebase";

function Sidebar() {
  const createInventory = () => {
    const input = prompt("Enter the name of the Inventory");
  };

  return (
    <Container>
      <Header>
        <UserAvatar onClick={() => auth.signOut()} />
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
      <SidebarButton onClick={createInventory}>
        <AddIcon />
        Create a new Inventory
      </SidebarButton>
      {/* Inventories */}
    </Container>
  );
}

export default Sidebar;

const UserAvatar = styled(Avatar)``;

const Container = styled.div``;

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
  border-bottom: 1px solid whitesmoke;
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
