<?php

    // Creating a class that will define the choices of each player in a particular round
    class Round {
        public $player1;
        public $player2;
        public $player3;
        public $player4;

        // Constructor that assigns a random number to each player from num1 to num2
        public function __construct($num1, $num2) {
            $this->player1 = rand($num1, $num2);
            $this->player2 = rand($num1, $num2);
            $this->player3 = rand($num1, $num2);
            $this->player4 = rand($num1, $num2);
        }
    }

?>