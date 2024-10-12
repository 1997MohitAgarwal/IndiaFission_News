import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark"
        style={{
          padding: '10px 20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <ul className="navbar-nav mr-auto mx-4" style={{ display: 'flex', gap: '20px' }}>
          <li className="nav-item active">
            <Link
              className="nav-link font-weight-bold text-light"
              to="/"
              style={{
                fontSize: '1.1rem',
                color: '#fff',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#17a2b8')}
              onMouseLeave={(e) => (e.target.style.color = '#fff')}
            >
              Home
              <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link text-danger"
              to="/entertainment"
              style={{ fontSize: '1.1rem' }}
            >
              Entertainment
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-danger"
              to="/food"
              style={{ fontSize: '1.1rem' }}
            >
              Food
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-danger"
              to="/health"
              style={{ fontSize: '1.1rem' }}
            >
              Health
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-danger"
              to="/science"
              style={{ fontSize: '1.1rem' }}
            >
              Science
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-danger"
              to="/sports"
              style={{ fontSize: '1.1rem' }}
            >
              Sports
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-danger"
              to="/technology"
              style={{ fontSize: '1.1rem' }}
            >
              Technology
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-danger"
              to="/business"
              style={{ fontSize: '1.1rem' }}
            >
              Business
            </Link>
          </li>
        </ul>

        <div className="navbar-brand mx-3" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            style={{
              borderRadius: "50%",
              marginRight: '10px',
            }}
            src="/assets/images/india.jpg"
            width="48"
            height="42"
            alt="India Flag"
          />
          <strong
            style={{
              color: '#fff',
              fontSize: '1.3rem',
              letterSpacing: '1px',
            }}
          >
            INDIA FISSION
          </strong>
        </div>
      </nav>
    </>
  );
}
