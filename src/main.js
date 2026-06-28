import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const refs = {
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  form: document.querySelector('.form'),
};
refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const searchText = refs.form.elements['search-text'].value.trim();
  if (!searchText) return;
  clearGallery();
  showLoader();
  getImagesByQuery(searchText)
    .then(data => {
      const images = data.hits;
      if (images.length === 0) {
        hideLoader();
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      createGallery(images);
      hideLoader();
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        message: 'Something went wrong. Please try again later.',
      });
    });
}
