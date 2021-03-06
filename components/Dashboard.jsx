import { Card, Fab, Grid, TextField } from "@material-ui/core";
import styled from "styled-components";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import CreateModal from "./CreateModal";
import Inventories from "./Inventories";
import Topbar from "./Topbar";
import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function Dashboard() {
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");

  const inventoryRef = db
    .collection("inventories")
    .orderBy("timeStamp", "desc");
  const [inventorySnapshot] = useCollection(inventoryRef);
  let renderInventory = inventorySnapshot?.docs.filter(
    (inventory) => inventory.data().userId == user.uid
  );

  const renderInventoryCopy = renderInventory;

  if (input.length > 0) {
    renderInventory = renderInventory.filter((i) =>
      i.data().inventory.name.toLowerCase().includes(input.toLowerCase())
    );
  }
  return (
    <>
      {/*  */}
      <Container>
        <Topbar />

        <SearchContainer>
          <Card>
            <Search>
              {/* <SearchIcon /> */}
              <TextField
                label="Search"
                type="search"
                variant="outlined"
                size="small"
                placeholder="Search Inventories"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                fullWidth
              />
            </Search>
          </Card>
        </SearchContainer>
        {/* <Searchbar /> */}
        <CreateModal />
        {/* Inventories */}
        <GridContainer>
          <StyledGrid direction="row" alignItems="center" container>
            {renderInventory?.map((inventory) => (
              <Inventories
                key={inventory.id}
                id={inventory.id}
                data={inventory.data()}
              />
            ))}
          </StyledGrid>
        </GridContainer>
        {renderInventory?.length === 0 && (
          <MessageContainer>
            <WelcomeMessage>
              {renderInventoryCopy?.length === 0 ? (
                <em>
                  &quot;Welcome to Network Inventory, Press the above button to
                  create a new Inventory&quot;
                </em>
              ) : (
                <em>
                  &quot;There is no such inventory, try updating your
                  search&quot;
                </em>
              )}
            </WelcomeMessage>
          </MessageContainer>
        )}
      </Container>
    </>
  );
}

export default Dashboard;

const StyledGrid = styled(Grid)`
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const GridContainer = styled.div`
  padding: 0 4rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Container = styled.div`
  background-color: whitesmoke;
  min-height: calc(100vh - 40px);
  border-right: 1px solid lightgray;
`;

const Search = styled.div`
  min-width: 35vw;
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: 2px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
`;

const WelcomeMessage = styled.div`
  padding: 2rem;
  text-align: center;
  color: #b2b1b9;
`;
