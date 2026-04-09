// your code here
document.addEventListener("DOMContentLoaded", function () {
      const button = document.getElementById("button");

      button.addEventListener("click", function () {
        let name = document.getElementById("name").value;
        let year = document.getElementById("year").value;

        let baseUrl = "https://localhost:8080/";
        let params = [];

        if (name) params.push(`name=${name}`);
        if (year) params.push(`year=${year}`);

        let query = params.length ? "?" + params.join("&") : "";

        document.getElementById("url").textContent = baseUrl + query;
      });
    });