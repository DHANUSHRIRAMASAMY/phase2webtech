const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET /api/schemes — get all government schemes
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query(
            'SELECT * FROM government_schemes ORDER BY name'
        );
        res.json({ schemes: rows });
    } catch (error) {
        console.error('Schemes error:', error);
        res.status(500).json({ message: 'Failed to fetch schemes.' });
    }
});

// GET /api/schemes/:id — get single scheme details
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [rows] = await db.query(
            'SELECT * FROM government_schemes WHERE id = ?',
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Scheme not found.' });
        }

        res.json({ scheme: rows[0] });

    } catch (error) {
        console.error('Scheme detail error:', error);
        res.status(500).json({ message: 'Failed to fetch scheme.' });
    }
});

module.exports = router;
