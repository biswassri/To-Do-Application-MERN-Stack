import mongoose from 'mongoose';
/**
 * Api Schema for the Task Items
 */
const apiSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title is a required property."
    },
    description: {
        type : String
    },
    status:{
        type : String,
        default: "Pending"
    },
    due_date:{
        type: String,
        required: "Date is required"
    },
    due_time:{
        type: String,
        required: "Time is required"
    },
   createdDate: {
        type: Date,
        default: Date.now
    },
    lastModifiedDate: {
        type: Date,
        default: Date.now
    }
},
    {
        versionKey: false

    });
apiSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
apiSchema.set('toJSON', { virtuals: true });
const model = mongoose.model('api', apiSchema);
export default model;