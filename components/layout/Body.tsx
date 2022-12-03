import React from "react";

export default function Body({ children }: { children: React.ReactNode }) {
  return <main className="max-w-screen-xl w-11/12 mx-auto">{children}</main>;
}
