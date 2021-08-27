import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import { Link } from "@material-ui/core";

export default function Footer() {
  return (
    <FooterContainer>
      <Link
        href="https://github.com/Vibhukumar10/network-device-inventory"
        target="_blank"
      >
        <StyledCodeIcon />
      </Link>
      <FooterContent>
        <h5>Made with ❤️ by Vibhu</h5>
      </FooterContent>
      <Link href="https://github.com/Vibhukumar10" target="_blank">
        <StyledGitHubIcon />
      </Link>
    </FooterContainer>
  );
}

const StyledCodeIcon = styled(CodeIcon)`
  color: #334257;
  position: relative;
  top: 3px;
  font-size: 30px !important;
`;

const StyledGitHubIcon = styled(GitHubIcon)`
  color: #334257;
  position: relative;
  top: 2px;
  font-size: 24px !important;
`;

const FooterContainer = styled.div`
  background-color: #476072;
  color: white;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  bottom: 0;
  border-top: 1px solid #748eb3;
`;

const FooterContent = styled.div`
  margin: 0 20px;
`;
