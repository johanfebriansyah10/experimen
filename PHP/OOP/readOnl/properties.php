<?php

class foo {
    public readonly string $prop;
    function __construct(string $prop){
        $this->prop = $prop;
    }
}

$test = new foo("foobar");
echo $test->prop;
// this statement will throw an error because the readonli properties can't modified
// $test->prop = "barfoo";
class Test1 {
    public readonly string $prop;
}

$test1 = new Test1();
// this statement will throw an error because the readonli properties can't modified
// $test1->prop = "babb";

class Test2 {
    function __construct(public readonly object $obj){

    }
}

$test2 = new Test2(new stdClass());
$test2->obj->foo = 1;
// $test2->obj = new stdClass();
var_dump($test2);