<?php 

namespace App\Events;

use ApiPlatform\Core\EventListener\EventPriorities;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\KernelEvents;


class DateUpdEntitySubscriber implements EventSubscriberInterface {

	public static function  getSubscribedEvents() {
		return [
			KernelEvents::VIEW => [
				'addDateUpdEntity'	, EventPriorities::PRE_VALIDATE
			]
		];
	}

	public function addDateUpdEntity($event) {
		$entity = $event->getControllerResult();
		$method = $event->getRequest()->getMethod();
		if(property_exists($entity, 'dateUpd') && $method === "PUT") {
			$entity->setDateUpd(new \DateTime());
		}
	}
}