// Header loader that works both locally and on GitHub Pages

document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on GitHub Pages or local
    function isGitHubPages() {
        return window.location.hostname.includes('github.io');
    }
    
    // Get repository name from URL for GitHub Pages
    function getRepoName() {
        if (!isGitHubPages()) {
            return '';
        }
        const pathArray = window.location.pathname.split('/');
        // GitHub Pages always has the repo name as the first path segment
        return pathArray.length > 1 ? '/' + pathArray[1] : '';
    }
    
    // Determine path to root based on current location
    function getPathToRoot() {
        // Get current path - either with or without repo name prefix
        const fullPath = window.location.pathname;
        const repoName = getRepoName();
        
        // For GitHub Pages, remove the repo name from the path for proper calculation
        const pathWithoutRepo = repoName ? fullPath.substring(repoName.length) : fullPath;
        
        // Split by '/' and remove empty entries
        const parts = pathWithoutRepo.split('/').filter(part => part !== '');
        
        // If we're at root, return empty string (local) or repo name (GitHub Pages)
        if (parts.length === 0 || (parts.length === 1 && parts[0] === 'index.html')) {
            return repoName ? repoName + '/' : '';
        }
        
        // Build relative path (one ../ for each directory level)
        const relativePath = '../'.repeat(parts.length - (parts[parts.length-1].includes('.') ? 1 : 0));
        
        // If on GitHub Pages, prepend repo name to the root path
        return repoName ? repoName + '/' + relativePath : relativePath;
    }
    
    // Get the path to root directory
    const pathToRoot = getPathToRoot();
    
    // Log for debugging
    console.log('Environment:', isGitHubPages() ? 'GitHub Pages' : 'Local');
    console.log('Path to root:', pathToRoot);
    
    // Fetch the header
    fetch(pathToRoot + 'header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load header.html');
            }
            return response.text();
        })
        .then(data => {
            // Insert header at the beginning of the body
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.outerHTML = data;
            } else {
                document.body.insertAdjacentHTML('afterbegin', data);
            }
            
            // Fix paths in header based on current location
            document.querySelectorAll('.site-header a').forEach(link => {
                const href = link.getAttribute('href');
                
                // Skip links that are fragment identifiers or already absolute URLs
                if (!href || href.startsWith('#') || href.includes('://')) {
                    return;
                }
                
                // For links that don't already have the correct path prefix
                if (!href.startsWith(pathToRoot) && !href.startsWith('../')) {
                    // Don't modify dropdown toggle
                    if (link.classList.contains('dropdown-toggle')) {
                        return;
                    }
                    link.href = pathToRoot + href;
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
            console.log('Path tried:', pathToRoot + 'header.html');
        });
});