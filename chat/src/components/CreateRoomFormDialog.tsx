import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { connect } from "react-redux";
import { setCreateRoomDialogVisibility, addRoom } from "../redux/actions";
import { RootState } from "../redux/reducers/index";

type Props = {
  createRoomDialogVisibility: boolean;
  setCreateRoomDialogVisibility: (visibility: boolean) => void;
  addRoom: (name: string) => void;
};

const CreateRoomFormDialog = (props: Props) => {
  const [input, setInput] = React.useState("");

  const updateInput = (input: string) => {
    setInput(input);
  };

  const handleClickClose = () => {
    props.setCreateRoomDialogVisibility(false);
    setInput("");
  };
  const handleClickCreate = () => {
    props.addRoom(input);
    props.setCreateRoomDialogVisibility(false);
    setInput("");
  };

  return (
    <div>
      <Dialog
        open={props.createRoomDialogVisibility}
        onClose={() => handleClickClose()}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">CreateRoom!</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="new room"
            type="text"
            fullWidth
            onChange={e => updateInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClickClose()} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleClickCreate()} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateProps = (state: RootState) => {
  return { createRoomDialogVisibility: state.createRoomDialogVisibility };
};

const mapDispatchToProps = { setCreateRoomDialogVisibility, addRoom };

export default connect(mapStateProps, mapDispatchToProps)(CreateRoomFormDialog);
