document.addEventListener('DOMContentLoaded', () => {
    const basePath = location.hostname.includes('github.io') ? '/CV-projekt/' : '../';

    const targetImage = document.querySelector('.header-image-container img');
    let i = 1;

    if (typeof album != 'undefined' && Array.isArray(album)) {
        targetImage.addEventListener('click', () => {
            targetImage.style.opacity = '0';
            setTimeout(() => {
                if (i == album.length) {
                    i = 0;
                }

                targetImage.src = basePath + album[i];
                i++;

                targetImage.style.opacity = '1';
            }, 300);
        });
    } else {
        console.error('targetImage not found or album is missing');
    }
});