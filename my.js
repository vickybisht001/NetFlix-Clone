const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector(".icon");
        const isActive = content.style.display === "block";

        document.querySelectorAll(".accordion-content").forEach(section => {
            section.style.display = "none";
        });
        document.querySelectorAll(".icon").forEach(i => {
            i.textContent = "+";
        });

        if (!isActive) {
            content.style.display = "block";
            icon.textContent = "×";
        }
    });
});
