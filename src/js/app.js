//Plugin tabs

class Tabs {
    constructor({ rootSelector, activeControlClass = 'active', activePaneClass = 'pane--active', defaultActiveTab = 1, }) {
        this._refs = this._getRefs(rootSelector);
        this._activeControlClass = activeControlClass;
        this._activePaneClass = activePaneClass;
        this._activeTabIdx = defaultActiveTab - 1;
        this._bindEvents();
        this._setActiveTab();
    }
    _getRefs(root) {
        const refs = {};
        refs.controls = document.querySelector(`${root} [data-controls]`);
        refs.panes = document.querySelector(`${root} [data-panes]`);
        return refs;
    }
    _setActiveTab(index) {
        const controlItems = this._refs.controls.querySelectorAll('a');
        const control = controlItems[this._activeTabIdx];
        control.classList.add(this._activeControlClass);
        this._setActivePane(control);
    }
    _removeActiveTab() {
        const currentActiveControlItem = this._refs.controls.querySelector(`.${this._activeControlClass}`);
        if (!currentActiveControlItem) {
            return;
        }
            currentActiveControlItem.classList.remove(`${this._activeControlClass}`);
            this._removeActivePane(currentActiveControlItem);
    }
    _setActivePane(control) {
         const paneId = this._getPaneId(control);
            const pane = this._getPaneById(paneId);
            pane.classList.add(`${this._activePaneClass}`);
    }
    _removeActivePane(control){
        const paneId = this._getPaneId(control);
            const pane = this._getPaneById(paneId);
            pane.classList.remove(`${this._activePaneClass}`);
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
        this._removeActiveTab();
        const controlItem = event.target;
        controlItem.classList.add(this._activeControlClass);
        this._setActivePane(controlItem);

    }
}

const tabs1 = new Tabs({
    rootSelector: '#tabs-1',
    activeControlClass: 'controls__item--active',
    activePaneClass: 'pane--active',
    defaultActiveTab: 3,
})
const tabs2 = new Tabs({
    rootSelector: '#tabs-2',
    activeControlClass: 'controls__item--active',
    activePaneClass: 'pane--active',
    defaultActiveTab: 2,
})

