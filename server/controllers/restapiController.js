import { request, response } from 'express';
import apiService from './../services/restapiServices';
/**
 * Function for Searching Tasks
* @param {*} request 
 * @param {status, json} response 
 */
const index = (request, response) => {
    apiService.search({}).then((taskItems) => {
        response.status(200);
        response.json(taskItems);
    }).catch(handleError(response));
};
/**
 * Function for fetching Task with ID
 * @param {json} request 
 * @param {status, json} response 
 */
const get = (request, response) => {
    const id = request.params.id;
    apiService.get(id).then((taskItems) => {
        response.status(200);
        response.json(taskItems);
    }).catch(handleError(response));
};

/**
 * Function to Create a new Task
 * @param {json} request 
 * @param {status, json} response 
 */
const create = (request, response) => {
    const newTaskItems = Object.assign({}, request.body);
    apiService.create(newTaskItems).then((taskItems) => {
        response.status(200);
        response.json(taskItems);
    }).catch(handleError(response));
};

/**
 * Function for Updating an existing Task
 * @param {id, json} request 
 * @param {status, json} response 
 */
const update = (request, response) => {
    const id = request.params.id;
    const updateTask = Object.assign({}, request.body);
    apiService.update(id, updateTask).then((taskItems) => {
        response.status(200);
        response.json(taskItems);
    }).catch(handleError(response));
};

/**
 * Function for Deleting Tasks
 * @param {id} request 
 * @param {status, json} response 
 */

const remove = (request, response) => {
    const id = request.params.id;
    apiService.remove(id).then((taskItems) => {
        response.status(200);
        response.json({
            message: "Delete Successful"
        });
    }).catch(handleError(response));
};

/**
 * Function for error handling
 * @param {status, errorjson} response 
 */
const handleError = (response) => {
    return (error) => {
        response.status(500);
        response.json({
            message: error.message
        })
    };
}

export default {
    index: index,
    get: get,
    create: create,
    update: update,
    remove: remove
}