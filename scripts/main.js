let constructetActive = false;
let firstButtonConstructed = false;

function fetchBlogJson() {
  const postDiv = document.getElementById('blogEntries');

  fetch("/resources/blogData.json")
    .then(response => response.json())
    .then(data => {
      const entries = data.blogEntries;

      for (let post of entries) {
        const blogEntry = document.createElement('div');
        blogEntry.className = `${post['widgetLocation']}`
        blogEntry.innerHTML = `
            <div class="card">
              <img src="${post['headerPicUrl']}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${post['title']}</h5>
                <p class="card-text">${post['shortSummary']}</p>
                <a href="${post['detailsPage']}" class="btn btn-primary">Artikel lesen...</a>
              </div>
          </div>`;
        postDiv.appendChild(blogEntry);
      }
    })
    .catch(error => {
      console.error('Error fetching the JSON file:', error);
    });
}

function fetchCarouselEntries() {
  const carouselDiv = document.getElementById('carousel-items');
  const buttonsDiv = document.getElementById('carouselExampleCaptions');
  const button = document.createElement('div');
  button.className = 'carousel-indicators';

  fetch("/resources/blogData.json")
    .then(response => response.json())
    .then(data => {
      const entries = data.carouselEntries;
      let i = 0;
      for (let post of entries) {
        if (firstButtonConstructed) {
          button.innerHTML += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i}"
				  aria-label="${post['title']}"></button>`
        } else {
          button.innerHTML += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i}" class="active"
				  aria-current="true" aria-label="${post['title']}"></button>`
          firstButtonConstructed = true;
        }
        i++;

        // Bilder hinzufügen
        const blogEntry = document.createElement('div');
        if (constructetActive) {
          blogEntry.className = `carousel-item`;
        } else {
          blogEntry.className = `carousel-item active`;
          constructetActive = true;
        }
        blogEntry.innerHTML = `
          <img src="${post['headerImage']}" class="" alt="...">
				  <div class="carousel-caption d-none d-md-block">
					  <h5>${post['title']}</h5>
					  <p>${post['subtitle']}</p>
				  </div>`;
        carouselDiv.appendChild(blogEntry);
      }
    })
    .catch(error => {
      console.error('Error fetching the JSON file:', error);
    });
  
  buttonsDiv.appendChild(button);
}

document.addEventListener("DOMContentLoaded", function() {
  fetch("/components/navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;
    })
    .catch(error => console.error('Error fetching the navbar:', error));
  fetch('/components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => console.error('Error fetching the navbar:', error));
});