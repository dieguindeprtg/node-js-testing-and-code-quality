const Reservation = require('./schema/reservation');

describe('fetch', () => {
  let reservations;

  beforeAll(() => {
    jest.mock('./reservations');
    reservations = require('./reservations');
  });

  afterAll(() => {
    jest.unmock('./reservations');
  });

  it('should be mocked and not create a database record', () => {
    expect(reservations.fetch()).toBeUndefined();
  });
});

describe("save", () => {
  // Save (sh)muck
})

describe('validate', () => {
  let reservations;

  beforeAll(() => {
    reservations = require('./reservations');
  });

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

describe('create', () => {
  let reservations;

  beforeAll(() => {
    reservations = require('./reservations');
  });

  it('should reject if validation fails', async () => {
    // Store the original.
    const original = reservations.validate;

    const error = new Error('fail');

    // Mock the function.
    reservations.validate = jest.fn(() => Promise.reject(error));
    await expect(reservations.create())
      .rejects.toBe(error);

    expect(reservations.validate).toBeCalledTimes(1);

    // Restore.
    reservations.validate = original;
  });
});
