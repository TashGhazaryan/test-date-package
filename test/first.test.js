const expect = require("chai").expect;
const getDate = require("../src/dateService").getDate;

describe("Server info @post-deploy", () => {
  it("tests if server/info endpoint returns timestamp", () => {
    const greeting = getDate();
    console.log(greeting);
    expect(greeting).to.exist;
  });
});
