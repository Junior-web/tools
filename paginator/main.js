let createPaginator = function(currentPage) {
    let arrPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        startPaginator = arrPages[0],
        endPaginator = arrPages[arrPages.length - 1];

    let countShownPages = 8;

    let stringPaginator = `<ul class='pages'>`;

    if(currentPage === startPaginator) {
        stringPaginator += `<li class="page-current" data-current='${startPaginator}'>${startPaginator}</li>`;
    } else {
        stringPaginator += `<li data-current='${startPaginator}'>${startPaginator}</li>`;
    }
        
    for(page in arrPages) {
        if(arrPages[page] === currentPage) {
            let i = page - countShownPages / 2,
                j = 0;

            if((i - 4) > -3) stringPaginator += `<li data-current='${i}'>...</li>`;

            while(j < countShownPages && i < arrPages.length) {
                if(typeof arrPages[i] !== 'undefined' 
                   && arrPages[i] !== startPaginator
                   && arrPages[i] !== endPaginator) {

                    if(i === Number(page)) {
                        stringPaginator += `<li class="page-current" data-current='${arrPages[i]}'>${arrPages[i]}</li>`;
                    } else {
                        stringPaginator += `<li data-current='${arrPages[i]}'>${arrPages[i]}</li>`;
                        j++;
                    }
                }

                i++;
            }

            if(Number(page) > 4)  {
                if(Number(page) + 4 == i - 1) stringPaginator += `<li data-current='${i + 1}'>...</li>`;
            } else {
                stringPaginator += `<li data-current='${i + 1}'>...</li>`;
            }
            
        }
    }

    if(currentPage === endPaginator) {
        stringPaginator += `<li class="page-current" data-current='${endPaginator}'>${endPaginator}</li>
                    </ul>`;
    } else {
        stringPaginator += `<li data-current='${endPaginator}'>${endPaginator}</li>
                    </ul>`;
    }

    return stringPaginator;
}

document.querySelector('.paginator').innerHTML = createPaginator(1);

document.querySelector('.paginator').addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        document.querySelector('.paginator').innerHTML = createPaginator(Number(e.target.dataset.current));
    }
});