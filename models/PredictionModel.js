import arcanaData from '../data/Arcana.json' with { type: 'json' };
import predictionsData from '../data/Predictions.json' with { type: 'json' };

class PredictionModel {
  
  /**
   * Get a card by its ID
   * @param {number} id - Card ID
   * @returns {object|null} Card object or null if not found
   */
  static getCardById(id) {
    return arcanaData.find(card => card.id === id) || null;
  }

  /**
   * Get all cards
   * @returns {array} Array of all cards
   */
  static getAllCards() {
    return arcanaData;
  }

  /**
   * Calculate dominant energy from 3 cards
   * @param {array} energies - Array of energy strings ['positiva', 'negativa', 'neutra']
   * @returns {string} Dominant energy
   */
  static calculateDominantEnergy(energies) {
    const count = energies.reduce((acc, energy) => {
      acc[energy] = (acc[energy] || 0) + 1;
      return acc;
    }, {});
    
    // Return energy with highest count
    return Object.keys(count).reduce((a, b) => 
      count[a] > count[b] ? a : b
    );
  }

  /**
   * Check if fragment conditions match criteria
   * @param {object} fragmentConditions - Conditions from fragment
   * @param {object} searchCriteria - Criteria to match
   * @returns {boolean} True if conditions match
   */
  static matchesConditions(fragmentConditions, searchCriteria) {
    if (!fragmentConditions) return true;
    
    // Check dominant_energy
    if (fragmentConditions.dominant_energy) {
      if (fragmentConditions.dominant_energy !== searchCriteria.dominant_energy) {
        return false;
      }
    }
    
    // Check themes (at least one must match)
    if (fragmentConditions.themes && searchCriteria.themes) {
      const hasMatchingTheme = fragmentConditions.themes.some(theme => 
        searchCriteria.themes.includes(theme)
      );
      if (!hasMatchingTheme) return false;
    }
    
    // Check position
    if (fragmentConditions.position !== undefined && searchCriteria.position !== undefined) {
      if (fragmentConditions.position !== searchCriteria.position) {
        return false;
      }
    }
    
    // Check energy_combination
    if (fragmentConditions.energy_combination && searchCriteria.energy_combination) {
      const hasAllEnergies = fragmentConditions.energy_combination.every(energy =>
        searchCriteria.energy_combination.includes(energy)
      );
      if (!hasAllEnergies) return false;
    }
    
    return true;
  }

  /**
   * Select a random fragment matching criteria
   * @param {object} criteria - { type, conditions }
   * @returns {object|null} Selected fragment or null
   */
    static selectFragment(criteria) {
    const usedIds = criteria.usedIds || [];
    
    // Filter by type and exclude already used fragments
    let candidates = predictionsData.filter(f => 
      f.type === criteria.type && !usedIds.includes(f.id)
    );
    
    // Apply conditions if they exist
    if (criteria.conditions) {
      const matching = candidates.filter(fragment => 
        this.matchesConditions(fragment.conditions, criteria.conditions)
      );
      
      if (matching.length > 0) {
        candidates = matching;
      } else {
        // Fallback: fragments without conditions
        const fallback = candidates.filter(f => !f.conditions);
        if (fallback.length > 0) {
          candidates = fallback;
        }
      }
    }
    
    // Return random candidate
    if (candidates.length === 0) return null;
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  /**
   * Generate a complete prediction from 3 cards
   * @param {number} card1Id - First card ID
   * @param {number} card2Id - Second card ID  
   * @param {number} card3Id - Third card ID
   * @returns {object} Prediction object with text and card info
   */
  static generatePrediction(card1Id, card2Id, card3Id) {
    // Get cards
    const card1 = this.getCardById(card1Id);
    const card2 = this.getCardById(card2Id);
    const card3 = this.getCardById(card3Id);
    
    // Validate cards exist
    if (!card1 || !card2 || !card3) {
      throw new Error('One or more cards not found');
    }
    
    // Validate cards are different
    if (card1Id === card2Id || card1Id === card3Id || card2Id === card3Id) {
      throw new Error('Cards must be different');
    }
    
    // Calculate dominant energy
    const energies = [card1.energy, card2.energy, card3.energy];
    const dominantEnergy = this.calculateDominantEnergy(energies);
    
    // Select fragments
    const intro = this.selectFragment({
      type: 'introduccion',
      conditions: { dominant_energy: dominantEnergy }
    });
    
    const dev1 = this.selectFragment({
      type: 'desarrollo_carta1',
      conditions: { themes: card1.themes, position: 1 }
    });
    
    const trans1 = this.selectFragment({
      type: 'transicion',
      conditions: { energy_combination: [card1.energy, card2.energy] }
    });
    
    const dev2 = this.selectFragment({
      type: 'desarrollo_carta2',
      conditions: { themes: card2.themes, position: 2 }
    });
    
    const trans2 = this.selectFragment({
      type: 'transicion',
      conditions: null
    });
    
    const dev3 = this.selectFragment({
      type: 'desarrollo_carta3',
      conditions: { themes: card3.themes, position: 3 }
    });
    
    const ending = this.selectFragment({
      type: 'cierre',
      conditions: null
    });
    
    // Assemble text with proper punctuation
    const fragments = [intro, dev1, trans1, dev2, trans2, dev3, ending];
    
    const cleanFragments = fragments
      .filter(f => f !== null)
      .map(f => ({ text: f.text.trim(), type: f.type }));
    
    let fullText = '';
    
    for (let i = 0; i < cleanFragments.length; i++) {
      const fragment = cleanFragments[i];
      const nextFragment = cleanFragments[i + 1];
      
      // Add fragment text as is (already properly formatted in JSON)
      fullText += fragment.text;
      
      // Add appropriate punctuation between fragments
      if (nextFragment) {
        // Check if current fragment already ends with punctuation
        const endsWithPunctuation = /[.!?]$/.test(fragment.text);
        
        if (endsWithPunctuation) {
          // Just add space
          fullText += ' ';
        } else {
          // Add comma and space
          fullText += ', ';
        }
      }
    }
    
     return {
      prediction: fullText.trim(),
      cards_used: [
        { id: card1.id, name: card1.name, position: 'past' },
        { id: card2.id, name: card2.name, position: 'present' },
        { id: card3.id, name: card3.name, position: 'future' }
      ],
      dominant_energy: dominantEnergy
    };
  }
}

export default PredictionModel;
