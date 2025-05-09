/*----first acess anchor element using byId method--- */
const tab1El = document.getElementById('tab1');
const tab2El = document.getElementById('tab2');
const tab3El = document.getElementById('tab3');
const tab4El = document.getElementById('tab4');

/*----Second acess div element using querySelector method--- */
const tab1ContentEl = document.querySelector('.tab1-content');
const tab2ContentEl = document.querySelector('.tab2-content');
const tab3ContentEl = document.querySelector('.tab3-content');
const tab4ContentEl = document.querySelector('.tab4-content');

/*----third hiding all div element except first div--- */
tab2ContentEl.style.display = 'none';
tab3ContentEl.style.display = 'none';
tab4ContentEl.style.display = 'none';


/*---------------------workin on tab 2 tho hide and show-------------------- */
tab2El.addEventListener('mouseover', () => {
    tab1ContentEl.style.display = 'none';
    tab2ContentEl.style.display = 'block';
});

tab2El.addEventListener('mouseout', () => {
    tab1ContentEl.style.display = 'block';
    tab2ContentEl.style.display = 'none';
});

/*---------------------workin on tab 3 tho hide and show-------------------- */
tab3El.addEventListener('mouseover', () => {
    tab1ContentEl.style.display = 'none';
    tab3ContentEl.style.display = 'block';
});

tab3El.addEventListener('mouseout', () => {
    tab1ContentEl.style.display = 'block';
    tab3ContentEl.style.display = 'none';
});

/*---------------------workin on tab 4 tho hide and show-------------------- */
tab4El.addEventListener('mouseover', () => {
    tab1ContentEl.style.display = 'none';
    tab4ContentEl.style.display = 'block';
});

tab4El.addEventListener('mouseout', () => {
    tab1ContentEl.style.display = 'block';
    tab4ContentEl.style.display = 'none';
});




