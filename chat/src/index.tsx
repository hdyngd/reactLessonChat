import React from "react";
import ReactDOM from "react-dom";
import PersistentDrawerLeft from "./PersistentDrawerLeft";
import ChangeNameFormDialog from "./ChangeNameFormDialog";
import CreateRoomFormDialog from "./CreateRoomFormDialog";
import StickyFooter from "./StickyFooter";

type AppState = {
  openChangeNameForm: boolean;
  openCreateRoomForm: boolean;
};

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      openChangeNameForm: false,
      openCreateRoomForm: false
    };
  }

  handleClickOpenChangeNameForm = () => {
    this.setState({
      openChangeNameForm: true
    });
  };

  handleClickOpenCreateRoomForm = () => {
    this.setState({
      openCreateRoomForm: true
    });
  };

  handleCloseChangeNameForm = () => {
    this.setState({
      openChangeNameForm: false
    });
  };

  handleCloseCreateRoomForm = () => {
    this.setState({
      openCreateRoomForm: false
    });
  };

  render() {
    return (
      <div>
        <PersistentDrawerLeft
          handleClickOpenChangeNameForm={() =>
            this.handleClickOpenChangeNameForm()
          }
          handleClickOpenCreateRoomForm={() =>
            this.handleClickOpenCreateRoomForm()
          }
        ></PersistentDrawerLeft>
        <ChangeNameFormDialog
          openChangeNameForm={this.state.openChangeNameForm}
          handleCloseChangeNameForm={this.handleCloseChangeNameForm}
        ></ChangeNameFormDialog>
        <CreateRoomFormDialog
          openCreateRoomForm={this.state.openCreateRoomForm}
          handleCloseCreateRoomForm={this.handleCloseCreateRoomForm}
        ></CreateRoomFormDialog>
        <StickyFooter></StickyFooter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
