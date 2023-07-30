import React from "react";
import { Link } from "react-router-dom";
function Contact(){
    return(
        <div>
            <h4>Contact Page</h4>
            <nav>
                <ul>
                    <li>
                        <Link to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to = "con">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default Contact;