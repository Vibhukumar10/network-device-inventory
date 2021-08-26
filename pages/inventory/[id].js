import Topbar from "../../components/Topbar";
import { useRouter } from "next/router";
import { db } from "../../firebase.js";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";

export default function Inventory() {
  const { query } = useRouter();
  const dataRef = db.collection("inventories");
  const [dataSnapshot] = useCollection(dataRef);
  //   console.log(dataSnapshot);
  let renderData = dataSnapshot?.docs.filter(
    (inventory) => inventory.id === query.id
  );

  console.log(renderData);

  return (
    <>
      <Container>
        <Topbar />
      </Container>
      {/* <h1>{query.id}</h1> */}
    </>
  );
}

const Container = styled.div`
  background-color: whitesmoke;
  min-height: 100vh;
  border-right: 1px solid lightgray;
`;
