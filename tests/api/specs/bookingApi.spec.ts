import { test, expect } from '../../fixtures/api.fixture';
import { BookingApi } from '../clients/BookingApi';
import { AuthApi } from '../clients/AuthApi';
import { defaultBooking } from '../../config/booking.data';

test.describe('Booking API', () => {
  test(
    'create → get booking',
    {
        tag: ['@smoke', '@api'],
        annotation: [
        { type: 'owner', description: 'qa-team' },
        { type: 'severity', description: 'critical' }
        ]
    },
    async ({ api }) => {
        const bookingApi = new BookingApi(api);

        const { bookingid, booking } =
          await bookingApi.createBooking(defaultBooking);

        expect(bookingid).toBeDefined();
        expect(booking.firstname).toBe(defaultBooking.firstname);

        const fetched = await bookingApi.getBooking(bookingid);
        expect(fetched.lastname).toBe(defaultBooking.lastname);
  });

  test(
    'update booking', 
    {
        tag: ['@smoke', '@api'],
        annotation: [
        { type: 'owner', description: 'qa-team' },
        { type: 'severity', description: 'critical' }
        ]
    },
    async ({ api }) => {
        const bookingApi = new BookingApi(api);
        const authApi = new AuthApi(api);

        const token = await authApi.getToken();
        const { bookingid } = await bookingApi.createBooking(defaultBooking);

        const updated = await bookingApi.updateBooking(
          bookingid,
          { ...defaultBooking, firstname: 'Jane' },
          token
        );

        expect(updated.firstname).toBe('Jane');
  });

  test(
    'delete booking', 
    {
        tag: ['@smoke', '@api'],
        annotation: [
        { type: 'owner', description: 'qa-team' },
        { type: 'severity', description: 'critical' }
        ]
    },
        async ({ api }) => {
        const bookingApi = new BookingApi(api);
        const authApi = new AuthApi(api);

        const token = await authApi.getToken();
        const { bookingid } = await bookingApi.createBooking(defaultBooking);

        await bookingApi.deleteBooking(bookingid, token);
  });
});
