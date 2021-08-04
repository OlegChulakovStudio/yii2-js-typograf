<?php
/**
 * @copyright Copyright (c) 2021, Oleg Chulakov Studio
 * @link http://chulakov.com/
 */

namespace chulakov\typograf\widgets;

use yii\web\JsExpression;
use dosamigos\tinymce\TinyMce;
use yii\base\InvalidConfigException;
use chulakov\typograf\assets\TinyMceAssets;

class TypografTinyMceWidget extends TinyMce
{
    /**
     * @var string Язык по умолчанию
     */
    public $language = 'ru';

    /**
     * @var array Высота текстового блока
     */
    public $options = ['rows' => 10];

    /**
     * @var array Конфигурация для виджета
     */
    public $clientOptions = [
        'min_height' => 500,
        'plugins' => [
            'paste',
            'typograf',
            'code'
        ],
        'toolbar1' => 'typograf code',
        'content_css' => '',
        'menubar' => false,
        'branding' => false,
        'paste_as_text' => true,
        'formats' => [
            'underline' => ['inline' => 'span', 'classes' => 'underline'],
            'strikethrough' => ['inline' => 'span', 'classes' => 'strike'],
        ],
    ];

    /**
     * @inheritDoc
     *
     * @throws InvalidConfigException
     */
    public function init(): void
    {
        $this->clientOptions = array_merge($this->clientOptions, [
            'setup' => new JsExpression('function (editor) {' .
                    'editor.on("change keyup", function(e) {' .
                    'editor.save();' .
                    '$(editor.getElement()).trigger("change");' .
                '});' .
            '}'),
        ]);
        $asset = TinyMceAssets::register($this->view);
        $this->clientOptions['content_css'] = $asset->baseUrl . TinyMceAssets::CONTENT_CSS;
        parent::init();
    }
}
