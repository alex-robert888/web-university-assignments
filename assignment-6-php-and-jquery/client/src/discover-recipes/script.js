function fetchRecipes() {
  $.ajax({
    type:"GET",
    url: "http://localhost/facultate/ANUL%202/sem2/web/assignment-6-php-and-jquery/server/src/api/recipes/index.php",
    ContentType:"application/json",

    success: (response) => {
      response["data"].map(recipe => {
        $("#discover-recipes__cards-list").append(
          `
            <li>
              <article class="discover-recipes__card" scrollable>
                <div class="discover-recipes__card__header">
                  <div>
                    <button class="button--blank"><img src="../../assets/svg/delete.svg" alt="Delete Icon"></button>
                    <button class="button--blank"><img src="../../assets/svg/edit.svg" alt="Edit Icon"></button>
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

$(document).ready(async () => {
  fetchRecipes();
})