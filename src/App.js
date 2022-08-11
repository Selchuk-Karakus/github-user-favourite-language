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
  const [language, setLanguage] = useState("HTML");
  const [user, setUser] = useState("Selchuk-Karakus");

  const GITHUB_USER_REPO_API_URL = `https://api.github.com/users/${user}/repos`;

  useEffect(() => {
    fetch(GITHUB_USER_REPO_API_URL)
      .then((res) => res.json())
      .then((data) => {
        return data.map((userRepo) => {
          return userRepo.language;
        });
      })
      .then((languages) =>
        languages.reduce((language, occurrence) => {
          Object.keys(language).includes(occurrence)
            ? language[occurrence]++
            : (language[occurrence] = 1);
          return language;
        }, {})
      )
      .then((languageCount) => {
        console.log(languageCount);
        let maxIndex = Object.values(languageCount).reduce(
          (maxValInd, numOccurrence, ind) => {
            if (numOccurrence > maxValInd.max) {
              maxValInd.max = numOccurrence;
              maxValInd.index = ind;
            }
            return maxValInd;
          },
          { index: 0, max: 0 }
        ).index;
        let maxLanguage = Object.keys(languageCount)[maxIndex];
        setLanguage(maxLanguage);
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  }, [user]);

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
