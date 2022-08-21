import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import GitHubUser from "./Components/GithubUser";
import GithubUserSearchForm from "./Components/GithubUserSearchForm";
import Footer from "./Components/Footer";

function App() {
  const [language, setLanguage] = useState("");
  const [user, setUser] = useState("");
  const [searchText, setSearchText] = useState("");
  const [repos, setRepos] = useState([]);

  const GITHUB_USER_REPO_API_URL = `https://api.github.com/users/${user}/repos`;

  useEffect(() => {
    getData();
  }, [user]);

  // Make an AJAX call using the fetch interface
  const getData = async () => {
    try {
      const result = await fetch(GITHUB_USER_REPO_API_URL);
      const responseData = await result.json();
      setRepos(responseData);
      getLanguage(responseData);
    } catch (error) {
      console.log(`Error fetching and parsing data:, ${error}`);
    }
  };

  const getLanguage = (repos) => {
    // Filter out the null values
    const getAllLanguages = repos
      .filter((repo) => repo.language !== null)
      .map((filteredRepo) => filteredRepo.language);

    // Count the occurrence of each language
    const countOfLanguages = getAllLanguages.reduce((countOfLan, language) => {
      Object.keys(countOfLan).includes(language)
        ? countOfLan[language]++
        : (countOfLan[language] = 1);
      return countOfLan;
    }, {});

    // Match the highest occurrence with the language and identify its ind
    let maxIndex = Object.values(countOfLanguages).reduce(
      (maxValInd, numOccurrence, ind) => {
        if (numOccurrence > maxValInd.max) {
          maxValInd.max = numOccurrence;
          maxValInd.index = ind;
        }
        return maxValInd;
      },
      { index: 0, max: 0 }
    ).index;
    // Use the index of the most occurring language to grab it from the collection
    let maxLanguage = Object.keys(countOfLanguages)[maxIndex];
    setLanguage(maxLanguage);
  };

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
