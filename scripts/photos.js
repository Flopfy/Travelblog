function fillGallery() {
    const galleryDiv = document.getElementById('gallery-container');

    fetch("/resources/photoDb.json")
    .then(response => response.json())
    .then(data => {
        for (let picture of data) {
            const img = document.createElement('img');
            img.src = picture['photoUrl'];
            img.alt = picture['photoAlt'];

            const photoDiv = document.createElement('div');
            photoDiv.className = 'photo-item';
            photoDiv.appendChild(img);

            galleryDiv.appendChild(photoDiv);
        }
    })
    .catch(error => {
      console.error('Error fetching the JSON file:', error);
    });
}