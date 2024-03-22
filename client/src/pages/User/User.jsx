import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { FaBars, FaDumbbell, FaPaintBrush } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";
import { SlPeople } from "react-icons/sl";

const User = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleWindowResize = () => {
    setCollapsed(window.innerWidth <= 768); // Change the breakpoint value as per your requirement
  };

  useEffect(() => {
    // Check the window size on initial render
    handleWindowResize();

    // event listener for window resize
    window.addEventListener("resize", handleWindowResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <Sidebar
        collapsed={collapsed}
        className="sidebar"
        transitionDuration={1000}
      >
        <Menu>
          <MenuItem
            icon={<FaBars />}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          >
            <p>Admin</p>
          </MenuItem>
          <SubMenu label="Procedures" icon={<FaPaintBrush />} className="menu">
            <MenuItem
              icon={<FaDumbbell />}
              className="menu-item"
              component={<Link to="/admin/allproducts" />}
            >
              <span>Equipments</span>
            </MenuItem>
            <MenuItem
              icon={<SlPeople />}
              className="menu-item"
              component={<Link to="/admin/allproducts" />}
            >
              <span>Members</span>
            </MenuItem>
            <MenuItem
              icon={<IoMdPeople />}
              className="menu-item"
              component={<Link to="/admin/allproducts" />}
            >
              <span>Trainers</span>
            </MenuItem>
            <MenuItem
              icon={<MdOutlinePayments />}
              className="menu-item"
              component={<Link to="/admin/allproducts" />}
            >
              <span>Payment</span>
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </>
  );
};
export default User;
