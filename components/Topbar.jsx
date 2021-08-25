import { Avatar, IconButton } from "@material-ui/core";
import styled from "styled-components";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function Topbar() {
  const [user] = useAuthState(auth);
  return (
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
  );
}

const UserAvatar = styled(Avatar)`
  cursor: pointer;
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
