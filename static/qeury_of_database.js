//insert the data in database 
// commands
// 1.
// db
// 2.
// use himanshukart

// 3.
// single item 
db.items.insertOne({name:"samsung galaxy",price:22000
,rating:4.8,qty:233,sold:98})

//right click for paste in powershell

// 4.
//for many items array type
db.items.insertMany([{name:"samsung galaxy",price:22000
,rating:4.8,qty:233,sold:98},{name:"samsung galaxy 2",price:3000
,rating:2.8,qty:253,sold:158,isBig:true}])

// 5.
//db.items.find() = for all entryes

// 6.
//show dbs   = a ll database show


// its make object id as uniquely define or primary key