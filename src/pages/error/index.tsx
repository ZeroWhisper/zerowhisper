import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError() as any;
  console.error(error);

  /* eslint @typescript-eslint/no-explicit-any: "off" */
  if (!(error as any).message) return;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
