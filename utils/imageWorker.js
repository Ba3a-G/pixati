import { workerData, parentPort } from 'worker_threads';
import sharp from 'sharp';
import hash from 'object-hash';

import S3Service from '../services/s3.service.js';

const s3 = new S3Service();

const image = sharp({
    // we will figure out the styling later
    text: {
        text: workerData,
        width: 512, // max width
        height: 512, // max height
    }
})

// simulating image generation with a delay
setTimeout(() => {
    image.toFile(`./temp/${hash.MD5(workerData)}.jpg`);
    // writing to file for now, but we will stream it to image service, then to S3
    parentPort.postMessage({ status: 'success', data: workerData, url: 'https://sample.s3.url' })
}, 5000);