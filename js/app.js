const glass = document.querySelector('.fa-magnifying-glass')
const nav_left_icons = document.querySelectorAll('.fa-left-icon');
const nav_right_icons = document.querySelectorAll('.fa-right-icon');


// FUNCTIONALITY FOR THE TWO SEARCH ICON
function glassClickOne() {
    if (glass.classList.contains('glass')) {
        const search = document.querySelector('.search')
        search.style.display = 'block';
        glass.classList.remove('glass')
    } else {
        const search = document.querySelector('.search')
        search.style.display = 'none';
        glass.classList.add('glass')
    }
}
function glassClickTwo() {
    const ga = document.querySelector('.fa-magnifying-glass')
    if (ga.classList.contains('glass')) {
        const search = document.querySelector('.search_input')
        search.style.display = 'block';
        ga.classList.remove('glass')
    } else {
        const search = document.querySelector('.search_input')
        search.style.display = 'none';
        ga.classList.add('glass')
    }
}

// DROP DOWN FUNCTIONALITY FOR THE NAVBAR ICONS SUCH AS SCORECARDS, MAPS, OBJECTIVES ETC
nav_left_icons.forEach((el) => {
    el.addEventListener('click', () => {
        const child = el.lastElementChild;
        if (child.classList.contains('display')) {
            child.style.display = 'none';
            child.classList.remove('display');
        } else {
            const ul = document.querySelectorAll('.list');
            ul.forEach((li) => {
                li.style.display = 'none';
                li.classList.remove('display'); // Add this line to remove the class from all dropdowns
            });
            child.style.display = 'block';
            child.classList.add('display');
        }
    });
});


// DROP FUNCTIONALITY FOR THE ICONS ON THE SIDEBAR
const sideDrop = document.querySelectorAll('.sidedrop')
const chevron = document.querySelectorAll('.angle')

sideDrop.forEach((sidedrop) => {
    sidedrop.addEventListener('click', () => {
        function next(elem, el) {
            return elem.nextElementSibling;
        }
        let arrowDown = sidedrop.lastElementChild;
        let nextEl = next(sidedrop);
        if (nextEl.classList.contains('display')) {
            arrowDown.classList.remove('opened')
            nextEl.style.display = 'none';
            nextEl.classList.remove('display')
        } else {
            const ul = document.querySelectorAll('.dropDown')
            ul.forEach((dp) => {
                dp.style.display = 'none';
                dp.classList.remove('display')
            })
            chevron.forEach((chev) => {
                chev.classList.remove('opened')
            })
            arrowDown.classList.add('opened')
            nextEl.style.display = 'block';
            nextEl.classList.add('display')
        }
    })
})



// ADDING DROP DOWN HTML LIST ELEMENT FOR THE NAVBAR WITH JAVASCRIPT
function universalist() {
    const ul = document.querySelectorAll('.list')
    ul.forEach((li) => {
        li.innerHTML = `
        <li>Scorecards</li>
        <li>Objectives</li>
        <li>Measures</li>
        <li>Initiatives</li> `
    })
}
universalist();

// ADDING DROP DOWN HTML LIST ELEMENT FOR THE SIDEBAR WITH JAVASCRIPT
function universalDropDown() {
    const dropDown = document.querySelectorAll('.dropDown')
    dropDown.forEach((del) => {
        del.innerHTML = `
        <li class="inner_list"><i class="fa-solid fa-chevron-right"></i><a href="#">Upward</a></li>
        <li class="inner_list"><i class="fa-solid fa-chevron-right"></i><a href="#">Downward</a></li>
        <li class="inner_list"><a href="#">Parent</a></li>
        <li class="inner_list"><a href="#">Child</a></li>
        `
    })
}

universalDropDown();

//HIDE AND DISPALY FUNCTIONALITY FOR THE SIDE BAR
const bar = document.querySelector('.fa-bars');
const menu = document.querySelector('.sidemenu');
const mainContent = document.querySelector('.mainContent')
const adminSection = document.querySelector('.administrator')
const mediaQuery = window.matchMedia('(max-width: 1018px)');

bar.addEventListener('click', () => {
    if (mediaQuery.matches) {
        if (getComputedStyle(bar).backgroundColor === 'rgb(26, 179, 149)') {
            menu.classList.add('displayed');
            // mainContent.classList.add('margin_left');
            adminSection.classList.add('admin_margin_left')
            bar.style.backgroundColor = '#f9962c';
        } else {
            menu.classList.remove('displayed');
            bar.style.backgroundColor = '#1ab395';
            // mainContent.classList.remove('margin_left');
            adminSection.classList.remove('admin_margin_left')
        }
    }
});




