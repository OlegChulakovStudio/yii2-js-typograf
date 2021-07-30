Component with Text Typograf on JS Widgets for Yii 2 Framework.
==========

Компонент создан для типографирования текста на основе типографа [JS v6.12.1](https://github.com/typograf/typograf)

Установка
---------

Для подключения компонентов в свой код необходимо добавить в _composer.json_ следующий код:
```
"require": {
    "chulakov/yii2-js-typograf": "~1.0.0"
},
...
"repositories": [
    {
        "type": "vcs",
        "url":  "git@git.chulakov.org:OlegChulakovStudio/yii2-js-typograf.git"
    }
]
```

Описание
---------

Компонент реализует несколько виджетов:

**1) Виджет обычного текстового поля:**

![TextInput](docs/images/TextInput.png)

**2) Виджет многострочного текстового поля:**

![TextArea](docs/images/TextArea.png)

**3) Виджет текстового редактора на основе TinyMCE**

![TextTinyMCE](docs/images/TextTinyMCE.png)

Использование
-----

Пример использования для TextArea

```angular2html
<?= $form->field($model, "description")->widget(TypografTextAreaWidget::class, [
    'options' => [
        'rows' => '3'
    ]
]); ?>
```

Пример использования для TinyMCE
```angular2html
<?= $form->field($model, "title")->widget(\chulakov\typograf\widgets\TypografTinyMceWidget::class,[
                'clientOptions' => [
                    'min_height' => 500,
                    'plugins' => [
                        'lists',
                        'visualblocks visualchars code nonbreaking',
                        'autoresize',
                        'paste',
                        'link',
                        'typograf',
                        'code'
                    ],
                    'toolbar1' => 'undo redo | formatselect | bold | bullist | nonbreaking removeformat | typograf code | link',
                    'content_css' => '',
                    'menubar' => false,
                    'branding' => false,
                    'paste_as_text' => true,
                    'formats' => [
                        'underline' => ['inline' => 'span', 'classes' => 'underline'],
                        'strikethrough' => ['inline' => 'span', 'classes' => 'strike'],
                    ],
                ]
        ]); ?>
```
