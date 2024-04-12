import { workerData, parentPort } from 'worker_threads'

setTimeout(() => {
    parentPort.postMessage({ status: 'success', data: workerData, url: 'https://sample.s3.url' })
}, 5000);