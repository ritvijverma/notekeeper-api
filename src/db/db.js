const mongoose = require('mongoose');


function connectToDB(){

    mongoose.connect("mongodb+srv://ritvijverma1810:gteBOMvtSUnFoQ1U@cluster0.oat27mx.mongodb.net/cohort")
.then(() => {
    console.log("connected to db");
})
}

module.exports = connectToDB;
