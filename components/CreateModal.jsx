import Head from "next/head";

function CreateModal() {
  return (
    <Container>
      <Head>
        <title>Create an Inventory</title>
      </Head>
      <FormContainer>
        <Form>
          <FormGroup>
            <FormLabel>Name</FormLabel>
            <FormInput placeholder="Enter a name" />
          </FormGroup>
          <FormGroup>
            <FormLabel>Device</FormLabel>
            <FormInput placeholder="Enter a device" />
          </FormGroup>
          <FormGroup>
            <FormLabel>OS Version</FormLabel>
            <FormInput placeholder="Enter the OS Version" />
          </FormGroup>
          <FormGroup>
            <FormLabel>EOL</FormLabel>
            <FormInput placeholder="Enter End-Of-Life" />
          </FormGroup>
        </Form>
      </FormContainer>
    </Container>
  );
}

export default CreateModal;

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
  /* width: 100%; */
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

const FormLabel = styled.label``;

const FormInput = styled.input``;
