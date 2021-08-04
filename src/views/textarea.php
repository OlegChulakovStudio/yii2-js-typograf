<?php
/**
 * @copyright Copyright (c) 2021, Oleg Chulakov Studio
 * @link http://chulakov.com/
 *
 * @var string $textArea
 * @var integer $id
 */
?>

<div class="input-group">
    <?= $textArea ?>
    <span class="input-group-btn">
        <button data-typograf-element="#<?= $id ?>" type="button" class="btn btn-primary btn-flat">
            <svg width="24" height="24px">
                <path d="M6 8v3H5V5c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h2c.3 0 .5.1.7.3.2.2.3.4.3.7v6H8V8H6zm0-3v2h2V5H6zm13 0h-3v5h3v1h-3a1 1 0 01-.7-.3 1 1 0 01-.3-.7V5c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h3v1zm-5 1.5l-.1.7c-.1.2-.3.3-.6.3.3 0 .5.1.6.3l.1.7V10c0 .3-.1.5-.3.7a1 1 0 01-.7.3h-3V4h3c.3 0 .5.1.7.3.2.2.3.4.3.7v1.5zM13 10V8h-2v2h2zm0-3V5h-2v2h2zm3 5l1 1-6.5 7L7 15.5l1.3-1 2.2 2.2L16 12z"
                    fill-rule="evenodd"
                    fill="#fff">
                </path>
            </svg>
        </button>
    </span>
</div>