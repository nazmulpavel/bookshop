import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaUsers,
  FaEnvelope,
  FaSignOutAlt,
  FaClipboardList,
  FaPenAlt,
  FaProductHunt,
} from "react-icons/fa";
import { AuthContext } from "../provider/Authprovider";

const DashboardSidebarContent = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOutUser();
    navigate("/");
  };

  return (
    <div className="p-4">
      {/* User Profile Info */}
      <div className="flex flex-row lg:flex-col items-start gap-2">
        <img
          src={user?.photoUrl}
          alt="User Profile"
          className="w-16 rounded-full"
        />
        <span>{user?.displayName}</span>
        <span className="text-xs">{user?.email}</span>
      </div>
      <hr className="my-4" />

      {/* Sidebar Links */}
      <nav className="flex flex-col gap-4">
        {/* Profile Link */}
        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
          }
        >
          <FaUser className="inline mr-2" />
          Profile
        </NavLink>

        {/* {!user?.isBlocked && ( */}
          <>
            {" "}
            {/* Admin Links */}
            {/* {user?.isAdmin && ( */}
              <>
                <NavLink
                  to="/dashboard/allUsers"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-500"
                  }
                >
                  <FaUsers className="inline mr-2" />
                  All Users
                </NavLink>
                <NavLink
                  to="/dashboard/allCategories"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-500"
                  }
                >
                  <FaClipboardList className="inline mr-2" />
                  All Categories
                </NavLink>
              </>
            {/* )} */}
            {/* User Links */}
            {/* {!user?.isAdmin && ( */}
              <NavLink
                to="/dashboard/allProducts"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }
              >
                <FaProductHunt className="inline mr-2" />
                All Products
              </NavLink>
            {/* )} */}
          </>
        {/* // )} */}
        {/* Logout */}
        <button
          onClick={handleLogout}
          className="text-red-600 text-sm hover:underline flex items-center"
        >
          <FaSignOutAlt className="inline mr-2" />
          Logout
        </button>
      </nav>
    </div>
  );
};

export default DashboardSidebarContent;
