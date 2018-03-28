<?php
require_once('class_mailer.php');
$settings = [
	'REQUIRED_FIELDS' => ['PHONE', 'NAME'],
	'ERROR_MESSAGE' => 'Упс! Что-то пошло не так (#ERROR_TYPE#). Пожалуйста свяжитесь с нами по телефону и мы обязательно Вам поможем. Спасибо!',
	'VALIDATION_MESSAGE' => 'Пожалуйста, заполните обязательные поля',
	'SUCCESS_MESSAGE' => 'Ваша заявка отправлена! Спасибо',
	'NAME_FROM' => 'Robot',
	'EMAIL_FROM' => 'from@site.ru',
	'EMAIL_TO' => 'to@site.ru',
	'SUBJECT' => 'Заполнена форма с сайта',
];
$_landingMail = new \Ashmanov\Mailer($settings);
$_landingMail->doMagic();