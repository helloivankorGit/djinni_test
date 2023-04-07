let page = 1;

function loadMoreCards() {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=9`)
        .then(response => response.json())
        .then(data => {
            const cardContainer = document.getElementById('card-container');

            data.forEach(item => {
                const card = document.createElement('article');
                card.classList.add('col');
                card.innerHTML = `
                      <div class="card h-100">
                        <a href="${item.url}">
                            <img src="${item.download_url}" class="card-img-top" alt="...">
                        </a>
                        <div class="card-body p-4">
                            <h4 class="card-title mb-1"><a href="${item.url}" class="card-link">${item.author}</a></h4>
                            <p class="card-text mb-4">${item.height} x ${item.width}</p>
                        </div>
                        <div class="card-body card-body--bottom">
                            <button type="button" class="btn btn-primary me-3 px-3">Save to collection</button>
                            <button type="button" class="btn btn-outline-dark">Share</button>
                        </div>
                      </div>
                    `;
                cardContainer.appendChild(card);
            });

            page++;
        });
}

window.addEventListener('scroll', () => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && page <= 10) {
        loadMoreCards();
    }
});