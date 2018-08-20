// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');


    
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected on port 27017');
    const db = client.db('TodoApp');
   
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5b793340b7658fc923233c18")
    //     },{ 
    //         $set: {
    //         completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((res) => {
    //         console.log(res);
    //     }).catch((err) => {
    //         console.log('Unable to update record. ', err);
    //     })

    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectID('5b7adc5db7658fc9232346ef')}, 
        {$set: { name: 'Twig The Tiger' }, $inc: {age: 1}},
        {returnOriginal: false})
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
    
        
    // client.close();
});
