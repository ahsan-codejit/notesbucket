const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//bucket schema definition
let BucketSchema = new Schema(
	{
		title: { type: String, required: true },
		shortDescription: { type: String, required: false },
		longDescription: { type: String, required: false },
		status: { type: String, required: true },
		startedAt: { type: Date, default: Date.now },
		targetedAt: { type: Date, default: Date.now },
		achievedAt: { type: Date, default: Date.now },
		createdAt: { type: Date, default: Date.now },
		updatedAt: { type: Date, default: Date.now },
		user: { type: Object, required: true }
	}, 
	{ 
		versionKey: false
	}
);

// Sets the createdAt parameter equal to the current time
BucketSchema.pre('save', next => {
	let now = new Date();
	if(!this.createdAt) {
		this.createdAt = now;
	}
	next();
});

//Exports the BucketSchema for use elsewhere.
module.exports = mongoose.model('bucket', BucketSchema);