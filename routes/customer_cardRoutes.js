const express = require("express");
const router = express.Router();
const customerCardController = require("../controller/customer_cardController");

/**
 * @swagger
 * tags:
 *   name: CustomerCards
 *   description: CustomerCard management
 */

/**
 * @swagger
 * /api/customerCards:
 *  post:
 *    tags: [CustomerCards]
 *    summary: Create a new customer card
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              phone:
 *                type: string
 *              number:
 *                type: string
 *              year:
 *                 type: string
 *               month:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
 *    responses:
 *      201:
 *        description: Customer card created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/customerCards", customerCardController.createCustomerCard);

/**
 * @swagger
 * /api/customerCards:
 *   get:
 *     tags: [CustomerCards]
 *     summary: Get all Customer cards
 *     responses:
 *       200:
 *         description: List of customer cards
 *       500:
 *         description: Server error
 */
router.get("/customerCards", customerCardController.getCustomerCards);

/**
 * @swagger
 * /api/customerCards/search:
 *   get:
 *     tags: [CustomerCards]
 *     summary: Search customer cards by name or phone
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for customer card name or phone
 *     responses:
 *       200:
 *         description: List of customer cards matching the search query
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/customerCards/search", customerCardController.searchCustomerCards);

/**
 * @swagger
 * /api/customerCards/{id}:
 *  get:
 *    tags: [CustomerCards]
 *    summary: Get customer card by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema: 
 *          type: integer
 *        required: true
 *        description: Customer card ID
 *    responses:
 *      200:
 *        description: Customer card details
 *      404:
 *        description: Customer card not found
 *      500:
 *        description: Server error
 */
router.get("/customerCards/:id", customerCardController.getCustomerCardById);

/**
 * @swagger
 * /api/customerCards/{id}:
 *   put:
 *     tags: [CustomerCards]
 *     summary: Update customer card by ID
 *     parameters: 
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer card ID
 *     requestBody: 
 *       required: true
 *       content: 
 *         application/json:
 *           schema: 
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
 *     responses:
 *       200: 
 *         description: Customer card updated
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.put("/customerCards/:id", customerCardController.updateCustomerCard);

/**
 * @swagger
 * /api/customerCards/{id}:
 *   delete:
 *     tags: [CustomerCards]
 *     summary: Delete customer card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer card ID
 *     responses:
 *       204:
 *         description: Customer card deleted
 *       404:
 *         description: Customer card not found
 *       500: 
 *         description: Server error
 */
router.delete("/customerCards/:id", customerCardController.deleteCustomerCard);

module.exports = router;