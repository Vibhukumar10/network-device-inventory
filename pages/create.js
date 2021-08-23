import styled from "styled-components";
import Head from "next/head";

function create() {
  return (
    <Container>
      <Head>
        <title>Create an Inventory</title>
      </Head>
      <FormContainer>
        <Form>
          <Name>
            <FormInput placeholder="Enter a name" />
          </Name>
          <FormGroup>
            <FormLabel>Switch Model</FormLabel>
            <FormInput placeholder="Enter the Switch Model" />
            <FormLabel>EOL</FormLabel>
            <FormInput placeholder="Enter End-Of-Life" />
          </FormGroup>
          <FormGroup>
            <FormLabel>OS Version</FormLabel>
            <FormInput placeholder="Enter the OS Version" />
            <FormLabel>EOL</FormLabel>
            <FormInput placeholder="Enter End-Of-Life" />
          </FormGroup>
          <FormGroup>
            <FormLabel>OS Version</FormLabel>
            <FormInput placeholder="Enter the OS Version" />
            <FormLabel>EOL</FormLabel>
            <FormInput placeholder="Enter End-Of-Life" />
          </FormGroup>
          <FormGroup>
            <FormLabel>OS Version</FormLabel>
            <FormInput placeholder="Enter the OS Version" />
            <FormLabel>EOL</FormLabel>
            <FormInput placeholder="Enter End-Of-Life" />
          </FormGroup>
        </Form>
      </FormContainer>
    </Container>
  );
}

export default create;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const FormContainer = styled.div`
  /* max-width: 800px; */
  /* padding: 100px; */
  background-color: white;
`;

const Form = styled.form`
  /* width: 400px; */
`;

const FormGroup = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  /* align-items: center; */
`;

const FormLabel = styled.label``;

const FormInput = styled.input`
  :focus {
    outline: none;
  }
  /* border: none; */
`;

const Name = styled.div`
  display: grid;
  place-items: center;
  margin: 50px 0;
`;
