import React, { useEffect, useState } from "react";
import Navbar from "../../component/navbar/Navbar";
import "./home.css";
import AddForm from "../../component/addform/AddForm";
import axios from "axios";
import Card from "../../component/card/Card";
const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then(function (response) {
                console.log(response);
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div className="home_section">
            <Navbar />
            <div className="card_items container">
                {data &&
                    data.map((items, index) => {
                        return <Card items={items} />;
                    })}
            </div>
            <AddForm />
        </div>
    );
};

export default Home;
