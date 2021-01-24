import refs from './refs.js';
import requestsHendler from './apiService.js';

refs.buttonRef.disabled = true;

refs.formRef.addEventListener('submit', event => {
  event.preventDefault();

  setTimeout(() => {
    localStorage.setItem('page', requestsHendler.page);
    localStorage.removeItem('defScrollRange');

    const query = event.target.children[0].value;
    const page = localStorage.getItem('page');

    requestsHendler.fetchImages(query, page);
  }, 1000);
});
