/* eslint-disable no-nested-ternary */
import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Link, { LinkProps } from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { MemoryRouter } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import { Omit } from "@material-ui/types";

interface ListItemLinkProps extends LinkProps {
  to: string;
  open?: boolean;
}

const breadcrumbNameMap: { [key: string]: string } = {
  "/inbox": "Inbox",
  "/inbox/important": "Important",
  "/trash": "Trash",
  "/spam": "Spam",
  "/drafts": "Drafts",
};

function ListItemLink(props: Omit<ListItemLinkProps, "ref">) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  return (
    <li>
      <ListItem button component={RouterLink} to={to} {...other}>
        <ListItemText primary={primary} />
        {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
    </li>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      width: 360,
    },
    lists: {
      backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing(1),
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    nested2: {
      paddingLeft: theme.spacing(8),
    },
  })
);

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => (
  <Link {...props} component={RouterLink as any} />
);

export default function RouterBreadcrumbs() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClick2 = () => {
    setOpen2((prevOpen) => !prevOpen);
  };

  return (
    <MemoryRouter initialEntries={["/inbox"]} initialIndex={0}>
      <nav className={classes.lists} aria-label="mailbox folders">
        <List>
          <ListItemLink to="/inbox" open={open} onClick={handleClick} />
          <Collapse component="li" in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItemLink
                to="/inbox/important"
                className={classes.nested}
                onClick={handleClick2}
              />
            </List>
            <Collapse component="li" in={open2} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemLink
                  to="/inbox/important"
                  className={classes.nested2}
                />
              </List>
            </Collapse>
          </Collapse>
          <ListItemLink to="/trash" />
          <ListItemLink to="/spam" />
        </List>
      </nav>
    </MemoryRouter>
  );
}
