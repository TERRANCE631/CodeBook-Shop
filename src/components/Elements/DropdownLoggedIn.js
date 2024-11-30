import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const DropdownLoggedIn = ({setDropDown}) => {
    const navigate = useNavigate();
    const [users, setUsers] = useState({});
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));

    useEffect(() => {
        async function getUser() {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/600/users/${cbid}`, {
                method: "GET",
                headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`}
            })
            const data = await response.json();
            setUsers(data);
        }

        getUser();
    }, [token, cbid]);
    
    function handleLogout(){
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("cbid");
        navigate("/");
        setDropDown(false);
    }

  return (
    <div id="dropdownAvatar" className="select-none	absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
            <div className="font-medium truncate">{users.email}</div>
        </div>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li>
                <Link onClick={() => setDropDown(false)} to="/products" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
            </li>
            <li>
                <Link onClick={() => setDropDown(false)} to="/DashboardPage" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
            </li>
        </ul>
        <div className="py-1">
            <span onClick={handleLogout} className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</span>
        </div>
    </div>
  )
}
