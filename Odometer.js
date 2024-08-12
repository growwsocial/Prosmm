document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter-item');

    const animateCounters = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const countElement = counter.querySelector('.count2');
                const target = +counter.getAttribute('data-count');
                let currentCount = 0;

                const updateCount = () => {
                    if (currentCount < target) {
                        currentCount += Math.ceil(target / 100); // Adjust increment
                        countElement.textContent = currentCount > target ? target : currentCount;
                        setTimeout(updateCount, 20); // Adjust speed
                    }
                };

                updateCount();
                counter.classList.add('animate'); // Add animation class

                observer.unobserve(counter); // Stop observing once done
            }
        });
    };

    const observer = new IntersectionObserver(animateCounters, { threshold: 0.5 });
    counters.forEach(counter => observer.observe(counter));
});
