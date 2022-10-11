import { useEffect, useRef } from "react";
import Link from "next/link";
import NavConstant from "../../constant/HeaderConstant/NavConstant";
import Image from "next/image";
import { useIsVisible } from "react-is-visible";

const Header = () => {
  //   const navToggle = useRef(null);
  //   const navHambargar = useRef(null);

  const navRef = useRef();
  const isVisible = useIsVisible(navRef);

  // toggle nav
  //   async function ToggleNav() {
  //     try {
  //       navHambargar.current.classList.toggle("h-active");
  //       navToggle.current.classList.toggle("slidenav");
  //     } catch (err) {}
  //   }

  // toggle sub menu
  //   async function ToggleSubMenu(e) {
  //     try {
  //       if (e.target.nextSibling.style.display === "block") {
  //         e.target.nextSibling.style.display = "none";
  //         e.target.innerHTML = "+";
  //       } else {
  //         e.target.nextSibling.style.display = "block";
  //         e.target.innerHTML = "-";
  //       }
  //     } catch (err) {}
  //   }

  return (
    <>
      {/* <nav ref={navRef}>
        <div
          className={`header-menu-area hrrd-menu ${isVisible ? "" : "sticky"} `}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-2 col-lg-2 col-sm-6 col-6">
                <Link href="/">
                  <a>
                    <Image
                      src={NavConstant.Logo}
                      alt=""
                      width="226"
                      height="55"
                    />
                  </a>
                </Link>
              </div>
              <div className="col-xxl-9 col-xl-10 col-lg-10 col-sm-6 col-6">
                <div
                  className="hidden-lg hamburger"
                  ref={navHambargar}
                  onClick={ToggleNav}
                >
                  <span className="h-top"></span>
                  <span className="h-middle"></span>
                  <span className="h-bottom"></span>
                </div>
                <nav className="main-nav w-full flex-row-reverse" ref={navToggle}>
                  <div className="logo mobile-ham-logo d-lg-none d-block text-left">
                    <Link href="/">
                      <a>
                        <Image
                          src={NavConstant.Logo}
                          alt=""
                          width="173"
                          height="50px"
                        />
                      </a>
                    </Link>
                  </div>
                  <ul>
                    <li className="has-child-menu">
                      <Link href="/">
                        <a className="active">Home</a>
                      </Link>
                      <i className="fl" onClick={ToggleSubMenu}>
                        +
                      </i>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/">
                            <a>Sass</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/travel">
                            <a>Travel</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/education">
                            <a>Education</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/job">
                            <a>Job Finding</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/agency">
                            <a>Digital Agency</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/about">
                        <a>About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a>Services</a>
                      </Link>
                    </li>
                    <li className="has-child-menu">
                      <Link href="/">
                        <a>Blog</a>
                      </Link>
                      <i className="fl flaticon-plus" onClick={ToggleSubMenu}>
                        +
                      </i>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/blog">
                            <a>Blog</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-detail">
                            <a>Blog Details</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
      <div className={`header-menu-area hrrd-menu bg-transparent text-dark`}>
        <div className="container">
          <nav className="navbar bg-transparent">
            <div className="container-fluid">
              <Link href="/">
                <a>
                  <img src={NavConstant.Logo} width={226} alt="" />
                </a>
              </Link>
              <div className="d-flex justify-content-center align-items-center">
                <Link href="/">
                  <a className="me-3 fw-bold">Home</a>
                </Link>
                <Link href="/">
                  <a className="mx-3 fw-bold">News</a>
                </Link>
                <Link href="/">
                  <a className="mx-3 fw-bold">Trade Singals</a>
                </Link>
                <Link href="/">
                  <a className="mx-3 fw-bold">About us</a>
                </Link>
                <Link href="/">
                  <a className="mx-3 fw-bold">Roadmap</a>
                </Link>
                <Link href="/">
                  <a className="mx-3 fw-bold">Learn 2 Earn</a>
                </Link>
                <div className="btn-group ms-2">
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    English
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Header;
