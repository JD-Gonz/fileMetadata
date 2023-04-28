# File Metadata Microservice

This microservice provides the size (in bytes) of any form data that you provide for upload. It is built with Node.js

## Installation

To run this microservice locally, you'll need to have Node.js and npm installed on your system.

1. Clone the repository: `git clone https://github.com/JD-Gonz/fileMetadata.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Open your web browser and navigate to `http://localhost:8080`

## Usage

To use this microservice, simply make a `POST` request with your form data as the payload. The server will respond with a JSON object containing the size of the uploaded file.

### Example Request

```
POST / HTTP/1.1
Host: localhost:8080
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file"; filename="example.txt"
Content-Type: text/plain

Hello, world!
------WebKitFormBoundary7MA4YWxkTrZu0gW--
```

### Example Response

```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "size": 13
}
```

## License

This microservice is released under the [MIT License](LICENSE).

---