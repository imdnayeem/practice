import React, { useContext } from "react";
import { ChannelContext, UserContext } from "./App";

function CompF() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <>
      Component F
      <div>
        {user} {channel}
      </div>
    </>
  );
}

export default CompF;
