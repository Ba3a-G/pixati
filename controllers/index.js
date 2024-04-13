import ImageService from '../services/image.service.js';

const imageService = new ImageService();

export default class ImageController {
    async generateImage(req, res) {
        try {
            // Random data
            const data = Math.random().toString(36).substring(7);
            imageService.generate(data);
            res.status(200).send('Image generation started ...');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

