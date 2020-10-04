// Model.create(
//   { name: "thakkar", phone: 1233123 },
//   () =>
//     function (err, awesome_instance) {
//       console.log("Saved successfully");
//       if (err) return handleError(err);
//     }
// );
// Model.find();
// // find all athletes that play tennis
// var query = Athlete.find({ 'sport': 'Tennis' });

// // selecting the 'name' and 'age' fields
// query.select('name age');

// // limit our results to 5 items
// query.limit(5);

// // sort by age
// query.sort({ age: -1 });

// // execute the query at a later time
// query.exec(function (err, athletes) {
//   if (err) return handleError(err);
//   // athletes contains an ordered list of 5 athletes who play Tennis
// })

// Athlete.
//   find().
//   where('sport').equals('Tennis').
//   where('age').gt(17).lt(50).  //Additional where query
//   limit(5).
//   sort({ age: -1 }).
//   select('name age').
//   exec(callback); // where callback is the name of our callback function.

// app.get('/users/:userId/books/:bookId', function (req, res) {
//   // Access userId via: req.params.userId
//   // Access bookId via: req.params.bookId
//   res.send(req.params);
// })
