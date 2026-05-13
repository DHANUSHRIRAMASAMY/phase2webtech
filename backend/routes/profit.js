const express = require('express');
const router = express.Router();
const db = require('../config/db');
const verifyToken = require('../middleware/auth');

// POST /api/profit/calculate — calculate and save profit (protected)
router.post('/calculate', verifyToken, async (req, res) => {
    const {
        crop_name,
        land_area,
        expected_yield,
        market_price,
        cost_per_acre
    } = req.body;

    if (!crop_name || !land_area || !expected_yield || !market_price) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // Calculate
    const total_production = land_area * expected_yield;
    const total_cost = land_area * (cost_per_acre || 15000);
    const estimated_revenue = total_production * market_price;
    const expected_profit = estimated_revenue - total_cost;

    try {
        // Save to DB
        const [result] = await db.query(
            `INSERT INTO profit_calculations 
             (user_id, crop_name, land_area, expected_yield, market_price, cost_per_acre,
              total_production, total_cost, estimated_revenue, expected_profit)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                req.user.id,
                crop_name,
                land_area,
                expected_yield,
                market_price,
                cost_per_acre || 15000,
                total_production,
                total_cost,
                estimated_revenue,
                expected_profit
            ]
        );

        res.status(201).json({
            message: 'Calculation saved.',
            id: result.insertId,
            result: {
                total_production,
                total_cost,
                estimated_revenue,
                expected_profit
            }
        });

    } catch (error) {
        console.error('Profit calculate error:', error);
        res.status(500).json({ message: 'Failed to save calculation.' });
    }
});

// GET /api/profit/history — get user's saved calculations (protected)
router.get('/history', verifyToken, async (req, res) => {
    try {
        const [rows] = await db.query(
            `SELECT * FROM profit_calculations 
             WHERE user_id = ? 
             ORDER BY calculation_date DESC`,
            [req.user.id]
        );

        res.json({ history: rows });

    } catch (error) {
        console.error('Profit history error:', error);
        res.status(500).json({ message: 'Failed to fetch history.' });
    }
});

// DELETE /api/profit/history/:id — delete a saved calculation (protected)
router.delete('/history/:id', verifyToken, async (req, res) => {
    const { id } = req.params;

    try {
        // Make sure the record belongs to this user
        const [rows] = await db.query(
            'SELECT id FROM profit_calculations WHERE id = ? AND user_id = ?',
            [id, req.user.id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Record not found.' });
        }

        await db.query('DELETE FROM profit_calculations WHERE id = ?', [id]);

        res.json({ message: 'Record deleted successfully.' });

    } catch (error) {
        console.error('Delete profit error:', error);
        res.status(500).json({ message: 'Failed to delete record.' });
    }
});

module.exports = router;
