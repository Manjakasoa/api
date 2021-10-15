<?php 

namespace App\Events;

use ApiPlatform\Core\EventListener\EventPriorities;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class DateAddEntitySubscriber implements EventSubscriberInterface {
	public static function getSubscribedEvents() {
		return [
			KernelEvents::VIEW => [
				'addDateAddEntity', EventPriorities::PRE_VALIDATE
			]
		];
	}

	public function addDateAddEntity(ViewEvent $event) {
		$entity = $event->getControllerResult();
		$method = $event->getRequest()->getMethod();
		if(property_exists($entity, 'dateAdd') && $method === "POST") {
			$entity->setDateAdd(new \DateTime());
		}
	}
}