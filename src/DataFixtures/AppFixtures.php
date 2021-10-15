<?php

namespace App\DataFixtures;

use App\Entity\Post;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
	private $encoder;

	public function __construct(UserPasswordEncoderInterface $encoder) {
		$this->encoder = $encoder;
	}
    public function load(ObjectManager $manager)
    {
    	$faker = Faker\Factory::create('fr_FR');
    	for($i = 0; $i < 10 ; $i++) {
    		$user = new User();
    		$password = $this->encoder->encodePassword($user, 'password');
    		$user->setEmail($faker->email)
    			 ->setPassword($password)
                 ->setFirstname($faker->firstname)
                 ->setLastname($faker->lastname)
                 ->setDateAdd(new \DateTime);
            $manager->persist($user);
            for($j = 0; $j < rand(0,10); $j++) {
                $post = new Post();
                $post->setContent($faker->realText(200,4))
                     ->setUser($user)
                     ->setDateAdd(new \DateTime);
                $manager->persist($post);
            }
    	}
		$manager->flush();
    }
}
