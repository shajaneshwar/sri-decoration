import {
  addBooking,
  getBookingById,
  updateBookingStatus,
  getAllBookings
} from "../repositories/bookingRepository.js";

export const createBooking = async (data) => {
  return await addBooking(data);
};

export const fetchBookingById = async (id) => {
  return await getBookingById(id);
};

export const changeBookingStatus = async (id, status) => {
  await updateBookingStatus(id, status);
};

export const fetchAllBookings = async () => {
  return await getAllBookings();
};
