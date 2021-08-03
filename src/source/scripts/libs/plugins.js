// Плагин типографа для tinyMce
tinymce.PluginManager.add('typograf', function(editor, url) {
    var handler = function () {
        var content = editor.getContent();
        var typograf = new Typograf({
            locale: ['ru', 'en-US'],
            htmlEntity: {
                type: 'name',
                onlyInvisible: true
            }
        });
        typograf.enableRule('common/nbsp/afterNumber');
        editor.setContent(typograf.execute(content));
    };

    // Кнопка в тулбаре
    editor.ui.registry.addButton('typograf', {
        tooltip: 'Типографировать',
        icon: 'spell-check',
        onAction: function() {
            handler();
        }
    });

    // Пункт меню, который может быть включен в любое меню с помощью конфигурации
    editor.ui.registry.addMenuItem('typograf', {
        text: 'Типографировать',
        icon: 'spell-check',
        onAction: function() {
            handler();
        }
    });

    return {
        getMetadata: function () {
            return {
                name: 'typograf'
            };
        }
    };
});
