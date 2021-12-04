<?php
class BaseModel {
  protected $id;

  public function getId() {
    return $this->id;
  }

  public function setId($value) {
    $this->id = $value;
  }
}
?>