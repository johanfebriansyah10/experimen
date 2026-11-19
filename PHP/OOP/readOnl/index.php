<?php

# [\AllowDynamicProperties()]
readonly class Person {
    var $name;
    var $age;

    function great(){
        echo `Hello my name is $this->name, i'am $this->age years old`;
    }
}

$person = new Person();
$person->great();

?>