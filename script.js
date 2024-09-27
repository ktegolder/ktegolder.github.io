document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalMedium = document.getElementById('modal-medium');
    const modalYear = document.getElementById('modal-year');
    const modalPurpose = document.getElementById('modal-purpose');
    const closeModalBtn = document.querySelector('.close-btn');

    // Filter portfolio items by category
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            
            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (category === 'all' || itemCategory === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Open modal when a portfolio item is clicked
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.getAttribute('data-title');
            const imgSrc = item.querySelector('img').getAttribute('src');
            const description = item.getAttribute('data-description');
            const medium = item.getAttribute('data-medium');
            const year = item.getAttribute('data-year');
            const purpose = item.getAttribute('data-purpose');

            modalTitle.textContent = title;
            modalImage.setAttribute('src', imgSrc);
            modalDescription.textContent = description;
            modalMedium.textContent = medium || "Not available";
            modalYear.textContent = year || "Not available";
            modalPurpose.textContent = purpose || "Not available";

            modal.style.display = 'block';
        });
    });

    // Close modal when the 'x' button is clicked
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', event => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

