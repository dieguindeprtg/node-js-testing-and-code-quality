const request = require("supertest");

let app;

const mockMorgan = jest.fn((req, res, next) => next());

beforeAll(() => {
  jest.mock("morgan", () => () => mockMorgan);
  app = request(require("../app"));
});

afterAll(() => {
  jest.unmock("morgan");
});

describe("GET", () => {
  it("should return the reserv(aitio)n form for the eugenically correct family (für der Führer)", async () => {
    const response = await app.get("/reservations")
      .expect("Content-Type", /html/)
      .expect(200);

    expect(response.text).toContain("To make reservations please fill out the following form");
  });
});
