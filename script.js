document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Animate skill items on scroll
    const skillItems = document.querySelectorAll('.skill-item');
    const animateSkills = () => {
        skillItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (itemPosition < screenPosition) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Initial check on page load

    // Typewriter effect for the home section
    const typeWriter = (text, element, speed = 50) => {
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, speed);
    };

    const homeHeading = document.querySelector('#home h1');
    const homeSubheading = document.querySelector('#home h2');
    typeWriter('Tangeni Matheus', homeHeading, 100);
    setTimeout(() => {
        typeWriter('Full-Stack Software Developer', homeSubheading, 50);
    }, 2500);

    // Interactive timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });

    // Form submission (if you decide to add a contact form)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
});

 // Particle background
 const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
 const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('particle-canvas'), alpha: true });
 renderer.setSize(window.innerWidth, window.innerHeight);

 const particles = new THREE.Group();
 scene.add(particles);

 for (let i = 0; i < 100; i++) {
     const geometry = new THREE.SphereGeometry(0.1, 8, 8);
     const material = new THREE.MeshBasicMaterial({ color: 0x2563eb });
     const particle = new THREE.Mesh(geometry, material);
     
     particle.position.x = Math.random() * 40 - 20;
     particle.position.y = Math.random() * 40 - 20;
     particle.position.z = Math.random() * 40 - 20;
     
     particles.add(particle);
 }

 camera.position.z = 5;

 // Animation
 function animate() {
     requestAnimationFrame(animate);
     particles.rotation.x += 0.001;
     particles.rotation.y += 0.001;
     renderer.render(scene, camera);
 }
 animate();

 // Skill progress animation
 function animateSkills() {
     const skillProgress = document.querySelectorAll('.skill-progress');
     skillProgress.forEach(progress => {
         const level = progress.getAttribute('data-level');
         progress.style.width = level + '%';
     });
 }

 // Intersection Observer for skill animation
 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             animateSkills();
         }
     });
 });

 observer.observe(document.querySelector('.skills'));

 // Responsive handling
 window.addEventListener('resize', () => {
     camera.aspect = window.innerWidth / window.innerHeight;
     camera.updateProjectionMatrix();
     renderer.setSize(window.innerWidth, window.innerHeight);
 });
 function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}
