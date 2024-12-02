document.addEventListener('DOMContentLoaded', function () {
    // Select all sections
    var sections = document.querySelectorAll('section');
    // Function to toggle visibility of a section's content
    function toggleSectionVisibility(section) {
        var content = section === null || section === void 0 ? void 0 : section.querySelector('.content');
        if (content) {
            // Toggle between 'block' and 'none'
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.transition = "all 2s";
                content.style.display = 'block'; // Show section
            }
            else {
                content.style.transition = "all 2s";
                content.style.display = 'none'; // Hide section
            }
        }
    }
    // Add event listeners to each button
    sections.forEach(function (section) {
        var button = section.querySelector('.toggle-button');
        if (button) {
            button.addEventListener('click', function () { return toggleSectionVisibility(section); });
        }
    });
});
