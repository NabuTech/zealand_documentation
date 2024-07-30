document.addEventListener("DOMContentLoaded", function () {
    const featureItems = document.querySelectorAll(".feature-item");

    featureItems.forEach((item, index) => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("show");
                    }, index * 1500); // Delay of 300ms between each item
                }
            });
        }, {
            threshold: 0.5
        });

        observer.observe(item);
    });
});
