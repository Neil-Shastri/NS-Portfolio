function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Initialize projects visibility
let projectsExpanded = false;

function initializeProjects() {
  const items = document.querySelectorAll('.accordion-item');
  // Show only first 3 projects initially
  items.forEach((item, index) => {
    if (index < 3) {
      item.classList.add('visible');
    } else {
      item.classList.remove('visible');
    }
  });
  projectsExpanded = false;
  updateToggleButtonText();
}

function toggleProjects() {
  const items = document.querySelectorAll('.accordion-item');
  projectsExpanded = !projectsExpanded;
  
  if (projectsExpanded) {
    // Show all projects
    items.forEach(item => {
      item.classList.add('visible');
    });
  } else {
    // Show only first 3
    items.forEach((item, index) => {
      if (index < 3) {
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
      }
    });
  }
  updateToggleButtonText();
}

function updateToggleButtonText() {
  const btn = document.getElementById('toggleProjectsBtn');
  btn.textContent = projectsExpanded ? 'See Less' : 'See More';
}

// Accordion functionality
function toggleAccordion(index) {
  const items = document.querySelectorAll('.accordion-item');
  const clickedItem = items[index];
  
  // Close all items except the clicked one
  items.forEach((item, i) => {
    if (i !== index) {
      item.classList.remove('active');
    }
  });
  
  // Toggle the clicked item
  clickedItem.classList.toggle('active');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeProjects);

