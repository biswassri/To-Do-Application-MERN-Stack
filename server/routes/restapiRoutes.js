import express from 'express';
import apiController from './../controllers/restapiController';

const router = express.Router();
/**
 * Search - GET Task Items
 * Create - POST Task Items
 */
router.route('/toDoList')
    .get(apiController.index)
    .post(apiController.create);

    /**
     * Retrive - GET 
     * Update - PUT
     * Delete - DELETE
     * 
     */

router.route('/toDoList/:id')
    .get(apiController.get)
    .put(apiController.update)
    .delete(apiController.remove);

export default router;