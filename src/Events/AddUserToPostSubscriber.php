<?php 

namespace App\Events;

use ApiPlatform\Core\EventListener\EventPriorities;
use App\Entity\Post;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Security\Core\Security;

class AddUserToPostSubscriber implements EventSubscriberInterface {

	private $security;

	public function __construct(Security $security) {
		$this->security = $security;
	}
	public static function getSubscribedEvents() {
		return [
			KernelEvents::VIEW => [
				'addUserToPost',EventPriorities::PRE_VALIDATE
			]
		];
	}

	public function addUserToPost(ViewEvent $event) {
		$post = $event->getControllerResult();
		$method = $event->getRequest()->getMethod();
		
		if($post instanceof Post && $method === "POST") {
			$post->setUser($this->security->getUser());
		}
	}
} 