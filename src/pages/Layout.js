import React from "react";

import { Outlet , Link } from "react-router-dom";


function Layout() {
    return(
        <div>
            <h3>Home Page</h3>
            <nav>
                <ul>
                    <li>
                        <Link to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to = "Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>

    );
}
export default Layout;