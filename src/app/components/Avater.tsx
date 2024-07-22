import sessionProvider from "@/util/sessionProvider";
import React from "react";

const Avater = async () => {
  const session = await sessionProvider();
  return (
    <div>
      {session.user.name}
      <img
        src={session.user.image}
        alt={session.user.name}
        width={100}
        height={100}
      />
    </div>
  );
};

export default Avater;
