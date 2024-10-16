const bigDesktopImage = document.querySelector('.developers-desktop-picture');
const bigMobileImage = document.querySelector('.developers-mobile-picture');
const smallImages = document.querySelectorAll('.small-image');

// Function to handle the animation with customizable translate values
function animateImage(bigImage, translateX = 150, translateY = 150) {
  // Hide the big image by reducing opacity
  bigImage.style.opacity = '0';
  bigImage.style.transition = 'opacity 0.5s ease';

  // Pop out the small images from the center and move to their positions
  smallImages.forEach((img, index) => {
    img.style.transition = 'transform 0.8s ease, opacity 0.8s ease'; // Smooth transition for movement and fade in

    setTimeout(() => {
      img.style.opacity = '1'; // Fade in the small images

      // Pop to full size and move to the respective corner positions
      switch (index) {
        case 0:
          img.style.transform = `scale(1) translate(-${translateX}%, -${translateY}%)`; // Top-left
          break;
        case 1:
          img.style.transform = `scale(1) translate(${translateX}%, -${translateY}%)`; // Top-right
          break;
        case 2:
          img.style.transform = `scale(1) translate(-${translateX}%, ${translateY}%)`; // Bottom-left
          break;
        case 3:
          img.style.transform = `scale(1) translate(${translateX}%, ${translateY}%)`; // Bottom-right
          break;
      }
    }, index * 150); // Add slight delay between each image
  });

  // Set a timeout to reverse the animation after 7 seconds
  setTimeout(() => {
    // Move the small images back to the center and hide them
    smallImages.forEach((img) => {
      img.style.transform = 'scale(0) translate(0, 0)';  // Move back to the center
      img.style.opacity = '0';  // Fade out the small images
    });

    // Show the big image again
    bigImage.style.opacity = '1';
  }, 7000); // 7 seconds (7000 milliseconds)
}

// Add event listeners for desktop and mobile images
function handleAnimationForScreen() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1024) { // Desktop size
    bigDesktopImage.addEventListener('click', function() {
      animateImage(bigDesktopImage, 29, 29); // Adjust translateX and translateY values for desktop
    });
  } else if (screenWidth >= 720 && screenWidth < 1024) { // Tablet size
    bigDesktopImage.addEventListener('click', function() {
      animateImage(bigDesktopImage, 50, 50); // Adjust translateX and translateY values for tablet
    });
  } else { // Mobile size
    bigMobileImage.addEventListener('click', function() {
      animateImage(bigMobileImage, 30, 30); // Adjust translateX and translateY values for mobile
    });
  }
}

// Run animation handler on initial load
handleAnimationForScreen();

// Run animation handler on window resize
window.addEventListener('resize', handleAnimationForScreen);
