class SearchMenuFilter
{
    constructor() {
        /** @type {jQuery|HTMLElement} */
        this.input = $("#menu-search [name='q']");
        /** @type {Array<MenuItem>} */
        this.list = MenuItem.prepareList(this.input.closest("section"));
    }

    listenInput() {
        this.input.on("input", () => {
            this.filterList(this.input.val().toLowerCase().trim());
        });
    }

    filterList(value) {
        this.list.forEach((item) => {
            (value === "")
                ? item.clearVisibility()
                : item.checkContains(value);
        });
    }
}
