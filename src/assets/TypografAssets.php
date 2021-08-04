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
    public $sourcePath = '@vendor/chulakov/yii2-js-typograf/src/assets';

    /**
     * @var array
     */
    public $js = [
        'js/typograf/typograf.all.min.js',
        'js/typografText.js'
    ];

    /**
     * @inheritDoc
     */
    public $depends = [
        'yii\web\JqueryAsset',
    ];
}
