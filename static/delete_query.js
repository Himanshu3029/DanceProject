
// firstly search then delete 

//single delete row which is first document

db.items.deleteOne({price:3000})

//Many delete means all delete 
db.items.deleteMany({price:3000})

//Update the data
//single update which is first come
db.items.updateOne({name:"samsung"},{$set:{price:2000}})

//all update 
db.items.updateMany({name:"samsung"},{$set:{price:2000}})


// download mongodb compass
//mongoose a package of node js and method which connect nodejs to mongodb
