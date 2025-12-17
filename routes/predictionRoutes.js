import express from "express";
import PredictionController from "../controller/PredictionController.js";

const router = express.Router();

/**
 * @route   GET /api/cards
 * @desc    Get all available tarot cards
 * @access  Public
 */
router.get("/cards", PredictionController.getAllCards);

/**
 * @route   GET /api/cards/:id
 * @desc    Get a single card by ID
 * @access  Public
 */
router.get("/cards/:id", PredictionController.getCardById);

/**
 * @route   GET /api/prediction
 * @desc    Generate a prediction based on 3 selected cards
 * @query   card1, card2, card3 (IDs of the selected cards)
 * @example /api/prediction?card1=1&card2=5&card3=12
 * @access  Public
 */
router.get("/prediction", PredictionController.generatePrediction);

export default router;
