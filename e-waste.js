document.addEventListener("DOMContentLoaded", function() {
    const locationForm = document.getElementById("locationForm");
    
    locationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Get the entered location
        const locationInput = document.getElementById("location").value;
        
        // Check if the location is empty
        if (locationInput.trim() === "") {
            alert("Please enter a location.");
            return;
        }
        
        // Navigate to the search results page with the location included in the URL
        window.location.href = "search-results.html?location=" + encodeURIComponent(locationInput);
    });
});
