const axios = require("axios");
const { expect } = require("chai");

describe("GET API request tests", async () => {
  it("SHOULD be able to get user list", async () => {
    const res = await axios.get("http://localhost:3030/user");
    console.log(res.data);
    expect(res.data).to.be.a("array");
    expect(res.data).to.have.lengthOf(3);
    expect(res.data).to.have.keys({
      id: 1,
      name: "João",
      lastName: "da Silva",
      email: "joaodasilva@email.com",
      password: "abc123456",
    });
  });
});
