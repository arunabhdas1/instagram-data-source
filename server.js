const express = require('express');
const app = express();
const cors = require('cors');
const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
app.use(cors());
app.use(express.json());

app.get('/api/feed', (req, res) => {
    let feed = [];
    MongoClient.connect('mongodb+srv://arunabh:arunabh123@cluster0-yzbcz.mongodb.net/admin', (err, client) => {
        if(err){
            return console.log('Unable to connect to DB');
        }
        console.log('Connected to DB');
        const db = client.db('instagramDB');

        db.collection('feed').find().toArray().then((docs) => {
            feed = JSON.stringify(docs, undefined, 2);
            
        }, (err) => {
            console.log('Unable to fetch documents', err);
            }).then(() => {
                res.send(feed);
            });
        client.close();
    });
});

app.get('/api/feed/:id', (req, res) => {
    let user = [], pics = [];
    MongoClient.connect('mongodb+srv://arunabh:arunabh123@cluster0-yzbcz.mongodb.net/admin', (err, client) => {
        if(err){
            return console.log('Unable to connect to DB');
        }
        console.log('Connected to DB');
        const db = client.db('instagramDB');

        db.collection('users').find({'userId': req.params.id}).toArray().then((docs) => {
            user = docs;
        }, (err) => {
            console.log('Unable to fetch documents', err);
        }).then(() => {
            db.collection('feed').find({'userId': req.params.id}).toArray().then((docs) => {
                pics = docs;
            }, (err) => {
                console.log('Unable to fetch documents', err);
            }).then(() => {
            res.send(JSON.stringify({user, pics}));
        });
        client.close();
        });
    });
});

app.post('/api/post/like', (req, res) => {
    //console.log(req.body);
    MongoClient.connect('mongodb+srv://arunabh:arunabh123@cluster0-yzbcz.mongodb.net/admin', (err, client) => {
        if(err){
            return console.log('Unable to connect to DB');
        }
        const db = client.db('instagramDB');
        let o_id = new mongo.ObjectID(req.body._id);
        db.collection('feed').updateOne(
            {_id: o_id},
            {$set: {'likes': req.body.likes, 'liked': req.body.liked}}
        ).then(console.log('Updated successfully'));
    })
});

app.post('/api/post/comment', (req, res) => {
    // console.log(req.body);
    MongoClient.connect('mongodb+srv://arunabh:arunabh123@cluster0-yzbcz.mongodb.net/admin', (err, client) => {
        if(err){
            return console.log('Unable to connect to DB');
        }
        const db = client.db('instagramDB');
        let o_id = new mongo.ObjectID(req.body._id);
        
        db.collection('feed').updateOne(
            {_id: o_id},
            {$set: {comments: req.body.comments}}
        ).then(console.log('Updated successfully'));
    })
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));