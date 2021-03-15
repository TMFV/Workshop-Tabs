const refs = {
    controls: document.querySelector('#tabs-1 [data-controls]'),
    panes: document.querySelector('#tabs-1 [data-panes]'),
};

refs.controls.addEventListener('click', onControlsClick(event) )

function onControlsClick(event) {
    {
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
        const paneId = getPaneId(currentActiveControlItem)
        const pane = getPaneById(paneId);
        pane.classList.remove('pane--active');
    }
    controlItem.classList.add('controls__item--active');
    const paneId = getPaneId(controlItem);
    const pane = getPaneById(paneId);
    pane.classList.add('pane--active');
    //console.log(paneId);
    //console.log(pane);
    //console.log(controlItem.getAttribute('href').slice(1));
}
}
function getPainId(control) {
    return control.getAttribute('href').slice(1);
}
function getPaneById(id) {
    return refs.panes.querySelector(`#${paneId}`);
}