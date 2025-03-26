import { ListItemIcon } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function Lists({
  countryName,
  flag,
}: {
  countryName: string;
  flag: string;
}) {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={flag} alt="" width="50px" height="50px" />
              </ListItemIcon>
              <ListItemText primary={countryName} />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
