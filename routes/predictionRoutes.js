import express from "express";
import PredictionController from "../controller/PredictionController.js";

const router = express.Router();

/**
 * @route   GET /api/arcanas
 * @desc    Get all available tarot arcanas
 * @access  Public
 */
router.get("/arcanas", PredictionController.getAllArcanas);

/**
 * @route   GET /api/arcanas/:id
 * @desc    Get a single arcana by ID
 * @access  Public
 */
router.get("/arcanas/:id", PredictionController.getArcanaById);

/**
 * @route   GET /api/prediction
 * @desc    Generate a prediction based on 3 selected arcanas
 * @query   card1, card2, card3 (IDs of the selected arcanas)
 * @example /api/prediction?card1=1&card2=5&card3=12
 * @access  Public
 */
router.get("/prediction", PredictionController.generatePrediction);

export default router;
