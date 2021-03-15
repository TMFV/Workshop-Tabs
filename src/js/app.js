//Plugin tabs

class Tabs {
    constructor({ rootSelector, activeControlClass = 'active', activePaneClass = 'pane--active'}) {
        this._refs = this._getRefs(rootSelector);
        this._activeControlClass = activeControlClass;
        this._activePaneClass = activePaneClass;
        this._bindEvents();
    }
    _getRefs(root) {
        const refs = {};
        refs.controls = document.querySelector(`${root} [data-controls]`);
        refs.panes = document.querySelector(`${root} [data-panes]`);
        return refs;
    }
    _bindEvents() {
       this._refs.controls.addEventListener('click', this._onControlsClick.bind(this))
    }
    _getPaneId(control) {
        return control.getAttribute('href').slice(1);
    }
    _getPaneById(id) {
        return this._refs.panes.querySelector(`#${id}`);
    }
    _onControlsClick(event) {
        event.preventDefault();
        if (event.target.nodeName !== 'A') {
            console.log('Кликнули не в ссылку');
            return;
        }
        const currentActiveControlItem = this._refs.controls.querySelector(`.${this._activeControlClass}`);
        if (currentActiveControlItem) {
            currentActiveControlItem.classList.remove(`${this._activeControlClass}`);
            const paneId = this._getPaneId(currentActiveControlItem);
            const pane = this._getPaneById(paneId);
            pane.classList.remove(`${this._activePaneClass}`);
        }
        const controlItem = event.target;
        controlItem.classList.add(this._activeControlClass);
        
        const paneId = this._getPaneId(controlItem);
        const pane = this._getPaneById(paneId);
        pane.classList.add(`${this._activePaneClass}`);

    }
}

const tabs1 = new Tabs({
    rootSelector: '#tabs-1',
    activeControlClass: 'controls__item--active',
    activePaneClass: 'pane--active'
})

