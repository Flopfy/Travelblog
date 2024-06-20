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
});