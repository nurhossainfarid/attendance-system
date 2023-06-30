const { Schema, model } = require('mongoose');
const { ObjectId } = Schema.Types;

const profileSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    avatar: {
        type: String,
    },
    user: {
        type: ObjectId,
        ref: 'User',
    }
});

const Profile = model('Profile', profileSchema);
module.exports = Profile;