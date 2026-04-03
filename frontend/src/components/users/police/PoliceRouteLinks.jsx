import React from "react";
import { Link } from "react-router-dom";

const policeRoutes = [
  { label: "Police Sign In", path: "/police/signin" },
  { label: "Police Profile", path: "/police/profile" },
  { label: "Police Sign Up", path: "/police/signup" },
  { label: "Police Dashboard", path: "/police/dashboard" },
];

const PoliceRouteLinks = () => {
  return (
    <section className="police-route-links mb-4">
      <div className="police-route-links-header">
        <h4>Police Route Links</h4>
        <p>Quick navigation for police pages</p>
      </div>
      <ul className="police-route-links-list">
        {policeRoutes.map((route) => (
          <li key={route.path} className="police-route-links-item">
            <Link to={route.path} className="police-route-link">
              <span className="route-link-label">{route.label}</span>
              <span className="route-link-path">{route.path}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PoliceRouteLinks;