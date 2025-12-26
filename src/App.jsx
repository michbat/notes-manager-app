import { Outlet } from "react-router-dom";
import "typeface-roboto";

export const App = () => {
  return (
    <>
      <h1>React Redux Starter</h1>
      <Outlet />
    </>
  );
};
