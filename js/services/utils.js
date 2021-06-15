'use strict';

function debounce(func, wait, ...args) {
    let timeout;

    return function executedFunction() {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
