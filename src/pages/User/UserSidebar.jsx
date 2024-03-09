import User from "./User"
import { Outlet } from "react-router-dom";
import "../Admin/admin.css";

const UserCont = () => {
    return (
      <>
        <div className="admin">
          <User />
        </div>
        <Outlet />
      </>
    );
}

export default UserCont