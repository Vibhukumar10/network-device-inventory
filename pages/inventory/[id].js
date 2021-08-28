import Topbar from "../../components/Topbar";
import { auth, db } from "../../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import Details from "../../components/Details";
import { Grid } from "@material-ui/core";
import router, { useRouter } from "next/router";
import { useCollection } from "react-firebase-hooks/firestore";
import Head from "next/head";

export default function Inventory() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const { query } = useRouter();

  const inventoryRef = db.collection("inventories");
  const [inventorySnapshot] = useCollection(inventoryRef);
  let renderInventory = inventorySnapshot?.docs.filter(
    (inventory) =>
      inventory.id === query.id && inventory.data().userId === user.uid
  );

  if (renderInventory?.length === 0) {
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Network Inventory</title>
      </Head>
      <Container>
        <Topbar />
        <GridContainer>
          <Grid container>
            {renderInventory?.map((inventory) => (
              <Details
                key={inventory.id}
                id={inventory.id}
                data={inventory.data().inventory}
              />
            ))}
          </Grid>
        </GridContainer>
      </Container>
    </>
  );
}

const GridContainer = styled.div`
  padding: 5rem;
  min-height: calc(100vh - 65px - 40px);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    padding: 1.5rem;
  }
  @media (max-width: 500px) {
    padding: 0.5rem;
    display: block;
  }
`;

const Container = styled.div`
  background-color: whitesmoke;
  min-height: calc(100vh - 40px);
  border-right: 1px solid lightgray;
`;
