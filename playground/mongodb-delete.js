// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

    
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected on port 27017');
    const db = client.db('TodoApp');
    
    // db.collection('Todos').deleteMany({text: 'Walk the dog'}).then((result) => {
    //     console.log(result);
    // });
    // db.collection('Todos').deleteOne({text: 'Get Glasses'}).then((result) => {
    //     console.log(result);
    // });
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
       

    // db.collection('Users').deleteMany({name: 'Majd Qumseya'}).then((result) => {
    //     console.log(result, " - deleted");
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b783610b7658fc923233312')}).then((res) => {
        console.log(res);
    });
   
        
    // client.close();
});
