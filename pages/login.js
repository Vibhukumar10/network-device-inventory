import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase";

import { Button } from "@material-ui/core";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" />
        <LoginButton onClick={signIn}>Sign in with Google</LoginButton>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 0 1rem;
  padding: 60px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 4px 14px -3px rgba(104, 104, 104, 1);
`;

const Logo = styled.img`
  height: 120px;
  width: 120px;
  margin-bottom: 75px;
`;

const LoginButton = styled(Button)`
  width: 100%;
  &&& {
    border: 1px solid black;
  }
`;
