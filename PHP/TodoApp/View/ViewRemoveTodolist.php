<?php

require_once("../BusinessLogic/RemoveTodolist.php");
require_once("../BusinessLogic/ShowTodolist.php");
function ViewRemoveTodolist(){
    echo "Hapus Todolist". PHP_EOL;
    ShowTodolist();
    $pilihan = input("Pilih Nomor Todo yang akan dihapus");
    RemoveTodolist($pilihan);
}

?>