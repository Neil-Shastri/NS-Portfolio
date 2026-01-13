function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
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

