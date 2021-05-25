$(document).ready(async () => {
  $("#insert-recipe-form").submit((e) => {
    e.preventDefault();
    
    var inputs = $('#insert-recipe-form :input');
    var values = {};
    inputs.each(function() {
      values[this.name] = $(this).val();
      $(this).val("");
    });

    const payload = {
      author: values["author"],
      name: values["name"],
      type: values["type"],
      content: values["content"],
    }
    console.log("payload: ", payload); 

    try {
      $.ajax({
        type: "POST",
        url: "http://localhost/facultate/ANUL%202/sem2/web/assignment-6-php-and-jquery/server/src/api/recipes/create.php",
        data: JSON.stringify(payload),
        ContentType:"application/json",
      })

      alert("Successfully added your recipe!")
    }
    catch(e) {
      alert(e);
    }
  });
})