<?php

require_once("../Model/Todolist.php");
require_once("../BusinessLogic/AddTodolist.php");

AddTodolist("Johan");
AddTodolist("PHP");
AddTodolist("JavaScript");
AddTodolist("Java");

var_dump($todoList);