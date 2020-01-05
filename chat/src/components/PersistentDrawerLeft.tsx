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
  setSelectedRoom,
  fetchMessages,
  fetchRooms,
  addEventListenerRooms,
  addEventListenerMessages
} from "../redux/actions";

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
  userName: string;
  setChangeNameDialogVisibility: (visibility: boolean) => void;
  setCreateRoomDialogVisibility: (visibility: boolean) => void;
  rooms: { id: string; roomName: string }[];
  setSelectedRoom: (id: string) => void;
  messages: { userName: string; message: string }[];
  fetchRooms: () => void;
  addEventListenerRooms: () => void;
  fetchMessages: (id: string) => void;
  addEventListenerMessages: (id: string) => void;
};

const PersistentDrawerLeft = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    props.fetchRooms();
    props.addEventListenerRooms();
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSelectedRoom = (id: string) => {
    props.setSelectedRoom(id);
    props.fetchMessages(id);
    props.addEventListenerMessages(id);
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
                handleSelectedRoom(room.id);
              }}
            >
              <ListItemText primary={room.roomName} />
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
        {props.messages.map((message, index) => (
          <OutlineCard
            key={index}
            userName={message.userName}
            message={message.message}
          ></OutlineCard>
        ))}
      </main>
    </div>
  );
};

type State = {
  createRoomDialogVisibility: boolean;
  changeNameDialogVisibility: boolean;
  userName: string;
  rooms: { id: string; roomName: string }[];
  selectedRoom: string;
  messages: { userName: string; message: string }[];
};
const mapStateToProps = (state: State) => {
  return {
    userName: state.userName,
    rooms: state.rooms,
    messages: state.messages
  };
};

const mapDispatchToProps = {
  setChangeNameDialogVisibility,
  setCreateRoomDialogVisibility,
  setSelectedRoom,
  fetchRooms,
  addEventListenerRooms,
  fetchMessages,
  addEventListenerMessages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersistentDrawerLeft);
