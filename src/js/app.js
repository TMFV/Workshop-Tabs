const refs = {
    controls: document.querySelector('#tabs-1 [data-controls]'),
    panes: document.querySelector('data-panes'),
};

refs.controls.addEventListener('click', (event) => {
    event.preventDefault();
    //console.log(event.target.nodeName);
    if (event.target.nodeName !== 'A') {
        console.log('Кликнули не в ссылку');
        return;
    }

    const controlItem = event.target;
    const currentActiveControlItem = refs.controls.querySelector('.controls__item--active');
    if (currentActiveControlItem) {
      currentActiveControlItem.classList.remove('controls__item--active');  
    }
    controlItem.classList.add('controls__item--active');
    console.log(controlItem);
})