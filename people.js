document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const driverName = document.getElementById('driver-name').value.trim().toLowerCase();
    const resultsSection = document.getElementById('results');
    const resultItems = resultsSection.getElementsByClassName('result-item');
    let found = false;

    // Hide all results initially
    for (let item of resultItems) {
        item.style.display = 'none';
    }

    // Search for matching results
    if (driverName) {
        for (let item of resultItems) {
            if (item.dataset.name.toLowerCase().includes(driverName)) {
                item.style.display = 'block';
                found = true;
            }
        }
    }

    // Update search status
    const searchStatus = document.getElementById('search-status');
    if (found) {
        searchStatus.textContent = 'Search successful';
        resultsSection.style.display = 'block';
    } else {
        searchStatus.textContent = 'No results found';
        resultsSection.style.display = 'none';
    }
});
