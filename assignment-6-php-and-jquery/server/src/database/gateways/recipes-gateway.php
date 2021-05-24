<?php
include_once __dir__."./base-gateway.php";

class RecipesGateway extends BaseGateway{
  public function __construct() {
    parent::__construct("Recipes");
  }

  public function insert($author, $name, $type, $content) {
    try {
      $sqlQuerry = "insert into $this->tableName(author, name, type, content) values(:author, :name, :type, :content)"; 
      $statement = $this->dbConnection->prepare($sqlQuerry);

      $authorSanitized = htmlspecialchars(strip_tags($author));
      $nameSanitized = htmlspecialchars(strip_tags($name));
      $typeSanitized = htmlspecialchars(strip_tags($type));
      $contentSanitized = htmlspecialchars(strip_tags($content));
      $statement->bindParam(":author", $authorSanitized);
      $statement->bindParam(":name", $nameSanitized);
      $statement->bindParam(":type", $typeSanitized);
      $statement->bindParam(":content", $contentSanitized);

      $status = $statement->execute();
      if ($status) {
        return true;
      }
      printf("Insertion Error: %s. \n", $statement->error);
    } 
    catch (\PDOException $e) {
      $errorMessage = $e->getMessage();
      exit("Insertion failed: $errorMessage");
    }
  }

  public function update($id, $author, $name, $type, $content) {
    try {
      $sqlQuerry = "update $this->tableName set author = :author, name = :name, type = :type, content = :content where id = :id"; 
      $statement = $this->dbConnection->prepare($sqlQuerry);
      
      $idSanitized = htmlspecialchars(strip_tags($id));
      $authorSanitized = htmlspecialchars(strip_tags($author));
      $nameSanitized = htmlspecialchars(strip_tags($name));
      $typeSanitized = htmlspecialchars(strip_tags($type));
      $contentSanitized = htmlspecialchars(strip_tags($content));
      $statement->bindParam(":id", $idSanitized);
      $statement->bindParam(":author", $authorSanitized);
      $statement->bindParam(":name", $nameSanitized);
      $statement->bindParam(":type", $typeSanitized);
      $statement->bindParam(":content", $contentSanitized);
      $status = $statement->execute();
      if ($status) {
        return true;
      }
      printf("Update Error: %s. \n", $statement->error);
    } 
    catch (\PDOException $e) {
      exit($e->getMessage());
    }
  }

  public function selectByType($type) {
    try {
      $sqlQuerry = "select * from  $this->tableName where type = :type"; 
      $statement = $this->dbConnection->prepare($sqlQuerry);
      $typeSanitized = htmlspecialchars(strip_tags($type));
      $statement->bindParam(":type", $typeSanitized);
      $statement->execute();
      return $statement;
    } 
    catch (\PDOException $e) {
      exit($e->getMessage());
    }
  }
}
?>