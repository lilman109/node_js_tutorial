const { isMainThread, Worker, workerData } = require("worker_threads");

if (isMainThread) {
  console.log(`Main Thread! Process ID: ${process.pid}`);
  new Worker(__filename, {
    workerData: [2, 3, 5, 7],
  });
  new Worker(__filename, {
    workerData: [7, 3, 2, 9],
  });
} else {
  console.log(`Worker! Process ID: ${process.pid}`);
  console.log(`${workerData} sorted is ${workerData.sort()}`);
}
