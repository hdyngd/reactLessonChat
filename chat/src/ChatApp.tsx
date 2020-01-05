import React from "react";

import PersistentDrawerLeft from "./components/PersistentDrawerLeft";
import ChangeNameFormDialog from "./components/ChangeNameFormDialog";
import CreateRoomFormDialog from "./components/CreateRoomFormDialog";
import StickyFooter from "./components/StickyFooter";

export default function ChatApp() {
  return (
    <div>
      <PersistentDrawerLeft />
      <ChangeNameFormDialog />
      <CreateRoomFormDialog />
      <StickyFooter />
    </div>
  );
}
