const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "todo-backend" }).then((data) => {
        console.log(`Database connect on ${data.connection.host}`);
    }).catch(err => console.log(err));
}

module.exports = connectDB;

