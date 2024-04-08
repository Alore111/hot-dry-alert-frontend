let radioButtons = document.querySelectorAll('input[name="value-radio"]');
let pages = document.querySelectorAll('.control-page');

radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        const selectedPage = document.getElementById(radioButton.value);
        pages.forEach(page => {
            if (page === selectedPage) {
                page.style.display = 'block';
            } else {
                page.style.display = 'none';
            }
        });
    });
});
