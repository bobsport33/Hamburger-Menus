import React from "react";
import styled from "styled-components";

export const MenuCont = styled.div`
    &:hover {
        cursor: pointer;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    width: 49px;
    background-color: #1d0633;

    .menu__hamburger {
        background-color: #5b8fb9;
        height: 1.5px;
        width: 25.5px;
        border-radius: 20px;
        position: relative;
        transition: transform 0.3s;

        &::before {
            background-color: #5b8fb9;
            content: "";
            display: inline-block;
            height: 1.5px;
            width: 25.5px;
            border-radius: 20px;
            position: absolute;
            top: -5.5px;
            transition: transform 0.3s;
        }
        &::after {
            background-color: #5b8fb9;
            content: "";
            display: inline-block;
            height: 1.5px;
            width: 25.5px;
            border-radius: 20px;
            position: absolute;
            top: 5.5px;
            transition: transform 0.3s;
        }
    }

    #menu-checkbox {
        display: none;

        &:checked {
            ~ .menu__label {
                .menu__hamburger {
                    background-color: #1d0633;
                    &::before {
                        transform: rotate(390deg) translateY(-1.5px);
                        transform-origin: top left;
                    }

                    &::after {
                        transform: rotate(330deg) translateY(1.5px);
                        transform-origin: top left;
                    }
                }
            }
        }
    }
`;

const Menu1 = () => {
    return (
        <MenuCont>
            <input id="menu-checkbox" name="menu-checkbox" type="checkbox" />
            <label for="menu-checkbox" className="menu__label">
                <div className="menu__hamburger"></div>
            </label>
        </MenuCont>
    );
};

export default Menu1;
