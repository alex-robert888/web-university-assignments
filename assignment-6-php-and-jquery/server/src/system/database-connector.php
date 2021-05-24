<?php
  use \Dotenv\Dotenv;
  include_once __dir__."./../../vendor/autoload.php";

  class DatabaseConnector {
    private $dbConnection;

    public function __construct() {
      $dotenv = new DotEnv(__DIR__);
      $dotenv->load();

      $this->dbConnection = null;
      $dbHost             = getenv('DB_HOST');
      $dbPort             = getenv('DB_PORT');
      $dbDatabase         = getenv('DB_DATABASE');
      $dbUsername         = getenv('DB_USERNAME');
      $dbPassword         = getenv('DB_PASSWORD');

      $options = [
        \PDO::ATTR_ERRMODE            => \PDO::ERRMODE_EXCEPTION,
        \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
        \PDO::ATTR_EMULATE_PREPARES   => false,
    ];

      try {
        $this->dbConnection = new \PDO("mysql:host=$dbHost;port=$dbPort;charset=utf8mb4;dbname=$dbDatabase", $dbUsername, $dbPassword, $options);
      } 
      catch (\PDOException $exception) {
        exit($exception->getMessage());
      }
    }

    public function getDatabaseConnection() {
      return $this->dbConnection;
    }
  }
?>