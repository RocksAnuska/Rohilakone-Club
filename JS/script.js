
    // Automated slideshow logic for both galleries
    let pujo2023Index = 0;
    let pujo2024Index = 0;
    let pujo2023Timer, pujo2024Timer;
    function showSlide(gallery, n) {
      let slides = document.getElementsByClassName(gallery + '-slide');
      if (n >= slides.length) n = 0;
      if (n < 0) n = slides.length - 1;
      for (let i = 0; i < slides.length; i++) slides[i].style.display = 'none';
      slides[n].style.display = 'block';
      if (gallery === 'pujo2023') pujo2023Index = n;
      if (gallery === 'pujo2024') pujo2024Index = n;
    }
    function autoSlide(gallery) {
      let idx = gallery === 'pujo2023' ? pujo2023Index : pujo2024Index;
      showSlide(gallery, idx + 1);
      if (gallery === 'pujo2023') pujo2023Timer = setTimeout(() => autoSlide('pujo2023'), 2500);
      if (gallery === 'pujo2024') pujo2024Timer = setTimeout(() => autoSlide('pujo2024'), 2500);
    }
    function resetAutoSlide(gallery) {
      if (gallery === 'pujo2023') {
        clearTimeout(pujo2023Timer);
        pujo2023Timer = setTimeout(() => autoSlide('pujo2023'), 2500);
      }
      if (gallery === 'pujo2024') {
        clearTimeout(pujo2024Timer);
        pujo2024Timer = setTimeout(() => autoSlide('pujo2024'), 2500);
      }
    }
    document.addEventListener('DOMContentLoaded', function() {
      showSlide('pujo2023', 0);
      showSlide('pujo2024', 0);
      pujo2023Timer = setTimeout(() => autoSlide('pujo2023'), 2500);
      pujo2024Timer = setTimeout(() => autoSlide('pujo2024'), 2500);
    });
  