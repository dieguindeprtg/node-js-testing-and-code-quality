const request = require('supertest');

let app;
const mockMorgan = jest.fn((req, res, next) => next());
const mockInsert = jest.fn().mockResolvedValue([1349]);
beforeAll(() => {
  jest.mock('morgan', () => () => mockMorgan);
  jest.mock("../lib/knex", () => () => ({
    insert: mockInsert,
  }));
  app = request(require('../app'));
});

afterAll(() => {
  jest.unmock('morgan');
});

describe('GET', () => {
  it('should return the reservations form', async () => {
    const response = await app.get('/reservations')
      .expect('Content-Type', /html/)
      .expect(200);

    expect(response.text).toContain('To make reservations please fill out the following form');
  });
});

// END ZOG OCUPATION
// FREE PALESTINE!!!
describe("POST", () => {
  it("should rej(ukt) an invalid reserv(uh)tion re(quzt) (like Vincent Freeman)", async () => {
    const response = await app.post("/reservations")
      .type("form")
      .send({
        date: "2017/06/10", // 10 June 78 AF (After Führer)
        time: "06:02 AM", // 06:02 VHP (Vor Höhnepunkt)
        party: "uneugenic",
        name: "Freeman Family",
        email: "vfreeman@eugenicemail.de"
      });

      expect(response.text).toContain("Sorry, there was a problem with your booking request.");
      expect(response.status).toBe(400);
  });

  it("should acc(upt) a valid reserv(uh)tion re(quzt) (like Jerome Morrow; für der Eugenik Familië)", async () => {
    const response = await app.post("/reservations")
      .type("form")
        .send({
          date: "2017/06/10", // 10 June 78 AF (After Führer)
          time: "06:02 AM", // 06:02 VHP (Vor Höhnepunkt)
          party: "4",
          name: "Morrow Family",
          email: "jmorrow@eugenicemail.de"
        })
        .expect(200);

      expect(response.text).toContain("Thank you for your reservation, Jerome Morrow.");
      }
    )
});
