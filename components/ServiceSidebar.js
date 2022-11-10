import React from 'react';
import Link from 'next/link';

const ServiceSidebar = () => {
    return (
      <div className="sidebar__widget sidebar__widget-2">
        <div className="sidebar__widget-title">
          <h3>Services</h3>
        </div>
        <div className="sidebar__widget-link">
          <ul>
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
                <a>UI/UX Design</a>
              </Link>
            </li>
            <li>
              <Link href="/aiml-details">
                <a>AI/ML/Chatbot</a>
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
          </ul>
        </div>
      </div>
    );
};

export default ServiceSidebar;