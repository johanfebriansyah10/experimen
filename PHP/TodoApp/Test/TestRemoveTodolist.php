<?php

require_once("../Model/Todolist.php");
require_once("../BusinessLogic/AddTodolist.php");
require_once("../BusinessLogic/RemoveTodolist.php");
require_once("../BusinessLogic/ShowTodolist.php");

AddTodolist("Johan");
AddTodolist("PHP");
AddTodolist("JavaScript");
AddTodolist("Java");


ShowTodolist();
RemoveTodolist(3);
ShowTodolist();
RemoveTodolist(2);
ShowTodolist();
var_dump(RemoveTodolist(4));
ShowTodolist();
