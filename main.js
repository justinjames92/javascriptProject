function testResults(form) {
  var giphySearchTab = form.giphySearchInput.value;

  var giphyCountTab = form.giphyCountInput.value;

  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=NUjzcGCZPCq0Zjx29qeRvgRNaQKHBfCw&q= ${giphySearchTab}&limit=${giphyCountTab}&offset=0&rating=g&lang=en`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
