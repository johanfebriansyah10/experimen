<?php

require_once(__DIR__."/../BusinessLogic/AddTodolist.php");
function ViewAddTodolist(){
    echo "Tambah Todolist". PHP_EOL;
    $pilihan = input("Tambah Todo (x untuk batal tambah todo)");
    if($pilihan == "x"){
        echo "Gagal tambah todo" . PHP_EOL;
    } else {
        AddTodolist($pilihan);
    }
}