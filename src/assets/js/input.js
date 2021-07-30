window.Typograf = Typograf;

$(document).ready(function () {
    new SearchMenuFilter().listenInput();
});

$(document).on("click", "[data-typograf-element]", function (e) {
    executeTyporgafButton($(this));
});
