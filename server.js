const express = require('express');
const app = express();
const cors = require("cors")
const port = process.env.PORT || 3001;
const { connection, AllRowsModel } = require("./db");

app.use(express.json({ limit: '50mb' }))
app.use(cors())

// AllRows EndPoint

app.get("/AllRows", async (req, res) => {
    let query = Object.entries(req.query)[0] || [];
    if (query.length > 0) {
        if (query[1] == "true") query[1] = true;
        else if (query[1] == "false") query[1] = false;
    }
    const data = await AllRowsModel.find()
    let structuredData = [];
    if (query.length > 0) {
        for (let i of data) {
            let temp = {
                _id: i._id,
                ...i.data
            };
            if (temp[query[0]] == query[1]) {
                structuredData.push(temp)
            }
        }
    }
    else {
        for (let i of data) {
            let temp = {
                _id: i._id,
                ...i.data
            };
            structuredData.push(temp)
        }
    }

    res.send(structuredData)
})

app.get("/AllRows/:id", async (req, res) => {
    const id = req.params.id;
    const data = await AllRowsModel.findById(id);
    const finalData = {
        _id: data._id,
        ...data.data
    }
    res.send(finalData);
})

app.post("/AllRows", async (req, res) => {
    let data = req.body;
    data = {
        data: data
    }
    const testimonials = new AllRowsModel(data);
    await testimonials.save()
    res.send(data)
})

app.delete("/AllRows/:id", async (req, res) => {
    const id = req.params.id;
    const deletedObject = await AllRowsModel.findByIdAndDelete(id);
    res.send(`Object with ID:${id} has been deleted`);
})

app.patch("/AllRows/:id", async (req, res) => {
    const id = req.params.id;
    let temp = await AllRowsModel.findById(id);
    let data = req.body;
    data = {
        data: {
            ...temp.data,
            ...data
        }
    }
    const updatedObjet = await AllRowsModel.findOneAndUpdate({ _id: id }, data);
    res.send(`Object with ID:${id} has been deleted`);
})

app.listen(port, async () => {
    try {
        await connection
        console.log("Connected to db")
    } catch (err) {
        console.log(err)
    }
    console.log("Server Started at PORT", port)
})