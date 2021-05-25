function fetchRecipesByType(payload) {
  const type = payload["type"];
  console.log("TYPE: ", type); 
  $.ajax({
    type: "GET",
    url: `http://localhost/facultate/ANUL%202/sem2/web/assignment-6-php-and-jquery/server/src/api/recipes/filter_by_type.php?type=${type}`,
    data: '{"type": "italian"}',
    ContentType:"application/json",

    success: function (response) {
      response["data"].map(recipe => {
        $("#browser-recipes__cards-list").append(
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
    },
    error: function (response) {
      console.log("Error: ", response);
    }
  })
}


$(document).ready(() => {
  const lastFilterKey = this.localStorage.getItem("lastFilterKey")
  if (lastFilterKey) {
    fetchRecipesByType({
      "type": lastFilterKey
    });
    $("#browser-type").val(lastFilterKey);    
  }

  $("#browser-form").submit((e) => {
    e.preventDefault();
    $("#browser-recipes__cards-list").empty();

    var inputs = $('#browser-form :input');
    var values = {};
    inputs.each(function() {
      values[this.name] = $(this).val();
      $(this).val("");
    });

    const payload = {
      type: values["type"] 
    };

    this.localStorage.setItem("lastFilterKey", values["type"]);

    fetchRecipesByType(payload);
  })
})