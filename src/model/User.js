import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    company: { type: String },
    website: { type: String },
    budget: { type: Number, required: true },
  },
  { timestamps: true }
);

const User = models?.User || model("User", UserSchema);

export default User;
