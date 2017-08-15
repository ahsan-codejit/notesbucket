const bucket = require('../src/controllers/bucket');
const user = require('../src/controllers/user');
module.exports = function(app) {
	app.get("/", (req, res) => {
		res.json({message: "Welcome to your bucket!"});
	});

	// user apis
	app.post("/user", user.createUser);
	app.get("/users", user.getUsers);
	app.route("/user/:id")
	    .get(user.getUser)
	    .delete(user.deleteUser)
	    .put(user.updateUser);

	// bucket apis
	app.post("/bucket", bucket.createBucket);
	app.get("/buckets", bucket.getBuckets);
	app.route("/bucket/:id")
	    .get(bucket.getBucket)
	    .delete(bucket.deleteBucket)
	    .put(bucket.updateBucket);
};
	