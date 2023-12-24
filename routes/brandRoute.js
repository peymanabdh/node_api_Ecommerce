/**
 * @swagger
 * components:
 *   schemas:
 *     brands:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the brand
 *         title:
 *           type: string
 *           description: The title of your brand
 *         description:
 *           type: string
 *           description: The brand explanation
 *         published:
 *           type: boolean
 *           description: Whether you have finished reading the brand
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the brand was added
 *
 */
/**
 * @swagger
 * tags:
 *   name: Brands
 *   description: The brands managing API
 * /brand:
 *   get:
 *     summary: Lists all the brands
 *     tags: [brands]
 *     responses:
 *       200:
 *         description: The list of the brands
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/brands'
 *   post:
 *     summary: Create a new brand
 *     tags: [brands]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/brands'
 *     responses:
 *       200:
 *         description: The created brand.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/brands'
 *       500:
 *         description: Some server error
 * /brand/{id}:
 *   get:
 *     summary: Get the brand by id
 *     tags: [brands]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The brand id
 *     responses:
 *       200:
 *         description: The brand response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/brands'
 *       404:
 *         description: The brand was not found
 *   put:
 *    summary: Update the brand by the id
 *    tags: [brands]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The brand id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/brands'
 *    responses:
 *      200:
 *        description: The brand was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/brands'
 *      404:
 *        description: The brand was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the brand by id
 *     tags: [brands]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The brand id
 *
 *     responses:
 *       200:
 *         description: The brand was deleted
 *       404:
 *         description: The brand was not found
 */

import exppress from "express";
import {
  createBrandCtrl,
  deleteBrandCtrl,
  getAllBrandsCtrl,
  getSingleBrandCtrl,
  updateBrandCtrl,
} from "../controllers/brandController.js";
// import isAdmin from "../middlewares/isAdmin.js";

import { isLogedIn } from "../middlewares/isLogeIn.js";

const brandsRouter = exppress.Router();

brandsRouter.post("/", isLogedIn, createBrandCtrl);
brandsRouter.get("/", getAllBrandsCtrl);
brandsRouter.get("/:id", getSingleBrandCtrl);
brandsRouter.delete("/:id", isLogedIn, deleteBrandCtrl);
brandsRouter.put("/:id", isLogedIn, updateBrandCtrl);

export default brandsRouter;
