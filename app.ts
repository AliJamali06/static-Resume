document.addEventListener('DOMContentLoaded', () => {
  // Select all sections
  const sections = document.querySelectorAll('section');

  // Function to toggle visibility of a section's content
  function toggleSectionVisibility(section:HTMLElement | null) {
    const content = section?.querySelector('.content') as HTMLElement;
    if (content) {
      // Toggle between 'block' and 'none'
      if (content.style.display === 'none' || content.style.display === '') {
        content.style.transition = "all 2s";
        content.style.display = 'block'; // Show section
      } else {
        content.style.transition = "all 2s";
        content.style.display = 'none'; // Hide section
      }
    }
  }

  // Add event listeners to each button
  sections.forEach((section) => {
    const button = section.querySelector('.toggle-button');
    if (button) {
      button.addEventListener('click', () => toggleSectionVisibility(section));
    }
  });
});
