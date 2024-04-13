import { Worker } from "worker_threads";
import S3Service from "./s3.service.js";
import RedisService from "./redis.service.js";

export default class ImageService {
    async generate(workerData) {
        const worker = new Worker("./utils/imageWorker.js", { workerData });
        worker.on("message", (msg) => {
            // Update DB
            console.log(msg);
        });
        worker.on("error", (err) => {
            // Update DB
            console.error(err);
        });
        worker.on("exit", (code) => {
            if (code !== 0) {
                // Update DB
                console.error(new Error(`Worker stopped with exit code ${code}`));
            }
        });
    }
}
