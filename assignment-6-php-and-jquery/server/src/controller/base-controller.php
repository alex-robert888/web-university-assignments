<?php
  abstract class BaseController {
    public function __construct() {
      
    }

    abstract public function index();
    abstract public function show();
    abstract public function create();
    abstract public function update();
    abstract public function destroy();
  }
?>