<?php

    include('round.php');

    class completeTournament {
        private $requestMethod;

        // Constructor
        public function __construct($requestMethod) {
            $this->requestMethod = $requestMethod;
        }

        public function processRequest() {
            if($this->requestMethod == 'GET') {
                $response = $this->getData();
            } else {
                $response = $this->notGet();
            }
            header($response['status_code_header']);
            if ($response['body']) {
                echo $response['body'];
            }
        }

        // Handles the case when the request method is not 'GET'
        public function notGet() {
            $response['status_code_header'] = 'HTTP/1.1 422 Unprocessable Entity';
            $response['body'] = json_encode([
                'error' => 'Invalid input'
            ]);
            return $response;
        }

        // If request method is 'GET' then returns a json objects that contains player choices for 50 rounds
        public function getData() {
            $rounds = [];
            for($i = 0; $i < 50; $i++) {
                $play = new Round(1,3);
                array_push($rounds, $play);
            }
            $response['status_code_header'] = 'HTTP/1.1 200 OK';
            $response['body'] = json_encode($rounds);
            return $response;
        }
    }

?>