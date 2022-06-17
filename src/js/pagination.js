// const bntPrevious = document.querySelector("#btn-prev");
// const btnNext = document.querySelector("#btn-next");
// const pageList = document.querySelector(".pagination-list");
// const pageLink = document.querySelector(".pagination-link");

import { getMovieList } from './movies';

function generatePagList(array, currentPage) {
  // const prevLink = document.createElement("a");
  // prevLink.classList.add("pagination-button");
  // prevLink.id = "btn-prev";
  // prevLink.href = "#";
  // prevLink.title = "Previous page";
  // const svgPrev = document.createElement("svg");
  // svgPrev.classList.add("pag-icon");
  // svgPrev.classList.add("arrow-left");
  // svgPrev.height = "16";
  // const usePrev = document.createElement("use");
  // usePrev.href = "./images/icons/arrows.svg#icon-arrow-left";

  // const nextLink = document.createElement("a");
  // nextLink.classList.add("pagination-button");
  // nextLink.id = "btn-next";
  // nextLink.href = "#";
  // nextLink.title = "Next page";
  // const svgNext = document.createElement("svg");
  // svgNext.classList.add("pag-icon");
  // svgNext.classList.add("arrow-right");
  // svgNext.height = "16";
  // const useNext = document.createElement("use");
  // useNext.href = "./images/icons/arrows.svg#icon-arrow-right";

  // svgPrev.append(usePrev);
  // prevLink.append(svgPrev);

  // svgNext.append(useNext);
  // nextLink.append(svgNext);

  const paginationArr = document.querySelectorAll('.pagination');

  if (paginationArr.length > 0) {
    paginationArr.forEach(pagination => {
      const list = document.createElement('ul');
      list.classList.add('pagination-list');

      for (let i = 0; i < array.length; i += 1) {
        const item = document.createElement('li');
        item.classList.add('pagination-item');
        const link = document.createElement('a');
        link.classList.add('pagination-link');
        link.innerText = array[i];

        // link.innerText.array[i] = currentPage;
        if (array[i] === currentPage) {
          item.classList.add('current');
        }

        if (typeof array[i] === 'number') {
          link.addEventListener('click', event => {
            event.preventDefault;
            getMovieList('repeat', array[i], 'repeat');
          });
        } else {
          if (i === 1) {
            link.addEventListener('click', event => {
              event.preventDefault;
              getMovieList('repeat', array[i + 1] - 1, 'repeat');
            });
          } else {
            link.addEventListener('click', event => {
              event.preventDefault;
              getMovieList('repeat', array[i - 1] + 1, 'repeat');
            });
          }
        }

        item.append(link);
        list.append(item);
        pagination.replaceChildren(list);
      }

      return pagination;
    });
  }
}

export function showPagination(totalPages, currentPage) {
  if (totalPages === 0) {
    hidePagination();
    return;
  }
  const lastPages = totalPages - 3;
  if (totalPages === 1) {
    // make buttons invisible or make the class = "invisible" for div.pagination
    // generatePagList([1], currentPage);
    hidePagination();
  } else if (totalPages <= 7) {
    const curArray = [];
    for (let i = 1; i <= totalPages; i += 1) {
      curArray.push(i);
    }
    generatePagList(curArray, currentPage);
  }
  if (totalPages > 7) {
    if (currentPage <= 3) {
      generatePagList([1, 2, 3, 4, 5, '...', totalPages], currentPage);

      // return;
    } else if (currentPage >= lastPages) {
      generatePagList(
        [
          1,
          '...',
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ],
        currentPage
      );
      // return;
    } else {
      generatePagList(
        [
          1,
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages,
        ],
        currentPage
      );
    }
    // pagination.append(markup);
    // return;
  }
}
// showPagination(5, 1);
// generatePagList([1, '...', 12, 13, 14, 15, 16, '...', 20], 14);

export function hidePagination() {
  const paginationArr = document.querySelectorAll('.pagination');

  if (paginationArr.length > 0) {
    paginationArr.forEach(pagination => (pagination.innerHTML = ''));
  }
}
