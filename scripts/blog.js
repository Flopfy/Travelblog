function createBlogPage() {
  const blogId = "B02E-ZU8F-K3BM-QZT3"
  const headerImgDiv = document.getElementById('blogHeaderImg');

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