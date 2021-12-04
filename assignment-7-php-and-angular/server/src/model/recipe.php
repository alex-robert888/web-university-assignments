<?php
  include_once __dir__.'./base-model.php';
  include_once __dir__.'./../database/gateways/recipes-gateway.php';

  class Recipe extends BaseModel{
    private $author;
    private $name;
    private $type;
    private $content;
    private $recipesGateway;

    public function __construct() {
      $this->recipesGateway = new RecipesGateway();
    }

    public function getAuthor() {
      return $this->author;
    }

    public function getName() {
      return $this->name;
    }

    public function getType() {
      return $this->type;
    }

    public function getContent() {
      return $this->content;
    }

    public function setAuthor($value) {
      $this->author = $value;
    }

    public function setName($value) {
      $this->name = $value;
    }

    public function setType($value) {
      $this->type = $value;
    }

    public function setContent($value) {
      $this->content = $value;
    }

    public function getAll() {
      return $this->recipesGateway->selectAll(); 
    }      

    public function create() {
      $this->recipesGateway->insert($this->author, $this->name, $this->type, $this->content);
    }

    public function update() {
      $this->recipesGateway->update($this->id, $this->author, $this->name, $this->type, $this->content);
    }

    public function destroy() {
      $this->recipesGateway->delete($this->id);
    }

    public function show() {
      return $this->recipesGateway->select($this->id);
    }

    public function filterByType() {
      return $this->recipesGateway->selectByType($this->type);
    }
  }
?>