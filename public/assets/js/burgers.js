$(document).ready(function () {
  $(".change").on("click", function () {
    let id = $(this).data("id");
    let devour = $(this).data("devour");

    console.log(devour);
    let updatedDevour = {
      devoured: devour,
    };
    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: updatedDevour,
    }).then(function () {
      console.log(devour);
      location.reload();
    });
  });

  $(".create-form").on("submit", function (e) {
    e.preventDefault();
    let newBurger = {
      burger_name: $("#burgerToGo").val().trim(),
    };
    $.ajax(`/api/burgers`, {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      location.reload();
    });
  });
});
