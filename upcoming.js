function goToHome() {
  window.location.href = "index.html";
}
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2JhZTc0OTQ2Mzg1MzA0OTE2ZWViYThmMzYxZTYzOCIsInN1YiI6IjY0NzM3MDk4OTQwOGVjMDBhN2ZhZDVkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hd_EzZqHP11ygSre1R2tv6kLIvq5k4cqy8m2VXQDTWI",
  },
};

// For Navbar
// Fetch the list of movie genres from the API endpoint
fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
  .then((response) => response.json())
  .then((data) => {
    // Get the genres array from the response
    const genres = data.genres;
    console.log(genres); // Log the genres array

    // Create the navigation bar
    const navMenu = document.getElementById("nav-menu");
    genres.forEach((genre) => {
      // Create a new list item for each genre
      const navItem = document.createElement("li");

       // Create a new link element for the genre
      const navLink = document.createElement("a");
      navLink.href = "#"; // Set the link's href attribute to "#"
      navLink.textContent = genre.name; // Set the link text to the genre name

       // Add a click event listener to the link
      navLink.addEventListener("click", () => {
        // Handle click event for genre selection
        console.log(`Selected genre: ${genre.name}, ID: ${genre.id}`);
        // Perform actions or load data based on the selected genre
      });
       // Append the link to the list item
      navItem.appendChild(navLink);

      // Append the list item to the navigation menu
      navMenu.appendChild(navItem);
    });
  })
  .catch((err) => console.error(err));


fetch(
  "https://api.themoviedb.org/3/movie/upcoming?api_key=63bae74946385304916eeba8f361e638"
)
  .then((response) => response.json())
  .then((data) => {
    // Update the HTML content with the received data
    const movieDetailsElement = document.getElementById("movie-details");

    // Loop through the movie results and display the information
    data.results.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.innerHTML = `
  <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Movie Poster">
    <h2>${movie.title}</h2>
    <p>${movie.overview}</p>
    <p>Release Date: ${movie.release_date}</p>
    
  `;
      movieDetailsElement.appendChild(movieElement); // Append the movie element to the movie details container
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
