const bucket = require('../src/controllers/bucket');
module.exports = function(app) {
	app.get("/", (req, res) => {
		res.json({message: "Welcome to your bucket!"});
	});

	app.post("/bucket", bucket.createBucket);
	app.get("/buckets", bucket.getBuckets);
	app.route("/bucket/:id")
	    .get(bucket.getBucket)
	    .delete(bucket.deleteBucket)
	    .put(bucket.updateBucket);
};
	