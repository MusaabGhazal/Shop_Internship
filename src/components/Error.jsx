import { useRouteError } from "react-router-dom";

export default function Error( ){

  const error = useRouteError();

  return (
    <>
      <h1>THIS IS MY ERROR</h1>
      <p>{error.message}</p>
      <p>{error.data}</p>
    </>
  );

}