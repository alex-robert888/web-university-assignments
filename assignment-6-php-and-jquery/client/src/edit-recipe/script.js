$(document).ready(async () => {
  $("#edit-recipe-form").submit((e) => {
    e.preventDefault();
    
    var inputs = $('#edit-recipe-form :input');
    var values = {};
    inputs.each(function() {
      values[this.name] = $(this).val();
      $(this).val("");
    });

    var urlParams = new RegExp('[\?&]' + "id" + '=([^&#]*)').exec(window.location.href);

    const payload = {
      id: urlParams[1],
      author: values["author"],
      name: values["name"],
      type: values["type"],
      content: values["content"],
    }

    console.log("payload: ", payload); 

    try {
      $.ajax({
        type: "PUT",
        url: "http://localhost/facultate/ANUL%202/sem2/web/assignment-6-php-and-jquery/server/src/api/recipes/update.php",
        data: JSON.stringify(payload),
        ContentType:"application/json",
      })

      alert("Successfully updated your recipe!")
    }
    catch(e) {
      alert(e);
    }
  });
})