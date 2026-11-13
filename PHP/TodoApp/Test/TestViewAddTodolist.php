<?php

require_once("../Model/Todolist.php");
require_once("../Helper/input.php");
require_once("../BusinessLogic/AddTodolist.php");
require_once("../BusinessLogic/ShowTodolist.php");
require_once("../View/ViewAddTodolist.php");

AddTodolist("Belajar PHP");
ViewAddTodolist();
ShowTodolist();