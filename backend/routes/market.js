const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET /api/market?crop=rice
// Returns market prices for a specific crop across locations
router.get('/', async (req, res) => {
    const { crop } = req.query;

    try {
        let query = `
            SELECT 
                c.name AS crop,
                mp.location,
                mp.price,
                mp.trend,
                mp.date
            FROM market_prices mp
            JOIN crops c ON mp.crop_id = c.id
            WHERE mp.date = (SELECT MAX(date) FROM market_prices)
        `;
        const params = [];

        if (crop) {
            query += ' AND LOWER(c.name) = ?';
            params.push(crop.toLowerCase());
        }

        query += ' ORDER BY c.name, mp.location';

        const [rows] = await db.query(query, params);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'No market data found for this crop.' });
        }

        res.json({ prices: rows });

    } catch (error) {
        console.error('Market prices error:', error);
        res.status(500).json({ message: 'Failed to fetch market prices.' });
    }
});

// GET /api/market/crops — list all available crops
router.get('/crops', async (req, res) => {
    try {
        const [crops] = await db.query(
            'SELECT id, name, category, base_price FROM crops ORDER BY name'
        );
        res.json({ crops });
    } catch (error) {
        console.error('Crops list error:', error);
        res.status(500).json({ message: 'Failed to fetch crops.' });
    }
});

// GET /api/market/history/:cropName — price trend for last 7 days
router.get('/history/:cropName', async (req, res) => {
    const { cropName } = req.params;

    try {
        const [rows] = await db.query(
            `SELECT mp.price, mp.location, mp.date
             FROM market_prices mp
             JOIN crops c ON mp.crop_id = c.id
             WHERE LOWER(c.name) = ?
             AND mp.date >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)
             ORDER BY mp.date DESC`,
            [cropName.toLowerCase()]
        );

        res.json({ history: rows });

    } catch (error) {
        console.error('Market history error:', error);
        res.status(500).json({ message: 'Failed to fetch price history.' });
    }
});

// POST /api/market/price — admin: add new price entry
router.post('/price', async (req, res) => {
    const { crop_id, location, price, trend } = req.body;

    if (!crop_id || !location || !price) {
        return res.status(400).json({ message: 'crop_id, location, and price are required.' });
    }

    try {
        await db.query(
            'INSERT INTO market_prices (crop_id, location, price, trend, date) VALUES (?, ?, ?, ?, CURDATE())',
            [crop_id, location, price, trend || 0]
        );

        res.status(201).json({ message: 'Price added successfully.' });

    } catch (error) {
        console.error('Add price error:', error);
        res.status(500).json({ message: 'Failed to add price.' });
    }
});

module.exports = router;
