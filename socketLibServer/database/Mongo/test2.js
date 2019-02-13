let mongoose = require('mongoose');
let mongooseDynamic = require('mongoose-dynamic-schemas');
mongoose.connect("mongodb://admin:admin123@ds223015.mlab.com:23015/mrowisko",{nazwa: "String"})
    .then(()=>{
        var dogSchema = mongoose.Schema({
            name: {type : String, required : true, default : "No name"},
            color : {type : String, required : true, default : "No color"},
            breed : {type : String, required : true, default : "No breed"},
            age : {type : String, required : true, default : "5"},
            children : {type : Number, required : true, default : 2},
        });

        var Dog = mongoose.model('Dogs', dogSchema);

        new Dog({ name: 'Rufo', age : "13", familyDogs : [{name : "Pancho", relation : "Son", friendship : 1 }]}).save()
            .then(dogs => console.log("1 - "+dogs))
            .then(result => mongooseDynamic.addSchemaField (Dog, "family", {type : String, default : "No family"}))
            .then(result => mongooseDynamic.addSchemaField (Dog, "stats.power", {type : Number, required : true, default : 50}))
            .then(result => mongooseDynamic.addSchemaField (Dog, "stats.speed", {type : Number, required : true, default : 55}))
            .then(result => mongooseDynamic.addSchemaField (Dog, "familyDogs", [{name : {type : String, default : "No name"}, relation : {type : String, default : "No relation"}, friendship : {type : Number, default : 0}}]))
            .then(result => mongooseDynamic.addSchemaField (Dog, "familyDogs.meetings", [{mDate : {type : Date, default : Date.now}}]))
            .then(result => mongooseDynamic.addSchemaField (Dog, "familyDogs.meetings.time", {type : Number, default : 10}))
            .then(result => mongooseDynamic.addSchemaField (Dog, "familyDogs.meetings.location", {type : String, default : "Somewhere"}))
            .then(result => {return new Dog({ name: 'Pancho', familyDogs : [{name : "Rufo", relation : "Father", friendship : 1, meetings : [{time : 15}, {mDate: new Date(2017, 9, 5, 13, 24)}] }, {name : "Bimbo", relation : "Brother" }] })})
            .then(darek => {
                darek['family'] = 'Gazquez';
                darek.save();
            })
            .then(result => Dog.find({}).exec())
            .then(dogs => console.log("2 - "+dogs))
            .then()

    });
