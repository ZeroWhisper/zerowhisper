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
    >
      <BadgeBorder>1</BadgeBorder>
      <BadgeBorder>1</BadgeBorder>
      <BadgeBorder>1</BadgeBorder>
    </div>
  );
};

export const BadgeBorder = ({ children }: any) => {
  return (
    <div
      style={{
        display: "flex",
        borderRadius: "1rem",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "white",
        padding: "0.5rem",
      }}
    >
      {children}
    </div>
  );
};
