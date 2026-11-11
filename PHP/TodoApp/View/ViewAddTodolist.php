<?php

require_once("../BusinessLogic/AddTodolist.php");
function ViewAddTodolist(){
    echo "Tambah Todolist". PHP_EOL;
    $pilihan = input("Tambah Todo");
    AddTodolist($pilihan);
}