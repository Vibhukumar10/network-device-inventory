import { Avatar, IconButton } from "@material-ui/core";
import Image from "next/image";
import styled from "styled-components";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function Topbar() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  return (
    <Header>
      {/* Icons */}
      <LogoContainer>
        <IconButton
          onClick={() => {
            router.push("/");
          }}
        >
          <Image src="/next-js.svg" alt="Logo" width={45} height={45} />
        </IconButton>
      </LogoContainer>
      <AvatarContainer>
        <AvatarDesciption>
          <em>Click here to logout</em>
        </AvatarDesciption>
        <ArrowForwardIosIcon
          style={{
            fontSize: "16px",
            color: "#b2b1b9",
            position: "relative",
            top: "2px",
            marginRight: "6px",
          }}
        />
        <IconButton onClick={() => auth.signOut()}>
          <UserAvatar src={user?.photoURL} />
        </IconButton>
      </AvatarContainer>
      {/*  */}
    </Header>
  );
}

const LogoContainer = styled.div``;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarDesciption = styled.div`
  color: #b2b1b9;
  margin-right: 6px;

  @media (max-width: 330px) {
    display: none;
  }
`;

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
  height: 65px;
  border-bottom: 1px solid lightgray;
`;
