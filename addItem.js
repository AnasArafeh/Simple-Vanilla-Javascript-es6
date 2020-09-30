document.addEventListener(
  "DOMContentLoaded",

  function (event) {
    console.log("connnected2");
    $(document).ready(function () {
      $("#submit1").click(function () {
        $("#popup").slideToggle(1000, function () {
          if ($("#submit1").val() == "hide popup") {
            $("#submit1").val("show popup");
          } else {
            $("#submit1").val("hide popup");
          }
        });
      });
    });
  }
);
