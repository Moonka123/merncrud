import express from 'express';
import mongoose from 'mongoose';
import cors from "cors"

let app = express();
app.use(express.json());
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/merncrud').then(() =>{
    console.log('Connected to MongoDB');
}) .catch((err)=>{
    console.log('Failed to connect to MongoDB', err);
});

let userSchema = mongoose.Schema({
    name: String,
    email: String,
    address: String,
    gender: String,
    country: String,
});


let User = mongoose.model('User', userSchema);


app.get('/', (req, res) => {
        User.find({}).then((data) => {
            res.status(200).json({data});
        }).catch((err) => {
            res.status(500).json({err});
        });

})

app.post('/', (req, res) => {
    const user=new User({...req.body});
    user.save().then((data) => {
        res.status(200).json({data});
    }).catch((err) => {
        res.status(500).json({err});
    })
});

app.delete('/:id', (req, res) =>{
    let userId= req.params.id
    User.findByIdAndDelete(userId).then((data)=> {
        res.status(200).json(data);
    }) .catch((err) =>{
        res.status(500).json({err});
    })

    });

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});