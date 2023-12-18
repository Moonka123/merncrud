import  express from 'express';
import mongoose from 'mongoose';

let app = express();
app.use(express.josn());

mongoose.connect('mongodb://127.0.0.1:27017/merncrud').then(() =>{
    console.log('Connected to MongoDB');
}) .catch((err)=>{
    console.log('Failed to connect to MongoDB', err);
});

let userSchema = mongoose.Schema({
    name: String,
    status: String,
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
    const {name,status} = req.body;
    const user=new User({name,status});
    user.save().then((data) => {
        res.status(200).json({data});
    }).catch((err) => {
        res.status(500).json({err});
    })
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


mongoose.connect('mongodb://127.0.0.1:27017/merncrud').then(() =>{
    console.log('Connected to MongoDB');
}) .catch((err)=>{
    console.log('Failed to connect to MongoDB', err);
});

let userSchema = mongoose.Schema({
    name: String,
    price: String,
    quality: String,
    description: String,
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
    const {name,price,quality,description} = req.body;
    const user=new User({name,price,quality,description});
    user.save().then((data) => {
        res.status(200).json({data});
    }).catch((err) => {
        res.status(500).json({err});
    })
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});