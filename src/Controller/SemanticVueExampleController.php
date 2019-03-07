<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SemanticVueExampleController extends AbstractController
{
    /**
     * @Route("/", name="semantic_vue_example")
     */
    public function semanticVueExample(): Response
    {
        return $this->render('semantic_vue_example.html.twig');
    }
}
