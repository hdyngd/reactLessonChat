import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

import { connect } from "react-redux";
import { addMessage } from "../redux/actions";
import { RootState } from "../redux/reducers/index";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    margin: theme.spacing(1)
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[800]
        : theme.palette.grey[200]
  }
}));

type Props = {
  chatId: string;
  userName: string;
  addMessage: (chatId: string, userName: string, message: string) => void;
};

const StickyFooter = (props: Props) => {
  const classes = useStyles();

  const [input, setInput] = React.useState("");

  const updateInput = (input: string) => {
    setInput(input);
  };

  const handleAddMessage = () => {
    props.addMessage(props.chatId, props.userName, input);
    setInput("");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <TextField
            id="filled-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="filled"
            size="medium"
            value={input}
            onChange={e => updateInput(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
            onClick={() => {
              handleAddMessage();
            }}
          >
            Send
          </Button>
        </Container>
      </footer>
    </div>
  );
};

const mapStateProps = (state: RootState) => {
  return { chatId: state.selectedRoom, userName: state.userName };
};

const mapDispatchToProps = {
  addMessage
};

export default connect(mapStateProps, mapDispatchToProps)(StickyFooter);
