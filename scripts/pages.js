function createBlogPage() {

}

document.addEventListener("DOMContentLoaded", function () {
  fetch("../components/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-container').innerHTML = data;
    })
    .catch(error => console.error('Error fetching the navbar:', error));
  fetch('../components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => console.error('Error fetching the navbar:', error));

  const pages = {
    "finland-blog": {
      title: "Hier könnte ihr Text stehen",
      imgScr: "./resources/pictures/finland_thumbnail.jpg",
      description: "Hier könnte ihre Beschreibung stehen! Blindtext Blindtext Blindtext Blindtext Blindtext Blindtext Blindtext Blindtext Blindtext Blindtext Blindtext Blindtext",
      mapLocation: {
        lat: 61.9241,
        lng: 25.7482
      },
      "norway-blog": {
        mapLocation: {
          title: "Norwege, schöner als Finnland",
          imgScr: "./resources/pictures/finland_thumbnail.jpg",
          description: "Hier könnte ihre Beschreibung stehen! Blindtext Blindtext Blindtext Blindtext Blindtext Blindtext Blindtext Blindtext Blindtext Blindtext Blindtext Blindtext",
          mapLocation: {
            lat: 60.4720,
            lng: 8.4689
          }
        }
      }
    }
  };


  Object.keys(blog).forEach(function (blogId) {
    const pageContainer = document.getElementById(blogId);
    if (pageContainer) {
      const page = blog[blogId];

      const titleElement = document.createElement("h1");
      titleElement.textContent = page.title;

      const imgElement = document.createElement("img");
      imgElement.src = page.imgSrc;
      imgElement.alt = page.title;
      imgElement.style.width = "100%";

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = page.description;

      const mapElement = document.createElement("div");
      mapElement.style.width = "100%";
      mapElement.style.height = "400px";
      mapElement.id = blogId + "-map";

      pageContainer.appendChild(titleElement);
      pageContainer.appendChild(imgElement);
      pageContainer.appendChild(descriptionElement);
      pageContainer.appendChild(mapElement);

      initMap(blogId + "-map", post.mapLocation);

    }
  });

  function initMap(mapId, location) {
    const map = new google.maps.Map(document.getElementById(mapId), {
      center: location,
      zoom: 6
    });
    new google.maps.Marker({
      position: location,
      map: map
    });
  }
});