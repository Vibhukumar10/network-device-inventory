import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { db } from "../firebase";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  overlay: {
    width: "100%",
    textAlign: "center",
    transition: ".5s ease",
    position: "absolute",
    top: "27.5%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
  },
  image: {
    opacity: "0.9",
    filter: "blur(0.1px) saturate(1) contrast(1) brightness(0.75)",
    transition: ".5s ease",
    backfaceVisibility: "hidden",
  },
});

const SwitchName = {
  ONE: "KVM Switch",
  TWO: "Managed Switch",
  THREE: "Unmanaged Switch",
  FOUR: "Smart Switch",
  FIVE: "PoE Switch",
};

const Switch = {
  ONE: "https://ik.imagekit.io/sfr1ejatp/Switches/1_UmFDPq0zc.png?updatedAt=1629918904007",
  TWO: "https://ik.imagekit.io/sfr1ejatp/Switches/2_BbbpI8Rj6.png?updatedAt=1629918905404",
  THREE:
    "https://ik.imagekit.io/sfr1ejatp/Switches/3_DkFxAYk0I.png?updatedAt=1629918907021",
  FOUR: "https://ik.imagekit.io/sfr1ejatp/Switches/4_2Zz-cxrq1.png?updatedAt=1629918908611",
  FIVE: "https://ik.imagekit.io/sfr1ejatp/Switches/5_lItGjC4RqQ.png?updatedAt=1629918910271",
};

export default function Inventories({ id, data }) {
  const classes = useStyles();
  const router = useRouter();

  const num = data.inventory.model;

  const enterInventory = () => {
    router.push(`/inventory/${id}`);
  };

  const handleDelete = () => {
    var result = confirm("Are you sure you want to delete this Inventory?");
    if (result) {
      db.collection("inventories").doc(id)?.delete();
    }
  };

  return (
    <Grid lg={3} sm={6} xs={12} style={{ padding: "1rem" }} item>
      <Card className={classes.root}>
        <CardActionArea onClick={enterInventory}>
          <CardMedia
            component="img"
            alt="Network Device"
            height="140"
            image={
              num === 10
                ? Switch.ONE
                : num === 20
                ? Switch.TWO
                : num === 30
                ? Switch.THREE
                : num === 40
                ? Switch.FOUR
                : num === 50
                ? Switch.FIVE
                : null
            }
            title="Network Device"
            className={classes.image}
          />
          <Typography variant="h5" className={classes.overlay}>
            <span
              style={{
                opacity: "0.8",
                fontWeight: "lighter",
              }}
            >
              {num === 10
                ? SwitchName.ONE
                : num === 20
                ? SwitchName.TWO
                : num === 30
                ? SwitchName.THREE
                : num === 40
                ? SwitchName.FOUR
                : num === 50
                ? SwitchName.FIVE
                : null}
            </span>
          </Typography>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.inventory.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Owner: {data.inventory.owner}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton color="primary">
            <OpenInNewIcon />
          </IconButton>
          <IconButton onClick={handleDelete} color="primary">
            <DeleteOutlineIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
