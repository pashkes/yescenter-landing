<?php

namespace Ashmanov;

class Mailer
{
	private $settings, $result, $request;

	function __construct($settings = [])
	{
		$this->settings = $settings;
	}

	function check()
	{
		if (!$_SERVER["REQUEST_METHOD"] == "POST" && $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {
			$this->result = [
				'STATUS' => 'not_check',
			];
			return false;
		}
		return true;
	}

	function showResult()
	{
		if (in_array($this->result['STATUS'], ['not_check', 'not_send'])) {
			$this->result['MESS'] = str_replace('#ERROR_TYPE#', $this->result['STATUS'], $this->settings['ERROR_MESSAGE']);
		} elseif (in_array($this->result['STATUS'], ['not_validation'])) {
			$this->result['MESS'] = $this->settings['VALIDATION_MESSAGE'];
		} else {
			$this->result['MESS'] = $this->settings['SUCCESS_MESSAGE'];
		}
		echo json_encode($this->result);
		return true;
	}

	function prepareFields()
	{
		foreach ($_POST as $name => $value) {
			$this->request[$name] = str_replace(["\r", "\n"], [" ", " "], strip_tags(trim($value)));
		}
		return true;
	}

	function validationFields()
	{
		foreach ($this->settings['REQUIRED_FIELDS'] as $name) {
			if (empty($this->request[$name])) {
				$this->result = [
					'STATUS' => 'not_validation',
				];
				return false;
			}
		}
		return true;
	}

	function getMailBody()
	{
		$text = "Содержимое формы:\n";
		foreach ($this->request as $name => $value) {
			$text = $name . ':' . $value . "\n";
		}
		return $text;
	}

	function getMailHeader()
	{
		$head = 'From: ' . $this->settings['NAME_FROM'] . ' <' . $this->settings['EMAIL_FROM'] . '>';
		return $head;
	}

	function send()
	{
		if (mail($this->settings['EMAIL_TO'], $this->settings['SUBJECT'], $this->getMailBody(), $this->getMailHeader())) {
			$this->result = [
				'STATUS' => 'success',
			];
		} else {
			$this->result = [
				'STATUS' => 'not_send',
			];
		}
	}

	function doMagic()
	{
		if ($this->check()) {
			$this->prepareFields();
			if ($this->validationFields()) {
				$this->send();
			}
		}
		$this->showResult();
	}
}