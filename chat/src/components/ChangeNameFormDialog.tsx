import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { connect } from "react-redux";
import { setChangeNameDialogVisibility, setUserName } from "../redux/actions";

type Props = {
  userName: string;
  setUserName: (userName: string) => void;
  changeNameDialogVisibility: boolean;
  setChangeNameDialogVisibility: (visibility: boolean) => void;
};

const ChangeNameFormDialog = (props: Props) => {
  const [userName, setUserName] = useState(props.userName);

  const updateInput = (input: string) => {
    setUserName(input);
  };

  const handleClick = () => {
    props.setChangeNameDialogVisibility(false);
    props.setUserName(userName);
  };

  return (
    <div>
      <Dialog
        open={props.changeNameDialogVisibility}
        onClose={() => {
          props.setChangeNameDialogVisibility(false);
        }}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">ChangeName!</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="user name"
            type="text"
            fullWidth
            value={userName}
            onChange={e => updateInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              props.setChangeNameDialogVisibility(false);
            }}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleClick();
            }}
            color="primary"
          >
            Change
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    changeNameDialogVisibility: state.changeNameDialogVisibility,
    userName: state.userName
  };
};
const mapDispatchToProps = { setChangeNameDialogVisibility, setUserName };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeNameFormDialog);
