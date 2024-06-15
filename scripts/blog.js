function createBlogPage(id) {
  const blogId = id
  const headerImgDiv = document.getElementById('blogHeaderImg');
  const mapDiv = document.getElementById('map')

  fetch("/resources/blogData.json")
  .then(response => response.json())
  .then(data => {
    const entries = data.blogEntries;

    for (let post of entries) {
      if (blogId == post['blogId']) {
        const headerImg = document.createElement('img');
        headerImg.className = "headerImg";
        headerImg.src = post['headerPicUrl']
        headerImg.alt = post['headerPicAlt']
        headerImgDiv.appendChild(headerImg);

        const mapFrame = document.createElement('iframe');
        mapFrame.className = "googleMap";
        mapFrame.src = post['mapPins']
        mapFrame.width = 640;
        mapFrame.height = 400;
        mapDiv.appendChild(mapFrame);

        for (let paragraph of post.paragraphs) {
          console.log(paragraph['header'])
        }
      }
    }
  })
  .catch(error => {
    console.error('Error fetching the JSON file:', error);
  });
}

document.addEventListener("DOMContentLoaded", function() {
    fetch("../../components/navbar.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById('navbar-container').innerHTML = data;
      })
      .catch(error => console.error('Error fetching the navbar:', error));
    fetch('../../components/footer.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('footer-container').innerHTML = data;
      })
      .catch(error => console.error('Error fetching the navbar:', error));
  });