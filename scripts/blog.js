function createBlogPage(id) {
  const blogId = id
  const headerImgDiv = document.getElementById('blogHeaderImg');
  const headerDiv = document.getElementById('header');
  const mapDiv = document.getElementById('map');
  const paragraphDiv = document.getElementById('paragraphs')

  fetch("/resources/blogData.json")
  .then(response => response.json())
  .then(data => {
    const entries = data.blogEntries;

    for (let post of entries) {
      if (blogId == post['blogId']) {
        // Header Image
        const headerImg = document.createElement('img');
        headerImg.className = "headerImg";
        headerImg.src = post['headerPicUrl']
        headerImg.alt = post['headerPicAlt']
        headerImgDiv.appendChild(headerImg);

        // Header Title
        const header = document.createElement('div');
        header.innerHTML = `
          <h1>${post['title']}</h1>
          <p>${post['summary']}</p>`
        headerDiv.appendChild(header)

        // Map
        const mapFrame = document.createElement('iframe');
        mapFrame.className = "googleMap";
        mapFrame.src = post['mapPins']
        mapFrame.width = 640;
        mapFrame.height = 400;
        mapDiv.appendChild(mapFrame);

        // Paragraphs
        const paragraph = document.createElement('div');
        for (let pData of post.paragraphs) {
          const div = document.createElement('div');
          div.innerHTML = `
            <h2>${pData['header']}</h2>
            <p>${pData['text']}</p>
            <img src="${pData['picture']}" alt="${pData['alt']}">`
          paragraph.appendChild(div)
        }
        paragraphDiv.appendChild(paragraph)
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