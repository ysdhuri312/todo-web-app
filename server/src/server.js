const app = require('./app');
const connectDB = require("./config/db");
const { config } = require('dotenv');

config();
connectDB();


app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "To-Do App API"
    })
})

app.listen(process.env.PORT, () => {
    console.log(`app listining on port:${process.env.PORT}`);
})