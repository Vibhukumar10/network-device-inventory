import {
  Card,
  FormControl,
  FormLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import { useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import firebase from "firebase/app";
import { useRouter } from "next/router";

export default function Details({ id, data }) {
  const { query } = useRouter();
  const [name, setName] = useState(data.name);
  const [model, setModel] = useState(data.model);
  const [os, setOs] = useState(data.os);
  const [location, setLocation] = useState(data.location);
  const [install, setInstall] = useState(data.install);
  const [eol, setEol] = useState(data.eol);
  const [owner, setOwner] = useState(data.owner);

  const [editName, setEditName] = useState(false);
  const [editModel, setEditModel] = useState(false);
  const [editOs, setEditOs] = useState(false);
  const [editLocation, setEditLocation] = useState(false);
  const [editInstall, setEditInstall] = useState(false);
  const [editEol, setEditEol] = useState(false);
  const [editOwner, setEditOwner] = useState(false);

  //name
  const handleNameUpdate = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      alert("This field cannot be left blank");
      setName(data.name);
    } else {
      db.collection("inventories").doc(query.id).update({
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        "inventory.name": name,
      });
    }
    setEditName(false);
  };

  //model
  const handleModelUpdate = (e) => {
    e.preventDefault();
    if (model.length === 0) {
      alert("This field cannot be left blank");
      setModel(data.model);
    } else {
      db.collection("inventories").doc(query.id).update({
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        "inventory.model": model,
      });
    }
    setEditModel(false);
  };

  //os
  const handleOsUpdate = (e) => {
    e.preventDefault();
    if (os.length === 0) {
      alert("This field cannot be left blank");
      setOs(data.os);
    } else {
      db.collection("inventories").doc(query.id).update({
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        "inventory.os": os,
      });
    }
    setEditOs(false);
  };

  //location
  const handleLocationUpdate = (e) => {
    e.preventDefault();
    if (location.length === 0) {
      alert("This field cannot be left blank");
      setLocation(data.location);
    } else {
      db.collection("inventories").doc(query.id).update({
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        "inventory.location": location,
      });
    }
    setEditLocation(false);
  };

  //install
  const handleInstallUpdate = (e) => {
    e.preventDefault();
    if (install.length === 0) {
      alert("This field cannot be left blank");
      setInstall(data.install);
    } else {
      db.collection("inventories").doc(query.id).update({
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        "inventory.install": install,
      });
    }
    setEditInstall(false);
  };

  //eol
  const handleEolUpdate = (e) => {
    e.preventDefault();
    if (eol.length === 0) {
      alert("This field cannot be left blank");
      setEol(data.eol);
    } else {
      db.collection("inventories").doc(query.id).update({
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        "inventory.eol": eol,
      });
    }
    setEditEol(false);
  };

  //owner
  const handleOwnerUpdate = (e) => {
    e.preventDefault();
    if (owner.length === 0) {
      alert("This field cannot be left blank");
      setOwner(data.owner);
    } else {
      db.collection("inventories").doc(query.id).update({
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        "inventory.owner": owner,
      });
    }
    setEditOwner(false);
  };

  return (
    <>
      {/* {name} */}
      <StyledGrid lg={4} md={6} xs={12} item>
        <StyledCard>
          <Form onSubmit={handleNameUpdate}>
            <DetailGroup>
              <StyledFormLabel>
                <em>Name</em>
              </StyledFormLabel>
              <TextField
                id="outlined-read-only-input"
                label="Name"
                value={name}
                variant="outlined"
                disabled={!editName}
                size="small"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                fullWidth
              />
              <DetailAction>
                {!editName ? (
                  <IconButton
                    onClick={() => {
                      setEditName((prev) => !prev);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                ) : (
                  <ButtonContainer>
                    <IconButton type="submit">
                      <CheckCircleRoundedIcon />
                    </IconButton>
                  </ButtonContainer>
                )}
              </DetailAction>
            </DetailGroup>
          </Form>
        </StyledCard>
      </StyledGrid>
      {/* {Switch Model} */}
      <StyledGrid lg={4} md={6} xs={12} item>
        <StyledCard>
          <Form onSubmit={handleModelUpdate}>
            <DetailGroup>
              <StyledFormLabel>
                <em>Model</em>
              </StyledFormLabel>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Switch Model
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={model}
                  disabled={!editModel}
                  onChange={(e) => {
                    setModel(e.target.value);
                  }}
                  label="Switch Model"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>KVM Switch</MenuItem>
                  <MenuItem value={20}>Managed Switch</MenuItem>
                  <MenuItem value={30}>Unmanaged Switch</MenuItem>
                  <MenuItem value={40}>Smart Switch</MenuItem>
                  <MenuItem value={50}>PoE Switch</MenuItem>
                </Select>
              </FormControl>
              <DetailAction>
                {!editModel ? (
                  <IconButton
                    onClick={() => {
                      setEditModel((prev) => !prev);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                ) : (
                  <ButtonContainer>
                    <IconButton type="submit">
                      <CheckCircleRoundedIcon />
                    </IconButton>
                  </ButtonContainer>
                )}
              </DetailAction>
            </DetailGroup>
          </Form>
        </StyledCard>
      </StyledGrid>
      {/* {os} */}
      <StyledGrid lg={4} md={6} xs={12} item>
        <StyledCard>
          <Form onSubmit={handleOsUpdate}>
            <DetailGroup>
              <StyledFormLabel>
                <em>OS</em>
              </StyledFormLabel>
              <FormControl
                variant="outlined"
                // className={classes.formControl}
                // required
                size="small"
                fullWidth
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  OS
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={os}
                  disabled={!editOs}
                  onChange={(e) => {
                    setOs(e.target.value);
                  }}
                  label="OS"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Novell NetWare</MenuItem>
                  <MenuItem value={20}>Microsoft Windows</MenuItem>
                  <MenuItem value={30}>Mac OS X Server</MenuItem>
                  <MenuItem value={40}>UNIX</MenuItem>
                </Select>
              </FormControl>
              <DetailAction>
                {!editOs ? (
                  <IconButton
                    onClick={() => {
                      setEditOs((prev) => !prev);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                ) : (
                  <ButtonContainer>
                    <IconButton type="submit">
                      <CheckCircleRoundedIcon />
                    </IconButton>
                  </ButtonContainer>
                )}
              </DetailAction>
            </DetailGroup>
          </Form>
        </StyledCard>
      </StyledGrid>
      {/* {location} */}
      <StyledGrid lg={4} md={6} xs={12} item>
        <StyledCard>
          <Form onSubmit={handleLocationUpdate}>
            <DetailGroup>
              <StyledFormLabel>
                <em>Location</em>
              </StyledFormLabel>
              <TextField
                id="outlined-read-only-input"
                label="Location"
                value={location}
                variant="outlined"
                disabled={!editLocation}
                size="small"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                fullWidth
              />
              <DetailAction>
                {!editLocation ? (
                  <IconButton
                    onClick={() => {
                      setEditLocation((prev) => !prev);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                ) : (
                  <ButtonContainer>
                    <IconButton type="submit">
                      <CheckCircleRoundedIcon />
                    </IconButton>
                  </ButtonContainer>
                )}
              </DetailAction>
            </DetailGroup>
          </Form>
        </StyledCard>
      </StyledGrid>
      {/* {install} */}
      <StyledGrid lg={4} md={6} xs={12} item>
        <StyledCard>
          <Form onSubmit={handleInstallUpdate}>
            <DetailGroup>
              <StyledFormLabel>
                <em>Installation</em>
              </StyledFormLabel>
              <TextField
                id="outlined-read-only-input"
                type="date"
                label="D.O.I"
                value={install}
                variant="outlined"
                disabled={!editInstall}
                size="small"
                onChange={(e) => {
                  setInstall(e.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
              <DetailAction>
                {!editInstall ? (
                  <IconButton
                    onClick={() => {
                      setEditInstall((prev) => !prev);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                ) : (
                  <ButtonContainer>
                    <IconButton type="submit">
                      <CheckCircleRoundedIcon />
                    </IconButton>
                  </ButtonContainer>
                )}
              </DetailAction>
            </DetailGroup>
          </Form>
        </StyledCard>
      </StyledGrid>
      {/* {eol} */}
      <StyledGrid lg={4} md={6} xs={12} item>
        <StyledCard>
          <Form onSubmit={handleEolUpdate}>
            <DetailGroup>
              <StyledFormLabel>
                <em>E.O.L</em>
              </StyledFormLabel>
              <TextField
                id="outlined-read-only-input"
                type="date"
                label="End-of-Life"
                value={eol}
                variant="outlined"
                disabled={!editEol}
                size="small"
                onChange={(e) => {
                  setEol(e.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
              <DetailAction>
                {!editEol ? (
                  <IconButton
                    onClick={() => {
                      setEditEol((prev) => !prev);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                ) : (
                  <ButtonContainer>
                    <IconButton type="submit">
                      <CheckCircleRoundedIcon />
                    </IconButton>
                  </ButtonContainer>
                )}
              </DetailAction>
            </DetailGroup>
          </Form>
        </StyledCard>
      </StyledGrid>
      {/* {owner} */}
      <StyledGrid lg={4} md={6} xs={12} item>
        <StyledCard>
          <Form onSubmit={handleOwnerUpdate}>
            <DetailGroup>
              <StyledFormLabel>
                <em>Owner</em>
              </StyledFormLabel>
              <TextField
                id="outlined-read-only-input"
                label="Owner"
                value={owner}
                variant="outlined"
                disabled={!editOwner}
                size="small"
                onChange={(e) => {
                  setOwner(e.target.value);
                }}
                fullWidth
              />
              <DetailAction>
                {!editOwner ? (
                  <IconButton
                    onClick={() => {
                      setEditOwner((prev) => !prev);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                ) : (
                  <ButtonContainer>
                    <IconButton type="submit">
                      <CheckCircleRoundedIcon />
                    </IconButton>
                  </ButtonContainer>
                )}
              </DetailAction>
            </DetailGroup>
          </Form>
        </StyledCard>
      </StyledGrid>
    </>
  );
}

const ButtonContainer = styled.div``;

const StyledFormLabel = styled(FormLabel)`
  font-size: 1.2rem;
  margin: 0 0.5rem;
  @media (max-width: 375px) {
    display: none;
  }
`;

const Form = styled.form``;

const StyledCard = styled(Card)`
  padding: 1.5rem;

  @media (max-width: 425px) {
    padding: 0.5rem;
  }
`;

const StyledGrid = styled(Grid)`
  padding: 1rem;
  @media (max-width: 425px) {
    padding: 0.5rem;
  }
`;

const DetailGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DetailAction = styled.div``;
