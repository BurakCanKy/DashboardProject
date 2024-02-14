const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(cors());


var users = [
  {
    id: 1,
    name: "Arden Spencer",
    email: "Evangeline62@yahoo.com",
    phone: "(023) 708-6818 x4267",
    age: "28",
    post: "UX Researcher",
    joiningDate: "June 20, 2015",
    Salary: "$26253",
    checked: false,

  },
  {
    id: 2,
    name: "Favian Maggio DDS",
    email: "Electa_Conroy@hotmail.com",
    phone: "1-076-628-3095 x7154",
    age: "28",
    post: "UX Researcher",
    joiningDate: "October 11, 2019",
    Salary: "$26253",
    checked: false,

  },
  {
    id: 3,
    name: "Jacey Considine",
    email: "Garry23@yahoo.com",
    phone: "1-016-234-2482",
    age: "28",
    post: "UX Researcher",
    joiningDate: "January 2, 2016",
    Salary: "$6162",
    checked: false,

  },
  {
    id: 4,
    name: "Kolby Torphy II",
    email: "Phyllis75@hotmail.com",
    phone: "1-345-656-4163 x373",
    age: "28",
    post: "UX Researcher",
    joiningDate: "August 9, 2017",
    Salary: "$4022",
    checked: false,

  },
  {
    id: 5,
    name: "Mattie Daugherty",
    email: "Jessika.Conroy@yahoo.com",
    phone: "721-969-9795 x09197",
    age: "28",
    post: "UX Researcher",
    joiningDate: "December 24, 2016",
    Salary: "$11588",
    checked: false,
    
  },

];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;

  users.push(newUser);

  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);
  user.checked = !user.checked
  res.json(user.checked);
});

app.put('/allusers/', (req, res) => {
  for (let index = 0; index < users.length; index++) {
    users[index].checked = !users[index].checked

  }
  res.json(users);
});

app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(user => user.id !== userId);

  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
