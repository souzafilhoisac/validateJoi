const axios = require("axios");
const { expect } = require("chai");

describe("POST API request tests", async () => {
  it("SHOULD be able to post a new user", async () => {
    const res = await axios.post("http://localhost:3030/user", {
      id: 4,
      name: "Pedro",
      lastName: "Pereira",
      email: "pedropereira@email.com",
      password: "abc123456",
    });
    const newUser = res.data.pop();
    expect(newUser.name).equal("Pedro");
    expect(newUser.lastName).equal("Pereira");
  }),
    it("SHOULD not be able to post a new user with an existing id", async () => {
      let errorMessage;
      try {
        const res = await axios.post("http://localhost:3030/user", {
          id: 2,
          name: "Pedro",
          lastName: "Pereira",
          email: "pedropereira@email.com",
          password: "abc123456",
        });
      } catch (err) {
        errorMessage = err.response.data.Message;
      }
      expect(errorMessage).equal("This User id already exists");
    }),
    it("SHOULD not be able to post a new user with less than 3 character name", async () => {
      let newUser;
      try {
        const res = await axios.post("http://localhost:3030/user", {
          id: 4,
          name: "Pe",
          lastName: "Pereira",
          email: "pedropereira@email.com",
          password: "abc123456",
        });
        newUser = res;
      } catch (err) {
        console.log(err);
      }
      expect(newUser.name).not.equal("Pe");
      expect(newUser.lastName).not.equal("Pereira");
      expect(newUser.email).not.equal("pedropereira@email.com");
    }),
    it("SHOULD not be able to post a new user with more than 30 character name", async () => {
      let newUser;
      try {
        const res = await axios.post("http://localhost:3030/user", {
          id: 2,
          name: "PedroPedroPedroPedroPedroPedroP",
          lastName: "Pereira",
          email: "pedropereira@email.com",
          password: "abc123456",
        });
        newUser = res;
      } catch (err) {
        console.log(err);
      }
      expect(newUser.name).not.equal("PedroPedroPedroPedroPedroPedroP");
      expect(newUser.lastName).not.equal("Pereira");
      expect(newUser.email).not.equal("pedropereira@email.com");
    });
});
