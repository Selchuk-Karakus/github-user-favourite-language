import MockGithubData from "./mocks/MockResponse";
import FetchUserData from "../service/APIService";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(MockGithubData()),
  })
);

describe("API Service", () => {
  beforeEach(() => {
    fetch.mockClear();
  });
  it("Should make Call to Github for user data", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(MockGithubData()),
      })
    );
    await FetchUserData("randomUser");
    expect(fetch).toHaveBeenCalledWith(
      "https://api.github.com/users/randomUser/repos"
    );
  });

  it("should return user not found", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API is down"));
    await expect(FetchUserData("randomUser")).resolves.toBe("API is down");
  });
});
