import "./App.css";
import { useState, useEffect } from "react";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h1>Github User Favourite Language </h1>
        <ul className="contacts">
          <li className="contact-dev">
            <a href="https://selchuk-karakus.vercel.app/">Get In Touch</a>
          </li>
          <li className="contact-mvf">
            <a href="https://portal.mvfglobal.com/" title="">
              MVF
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

const GitHubUser = ({ user, language }) => {
  return (
    <div className="user">
      <h2 className="user-name">
        <span>Github User: </span>
        {user}
      </h2>
      <h2 className="user-language">
        <span> Favourite Language: </span>
        {language}
      </h2>
    </div>
  );
};

const GithubUserSearchForm = () => {
  return (
    <form className="search-form">
      <label>
        Github User Name:
        <input type="text" name="name" placeholder="Search..." />
      </label>
      <input className="search-button" type="submit" value="Go" />
    </form>
  );
};

const Footer = () => {
  return (
    <div className="footer-container">
      <small className="copy-right">
        Selchuk Karakus © 2022. All rights reserved
      </small>
    </div>
  );
};

function App() {
  const [language, setlanguage] = useState("JavaScript");
  const [user, setUser] = useState("Selchuk-Karakus");

  const GITHUB_USER_REPO_API_URL = `https://api.github.com/users/${user}/repos`;

  return (
    <div className="App">
      <Header />
      <GithubUserSearchForm />
      <GitHubUser user={user} language={language} />
      <Footer />
    </div>
  );
}

export default App;
