import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import OutlineCard from "./OutlineCard";

import { connect } from "react-redux";
import {
  setChangeNameDialogVisibility,
  setCreateRoomDialogVisibility,
  setSelectedRoom
} from "../redux/actions";
import { getChatHistory } from "../redux/selectors";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  })
);

type Props = {
  userName: String;
  setChangeNameDialogVisibility: (visibility: boolean) => void;
  setCreateRoomDialogVisibility: (visibility: boolean) => void;
  rooms: { id: string; name: string }[];
  setSelectedRoom: (id: string) => void;
  chatHistory: { chatId: string; userName: string; message: string }[];
};

const PersistentDrawerLeft = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            Chat
          </Typography>
          <Button
            color="inherit"
            onClick={() => props.setChangeNameDialogVisibility(true)}
          >
            {props.userName}
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => {
            props.setCreateRoomDialogVisibility(true);
          }}
        >
          <AddIcon />
        </Fab>
        <Divider></Divider>
        <List>
          {props.rooms.map((room, index) => (
            <ListItem
              button
              key={index}
              onClick={() => {
                props.setSelectedRoom(room.id);
              }}
            >
              <ListItemText primary={room.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {props.chatHistory.map((history, index) => (
          <OutlineCard
            key={index}
            userName={history.userName}
            message={history.message}
          ></OutlineCard>
        ))}
      </main>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    userName: state.userName,
    rooms: state.rooms,
    chatHistory: getChatHistory(state)
  };
};

const mapDispatchToProps = {
  setChangeNameDialogVisibility,
  setCreateRoomDialogVisibility,
  setSelectedRoom
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersistentDrawerLeft);
