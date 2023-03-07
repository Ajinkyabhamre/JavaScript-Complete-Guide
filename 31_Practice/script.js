let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response
  .then((val) => {
    return val.json();
  })
  .then((result) => {
    console.log(result);
    ihtml = "";
    for (item in result) {
      console.log(result[item]);

      ihtml += `<div  class="card" style="width: 18rem;">
  <img src="./3.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${result[item].name}</h5>
    <p class="card-text"> <a href="">Visit here</a></p>
    <p>Starts at: ${result[item].start_time}</p>
    <p>ends at: ${result[item].end_time}</p>
    <a href="${result[item].url}" class="btn btn-primary">Visit here</a>
  </div>
  
</div>`;
    }
    mainContainer.innerHTML = ihtml;
  });
