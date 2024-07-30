const { model, Schema } = require("mongoose")

const userSchema = Schema({
    name: {
        type: String,
        required: [true, "Enter Name"]
    },
    email: {
        type: String,
        required: [true, "Enter valid Email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Enter Password"],
        select: false
    }
})
const User = model('User', userSchema)

module.exports = User;