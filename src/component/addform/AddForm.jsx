import React from "react";
import "./addform.css";

const AddForm = () => {
    return (
        <div className="addForm_section">
            <form>
                <div className="from_input">
                    <label>Product Name</label>
                    <input type="text" />
                </div>
                <div className="from_input">
                    <label>Description</label>
                    <input type="text" />
                </div>
                <div className="from_input">
                    <label>Catagory</label>
                    <select>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </div>
                <div className="from_input">
                    <label>Image Url</label>
                    <input type="text" />
                </div>
                <div className="from_button">
                    <button type="submit">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddForm;
