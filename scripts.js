document.addEventListener("DOMContentLoaded", () => {
    const expandableLinks = document.querySelectorAll(".expandable");

    expandableLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link behavior
            
            // Select the `.nested` sibling element
            const nestedMenu = link.nextElementSibling;

            // Log nested menu for debugging
            console.log("Toggling visibility of:", nestedMenu);

            if (nestedMenu && nestedMenu.classList.contains("nested")) {
                nestedMenu.classList.toggle("visible");
                link.classList.toggle("open");

                // Update the icon
                const icon = link.querySelector(".icon");
                icon.textContent = nestedMenu.classList.contains("visible") ? "-" : "+";
            }
        });
    });
});
