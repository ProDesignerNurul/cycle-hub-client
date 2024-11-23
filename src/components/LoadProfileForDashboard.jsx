import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const LoadProfileForDashboard = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "you are log out now",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div>
      <div className="ml-2">
        {user ? (
          <>
            <div ref={dropdownRef} className="relative inline-block">
              <div
                className="w-10 rounded-full"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img alt="" src={user?.photoURL} />
              </div>

              {/* Dropdown menu */}
              {isOpen && (
                <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800">
                  <Link
                    to="/user-profile"
                    className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <img
                      className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                      src={user?.photoURL}
                      alt="jane avatar"
                    />
                    <div className="mx-1">
                      <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        {user?.displayName}
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {user?.email}
                      </p>
                    </div>
                  </Link>

                  <hr className="border-gray-200 dark:border-gray-700" />

                  <Link
                    to="/user-profile"
                    className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    View Profile
                  </Link>
                  <a
                    href="#"
                    className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Settings
                  </a>

                  <hr className="border-gray-200 dark:border-gray-700" />

                  <Link
                    to="/contact"
                    className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Company Details
                  </Link>

                  <a
                    onClick={handleLogout}
                    href="#"
                    className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Sign Out
                  </a>
                </div>
              )}
            </div>

            {/* <button onClick={handleLogout} className="btn btn-sm btn-outline">
                Log Out
              </button> */}
          </>
        ) : (
          <button className="btn btn-sm btn-outline">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default LoadProfileForDashboard;
