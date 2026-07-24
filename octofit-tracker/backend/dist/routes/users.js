"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../models/user");
const router = (0, express_1.Router)();
router.get('/api/users', async (_req, res) => {
    try {
        const users = await user_1.User.find();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});
exports.default = router;
