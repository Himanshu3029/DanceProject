// searching query

//find normally
db.items.find({rating:3.5})

//find who is greater than equal 3.5
db.items.find({rating:{$gte:3.5}}) 

//find who is greater than 3.5
db.items.find({rating:{$gt:3.5}}) 

//find who is less than 3.5
db.items.find({rating:{$lt:3.5}}) 

//AND operator denoted by (,)
db.items.find({rating:{$gt:3.5},price:{$lt:3000}})

//OR operator denoted by (,)
db.items.find({$or: [  {rating:{$gt:3.5}},  {price:{$lt:3000}}  ]  })


