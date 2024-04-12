import { Worker } from 'worker_threads';

const genImage = async ( workerData ) => {
    const worker = new Worker('./utils/imageGenerator.js', { workerData });
    worker.on('message', (msg) => {
        // Update DB
        console.log(msg);
    });
    worker.on('error', (err) => {
        // Update DB
        console.error(err);
    });
    worker.on('exit', (code) => {
        if (code !== 0) {
            // Update DB
            console.error(new Error(`Worker stopped with exit code ${code}`));
        }
    });
};

export default class ImageController {
    async generateImage(req, res) {
        try {
            const path = req.params.somedata;
            genImage(path);
            res.status(200).send('Image generation started ...');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

