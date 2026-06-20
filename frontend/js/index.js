//alert("Hello From JS!");

console.log("Hello from js!");

const toggleBtn = document.getElementById("toggleBtn");

if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
}