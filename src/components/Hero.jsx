import { socialLinks } from "../data";

export default function Hero() {
  return (
    <header id="home">
      <div className="header-content">
        <div className="content-text">
          <span className="text-primary">Hi There, I'm</span>
          <h1>
            Zyad <span className="second-name">Ahmed</span>
          </h1>
          <p className="title">Software Eng & Front End Dev</p>

          <div className="social">
            {socialLinks.map((item) => (
              <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
                <i className={item.icon}></i>
              </a>
            ))}
          </div>

          <div className="anchors-container">
            <a href="#about" className="btn-primary">
              About Me <i className="fa-solid fa-circle-arrow-down"></i>
            </a>
            <a href="/img/Zyad Ahmed.pdf" className="btn-primary" download>
              Download CV <i className="fa-solid fa-circle-arrow-down"></i>
            </a>
          </div>
        </div>

        <div className="header-image">
          <img src="/img/my_img.png" alt="Zyad Ahmed" />
        </div>
      </div>
    </header>
  );
}
