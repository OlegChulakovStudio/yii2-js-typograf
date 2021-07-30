const typograf = new Typograf({
    locale: ['ru', 'en-US'],
    htmlEntity: {
        type: 'name',
        onlyInvisible: true
    }
});
typograf.enableRule('common/nbsp/afterNumber');

function executeTyporgafButton(button) {
    const input = $(button.data("typograf-element"));
    if (input.length > 0) {
        input.val(typograf.execute(input.val()));
    }
}
