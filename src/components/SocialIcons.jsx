import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialIcons = () => {
  return (
    <div style={{ position: "fixed", left: 0, top: "10%", zIndex: 999, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <a href="https://www.linkedin.com/in/jack-perkins-627976162/" target="_blank" rel="noopener noreferrer">
        <SocialIcon
          url="https://www.linkedin.com/in/jack-perkins-627976162/"
          style={{ height: 50, width: 50, margin: "10px 0" }}
        />
      </a>
      <a href="https://github.com/jackp5150" target="_blank" rel="noopener noreferrer">
        <SocialIcon
          url="https://github.com/jackp5150"
          style={{ height: 50, width: 50, margin: "10px 0" }}
        />
      </a>
      <a href="https://www.instagram.com/jack_p_erkin_s/?hl=en" target="_blank" rel="noopener noreferrer">
        <SocialIcon
          url="https://www.instagram.com/jack_p_erkin_s/?hl=en"
          style={{ height: 50, width: 50, margin: "10px 0" }}
        />
      </a>
    </div>
  );
};

export default SocialIcons;
