

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

//If it works don't touch it T^T                             
    document.addEventListener("DOMContentLoaded", function() {
        const counters = document.querySelectorAll('.stats-number');

        const countUp = (element, target) => {
            let start = 0;
            const end = parseInt(target, 10);
            const duration = 1000; 
            const stepTime = Math.abs(Math.floor(duration / end));
            const timer = setInterval(() => {
                start += 1;
                element.textContent = start;
                if (start >= end) {
                    clearInterval(timer);
                }
            }, stepTime);
        };

        const handleAnimation = (element) => {
            const target = element.getAttribute('data-target');
            countUp(element, target);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    handleAnimation(element);
                    
                    observer.unobserve(element);
                }
            });
        }, {
            root: null, 
            rootMargin: '0px 0px -50px 0px', 
            threshold: 0 
        });

       
        counters.forEach(counter => {
            observer.observe(counter);
        });
    });


document.addEventListener('DOMContentLoaded', () => {
   
    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    };


    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1,
    });

    
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        observer.observe(card);
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.opinion-card');
    const container = document.querySelector('.opinions-container');
    let currentIndex = 0;

    
    const colors = ['#ffebee', '#e8f5e9', '#fffde7', '#e0f7fa'];

    
    cards.forEach((card, index) => {
        card.style.setProperty('--card-color', colors[index % colors.length]);
    });

   
    function revealNextCard() {
        if (currentIndex < cards.length) {
            const nextCard = cards[currentIndex];
            nextCard.classList.add('active');
            nextCard.style.transform = `translateX(${currentIndex * 240}px)`; 
            currentIndex++;
        }
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                const revealInterval = setInterval(() => {
                    revealNextCard();
                    if (currentIndex >= cards.length) {
                        clearInterval(revealInterval);
                    }
                }, 600); 
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

   
    observer.observe(container);
});

document.addEventListener('DOMContentLoaded', () => {
    const sparkleArea = document.getElementById('sparkle-area');
    const spotlightCard = document.querySelector('.spotlight-card');
    let effectStarted = false;

    
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.textContent = '★';
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = '100%';
        sparkleArea.appendChild(sparkle);

        
        const duration = 2000 + Math.random() * 1000;
        const keyframes = [
            { top: '100%', opacity: 0 },
            { top: '0%', opacity: 1, offset: 0.8 },
            { top: '-20%', opacity: 0 }
        ];
        const animation = sparkle.animate(keyframes, {
            duration: duration,
            easing: 'ease-out',
            fill: 'forwards'
        });

        
        animation.onfinish = () => {
            sparkle.remove();
        };
    }

    
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !effectStarted) {
                
                for (let i = 0; i < 20; i++) {
                    createSparkle();
                }
                spotlightCard.style.opacity = '1';
                effectStarted = true; 
            }
        });
    };

    
    const observer = new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    });

    
    observer.observe(sparkleArea);
});


window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;
let isSmallScreen = width <= 768; 

function handleMouseMove(e) {
    let normalizedPosition = e.pageX / (width / 2) - 1;
    let speedSlow = 100 * normalizedPosition;
    let speedFast = 200 * normalizedPosition;

    
    if (isSmallScreen) {
        speedSlow *= 0.5; 
        speedFast *= 0.5; 
    }

    spansSlow.forEach((span) => {
        span.style.transform = `translate(${speedSlow}px)`;
    });
    spansFast.forEach((span) => {
        span.style.transform = `translate(${speedFast}px)`;
    });
}


function handleWindowResize() {
    width = window.innerWidth;
    isSmallScreen = width <= 768; 
}






document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active'); 
    });
});






document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll('.faq-item');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    faqItems.forEach(item => {
        observer.observe(item);
    });
});

function animateCards() {
    const cards = document.querySelectorAll(".empower-card");
    const totalCards = cards.length;
    const delayBetweenCards = 2;

    cards.forEach((card, index) => {
        gsap.fromTo(card, 
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                delay: index * delayBetweenCards,
                duration: 1,
                ease: "power2.out",
                onComplete: () => {
                    gsap.to(card, {
                        opacity: 0,
                        delay: 1,
                        duration: 0.5,
                        onComplete: () => {
                            if (index === totalCards - 1) {
                                gsap.to(cards, {
                                    opacity: 1,
                                    y: 0,
                                    stagger: 0.2,
                                    duration: 0.5,
                                    ease: "power2.out"
                                });
                            }
                        }
                    });
                }
            }
        );
    });
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCards();
          
            observer.unobserve(entry.target);
        }
    });
});


const section = document.getElementById('empower-women');
observer.observe(section);

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
