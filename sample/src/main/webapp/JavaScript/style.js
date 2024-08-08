// style.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Tailwind CSS
    const tailwindConfig = {
        theme: {
            extend: {
                colors: {
                    clifford: '#da373d',
                }
            }
        }
    };
    
    // Apply the configuration
    if (typeof tailwind !== 'undefined') {
        tailwind.config = tailwindConfig;
    }
});
