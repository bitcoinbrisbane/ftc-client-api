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
    };

    res.send(user);
});

app.listen(port, () => console.log(`FTC api listening on port ${port}!`));
