import { ReactNode } from "react";

import { List } from "./components/list";
import { Accordion } from "./components/accordion";
import { UnderlineTabs } from "./components/underline-tabs";

export const BodySystem = () => {
  // const {} = _props;

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        gap: "0.5rem",
        margin: "1.1rem 0.5rem",
        flexDirection: "column",
      }}
      className="text-slate-900"
    >
      <BadgeBorder>
        <h2>List Example</h2>
        <List />
      </BadgeBorder>
      <BadgeBorder>
        <h2>Accordion</h2>
        <Accordion />
      </BadgeBorder>
      <BadgeBorder>
        <h2>Underline Tabs</h2>
        <UnderlineTabs />
      </BadgeBorder>
    </div>
  );
};

export const BadgeBorder = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "1rem",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "white",
        padding: "1rem 0.5rem",
        backgroundColor: "#eaeaea",
      }}
    >
      {children}
    </div>
  );
};
