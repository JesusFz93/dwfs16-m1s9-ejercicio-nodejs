const http = require("http");

http.get("http://www.google.com", (response) => {
    let data = "";
    response.on("data", (chunk) => {
        data += chunk;
    });
    response.on("end", () => {
        console.log(data);
    });
});
