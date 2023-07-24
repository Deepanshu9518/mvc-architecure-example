const express= require('express');
const app = express();
const bodyparser = require('body-parser');


app.use(bodyparser.urlencoded({extended : false}));

app.use(bodyparser.json()); 


let userdata = [{name : 'Deepanshu', address : 'model town', age : 24 , id : 1},
{name : 'yogesh', address : 'hisar', age : 22 , id :2}
];

app.get('/userdata',(req,res) =>{
    res.send(userdata);
})


app.post('/createuser',(req,res) => {
    const data = req.body;
    console.log(data);
    userdata.push(data);
    res.send('user is added ')
})





app.put('/updateuser', (req, res) => {
    const data = req.body;
    if (data.id) {
        const index = userdata.findIndex(item => item.id === data.id);
        if (index !== -1) { // Check if index is valid
            if (data.name) {
                userdata[index]['name'] = data.name;
            }
            if (data.address) {
                userdata[index]['address'] = data.address;
            }
            if (data.age) {
                userdata[index]['age'] = data.age;
            }
            res.send('User data updated successfully.');
        } else {
            res.status(404).send({ err: 'User not found with the provided id.' });
        }
    } else {
        res.status(400).send({ err: 'Please provide a valid id.' });
    }
});




app.delete('/deleteuser',(req,res) => {
    const data = req.body;
    userdata = userdata.filter(item => item.id !== data.id)
    res.send('user deleted')
})










app.listen(3500,() => {
    console.log('i am running on url : http://localhost:3500');
})