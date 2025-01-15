document.querySelectorAll('.thumbnail').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.querySelector('#modal');
        const modalImg = document.querySelector('#modal-img');
        modalImg.src = this.src;
        modal.style.display = 'block';
    });
});
document.querySelector('#modal-close').addEventListener('click', function() {
    document.querySelector('#modal').style.display = 'none';
});

### OR ###

const lightbox = document.querySelector('#lightbox');
const lightboxImg = document.querySelector('#lightbox-img');
const closeBtn = document.querySelector('#close');

document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
