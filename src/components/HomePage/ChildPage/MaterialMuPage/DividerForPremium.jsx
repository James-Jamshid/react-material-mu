import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "grey",
  color: "white",
  text: "10px",
};

export default function ListDividers() {
  return (
    <List sx={style} component="nav" aria-label="Free e-book for every class">
      <ListItem button>
        <ListItemText primary="Materials update every day" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Free download material videos" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Private chat with mentor" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Unlimited saved class" />
      </ListItem>
    </List>
  );
}
