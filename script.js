// your code here
document.getElementById("button").addEventListener("click", function () {
            let name = document.getElementById("name").value;
            let year = document.getElementById("year").value;

            let baseURL = "https://localhost:8080/";
            let queryParams = [];
            if (name) {
                queryParams.push("name=" + encodeURIComponent(name));
            }
            if (year) {
                queryParams.push("year=" + encodeURIComponent(year));
            }
            let finalURL = baseURL;
            if (queryParams.length > 0) {
                finalURL += "?" + queryParams.join("&");
            }
           document.getElementById("url").innerText = finalURL;
        });