

document.addEventListener('DOMContentLoaded', () => {
    const mouseCircle = document.querySelector('#mouse-circle');

    // Function to update the circle's position
    function updateCirclePosition(e) {
        // e.clientX and e.clientY give the current mouse X and Y coordinates relative to the viewport
        mouseCircle.style.left = `${e.clientX}px`;
        mouseCircle.style.top = `${e.clientY}px`;
    }

    // Add an event listener for mouse movement on the entire document
    document.addEventListener('mousemove', updateCirclePosition);

    // Optional: Make the circle appear/disappear on mouse enter/leave
    document.addEventListener('mouseenter', () => {
        mouseCircle.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        mouseCircle.style.opacity = '0';
    });
});

const videoContainerOne = document.querySelector(".video-container-one");
const videoOne = document.querySelector(".video-one");

if ('ontouchstart' in window || navigator.maxTouchPoints) {
    videoContainerOne.addEventListener('touchstart', function () {
        if (videoOne.paused) {
            videoOne.play();
        } else {
            videoOne.pause();
        }
    });
} else {
    videoContainerOne.addEventListener('mouseenter', function () {
        videoOne.play();
    });

    videoContainerOne.addEventListener('mouseleave', function () {
        videoOne.pause();
        videoOne.currentTime = 0;
    });
}

const videoContainerTwo = document.querySelector(".video-container-two");
const videoTwo = document.querySelector(".video-two");

if ('ontouchstart' in window || navigator.maxTouchPoints) {
    videoContainerTwo.addEventListener('touchstart', function () {
        if (videoTwo.paused) {
            videoTwo.play();
        } else {
            videoTwo.pause();
        }
    });
} 
else {
    videoContainerTwo.addEventListener('mouseenter', function () {
        videoTwo.play();
    });

    videoContainerTwo.addEventListener('mouseleave', function () {
        videoTwo.pause();
        videoTwo.currentTime = 0;
    });
}

// smooth scrolling for navigation links
         function smoothScroll(navlinks) {
       const element = document.getElementById(nav-links);
       if (element) {
         window.scrollTo({
           top: element.offsetTop,
           behavior: 'smooth'
         });
       }
     }




        // Enhanced form submission
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add some terminal-style feedback
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = 'sent! ✅';
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 1000);
        });

        // Active navigation state
        window.addEventListener('scroll', () => {
            let current = '';
            const sections = document.querySelectorAll('section');
            const skillphotos = document.querySelector('skillphoto');
            
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop <= 100) {
                    current = section.getAttribute('id');
                }
            });
            // Check for skillphoto section
            // If skillphoto is a class, use document.querySelectorAll('.skillphoto')
            skillphotos.forEach(skillphoto => {
                const photoTop = skillphoto.getBoundingClientRect().top;
                if (photoTop <= 100) {
                    current = photo.getAttribute('id');
                }
            });
        
        

            

            document.querySelectorAll('.nav-links a').forEach(link => {
                link.style.color = '';
                link.style.textShadow = '';
                if (link.getAttribute('href') === `#${current}`) {
                    link.style.color = '#00ff41';
                    link.style.textShadow = '0 0 5px #00ff41';
                }
            });
        });

        

        // Terminal cursor effect
        let cursorVisible = true;
        setInterval(() => {
            const cursors = document.querySelectorAll('.cursor');
            cursors.forEach(cursor => {
                cursor.style.opacity = cursorVisible ? '1' : '0';
            });
            cursorVisible = !cursorVisible;
        }, 500);

        // Add some random matrix-like effects
        function createMatrixRain() {
            const chars = '.';
            const matrix = document.querySelector('.bg-effect');
            
            setInterval(() => {
                if (Math.random() > 0.5) {
                    const span = document.createElement('span');
                    span.textContent = chars[Math.floor(Math.random() * chars.length)];
                    span.style.position = 'absolute';
                    span.style.top = '0px';
                    span.style.left = Math.random() * 100 + '%';
                    span.style.color = 'rgb(40, 203, 236);';
                    
                    span.style.fontSize = '111px';
                    
                    span.style.animation = 'fall 3s linear forwards';
                    
                    matrix.appendChild(span);
                    
                    setTimeout(() => {
                        span.remove();
                    }, 6000);
                }
            }, 100);
        }

        // Add CSS for falling animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fall {
                to {
                    transform: translateY(100vh);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        createMatrixRain();
