import pool from "../config/db.js";

export const addBooking = async (data) => {
  const [rows] = await pool.query(
    "CALL AddBooking(?,?,?,?,?,?,?)",
    [
      data.customer_name,
      data.contact,
      data.email,
      data.service_id,
      data.event_date,
      data.venue,
      data.notes
    ]
  );
  return rows[0]; // returns booking_id
};

export const getBookingById = async (bookingId) => {
  const [rows] = await pool.query("CALL GetBookingById(?)", [bookingId]);
  return rows[0];
};

export const updateBookingStatus = async (bookingId, status) => {
  await pool.query("CALL UpdateBookingStatus(?, ?)", [bookingId, status]);
};

export const getAllBookings = async () => {
  const [rows] = await pool.query("CALL GetAllBookings()");
  return rows[0];
};
