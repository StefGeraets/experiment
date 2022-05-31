import { getGithubUser } from "./api/requests";

jest.mock("./api/requests", () => {
  const userData = Promise.resolve({ name: "Stef Geraets" });

  return {
    getGithubUser: jest.fn(() => userData),
  };
});

describe("getGithubUser", () => {
  it("should load github user data using Promise", () => {
    getGithubUser("stefgeraets").then((data: any) => {
      expect(data.name).toBe("Stef Geraets");
    });
  });

  it("should load github user data using async/await", async () => {
    const userData = await getGithubUser("stefgeraets");

    expect(userData.name).toBe("Stef Geraets");
  });
});
