<?php
// get /read.php => selectAll(): Recipe[]
// post /create.php?author=x1&name=x2&type=x3& => insert(attributes)
// delete /destroy.php => delete(id)
// update /destroy.php => update(id, attributes)
// get /show.php => show(id): Recipe
include_once __dir__."./../../system/database-connector.php";

abstract class BaseGateway {
  protected $dbConnection;
  protected $tableName;

  public function __construct($tableName) {
    $this->dbConnection = (new DatabaseConnector())->getDatabaseConnection();
    $this->tableName = $tableName;
  }

  public function selectAll() {
    try {
      $sqlQuerry = "select * from $this->tableName";
      $statement = $this->dbConnection->prepare($sqlQuerry);
      $statement->execute();
      return $statement;
    }
    catch (\PDOException $e) {
      exit($e->getMessage());
    }
  }

  public function select($id) {
    try {
      $sqlQuerry = "select * from $this->tableName where id=:id";
      $statement = $this->dbConnection->prepare($sqlQuerry);
      $idSanitized =  htmlspecialchars(strip_tags($id));
      $statement->bindParam(":id", $idSanitized);
      $statement->execute();
      return $statement;
    }
    catch (\PDOException $e) {
      exit($e->getMessage());
    }
  }

  public function delete($id) {
    try {
      $sqlQuerry = "delete from $this->tableName where id = :id";
      $statement = $this->dbConnection->prepare($sqlQuerry);
      $idSanitized = htmlspecialchars(strip_tags($id));
      $statement->bindParam(":id", $idSanitized);
      $statement->execute();
    }
    catch (\PDOException $e) {
      exit($e->getMessage());
    }
  }
}
?>