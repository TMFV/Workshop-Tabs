const refs = {
    controls: document.querySelector('#tabs-1 [data-controls]'),
    panes: document.querySelector('#tabs-1 [data-panes]'),
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
        const paneId = currentActiveControlItem.getAttribute('href').slice(1);
        const pane = refs.panes.querySelector(`#${paneId}`);
        pane.classList.remove('pane--active');
    }
    controlItem.classList.add('controls__item--active');
    const paneId = controlItem.getAttribute('href').slice(1);
    const pane = refs.panes.querySelector(`#${paneId}`);

    pane.classList.add('pane--active');
    console.log(paneId);
    console.log(pane);
    //console.log(controlItem.getAttribute('href').slice(1));
})