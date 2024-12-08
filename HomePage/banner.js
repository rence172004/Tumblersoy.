document.addEventListener("DOMContentLoaded", function () {
    // Array of banner images
    const bannerImages = [
        'https://img.alicdn.com/imgextra/i2/6000000001940/O1CN01Am7SDt1QCYz598y3U_!!6000000001940-0-tbvideo.jpg',
        'https://hips.hearstapps.com/hmg-prod/images/img-5459-66421dab005e6.jpg?crop=0.776xw:0.291xh;0.109xw,0.368xh&resize=1200:*',
        'https://cdn.thewirecutter.com/wp-content/media/2022/07/stanley-adventure-quencher-2048px-5294.jpg'
    ];

    let currentImageIndex = 0;
    const banner = document.getElementById('banner');

    // Function to change banner image
    function changeBannerImage() {
        banner.style.backgroundImage = `url(${bannerImages[currentImageIndex]})`;
        currentImageIndex = (currentImageIndex + 1) % bannerImages.length; // Loop through images
    }

    // Change image every 3 seconds
    setInterval(changeBannerImage, 3000);

    // Initial banner image
    changeBannerImage();
});