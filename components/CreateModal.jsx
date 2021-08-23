import {
  Avatar,
  Button,
  IconButton,
  Modal,
  Card,
  CardContent,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

function CreateModal(props) {
  const [open, setOpen] = useState(true);

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "grid",
      placeItems: "center",
      // alignItems: "center",
      // justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 2),
    },
    formControl: {
      margin: theme.spacing(1.5, 0),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={props.open}
      onClose={() => {
        setOpen(false);
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
    >
      <Fade in={open}>
        <Card className={classes.paper}>
          <h2 style={{ textAlign: "center" }} id="transition-modal-title">
            Create a new Inventory
          </h2>
          <CardContent>
            <Grid container spacing={1}>
              <Grid xs={12} spacing={1} item>
                <TextField
                  label="Name"
                  variant="outlined"
                  placeholder="Enter a name"
                  fullWidth
                  required
                />
              </Grid>
              <Grid lg={6} xs={12} item>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Switch Model
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={age}
                    // onChange={handleChange}
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
              </Grid>
              <Grid lg={6} xs={12} item>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    OS Versions
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={age}
                    // onChange={handleChange}
                    label="OS Versions"
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
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Physical Location"
                  variant="outlined"
                  placeholder="Enter the location of the Network Device"
                  fullWidth
                />
              </Grid>
              <Grid lg={6} xs={12} item>
                <FormControl className={classes.formControl} fullWidth>
                  <TextField
                    type="date"
                    label="Installation date"
                    // defaultValue="2017-05-24"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                  />
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
          {/* <div>
              <p id="transition-modal-description">
                react-transition-group animates me.
              </p>
            </div> */}
        </Card>
      </Fade>
    </Modal>
  );
}

export default CreateModal;

// const ModalContainer = styled(Modal)``;

// const FormCard = styled(Card)``;

// const FormCardContent = styled(CardContent)``;

// const FormGrid = styled(Grid)``;

// const FormInput = styled(TextField)``;

// const FormSelect = styled(Select)``;

// const FormSelectItem = styled(MenuItem)``;
