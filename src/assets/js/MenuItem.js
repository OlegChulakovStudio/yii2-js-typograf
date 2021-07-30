class MenuItem
{
    constructor(item) {
        /** @type {jQuery|HTMLElement} */
        this.item = item;
        /** @type {string} */
        this.title = item.find("> a > span").text().toLowerCase();
        /** @type {Array<MenuItem>} */
        this.child = MenuItem.prepareList(item);
    }

    checkContains(value) {
        let status = this.checkValue(value);
        if (this.hasChild()) {
            if (this.checkChild(value)) {
                this.openTreeview();
                status = true;
            } else {
                this.closeTreeview();
            }
        }
        this.toggleVisibility(status);
        return status;
    }

    checkValue(value) {
        return this.title.includes(value);
    }

    hasChild() {
        return this.child.length > 0;
    }

    checkChild(value) {
        let status = false;
        this.child.forEach((item) => {
            status = item.checkContains(value) || status;
        });
        return status;
    }

    openTreeview() {
        if (!this.item.hasClass("active")) {
            this.item.addClass("menu-open");
            this.item.find("> ul").slideDown(500);
        }
    }

    closeTreeview() {
        if (!this.item.hasClass("active")) {
            this.item.removeClass("menu-open");
            this.item.find("> ul").slideUp(500);
        }
    }

    clearVisibility() {
        this.toggleVisibility(true);
        if (this.hasChild()) {
            this.closeTreeview();
            this.child.forEach((item) => {
                item.clearVisibility();
            });
        }
    }

    toggleVisibility(status) {
        (status)
            ? this.item.show()
            : this.item.hide();
    }

    /**
     * Формирование списка элементов меню
     *
     * @param {jQuery|HTMLElement} parent
     * @returns {Array<MenuItem>}
     */
    static prepareList(parent) {
        let result = [];
        parent.find("> ul > li:not(.header)").each((i, item) => {
            result.push(new MenuItem($(item)));
        });
        return result;
    }
}
