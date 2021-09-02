import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const ListItemButton = (props) => {
  const { icon, primary, onClickHandle } = props;

  return (
    <li>
      <ListItem button onClick={onClickHandle}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};

export default ListItemButton;
