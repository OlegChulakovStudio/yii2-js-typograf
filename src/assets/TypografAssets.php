<?php
/**
 * @copyright Copyright (c) 2021, Oleg Chulakov Studio
 * @link http://chulakov.com/
 */

namespace chulakov\typograf\assets;

use yii\web\AssetBundle;

class TypografAssets extends AssetBundle
{
    /**
     * @var string
     */
    public $sourcePath = '@vendor/chulakov/typograf/src/assets';

    /**
     * @var array
     */
    public $js = [
        'js/typograf/dist/typograf.all.min.js',
        'js/MenuItem.js',
        'js/SearchMenuFilter.js',
        'js/TypografButton.js',
        'js/input.js'
    ];

    /**
     * @inheritDoc
     */
    public $depends = [
        'yii\web\JqueryAsset',
    ];
}
