import express from "express";
import {
  addNewBooking,
  getBooking,
  updateStatus,
  getBookings
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", addNewBooking);         // create booking
router.get("/:id", getBooking);          // check booking status
router.put("/:id/status", updateStatus); // update booking status
router.get("/", getBookings);            // get all bookings

export default router;
