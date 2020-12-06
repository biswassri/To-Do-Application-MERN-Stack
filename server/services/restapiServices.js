import api from './../models/restapi';
/**
 * Function to search for an id
 * @param {id} filter 
 */
const search = (filter) => {
    const promise = api.find(filter).exec();
    return promise;
};
/**
 * geting the item by the id
 * @param id 
 */
const get = (id) => {
    const promise = api.findById(id).exec();
    return promise;
};

/**
 * Creating New task
 * @param {json} newTask 
 */
const create = (newTask) => {
    const task = new api(newTask);
    const promise = task.save();
    return promise;
}
/**
 * Updating an Item
 * @param {*} id 
 * @param {*} updatedEntry 
 */
const update = (id, updatedEntry) => {
    const promise = api.findByIdAndUpdate(
        { _id: id },
        updatedEntry,
        { new: true }).exec();
    return promise;
}
/**
 * Deleteing an Item
 * @param {} id 
 */

const remove = (id) => {
    const promise = api.remove({ _id: id }).exec();
    return promise;
}

export default {
    search: search,
    get: get,
    create: create,
    update: update,
    remove: remove
}