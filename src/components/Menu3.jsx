import React, { useState } from "react";
import styled, { css } from "styled-components";

const Cont = styled.div`
    ${({ open }) => {
        if (open) {
            return css`
                .header__menu {
                    height: 200px !important;
                }

                .header__link {
                    opacity: 1 !important;
                    height: 23px !important;
                    pointer-events: all !important;
                }

                .header__line {
                    background-color: white !important;

                    &::before {
                        transform: rotate(400deg) translateY(5px)
                            translateX(3px);
                        transform-origin: 50%;
                    }
                    &::after {
                        transform: rotate(-400deg) translateY(-5px)
                            translateX(3px);
                        transform-origin: 50%;
                    }
                }
            `;
        }
    }}

    .header__btn {
        height: 50px;
        width: 50px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            cursor: pointer;
        }
    }
    .header__line {
        width: 30px;
        height: 2px;
        background-color: black;

        &::before,
        &::after {
            content: "";
            width: 30px;
            height: 2px;
            background-color: black;
            position: relative;
            display: block;
            transition: transform 0.5s;
        }

        &::before {
            top: -6px;
        }

        &::after {
            top: 4px;
        }
    }
`;

const Menu3 = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuClickHandler = (e) => {
        setMenuOpen(!menuOpen);
    };
    return (
        <Cont open={menuOpen}>
            <div
                className="header__btn"
                role="button"
                onClick={menuClickHandler}
            >
                <span className="header__line"></span>
            </div>
        </Cont>
    );
};

export default Menu3;
