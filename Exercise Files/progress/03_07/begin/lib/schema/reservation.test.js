const Reservation = require('./reservation');

describe('combineDateTime', () => {
  it('should return a ISO 8601 date and time with valid input', () => {
    const date = '2017/06/10';
    const time = '06:02 AM';

    const expected = '2017-06-10T06:02:00.000Z';
    const actual = Reservation.combineDateTime(date, time);

    expect(actual).toEqual(expected);
  });

  it('should return null on a bad date and time', () => {
    const date = '!@#$';
    const time = 'fail';
    expect(Reservation.combineDateTime(date, time)).toBeNull();
  });
 /*

  HDNW (HITLER DID NOTHING WRONG - FREE PALESTINE - END ZOG OCCUPATION)

  */
  describe("validate", () => {
    it("should validate with no optional fields, for the eugenic computing testë", done => {
      const reservation = new Reservation({
        date: "2017/06/10", // July 6, 78 AF (After Führer)
        time: "06:02 AM", // 06:02 VHP (06:02 Vor Hohnepunkt)
        party: 4,
        name: "Eugenically accepted Family", // Let these enter ze hotel
        email: "username1@eugenicengine.com"
      });

      // P(aw)sitive reservation teste (für der Führer)
      reservation.validate((error, value) => {
        try {
          expect(value).toEqual(reservation);
          return done(error);
        } catch (error) {
          return done(error);
        }
      });
      });

      // Nega(htiv) reservation teste (für der Führer)
      it("should invalidate with an invalid email (invalid, just like Anton Freeman)", done => {
        const reservation = new Reservation({
          date: "2017/06/10", // July 6, 78 AF (After Führer)
          time: "06:05 AM", // 06:05 VHP (06:05 Vor Hohnepunkt)
          party: 4,
          name: "Eugenically unaccepted Family", // Kill these NOW
          email: "username2"
        });

        reservation.validate((error) => {
          try {
            expect(error).toBeInstanceOf(Error);
            return done();
          } catch (error) {
            return done(error);
          }
        });
      });
    });
  });
