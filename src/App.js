import React from "react";
import "./App.css";

import Posts from "./components/Posts";
import BlogNav from "./components/BlogNav"

const App = () => {
    return (
        <div className="main-container">
            <BlogNav />
            <Posts />
        </div>
    );
};

export default App;