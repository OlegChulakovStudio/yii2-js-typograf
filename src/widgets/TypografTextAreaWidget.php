<?php
/**
 * @copyright Copyright (c) 2021, Oleg Chulakov Studio
 * @link http://chulakov.com/
 */

namespace chulakov\typograf\widgets;

use yii\bootstrap\Html;
use yii\widgets\InputWidget;
use yii\base\InvalidConfigException;
use chulakov\typograf\assets\TypografAssets;

class TypografTextAreaWidget extends InputWidget
{
    /**
     * @var string
     */
    public string $textArea;

    /**
     * @var string|null
     */
    public ?string $id = null;

    /**
     * @var string
     */
    public string $template = '@vendor/chulakov/yii2-js-typograf/src/views/textarea';

    /**
     * @throws InvalidConfigException
     */
    public function init()
    {
        TypografAssets::register($this->getView());
        parent::init();
        $this->id = $this->id ?: $this->options['id'];
    }

    /**
     * Запуск создания кнопки типографа
     *
     * @return string
     */
    public function run(): string
    {
        if (empty($this->options['class'])) {
            $this->options['class'] = 'form-control';
        }

        if (empty($this->options['style'])) {
            $this->options['style'] = 'border-radius: inherit;';
        }

        if (empty($this->options['rows'])) {
            $this->options['rows'] = 3;
        }

        $this->textArea = Html::activeTextarea(
            $this->model,
            $this->attribute,
            $this->options
        );

        return $this->render($this->template, [
            'textArea' => $this->textArea,
            'id' => $this->id,
        ]);
    }
}
