<?php
/**
 * @copyright Copyright (c) 2021, Oleg Chulakov Studio
 * @link http://chulakov.com/
 */

namespace chulakov\typograf\widgets;

use yii\widgets\InputWidget;
use yii\base\InvalidConfigException;
use chulakov\typograf\assets\TypografAssets;

class TypografTextWidget extends InputWidget
{
    /**
     * @var string
     */
    public string $text;

    /**
     * @var string|null
     */
    public ?string $id = null;

    /**
     * @var string
     */
    public string $template = '@vendor/chulakov/yii2-js-typograf/src/views/text';

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
            $this->options['style'] = 'border-radius: inherit';
        }

        $this->text = $this->renderInputHtml('text');

        return $this->render($this->template, [
            'text' => $this->text,
            'id' => $this->id,
        ]);
    }
}
