const counting = document.querySelectorAll(".counting span");
const container = document.querySelector(".counting");

let activated = false;

window.addEventListener("scroll", () => {
    if (
        window.pageYOffset > container.offsetTop - container.offsetHeight - 200 &&
        activated === false
    ) {
        counting.forEach(span => {
            span.innerText = 0;
            let count = 0;

            function updateCount() {
                const target = parseInt(span.dataset.count);

                if (count < target) {
                    count++;
                    span.innerText = count;
                    setTimeout(updateCount, 10);
                } else {
                    span.innerText = target;
                }
            }
            updateCount();
        });

        activated = true;
    } else if (
        window.pageYOffset < container.offsetTop - container.offsetHeight - 500 ||
        (window.pageYOffset === 0 && activated === true)
    ) {
        counting.forEach(span => {
            span.innerText = 0;
        });

        activated = false;
    }
});