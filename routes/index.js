import express from 'express';
import ImageController from '../controllers/index.js';

const router = express.Router();
const imageController = new ImageController();

router.get('/', (req, res) => {
    res.send('Hello from Ba3a!');
});

router.get('/image/:somedata', imageController.generateImage);

export default router;