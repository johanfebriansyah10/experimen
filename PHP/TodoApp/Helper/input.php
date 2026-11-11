<?php

function input(string $info){
    echo "$info : ";
    $input = fgets(STDIN);
    return trim($input);
}