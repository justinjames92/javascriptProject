function testResults(form) {
  var giphySearchTab = form.giphySearchInput.value;
  console.log(giphySearchTab);
  var giphyCountTab = form.giphyCountInput.value;
  console.log(giphyCountTab);
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=NUjzcGCZPCq0Zjx29qeRvgRNaQKHBfCw&q=${giphySearchTab}&limit=${giphyCountTab}&offset=0&rating=g&lang=en`
  ) //api for the get request
    .then((response) => response.json())
    .then((data) => listItems(data.data));
}
function listItems(items) {
  console.log(items);
  let imageList = [];
  //iterating through each items
  for (i = 0; i < items.length; i++) {
    var image = `<div class="col-md-3 col-sm-12 "> <img src='${items[i].images["480w_still"].url}' width="100%" height="200"></div>`; // one image with Url

    imageList.push(image); // adding image one by one to the imageList
  }
  console.log(imageList);
  document.querySelector("#gifImage").innerHTML = imageList;
}
