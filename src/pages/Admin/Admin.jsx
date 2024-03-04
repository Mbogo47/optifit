import './admin.css'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { FaBars } from 'react-icons/fa';

const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleWindowResize = () => {
        setCollapsed(window.innerWidth <= 768); // Change the breakpoint value as per your requirement
    };

    useEffect(() => {
        // Check the window size on initial render
        handleWindowResize();

        // event listener for window resize
        window.addEventListener('resize', handleWindowResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <>
            <Sidebar collapsed={collapsed} className='sidebar'  transitionDuration={1000} >
                <Menu>
                    <MenuItem icon={<FaBars />} onClick={() => { setCollapsed(!collapsed); }} >
                        <p>Admin</p>
                    </MenuItem>
                    <SubMenu label="Admin" icon={<FaBars />} className='menu'>
                        <MenuItem icon={<FaBars />} className='menu-item' component={<Link to="/admin/allproducts" />}>
                            </MenuItem>
                        </SubMenu>
                    </Menu>
                    </Sidebar>
        </>
    );

};
export default Admin;