import { Sidebar } from "./components/sidebar";
import { BodySystem } from "./components/system-body";

export const ReactMotionPage = () => {
  return (
    <div
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "black",
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
      }}
    >
      <Sidebar />
      <BodySystem />
    </div>
  );
};
