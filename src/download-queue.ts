export type DownloadQueueRequest = {
  input: RequestInfo | URL;
  init?: RequestInit;
  callback: (data: any) => void;
};

export class DownloadQueue {
  private queue: DownloadQueueRequest[];
  private isDownloading: boolean;

  constructor() {
    this.queue = [];
    this.isDownloading = false;
  }

  public enqueue(req: DownloadQueueRequest): void {
    this.queue.push(req);
    this.processQueue();
  }

  private processQueue(): void {
    if (!this.isDownloading && this.queue.length > 0) {
      const req = this.queue.shift();
      if (req) {
        this.downloadFile(req);
      }
    }
  }

  private downloadFile(req: DownloadQueueRequest): void {
    this.isDownloading = true;

    fetch(req.input, req.init)
      .then((response) => response.json())
      .then((json: JSON) => {
        this.isDownloading = false;
        req.callback(json);
        this.processQueue();
      })
      .catch((error) => {
        console.error("Error: ", req.input, error);
        this.isDownloading = false;
        this.processQueue();
      });
  }
}
