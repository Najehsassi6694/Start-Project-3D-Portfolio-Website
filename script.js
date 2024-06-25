document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const covers = document.querySelectorAll('.cover');
    const nextButton = document.querySelector('#next');
    const prevButton = document.querySelector('#prev');
    const contactButton = document.querySelector('#contact');
    const profileButton = document.querySelector('#back-profile');
    let currentPage = 0;
  
    // Turn pages when click next or prev button
    nextButton.addEventListener('click', () => {
      turnPage(currentPage + 1);
    });
  
    prevButton.addEventListener('click', () => {
      turnPage(currentPage - 1);
    });
  
    // Contact me button when click
    contactButton.addEventListener('click', () => {
      alert('Contact me clicked!');
    });
  
    // Back profile button when click
    profileButton.addEventListener('click', () => {
      turnPage(0);
    });
  
    // Create reverse index function
    function reverseIndex(index) {
      return covers.length - 1 - index;
    }
  
    // Turn page function
    function turnPage(page) {
      if (page < 0 || page >= covers.length) return;
      currentPage = page;
      updatePageRotation();
    }
  
    // Update page rotation based on current page
    function updatePageRotation() {
      covers.forEach((cover, index) => {
        if (index <= currentPage) {
          cover.style.transform = 'rotateY(0deg)';
        } else {
          cover.style.transform = 'rotateY(180deg)';
        }
      });
    }
  
    // Opening animation
    function openingAnimation() {
      // Opening animation (cover right animation)
      covers.forEach((cover, index) => {
        if (index % 2 === 0) {
          cover.style.transform = 'rotateY(-180deg)';
        } else {
          cover.style.transform = 'rotateY(180deg)';
        }
      });
  
      setTimeout(() => {
        // Opening animation (page left or profile page animation)
        covers[0].style.transform = 'rotateY(0deg)';
  
        // Opening animation (all page right animation)
        for (let i = 1; i < covers.length; i++) {
          covers[i].style.transform = 'rotateY(180deg)';
        }
  
        currentPage = 0;
      }, 1000);
    }
  
    openingAnimation();
  });
  