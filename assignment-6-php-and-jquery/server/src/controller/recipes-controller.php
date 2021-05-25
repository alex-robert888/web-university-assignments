<?php
  include_once __dir__."./base-controller.php";
  include_once __dir__."./../model/recipe.php";

  class RecipesController extends BaseController {
    public function __construct() {       
      $this->setUpHeader();
    }

    private function setUpHeader() {
      header("Access-Control-Allow-Origin: *");
      header("Content-Type: application/json; charset=UTF-8");
      header("Access-Control-Max-Age: 3600");
      header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    }

    public function index() {
      header("Access-Control-Allow-Methods: GET");
      $recipe = new Recipe();
      $recipes = $recipe->getAll();
      $this->renderRecipesFromDb($recipes);
    }

    public function show() {
      header("Access-Control-Allow-Methods: GET");
      $id = isset($_GET['id']) ? $_GET['id'] : die();
      $recipe = new Recipe();
      $recipe->setId($id);
      $recipes = $recipe->show();
      $this->renderRecipesFromDb($recipes);
    }

    public function create() {
      header("Access-Control-Allow-Methods: POST");
      $body = json_decode(file_get_contents('php://input'));
      $recipe = new Recipe();
      $recipe->setAuthor($body->author);
      $recipe->setName($body->name);
      $recipe->setType($body->type);
      $recipe->setContent($body->content);
      $recipe->create();
    }

    public function update() {
      header("Access-Control-Allow-Methods: PUT, PATCH");
      $body = json_decode(file_get_contents('php://input'));
      $recipe = new Recipe();
      $recipe->setId($body->id);
      $recipe->setAuthor($body->author);
      $recipe->setName($body->name);
      $recipe->setType($body->type);
      $recipe->setContent($body->content);
      $recipe->update();
    }

    public function destroy() {
      header("Access-Control-Allow-Methods: DELETE");
      $id = isset($_GET['id']) ? $_GET['id'] : die();
      $recipe = new Recipe();
      $recipe->setId($id);
      $recipe->destroy();
    }

    public function filterByType() {
      header("Access-Control-Allow-Methods: GET");
      $type = isset($_GET['type']) ? $_GET['type'] : die();
      $recipe = new Recipe();
      $recipe->setType($type);
      $recipes = $recipe->filterByType();
      $this->renderRecipesFromDb($recipes);
    }

    private function renderRecipesFromDb($recipes) {
      $no_of_recipes = $recipes->rowCount();

      if ($no_of_recipes <= 0) {
        header("HTTP/1.0 404 Not Found");
        exit();
      } 

      $recipes_to_send = array();
      $recipes_to_send['data'] = array();
      while ($row = $recipes->fetch(\PDO::FETCH_ASSOC)) {
        extract($row);

        $recipe_to_send = array(
          "id" => $id,
          "name" => $name,
          "author" => $author,
          "type" => $type,
          "content" => html_entity_decode($content)
        );

        array_push($recipes_to_send['data'], $recipe_to_send);
      }

      echo json_encode($recipes_to_send);
    }
  }
?>