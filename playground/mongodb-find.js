// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

    

     MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected on port 27017');
    const db = client.db('TodoApp');
    
    // .find({completed: false});
    db.collection('Todos').find({_id: new ObjectID('5b783370548e883be47e992d')}).toArray()
        .then((docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));
        }).catch((err)=> {
            console.log('Unable to fetch todos', err);
        });


    db.collection('Todos').find({completed: false}).count()
        .then((count) => {
            console.log(`There are ${count} item(s) not completed`);
        }).catch((err)=> {
            console.log('Unable to count items', err);
        });
    
    db.collection('Users').find({name: 'Majd Qumseya'}).toArray()
        .then((res) => {
            console.log(res);
        }).catch((err)=> {
            console.log('Unable to fetch query', err);
        });
    // client.close();
});
