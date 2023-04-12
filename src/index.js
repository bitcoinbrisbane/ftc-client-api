const express = require("express");
const app = express();

// add json
app.use(express.json());

const port = 3000;

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

app.get("/services/", (req, res) => {
    const items = [{
        id: 123,
        date: "2023/1/1",
        type: "Phone Call",
        price: 45.00,
        tax: 4.50,
        total: 49.50,
    }];

    res.send(items);
});

app.get("/interactions/", (req, res) => {
    const items = [{
        id: 123,
        date: "2023/1/1",
        type: "Email Subject"
    }];

    res.send(items);
});

app.get("/documents/", (req, res) => {
    const items = [{
        id: 123,
        date: "2023/1/1",
        type: "Email Subject"
    }];

    res.send(items);
});

app.listen(port, () => console.log(`FTC api listening on port ${port}!`));
