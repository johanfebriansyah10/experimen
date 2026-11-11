<?php

require_once("../Model/Todolist.php");
require_once("../Helper/input.php");
require_once("../BusinessLogic/AddTodolist.php");
require_once("../BusinessLogic/ShowTodolist.php");
require_once("../View/ViewRemoveTodolist.php");


AddTodolist("Belajar PHP Dasar");
AddTodolist("Belajar PHP OOP");
AddTodolist("Belajar PHP Database");
ShowTodolist();
ViewRemoveTodolist();
ShowTodolist();
ViewRemoveTodolist();
ShowTodolist();