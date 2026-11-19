<?php
class Person {
    // properti declaration
    var $properti = "this is a default value";
    var $name = "johan"; 
    var $age = 23;
    
    // method declaration
    function displaiVar(){
        echo "this is $this->properti, btw my name is $this->name, i'am $this->age years old, domooo";
    }
}

$person = new Person();
$person->name = "Johan";
$person->age = 23;
$person->displaiVar();