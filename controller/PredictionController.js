import PredictionModel from "../models/PredictionModel.js";

class PredictionController {
  /**
   * Get all available arcanas
   * GET /api/arcanas
   */
  static getAllArcanas(req, res) {
    try {
      const arcanas = PredictionModel.getAllArcanas();

      res.status(200).json({
        success: true,
        data: arcanas,
        count: arcanas.length,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error retrieving arcanas",
        error: error.message,
      });
    }
  }

  /**
   * Get a single arcana by ID
   * GET /api/arcanas/:id
   */
  static getArcanaById(req, res) {
    try {
      const arcanaId = parseInt(req.params.id);

      if (isNaN(arcanaId)) {
        return res.status(400).json({
          success: false,
          message: "Invalid arcana ID. Must be a number",
        });
      }

      const arcana = PredictionModel.getArcanaById(arcanaId);

      if (!arcana) {
        return res.status(404).json({
          success: false,
          message: `Arcana with ID ${arcanaId} not found`,
        });
      }

      res.status(200).json({
        success: true,
        data: arcana,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error retrieving arcana",
        error: error.message,
      });
    }
  }

  /**
   * Generate a prediction based on 3 arcanas
   * GET /api/prediction?card1=1&card2=5&card3=12
   */
  static generatePrediction(req, res) {
    try {
      const card1Id = parseInt(req.query.card1);
      const card2Id = parseInt(req.query.card2);
      const card3Id = parseInt(req.query.card3);

      if (!req.query.card1 || !req.query.card2 || !req.query.card3) {
        return res.status(400).json({
          success: false,
          message:
            "Missing required parameters. Please provide card1, card2, and card3",
        });
      }

      if (isNaN(card1Id) || isNaN(card2Id) || isNaN(card3Id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid card IDs. All card IDs must be numbers",
        });
      }

      if (card1Id === card2Id || card1Id === card3Id || card2Id === card3Id) {
        return res.status(400).json({
          success: false,
          message:
            "Cards must be different. You cannot select the same card twice",
        });
      }

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
