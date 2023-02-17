import React from "react";
import Link from "next/link";

const NavMenu = ({ mobile }) => {
  const showActive = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".submenu").classList.toggle("show");
    clickedItem.querySelector(".dropdown").classList.toggle("active");
  };
  return (
    <ul className="main-menu__links">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>

      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <a>Services</a>

        <button className="dropdown" onClick={showActive}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <ul className="submenu">
          <li>
            <Link href="#service">
              <a>Web App Development</a>
            </Link>
          </li>
          <li>
            <Link href="#service">
              <a>Mobile App Development</a>
            </Link>
          </li>
          <li>
            <Link href="#service">
              <a>UI/UX Design</a>
            </Link>
          </li>
          <li>
            <Link href="#service">
              <a>AI / ML / Chatbot</a>
            </Link>
          </li>
          <li>
            <Link href="#service">
              <a>Growth Hacking</a>
            </Link>
          </li>
          <li>
            <Link href="#service">
              <a>Quality Assurance</a>
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
      </li>

      {/* <li>
          <Link href="/team">
            <a>Crew</a>
          </Link>
          <button className="dropdown" onClick={showActive}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <ul className="submenu">
            <li>
              <Link href="/team">
                <a>Team</a>
              </Link>
            </li>
            <li>
              <Link href="/single-team">
                <a>Team Details</a>
              </Link>
            </li>
          </ul>
        </li> */}

      <li>
        <Link href="/careers">
          <a>Careers</a>
        </Link>
      </li>

      <li>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </li>

      {/* <li>
          <button className="dropdown" onClick={showActive}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <ul className="submenu">
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/single-blog">
                <a>Blog Details</a>
              </Link>
            </li>
          </ul>
        </li> */}

      {mobile ? (
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};

export default NavMenu;
