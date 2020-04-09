<?php

    include('./Src/completeTournament.php');

    // Defining the headers
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $uri = explode( '/', $uri );

    // Checking whether the HTTP request is valid or not
    if ($uri[1] !== '') {
        header("HTTP/1.1 404 Not Found");
        exit();
    }

    // Getting the request method
    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $controller = new completeTournament($requestMethod);
    $controller->processRequest();
?>