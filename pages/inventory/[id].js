import Topbar from "../../components/Topbar";
import { db } from "../../firebase.js";
import styled from "styled-components";
import Details from "../../components/Details";
import { Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import { useCollection } from "react-firebase-hooks/firestore";

export default function Inventory() {
  const { query } = useRouter();

  const inventoryRef = db.collection("inventories");
  const [inventorySnapshot] = useCollection(inventoryRef);
  let renderInventory = inventorySnapshot?.docs.filter(
    (inventory) => inventory.id === query.id
  );
  console.log(renderInventory);

  return (
    <>
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
  @media (max-width: 1000px) {
    padding: 1.5rem;
  }
  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;

const Container = styled.div`
  background-color: whitesmoke;
  min-height: 100vh;
  border-right: 1px solid lightgray;
`;
