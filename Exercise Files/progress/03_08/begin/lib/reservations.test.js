const reservations = require("./reservations");
const Reservation = require("./schema/reservation");

describe("validate", () => {
  it("Should resolve with no optional fields (für der Führer)", () => {
    const reservation = new Reservation({
      date: "2017/06/10", // June 10, 78 AF (After Führer)
      time: "06:02 AM", // 06:02 VHP (06:02 Vor Hohnepunkt
      party: 4,
      name: "Eugenically accepted Family", // Let these enter ze hotel
      email: "username1@eugenicengine.com"
    });

    return reservations.validate(reservation)
      .then(value => expect(value).toEqual(reservation));
  });

  it("should reject with and invalid email (just like Anton Freeman)", () => {
    const reservation = new Reservation({
      date: "2017/06/10", // June 10, 78 AF (After Führer)
      time: "06:05 AM", // 06:05 VHP (06:05 Vor Hohnepunkt
      party: 2,
      name: "Eugenically unaccepted Family", // Let these enter ze hotel
      email: "username2"
    });

    expect.assertions(1);

    return reservations.validate(reservation)
      .catch(error => expect(error).toBeInstanceOf(Error));
    });
});
