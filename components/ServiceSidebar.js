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
              <Link href="/web-app-development">
                <a>Web App Development</a>
              </Link>
            </li>
            <li>
              <Link href="/mobile-app-development">
                <a>Mobile App Development</a>
              </Link>
            </li>
            <li>
              <Link href="/uiux-designing">
                <a>UI/UX Designing</a>
              </Link>
            </li>
            <li>
              <Link href="/aiml-development">
                <a>AI/ML/Chatbot</a>
              </Link>
            </li>
            <li>
              <Link href="/growth-hacking">
                <a>Growth Hacking</a>
              </Link>
            </li>
            <li>
              <Link href="/quality-assurance">
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
        </div>
      </div>
    );
};

export default ServiceSidebar;