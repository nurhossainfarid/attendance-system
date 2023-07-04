const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')

/**
 * Find user by using id/email
 * @method get
 * @visibility private
 */
router.get('/:userId', userController.getUserById);

/**
 * Update user by using id
 * @method put 
 * @visibility private
 */
router.put('/:userId', userController.putUserById);

/**
 * Update user by using id
 * @method patch 
 * @visibility private
 */
router.patch('/:userId', userController.patchUserById);

/**
 * Delete user by using id
 */
router.delete('/:userId', userController.deleteUserById)

/**
 * Create a user 
 * @method post
 * @visibility private
 */
router.post('/', userController.postUser)

/**
 * Get all user include
 * filter
 * sort
 * pagination
 * select properties
 * @route /api/v1/users?sort
 * @method get
 * @visibility private
 */
router.get('/', userController.getUsers)

module.exports = router;