// import express from "express"
// import { executeQuery } from "./database.js";
// const app = express();
// const port = 3001;
// app.get('/', async (req, res) => {
//     res.send("<h3>Running Exress Server!!!  Hello I am server</h3>")
// })

// app.get("/getdata", async (req, res) => {
//     const response = await executeQuery('select * from users')
//     console.log(response);
//     res.send(response.rows)
// });
// app.get("/deldata", async (req, res) => {
//     //const response = await executeQuery('delete from users where name=', $, { shruti })
//     const response = await executeQuery('insert into users (name, phone, email, age) values ("sunita"," 1546232656", "shruti@gmail.com", "19")')
//     console.log(response);
//     res.send(response.rows)
// });
// app.listen(port, () => {
//     console.log('Server is listening http://localhost:', { port })
// });


import express from "express";
import { executeQuery } from "./database.js";

const app = express();
const port = 3001;

app.get('/', async (req, res) => {
    res.send("<h3>Running Express Server!!! Hello, I am server</h3>");
});

app.get("/getdata", async (req, res) => {
    try {
        const response = await executeQuery('SELECT * FROM users');
        console.log(response);
        res.send(response.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching data");
    }
});

app.get("/deldata", async (req, res) => {
    try {
        // Corrected SQL syntax and values
        const response = await executeQuery('INSERT INTO users (name, phone, email, age) VALUES ("nita", "1546232656", "shruti@gmail.com", 19)');
        console.log(response);
        res.send(response.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting data");
    }
});

app.listen(port, () => {
    console.log(`Server is listening http://localhost:${port}`);
});
