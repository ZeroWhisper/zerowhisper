// import * as S from './style';

export function Welcome() {
  // const {} = _props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <div>
        <a href="https://vitejs.dev" target="_blank">
          Vite
        </a>
      </div>
      <div>
        <a href="https://react.dev" target="_blank">
          React
        </a>
      </div>
    </div>
  );
}
