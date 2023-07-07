// Mock book data
const books = [
  { title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki and Sharon L. Lechter', genre: '	Personal finance', year: 2000, available: true, copies: 5 },
  { title: 'Trading in the zone', author: 'Mark Douglas', genre: 'Business & Economics', year: 1990, available: false, copies: 0 },
  { title: 'The Psychology of Money – Timeless Lessons on Wealth, Greed and Happiness', author: 'Morgan Housel', genre: 'Personal finance', year: 2020, available: true, copies: 2 },
  // Add more books...
];

// Get DOM elements
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const bookList = document.getElementById('book-list');
const loadingAnimation = document.getElementById('loading-animation');
const cartCount = document.getElementById('cart-count');
const filterButton = document.getElementById('filter-button');
const cart = document.getElementById('cart');

let cartItems = [];

// Render book list
const renderBookList = (books) => {
  bookList.innerHTML = '';
  books.forEach((book) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h2>${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Genre: ${book.genre}</p>
      <p>Year of Publishing: ${book.year}</p>
      <p>Availability: ${book.available ? 'Available' : 'Not Available'}</p>
      <p>Copies: ${book.copies}</p>
    `;
    bookList.appendChild(li);
  });
};

// Filter books
const filterBooks = () => {
  const filterTerm = prompt('Enter filter term:');
  // Filter books based on filterTerm
  const filteredBooks = books.filter((book) => book.title.includes(filterTerm));
  renderBookList(filteredBooks);
};

// Perform search
const performSearch = (searchTerm) => {
  // Perform search based on searchTerm
  const searchResults = books.filter(
    (book) =>
      book.title.includes(searchTerm) ||
      book.author.includes(searchTerm) ||
      book.genre.includes(searchTerm) ||
      book.year.toString().includes(searchTerm)
  );
  return searchResults;
};

// Render search results
const renderSearchResults = (results) => {
  searchResults.innerHTML = '';
  results.forEach((result) => {
    const li = document.createElement('li');
    li.textContent = result.title;
    searchResults.appendChild(li);
  });
};

// Add book to cart
const addToCart = (book) => {
  if (book.available && book.copies > 0) {
    cartItems.push(book);
    cartCount.textContent = cartItems.length;
    book.copies--;
    renderBookList(books);
  }
};

// Event listeners
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const searchResults = performSearch(searchTerm);
  renderSearchResults(searchResults);
  searchResults.length > 0 ? (searchResults.style.display = 'block') : (searchResults.style.display = 'none');
});

searchResults.addEventListener('click', (event) => {
  const selectedBook = books.find((book) => book.title === event.target.textContent);
  addToCart(selectedBook);
});

filterButton.addEventListener('click', filterBooks);

cart.addEventListener('click', () => {
  // Implement cart functionality and checkout logic here
});

// Initial render
renderBookList(books);
function redirect(){
  window.location.href='home.html'
}