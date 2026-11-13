<?php

require_once(__DIR__."/../BusinessLogic/RemoveTodolist.php");
require_once(__DIR__."/../BusinessLogic/AddTodolist.php");
require_once(__DIR__."/../BusinessLogic/ShowTodolist.php");
require_once(__DIR__."/../Helper/input.php");
function ViewRemoveTodolist(){
    echo "Hapus Todolist". PHP_EOL;
    ShowTodolist();
    $pilihan = input("Pilih Nomor (x untuk batal hapus)");
    if($pilihan == "x"){
        echo "Gagal hapus todo". PHP_EOL;
    } else {
        $success = RemoveTodolist($pilihan);
        if($success){
            echo "Berhasil menghapus todo nomor $pilihan" . PHP_EOL;
        } else {
            echo "Gagal menghapus todo nomor $pilihan" . PHP_EOL;
        }
    }
}