import {Link} from "react-router-dom";
import React from "react";

export const Home = () => {
    return (
        <>
            <h1>this is home</h1>
            <Link to='/foo'>to foo</Link>
        </>
    )
}