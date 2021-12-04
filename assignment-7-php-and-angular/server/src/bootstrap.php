<?php
  require_once(__DIR__."\\..\\vendor\\autoload.php");
  use Dotenv\Dotenv;

  $dotenv = new DotEnv(__DIR__);
  $dotenv->load();
?>