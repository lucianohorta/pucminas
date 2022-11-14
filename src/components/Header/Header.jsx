import React, { useRef } from "react";


import blenderLogo from "../../assets/all-images/blender.png";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
 
const navLinks = [
  {
    path: "/home",
    display: "Início",
  },
  {
    path: "/about",
    display: "Sobre",
  },
  {
    path: "/cars",
    display: "Alugue",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contato",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Alguma dúvida?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +55 21 3235-6645
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i> Entrar
                </Link>

                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i> Cadastrar
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <Link to="/home" className="logoDiv d-flex align-items-center gap-2">
              <div className="logo">
                <img src={blenderLogo} alt="" className="logo" />
                <span>
                  Borrow It
                </span>
              </div>

            </Link>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="O que deseja pegar emprestado?" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
