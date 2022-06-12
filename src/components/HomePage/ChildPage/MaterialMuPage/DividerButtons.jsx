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
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Free e-book for every class" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Materials update every day" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Free download material videos" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Unlock 5 material videos" />
      </ListItem>
    </List>
  );
}
