// Include this script at the end of each HTML file to load the header

document.addEventListener('DOMContentLoaded', function() {
    // Function to determine relative path to root
    function getPathToRoot() {
        // Get current path
        const path = window.location.pathname;
        // Split by '/' and remove empty entries
        const parts = path.split('/').filter(part => part !== '');
        
        // If we're at root, return empty string
        if (parts.length === 0 || (parts.length === 1 && parts[0] === 'index.html')) {
            return '';
        }
        
        // Build relative path (one ../ for each directory level)
        return '../'.repeat(parts.length - (parts[parts.length-1].includes('.') ? 1 : 0));
    }
    
    // Get the path to root
    const pathToRoot = getPathToRoot();
    
    // Fetch the header
    fetch(pathToRoot + 'header.html')
        .then(response => response.text())
        .then(data => {
            // Insert header at the beginning of the body
            const headerPlaceholder = document.getElementById('header-placeholder') || document.body;
            
            if (headerPlaceholder === document.body) {
                // If no placeholder, insert at beginning of body
                document.body.insertAdjacentHTML('afterbegin', data);
            } else {
                // If placeholder exists, replace it
                headerPlaceholder.outerHTML = data;
            }
            
            // Fix paths in header
            document.querySelectorAll('.site-header a').forEach(link => {
                if (link.getAttribute('href').startsWith('/')) {
                    link.href = pathToRoot + link.getAttribute('href').substring(1);
                }
            });
            
            // Mobile menu functionality
            const mobileToggle = document.querySelector('.mobile-nav-toggle');
            const mainNav = document.querySelector('.main-nav');
            
            if (mobileToggle) {
                mobileToggle.addEventListener('click', function() {
                    mainNav.classList.toggle('active');
                });
            }
            
            // Dropdown functionality for mobile
            const dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach(dropdown => {
                const toggle = dropdown.querySelector('.dropdown-toggle');
                if (toggle && window.innerWidth <= 800) {
                    toggle.addEventListener('click', function(e) {
                        e.preventDefault();
                        dropdown.classList.toggle('active');
                    });
                }
            });
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
});