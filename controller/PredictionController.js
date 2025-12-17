import PredictionModel from '../models/PredictionModel.js';


class PredictionController {
  /**
   * Get all available cards
   * GET /api/cards
   */
  static getAllCards(req, res) {
    try {
      const cards = PredictionModel.getAllCards();

      res.status(200).json({
        success: true,
        data: cards,
        count: cards.length,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error retrieving cards",
        error: error.message,
      });
    }
  }

  /**
   * Get a single card by ID
   * GET /api/cards/:id
   */
  static getCardById(req, res) {
    try {
      const cardId = parseInt(req.params.id);

      if (isNaN(cardId)) {
        return res.status(400).json({
          success: false,
          message: "Invalid card ID. Must be a number",
        });
      }

      const card = PredictionModel.getCardById(cardId);

      if (!card) {
        return res.status(404).json({
          success: false,
          message: `Card with ID ${cardId} not found`,
        });
      }

      res.status(200).json({
        success: true,
        data: card,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error retrieving card",
        error: error.message,
      });
    }
  }

  /**
   * Generate a prediction based on 3 cards
   * GET /api/prediction?card1=1&card2=5&card3=12
   */
  static generatePrediction(req, res) {
    try {
      // Extract and parse query parameters
      const card1Id = parseInt(req.query.card1);
      const card2Id = parseInt(req.query.card2);
      const card3Id = parseInt(req.query.card3);

      // Validate parameters exist
      if (!req.query.card1 || !req.query.card2 || !req.query.card3) {
        return res.status(400).json({
          success: false,
          message:
            "Missing required parameters. Please provide card1, card2, and card3",
        });
      }

      // Validate parameters are numbers
      if (isNaN(card1Id) || isNaN(card2Id) || isNaN(card3Id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid card IDs. All card IDs must be numbers",
        });
      }

      // Validate cards are different
      if (card1Id === card2Id || card1Id === card3Id || card2Id === card3Id) {
        return res.status(400).json({
          success: false,
          message:
            "Cards must be different. You cannot select the same card twice",
        });
      }

      // Generate prediction
      const prediction = PredictionModel.generatePrediction(
        card1Id,
        card2Id,
        card3Id
      );

      res.status(200).json({
        success: true,
        data: prediction,
      });
    } catch (error) {
      // Handle specific error messages
      if (error.message.includes("not found")) {
        return res.status(404).json({
          success: false,
          message: error.message,
        });
      }

      res.status(500).json({
        success: false,
        message: "Error generating prediction",
        error: error.message,
      });
    }
  }
}

export default PredictionController;
