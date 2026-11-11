<?php

require_once(__DIR__."/../Helper/input.php");
require_once(__DIR__."/../BusinessLogic/ShowTodolist.php");
require_once(__DIR__."/../View/ViewAddTodolist.php");
require_once(__DIR__."/../View/ViewRemoveTodolist.php");

function ViewShowTodolist(){
    while(true){
        ShowTodolist();
        echo "=========Menu==========" . PHP_EOL;
        echo "1. Untuk Menambah Todo" . PHP_EOL;
        echo "2. Untuk Menghapus Todo" . PHP_EOL;
        echo "x. Keluar" . PHP_EOL;
        $pilihan = input("Masukkan Nomor Perintah");
        if($pilihan === "1"){
            ViewAddTodolist();
        } elseif ($pilihan === "2"){
            ViewRemoveTodolist();
        } elseif ($pilihan === "x"){
            break;
        } else {
            echo "Maap perintah tidak diketahui" . PHP_EOL;
        }
    }
}