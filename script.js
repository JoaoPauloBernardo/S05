document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const themeMenu = document.getElementById("themeMenu");
    const themeButtons = document.querySelectorAll(".theme-btn");
    
    // Carregar tema salvo
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.setAttribute("data-theme", savedTheme);
    }
    
    // Mostrar/esconder menu de temas
    themeToggle.addEventListener("click", () => {
        themeMenu.classList.toggle("hidden");
    });
    
    // Alterar tema e salvar no localStorage
    themeButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const selectedTheme = e.target.getAttribute("data-theme");
            document.body.setAttribute("data-theme", selectedTheme);
            localStorage.setItem("theme", selectedTheme);
            themeMenu.classList.add("hidden");
        });
    });
});
