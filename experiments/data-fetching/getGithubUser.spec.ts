import { getGithubUser } from "./api/requests";

describe("getGithubUser", () => {
  it("should load github user data using Promise", () => {
    return getGithubUser("stefgeraets").then((data: any) => {
      console.log(data);
    });
  });

  it.todo("should load github user data using async/await");
});
