// Project slider with navigation arrows and pause on hover
(function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.project-slider .slide');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  let interval;
  
  // Safety check: exit if no slides found
  if (slides.length === 0) return;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
  
  function startSlider() {
    interval = setInterval(nextSlide, 5000);
  }
  
  function stopSlider() {
    clearInterval(interval);
  }
  
  // Navigation button handlers
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      nextSlide();
      stopSlider();
      startSlider(); // Restart auto-rotation after manual navigation
    });
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      prevSlide();
      stopSlider();
      startSlider(); // Restart auto-rotation after manual navigation
    });
  }
  
  // Pause slider on hover for better UX
  const slider = document.querySelector('.project-slider');
  if (slider) {
    slider.addEventListener('mouseenter', stopSlider);
    slider.addEventListener('mouseleave', startSlider);
  }
  
  // Start the slider
  startSlider();
})();