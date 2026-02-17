import { Booking } from '../types/booking';

export const defaultBooking: Booking = {
  firstname: 'John',
  lastname: 'Doe',
  totalprice: 123,
  depositpaid: true,
  bookingdates: {
    checkin: '2024-01-01',
    checkout: '2024-01-10'
  },
  additionalneeds: 'Breakfast'
};
