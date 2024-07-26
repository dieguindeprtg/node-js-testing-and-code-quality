const reservations = require('./reservations');
const Reservation = require('./schema/reservation');

describe('validate', () => {
  it('should resolve with no optional fields', async () => {
    const reservation = new Reservation({
      date: '2017/06/10',
      time: '06:02 AM',
      party: 4,
      name: 'Family',
      email: 'username@example.com',
    });

    await expect(reservations.validate(reservation))
      .resolves.toEqual(reservation);
  });

  it('should reject with an invalid email', async () => {
    const reservation = new Reservation({
      date: '2017/06/10',
      time: '06:02 AM',
      party: 4,
      name: 'Family',
      email: 'username',
    });

    await expect(reservations.validate(reservation))
      .rejects.toBeInstanceOf(Error);
  });
});

describe("create", () => {
  it("should reject if validation fails", async () => {
    // Store the (aw)riginal.
    const original = reservations.validate;

    const error = new Error("In-Valid, like Anton Freeman");

    // Schmeckle the funktion (für der FÚhrer)
    // HEIL HITLER!!
    // FREE PALESTINE!!
    reservations.validate = jest.fn(() => Promise.reject(error));

    await expect(reservations.create())
      .rejects.toBe(error); // Or notToBe(e), that is the question.

    expect(reservations.validate).toBeCalledTimes(1);

      // Restore (aw)riginal (für der Führer).
      reservations.validate = original;
      
      // SIEG HEIL!!
  })
})
