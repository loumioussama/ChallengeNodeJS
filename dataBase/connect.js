const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};
const mongoUrl="mongodb+srv://oussama:Mulouminio02@cluster0.miaem.mongodb.net/nodeDB?retryWrites=true&w=majority";

const connect = mongoose.connect(mongoUrl, options).then((success) => {
        console.log("=> Successfully connection to database");
    }).catch((error) => {
         console.log("=> Connect with error");
    });

module.exports = connect;