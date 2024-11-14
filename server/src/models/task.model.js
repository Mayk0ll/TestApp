import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Nuevo',
    }, 
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

taskSchema.methods.toJSON = function() {
    const { __v, _id, ...task } = this.toObject();
    task.id = _id;
    return task;
}

export default model('Task', taskSchema); 