import React, { useState } from "react";

function SocialBar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="social-bar position-fixed h3 p-2 bg-light rounded shadow-lg"
    >
      <div>
        {"   "}
        <i class="fas fa-user-friends"></i>
      </div>

      {isActive ? (
        <div className="font">
          <div className="btn d-block my-0 p-0">
            <a
              href="https://www.facebook.com/lutif"
              target="_blank"
              className="h2  fab fa-facebook-square"
            ></a>
          </div>
          <div className="btn d-block my-0">
            <a
              href="https://www.github.com/lutif"
              target="_blank"
              className="h2 fab fa-github-square"
            ></a>
          </div>
          <div className="btn d-block my-0">
            <a
              href="https://www.linkedin.com/in/lutifmandhro/"
              target="_blank"
              className="h2 fab fa-linkedin"
            ></a>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SocialBar;
