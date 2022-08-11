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

export default GithubUserSearchForm;
