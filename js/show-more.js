const containers = document.querySelectorAll('.js_card-content');

containers.forEach(container => {
    const text = container.querySelector('.card-text');
    const lineHeight = parseInt(getComputedStyle(text).lineHeight);
    const maxHeight = lineHeight * 2;

    // сделал именно так, а не через кол-во символов в тексте по причине того, 
    // что на мобиле то же кол-во символов может занимать больше строчек. В задании сказано - максимум 2 строки 

    if (text.offsetHeight > maxHeight) {
        const button = document.createElement('button');
        button.textContent = 'Show more...';
        button.className = 'btn show-more p-0'
        button.addEventListener('click', () => {
            text.style.maxHeight = '';
            button.remove();
        });

        container.appendChild(button);
        text.style.maxHeight = maxHeight + 'px';
    }
});