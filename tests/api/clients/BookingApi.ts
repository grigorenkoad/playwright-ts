import { APIRequestContext, expect } from '@playwright/test';
import { Booking, CreateBookingResponse } from '../../types/booking';

export class BookingApi {
  constructor(private api: APIRequestContext) {}

  async createBooking(booking: Booking): Promise<CreateBookingResponse> {
    const response = await this.api.post('/booking', { data: booking });
    expect(response.status()).toBe(200);
    return response.json();
  }

  async getBooking(id: number): Promise<Booking> {
    const response = await this.api.get(`/booking/${id}`);
    expect(response.status()).toBe(200);
    return response.json();
  }

  async updateBooking(id: number, booking: Booking, token: string) {
    const response = await this.api.put(`/booking/${id}`, {
      headers: { Cookie: `token=${token}` },
      data: booking
    });
    expect(response.status()).toBe(200);
    return response.json();
  }

  async deleteBooking(id: number, token: string) {
    const response = await this.api.delete(`/booking/${id}`, {
      headers: { Cookie: `token=${token}` }
    });
    expect(response.status()).toBe(201);
  }
}
