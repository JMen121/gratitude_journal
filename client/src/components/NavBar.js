import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../containers/JournalContainer";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const NavBar = () => {
  const { currentUser } = useContext(UserContext) || {};


  if (!currentUser) {
    return null;
  }

  const handleLogout = () => {
    alert("You have successfully signed out!")
    console.log("Logout logic");
  };

  return (
    <>
      <Sidebar>
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: '#13395e',
                color: '#b6c8d9',
              },
            },
          }}
        >
          <MenuItem component={<Link to="/" />}> Home</MenuItem>
          <MenuItem component={<Link to="/entries" />}> My Entries</MenuItem>
          <MenuItem component={<Link to="/entries/new" />}> Create New Journal Entry</MenuItem>
          <MenuItem
            component={<Link to="/entries/new">
                currentUser && (
                  <li>
                    <button onClick={handleLogout}>
                      <Link to="/">Sign Out</Link>
                    </button>
                  </li>
                )
            </Link>}>

          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}

export default NavBar;
//   return (
//     <>
//       <nav className="navbar-container">

//         <div className="logo">
//           <Link to="/">Gratitude Journal</Link>
//         </div>

//         <div className="menu">
//           <label htmlFor="menu-toggle">&#9776; Menu</label>

//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>

//             <li>
//               <Link to="/entries">My Entries</Link>
//             </li>

//             <li>
//               <Link to="/entries/new">Create New Entry</Link>
//             </li>

//             {currentUser && (
//               <li>
//                 <button onClick={handleLogout}>
//                   <Link to="/">Sign Out</Link>
//                 </button>
//               </li>
//             )}
//           </ul>
//         </div>
//       </nav>
//       <Outlet />
//     </>
//   );
// };