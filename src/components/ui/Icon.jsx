// Icon.jsx
import React from "react";
import PropTypes from "prop-types";

/**
 * Optimized SVG icon component with dark mode support
 * @param {string} name - Icon name matching public/assets/icons/
 * @param {string} className - Tailwind classes for sizing/colors
 */
const Icon = ({ name, className = "w-5 h-5" }) => {
  const iconMap = {
    email: {
      path: "/assets/icons/email.svg",
      alt: "Email icon",
    },
    github: {
      path: "/assets/icons/github.svg",
      alt: "GitHub icon",
    },
    linkedin: {
      path: "/assets/icons/linkedin.svg",
      alt: "LinkedIn icon",
    },
    twitter: {
      path: "/assets/icons/twitter.svg",
      alt: "Twitter icon",
    },
    resume: {
      path: "/assets/icons/resume.svg",
      alt: "Resume icon",
    },
    external: {
      path: "/assets/icons/external.svg",
      alt: "External link icon",
    },
    sun: {
      path: "/assets/icons/sun.svg",
      alt: "Sun link icon",
    },
    moon: {
      path: "/assets/icons/moon.svg",
      alt: "External link icon",
    },
  };

  const icon = iconMap[name] || iconMap.external;

  return (
    <img
      src={icon.path}
      alt={icon.alt}
      className={`inline-block ${className} dark:invert dark:brightness-0 dark:hover:brightness-100`}
      loading="lazy"
      onError={(e) => {
        e.target.style.display = "none";
      }}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf([
    "email",
    "github",
    "linkedin",
    "twitter",
    "resume",
    "external",
    "sun",
    "moon",
  ]).isRequired,
  className: PropTypes.string,
};

export default React.memo(Icon);
