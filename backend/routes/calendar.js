const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET /api/calendar — get full crop calendar
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query(
            `SELECT 
                c.name AS crop,
                c.category,
                cc.sowing_months,
                cc.fertilizer_months,
                cc.harvest_months
             FROM crop_calendar cc
             JOIN crops c ON cc.crop_id = c.id
             ORDER BY c.name`
        );

        res.json({ calendar: rows });

    } catch (error) {
        console.error('Calendar error:', error);
        res.status(500).json({ message: 'Failed to fetch crop calendar.' });
    }
});

// GET /api/calendar/:cropName — get calendar for a specific crop
router.get('/:cropName', async (req, res) => {
    const { cropName } = req.params;

    try {
        const [rows] = await db.query(
            `SELECT 
                c.name AS crop,
                cc.sowing_months,
                cc.fertilizer_months,
                cc.harvest_months
             FROM crop_calendar cc
             JOIN crops c ON cc.crop_id = c.id
             WHERE LOWER(c.name) = ?`,
            [cropName.toLowerCase()]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Crop not found in calendar.' });
        }

        res.json({ calendar: rows[0] });

    } catch (error) {
        console.error('Calendar crop error:', error);
        res.status(500).json({ message: 'Failed to fetch crop calendar.' });
    }
});

module.exports = router;
