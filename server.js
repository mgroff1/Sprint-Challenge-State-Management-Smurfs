const express = require('express');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
    res.status(422);
    res.json({ Error: msg });
    return;
};

let smurfs = [
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  },
  {
    name: "Sleepy",
    age: 200,
    height: "5cm",
    id: 1
  }
];
server.get('/smurfs', (req, res) => {
    res.json(smurfs);
});
let smurfId = smurfs.length;

server.post('/smurfs', (req, res) => {
    const { name, age, height } = req.body;
    const newSmurf = { name, age, height, id: smurfId };
    if (!name || !age || !height) {
        return sendUserError(
            'Ya gone did smurfed! Name/Age/Height Go back to Smurfin School!.',
            res
        );
    }
    const findSmurfByName = smurf => {
        return smurf.name === name;
    };
    if (smurfs.find(findSmurfByName)) {
        return sendUserError(
            `Ya gone did smurfed! ${name} Cant you smurfin Read? .`,
            res
        );
    }

    smurfs.push(newSmurf);
    smurfId++;
    res.json(smurfs);
});

server.put('/smurfs/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, height } = req.body;
    const findSmurfById = smurf => {
        return smurf.id == id;
    };
    const foundSmurf = smurfs.find(findSmurfById);
    if (!foundSmurf) {
        return sendUserError('You dont know smurf!', res);
    } else {
        if (name) foundSmurf.name = name;
        if (age) foundSmurf.age = age;
        if (height) foundSmurf.height = height;
        res.json(smurfs);
    }
});

server.delete('/smurfs/:id', (req, res) => {
    const { id } = req.params;
    const foundSmurf = smurfs.find(smurf => smurf.id == id);

    if (foundSmurf) {
        const SmurfRemoved = {...foundSmurf };
        smurfs = smurfs.filter(smurf => smurf.id != id);
        res.status(200).json(smurfs);
    } else {
        sendUserError('Youve Got Bad Smurfin Luck ', res);
    }
});

server.listen(port, err => {
    if (err) console.log(err);
    console.log(`Smurfin Server On  ${port}`);
});
