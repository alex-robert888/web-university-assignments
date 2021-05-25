function fetchRecipes() {
  $.ajax({
    type:"GET",
    url: "http://localhost/facultate/ANUL%202/sem2/web/assignment-6-php-and-jquery/server/src/api/recipes/index.php",
    ContentType:"application/json",

    success: (response) => {
      response["data"].map(recipe => {
        $("#discover-recipes__cards-list").append(
          `
            <li id="li-card-${recipe.id}">
              <article class="discover-recipes__card" scrollable>
                <div class="discover-recipes__card__header">
                    <div>
                      <button  class="delete-recipe" id=${recipe.id}><img id=${recipe.id} src="../../assets/svg/delete.svg" alt="Delete Icon"></button>
                      <button  class="edit-recipe" id=${recipe.id}><img id=${recipe.id} src="../../assets/svg/edit.svg" alt="Edit Icon"></button>
                    </div>
                  </div>
      
                <div class="discover-recipes__card__type-tag">
                  <span>${recipe.type}</span>
                </div>
      
                <h3>${recipe.name}</h3>
                <small>by ${recipe.author}</small>
                <hr>
                <p>
                  ${recipe.content}
                </p>          
              </article>
            </li>
          `
        );
      })
    }
  });
}

function deleteRecipe(id) {
  $.ajax({
    type: "DELETE",
    url: `http://localhost/facultate/ANUL%202/sem2/web/assignment-6-php-and-jquery/server/src/api/recipes/destroy.php/?id=${id}`,
    contentType:'application/json'
  });
}

$(document).ready(() => {
  fetchRecipes();

  $("body").on("click", ".delete-recipe", (e) => {
    deleteRecipe(e.target.id);
    $(`#li-card-${e.target.id}`).remove();
  });

  $("body").on("click", ".edit-recipe", (e) => {
    
  });
})