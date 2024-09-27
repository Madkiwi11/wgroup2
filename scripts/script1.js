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





//الغلاف
document.addEventListener('DOMContentLoaded', () => {
    const img1 = document.getElementById('header-img1');
    const img2 = document.getElementById('header-img2');

    function switchImage() {
        img1.style.opacity = '0'; 
        img2.style.opacity = '1'; 
    }

    setTimeout(switchImage, 200); // تبديل الصورة بعد 3 ثوانٍ
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.women-in-tech');
    
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

document.getElementById('translate-icon').addEventListener('click', function() {

    var translateText = document.getElementById('translate-text');
    var currentLang = document.documentElement.lang; 

    if (currentLang === 'en') {
        document.documentElement.lang = 'ar';
        translateText.textContent = 'AR';
    } else {
        
        document.documentElement.lang = 'en';
        translateText.textContent = 'EN';
    }
});
