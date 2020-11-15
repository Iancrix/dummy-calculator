const express = require("express");
const cors = require("cors");
const path = require("path");

require("dotenv/config");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(express.json());

// Import Routes

const trianglesRoute = require("./routes/triangles");
app.use("/triangles/", trianglesRoute);

const squaresRoute = require("./routes/squares");
app.use("/squares/", squaresRoute);

const circlesRoute = require("./routes/circles");
app.use("/circles/", circlesRoute);


// Serve static assets

app.use(express.static("./frontend/build"));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});


// Server Init
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));