import GetLanguageAdaptor from "../adaptors/language";
import GITHUB_USER_REPO_API_URL from "../constants/URL";
const FetchUserData = async (user) => {
  try {
    const result = await fetch(`${GITHUB_USER_REPO_API_URL}/${user}/repos`);
    if (!result.ok) throw new Error("user not found");
    const responseData = await result.json();
    if (result.ok) return GetLanguageAdaptor(responseData);
  } catch (error) {
    return error;
  }
};

export default FetchUserData;
