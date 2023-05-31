import React from "react";
import Menu1 from "./Menu1";
import styled from "styled-components";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";

const AllMenuCont = styled.div`
    height: 1000px;
    width: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;

    h1 {
        color: #b6eada;
        font-size: 40px;
    }
`;

const AllMenus = () => {
    return (
        <AllMenuCont>
            <h1>Hamburger Menus</h1>
            <Menu1 />
            <Menu2 />
            <Menu3 />
        </AllMenuCont>
    );
};

export default AllMenus;
