document.addEventListener("DOMContentLoaded", () => {
  const booksContainer = document.querySelector(".books-container");
  const modal = document.getElementById("book-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalPrice = document.getElementById("modal-price");
  const closeBtn = document.querySelector(".close-btn");

  const genre = document.body.dataset.genre; // Определяем жанр страницы
  const jsonPath = `../data/${genre}.json`; // Путь к JSON-файлу

  // Загрузка данных книг из JSON
  fetch(jsonPath)
    .then(response => response.json())
    .then(booksData => {
      // Генерация списка книг
      booksData.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book-item");
        bookItem.dataset.id = book.id;

        bookItem.innerHTML = `
          <img src="${book.image}" alt="${book.title}">
          <div class="book-info">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Price: ${book.price}</p>
          </div>
        `;

        booksContainer.appendChild(bookItem);

        // Добавление события клика на карточку книги
        bookItem.addEventListener("click", () => {
          modalImg.src = book.image;
          modalTitle.textContent = book.title;
          modalDescription.textContent = book.description;
          modalPrice.textContent = `Price: ${book.price}`;
          modal.style.display = "block";
        });
      });
    })
    .catch(error => console.error("Error data:", error));

  // Закрытие модального окна
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", event => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

