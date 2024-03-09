import Admin from "./Admin";
import { Outlet } from "react-router-dom";
import "./admin.css";

const AdminCont = () => {
  return (
    <>
      <div className="admin">
        <Admin />
      </div>
      <Outlet />
    </>
  );
};
export default AdminCont;
