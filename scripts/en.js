//دارك مود و الترجمة
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
document.addEventListener('DOMContentLoaded', () => {
    const textContainer = document.querySelector('.text-container');
    const imageContainer = document.querySelector('.image-container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                textContainer.style.opacity = '1';
                textContainer.style.transform = 'translateX(0)';
                imageContainer.style.transform = 'scale(1.3)'; 
            } else {
                textContainer.style.opacity = '0';
                textContainer.style.transform = 'translateX(-40px)'; 
                imageContainer.style.transform = 'scale(1)'; 
            }
        });
    }, { threshold: 0.2 }); 

    observer.observe(document.querySelector('.interactive-section'));
});

document.addEventListener('DOMContentLoaded', function() {
    const translateIcon = document.getElementById('translate-icon');
    const elementsToTranslate = document.querySelectorAll('.translate-text');
    let isArabic = false;

   
    function toggleTranslation() {
        isArabic = !isArabic;
        elementsToTranslate.forEach(element => {
            if (isArabic) {
                element.textContent = element.getAttribute('data-ar');
            } else {
                element.textContent = element.getAttribute('data-en');
            }
        });
    }

   
    const currentLang = localStorage.getItem('lang') || 'en';
    if (currentLang === 'ar') {
        isArabic = true;
        toggleTranslation();
    }

    
    translateIcon.addEventListener('click', function() {
        toggleTranslation();
        localStorage.setItem('lang', isArabic ? 'ar' : 'en');
    });
});

//scroling على كل السكشنات


document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section'); 

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight * 0.8;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                section.classList.add('section-visible');
            } else {
                section.classList.remove('section-visible');
            }
        });
    };
    
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 
});
