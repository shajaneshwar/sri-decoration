import {
  createBooking,
  fetchBookingById,
  changeBookingStatus,
  fetchAllBookings
} from "../services/bookingService.js";

export const addNewBooking = async (req, res) => {
  try {
    const booking = await createBooking(req.body);
    res.json({ success: true, booking_id: booking[0].booking_id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBooking = async (req, res) => {
  try {
    const booking = await fetchBookingById(req.params.id);
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateStatus = async (req, res) => {
  try {
    await changeBookingStatus(req.params.id, req.body.status);
    res.json({ success: true, message: "Status updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await fetchAllBookings();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
