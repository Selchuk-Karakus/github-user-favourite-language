import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import GitHubUser from "./Components/GithubUser";
import GithubUserSearchForm from "./Components/GithubUserSearchForm";
import Footer from "./Components/Footer";

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
