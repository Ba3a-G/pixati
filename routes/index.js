import express from 'express';
import ImageController from '../controllers/index.js';

const router = express.Router();
const imageController = new ImageController();

router.get('/', (req, res) => {
    res.send('Hello from Ba3a!');
});

// Should be POST, using GET for testing and simplicity
router.get('/image', imageController.generateImage);

export default router;