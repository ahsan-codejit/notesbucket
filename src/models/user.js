const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//bucket schema definition
let UserSchema = new Schema(
	{
		_id: { type: String, required: true },
		firstName: { type: String },
		lastName: { type: String },
		email: { type: String, required: true },
		status: { type: String },
		createdAt: { type: Date, default: Date.now },
		updatedAt: { type: Date, default: Date.now }
	}, 
	{ 
		versionKey: false
	}
);

// Sets the createdAt parameter equal to the current time
UserSchema.pre('save', next => {
	let now = new Date();
	if(!this.createdAt) {
		this.createdAt = now;
	}
	if(!this.updatedAt) {
		this.updatedAt = now;
	}
	next();
});

module.exports = mongoose.model('user', UserSchema);