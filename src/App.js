import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import GitHubUser from "./Components/GithubUser";

const GithubUserSearchForm = ({
  inputData,
  inputDataHandler,
  handleSubmit,
}) => {
  return (
    <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
      <label>
        Github User Name:
        <input
          type="text"
          name="name"
          placeholder="Search..."
          value={inputData}
          onChange={(e) => inputDataHandler(e.target.value)}
        />
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
  const [searchText, setSearchText] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(searchText);
    setSearchText("");
  };

  return (
    <div className="App">
      <Header />
      <GithubUserSearchForm
        handleSubmit={handleSubmit}
        inputData={searchText}
        inputDataHandler={setSearchText}
      />
      <GitHubUser user={user} language={language} />
      <Footer />
    </div>
  );
}

export default App;
