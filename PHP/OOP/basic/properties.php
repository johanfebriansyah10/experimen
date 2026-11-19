<?php
class Shape {
    public string $name;
    public int $number;
    function __construct($name, $number){
        $this->name = $name;
        $this->number = $number;
    }

    // function setName(string $name){
    //     $this->$name = $name;
    // }

    // function setNumberOfSide(int $number){
    //     $this->$number = $number;
    // }
    
    function getName(){
        return $this->name;
    }

    function getNumberOfSide(){
        return $this->number;
    }
    }

    $triangle = new Shape("triangle", 3);
    echo $triangle->getName() . PHP_EOL;
    echo $triangle->getNumberOfSide() . PHP_EOL;

    // will thrown an error because the method get is call before initialization
    $circle = new Shape("circle", 0);
    echo $circle->getName(). PHP_EOL;;
    echo $circle->getNumberOfSide(); 

    
?>