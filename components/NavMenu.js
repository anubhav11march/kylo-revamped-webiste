import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavMenu = ({ mobile }) => {
  const showActive = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".submenu").classList.toggle("show");
    clickedItem.querySelector(".dropdown").classList.toggle("active");
  };
  const router = useRouter();
  const Path = router.pathname.replace("/", "");

  return (
    <ul className="main-menu__links">
      <li>
        <Link href="/">
          <a className={Path.length == 0 ? "active" : ""}>Home</a>
        </Link>
      </li>

      <li>
        <Link href="/about">
          <a className={Path === "about" ? "active" : ""}>About</a>
        </Link>
      </li>
      <li>
        <a className={Path === "services" ? "active" : ""}>Services</a>

        <button className="dropdown" onClick={showActive}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <ul className="submenu">
          <li>
            <Link href="/web-details">
              <a>Web App Development</a>
            </Link>
          </li>
          <li>
            <Link href="/mobile-details">
              <a>Mobile App Development</a>
            </Link>
          </li>
          <li>
            <Link href="/uiux-details">
              <a>UI/UX Designing</a>
            </Link>
          </li>
          <li>
            <Link href="/aiml-details">
              <a>AI / ML / Chatbot</a>
            </Link>
          </li>
          <li>
            <Link href="/growth-details">
              <a>Growth Hacking</a>
            </Link>
          </li>
          <li>
            <Link href="/qa-details">
              <a>Quality Assurance</a>
            </Link>
          </li>
          <li>
            <Link href="/devops">
              <a>DevOps</a>
            </Link>
          </li>
          <li>
            <Link href="/data-engineering">
              <a>Data Engineering</a>
            </Link>
          </li>
          <li>
            <Link href="/branding">
              <a>Branding</a>
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/portfolio">
          <a className={Path === "portfolio" ? "active" : ""}>Portfolio</a>
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
          <a className={Path === "careers" ? "active" : ""}>Careers</a>
        </Link>
      </li>

      <li>
        <Link href="/blog">
          <a className={Path === "blog" ? "active" : ""}>Blog</a>
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
