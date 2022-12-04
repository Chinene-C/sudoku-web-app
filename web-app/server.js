import express from "express";

const port = 8080;
const app = express();

app.use("/", express.static("web-app/static"));

app.use("/", express.json());
app.post("/", function (req, res) {
    const request_object = req.body;
    res.setHeader("Content-Type", "application/json");
    res.json({
        "username": "Palyer1",
        "timetaken": "00:01:30"
    });
});

app.listen(port, function () {
    console.log(`Listening on port ${port} – http://localhost:${port}`);
});