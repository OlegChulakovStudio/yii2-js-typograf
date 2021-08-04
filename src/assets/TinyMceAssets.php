<?php
/**
 * @copyright Copyright (c) 2020, Oleg Chulakov Studio
 * @link http://chulakov.com/
 */

namespace chulakov\typograf\assets;

use yii\web\AssetBundle;

class TinyMceAssets extends AssetBundle
{
    /**
     * Стили CSS
     */
    const CONTENT_CSS = '/css/common.css';

    /**
     * @var string
     */
    public $sourcePath = '@vendor/chulakov/yii2-js-typograf/src/assets';

    /**
     * @var array
     */
    public $css = [
        'css/common.css',
    ];

    /**
     * @var array
     */
    public $js = [
        'js/typograf/typograf.all.min.js',
        'js/typograf.tinymce.js',
    ];

    /**
     * @inheritDoc
     */
    public $depends = [
        'dosamigos\tinymce\TinyMceAsset',
    ];
}
