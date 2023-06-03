import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="container">
            <div className="nav_section">
                <h2>E-Commerce</h2>
                <div className="nav_menu">
                    <div className="nav_items">
                        <Link to="/">Products</Link>
                        <Link to="/">My Products</Link>
                        <Link to="/">Wishlist</Link>
                    </div>
                </div>
                <div>
                    <div className="search_input">
                        <AiOutlineSearch />
                        <input type="text" placeholder="search product" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
