import React from "react";
import Body from "./Body";
import Drawer from "./Drawer";
import Header from "./Header";

export default function Screen({ children }: { children: React.ReactNode }) {
  return (
    <main className="drawer">
      <Header />
      <Drawer />
      <Body>{children}</Body>
    </main>
  );
}
