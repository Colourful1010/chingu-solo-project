document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll("#rating input[type='radio']");

    stars.forEach((star, index) => {
        star.addEventListener('change', () => {
            if (star.checked) {
                stars.forEach(star => {
                    star.nextElementSibling.style.color = 'black';
                });
                for (let i = 0; i <= index; i++) {
                    stars[i].nextElementSibling.style.color = 'gold';
                }
            }
        });
    });
});

if (stars.checked==true){
    errorMessage.innerText="Ratings is required";
}