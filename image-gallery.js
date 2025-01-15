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
