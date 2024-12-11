const data = [
  { word: 'Apple', definition: 'A fruit' },
  { word: 'Banana', definition: 'A tropical fruit' },
  // Add more data as needed
];
function search() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const results = data.filter(item => item.word.toLowerCase().includes(query));
  displayResults(results);
}
function displayResults(results) {
  const searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = '';

  results.forEach(result => {
    const resultElement = document.createElement('div');
    resultElement.innerHTML = `
      <h3>${result.word}</h3>
      <p>${result.definition}</p>
    `;
    searchResults.appendChild(resultElement);
  });
}
