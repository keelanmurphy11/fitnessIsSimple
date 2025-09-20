
function applyResponsiveStyles() {
    const container = document.querySelector(".container"); //selects container and h1 elements
    const h1 = document.querySelector("h1");

    if (window.innerWidth <= 600) {
        // Apply styles for small screens
        if (container) container.style.padding = "20px";
        if (h1) h1.style.fontSize = "1.8em";
        document.body.style.padding = "40px 5px 10px 5px";
    } else {
        // Reset styles for larger screens
        if (container) container.style.padding = "";
        if (h1) h1.style.fontSize = "";
        document.body.style.padding = "";
    }
}

// Run the function on window resize and when the page loads
window.addEventListener("resize", applyResponsiveStyles);
window.addEventListener("load", applyResponsiveStyles);