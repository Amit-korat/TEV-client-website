document.addEventListener("DOMContentLoaded", function () {
    var contentSections = document.querySelectorAll(".content-section");
    var navigation = document.querySelector("nav");

    // When a nav link is clicked, smooth scroll to the section
    navigation.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            event.preventDefault(); // Prevent default link behavior
            smoothScroll(
                document.querySelector(event.target.getAttribute("href"))
            );
        }
    });

    // Update navigation on scroll...
    window.addEventListener("scroll", function () {
        updateNavigation();
    });

    // ...and when the page starts
    updateNavigation();

    ///// FUNCTIONS
    function updateNavigation() {
        contentSections.forEach(function (section) {
            var sectionName = section.id;
            var navigationMatch = navigation.querySelector(
                'a[href="#' + sectionName + '"]'
            );
            var sectionTop =
                section.getBoundingClientRect().top + window.scrollY;
            var sectionBottom = sectionTop + section.offsetHeight;

            if (
                sectionTop - window.innerHeight / 2 < window.scrollY &&
                sectionBottom - window.innerHeight / 2 > window.scrollY
            ) {
                navigationMatch.classList.add("active-section");
            } else {
                navigationMatch.classList.remove("active-section");
            }
        });
    }

    function smoothScroll(target) {
        var targetPosition =
            target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    }
});
