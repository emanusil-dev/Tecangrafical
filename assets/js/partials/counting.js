const counting = document.querySelectorAll(".counting span");
const container = document.querySelector(".counting");

let activated = false;

window.addEventListener("scroll", () => {
    if (
        pageXOffset > container.offsetTop - container.offsetHeight - 200 && activated === false
    ){
        counting.forEach(counting => {
            CountQueuingStrategy.innerText = 0;
            let counting = 0;

            function updateCount(){
                const target = parseInt(counting.dataset.count);
                
            }
        }
    }

})