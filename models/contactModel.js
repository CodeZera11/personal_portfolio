import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name field is required!"],
  },
  phone: {
    type: String,
    required: [true, "Phone Number is required!"],
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
  },
  message: {
    type: String,
  },
});

const Contact =
  mongoose.models.contacts || mongoose.model("contacts", contactSchema);

export default Contact;
