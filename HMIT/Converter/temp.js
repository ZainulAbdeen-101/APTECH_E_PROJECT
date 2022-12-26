$(document).ready(function () {
  dd = $(".drop").val();

  dt = $(".drop1").val();

  setInterval(function () {
    $(".drop").change(function () {
      dd = $(".drop").val();
      dt = $(".drop1").val();
      if (dd === "c") {
        $(".drop1").val("f");
        $(".drop1 option:selected").text("Farhenheit");
      }
      if (dd === "f") {
        $(".drop1").val("c");
        $(".drop1 option:selected").text("Celcius");
      }
    });
  });

  setInterval(function () {
    $(".drop1").change(function () {
      dd = $(".drop").val();
      dt = $(".drop1").val();

      if (dt === "f") {
        $(".drop").val("c");
        $(".drop option:selected").text("Celcius");
      }
      if (dt === "c") {
        $(".drop").val("f");
        $(".drop option:selected").text("Farhenheit");
      }
    });
  });

  $("#inp1").on("input", function () {
    dt = $(".drop1").val();
    dt = $(".drop1").val();

    if (dd === "c") {
      var value1 = $("#inp1").val();
      let ans = value1 * 1.8 + 32;
      $("#go").val(ans.toFixed(4));
    } else if (dd === "f") {
      var value1 = $("#inp1").val();
      let ans1 = (value1 - 32) * 5/9;
      $("#go").val(ans1.toFixed(5) );
    }
  })
})
