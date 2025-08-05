import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
}, { timestamps: true }); // createdAt & updatedAt

const User = mongoose.model("User", userSchema);
export default User;