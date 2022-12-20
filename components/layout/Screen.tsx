import React from "react";
import Body from "./Body";
// import Drawer from "./Drawer";
import Header from "./Header";

export default function Screen({ children }: { children: React.ReactNode }) {
  return (
    <main className="drawer w-full">
      <input id="ui-drawer" type="checkbox" className="drawer-toggle" />
      {/* <div className="drawer-content flex flex-col"> */}
      <div className="flex flex-col">
        <Header />
        <Body>{children}</Body>
      </div>
      {/* <Drawer /> */}
    </main>
  );
}
