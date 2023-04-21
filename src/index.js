const express = require("express");
const cors = require("cors");
const app = express();

// load config from dotenv
require("dotenv").config();

// add json
app.use(cors());
app.use(express.json());


const port = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("Hello World!"));

// get a user
app.get("/user/:id", (req, res) => {
    const id = req.params.id;
    const user = {
        id,
        name: "John Doe",
        brc: "2023/1234",
    };

    res.send(user);
});

app.get("/user/:id/address", (req, res) => {
    const id = req.params.id;
    const user = {
        id,
        name: "John Doe",
        brc: "2023/1234",
    };

    res.send(user);
});

app.get("/user/:id/deposithints", (req, res) => {
    const id = req.params.id;
    const user = {
        id,
        name: "John Doe",
        brc: "2023/1234",
    };

    res.send(user);
});

app.get("/user/:id/trust", (req, res) => {
    const id = req.params.id;
    const user = {
        id,
        name: "Transitional Legal Trust",
        bsb: "666-666",
        account: "123456789",
        ref: "REF-12345",
        balance: 5000
    };

    res.send(user);
});

app.post("/user/", (req, res) => {
    const user = req.body;

    // call action step

    // save password in db

    res.send("User created");
});

app.post("/user/:email", (req, res) => {
    const email = req.params.email;
    const user = req.body;

    // call action step
});

app.get("/services/", (req, res) => {
    const items = [{
        id: 123,
        date: "2023/1/1",
        type: "Phone Call",
        price: 45.00,
        tax: 4.50,
        total: 49.50,
    }];

    // GET /api/rest/timerecords/1?include=rate

    res.send(items);
});

app.get("/interactions/", (req, res) => {
    const items = [{
        id: 123,
        date: "2023/1/1",
        type: "Email",
        description: "DVO Letter to ex-wife"
    }];

    res.send(items);
});

app.get("/documents/", (req, res) => {
    const items = [{
        id: 123,
        date: "2023/1/1",
        file_name: "Letter.pdf"
    }];

    res.send(items);
});

app.listen(port, () => console.log(`FTC api listening on port ${port}!`));
