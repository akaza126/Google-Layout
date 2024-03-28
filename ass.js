document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const micButton = document.getElementById('mic-button');
  
    // Event listener for search button
    searchButton.addEventListener('click', function() {
      const query = searchInput.value.trim();
      if (query !== '') {
        // Redirect to Google search results page with the query
        window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);
      }
    });
  
    // Event listener for microphone button (optional)
    micButton.addEventListener('click', function() {
      // Handle voice search functionality here
      console.log('Voice search activated.');
    });
  });
  