const express = require("express");

const userController = require("../../controllers/user.controller");

const router = express.Router();

router.route("/").post(userController.createUser).get(userController.getUsers);

router
  .route("/:userId")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management and retrieval
 */

/**
 * @swagger
 * /users:
 *  post:
 *    summary: Create a user
 *    description: Only admins can create other users
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *             - name
 *             - email
 *             - password
 *            properties:
 *              name:
 *                type: string
 *              email:
 *                type:string
 *              password:
 *                type: string
 *            example:
 *               name: fake name
 *               email: fake@example.com
 *               password: password1
 *    responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *
 *
 */
