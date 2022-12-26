$(document).ready(function () {
  dd = $(".drop").val();

  dt = $(".drop1").val();

  setInterval(function () {
    $(".drop").change(function () {
      dd = $(".drop").val();
      dt = $(".drop1").val();
      if (dd === "sqmillimeter") {
        $(".drop1").val("sqinch");
        $(".drop1 option:selected").text("Square Inch");
      }
      if (dd == "sqinch") {
        $(".drop1").val("sqmillimeter");
        $(".drop1 option:selected").text("Square Millimeter");
      }

      if (dd === "sqfeet") {
        $(".drop1").val("sqmeter");
        $(".drop1 option:selected").text("Square Meter");
      }

      if (dd == "sqmeter") {
        $(".drop1").val("sqfeet");
        $(".drop1 option:selected").text("Square Feet");
      }

      if (dd === "sqyard") {
        $(".drop1").val("sqmeter");
        $(".drop1 option:selected").text("Square Meter");
      }
      if (dd === "sqmiles") {
        $(".drop1").val("sqkm");
        $(".drop1 option:selected").text("Square Kilometer");
      }
      if (dd === "sqkm") {
        $(".drop1").val("sqmiles");
        $(".drop1 option:selected").text("Square Miles");
      }
      if (dd === "acre") {
        $(".drop1").val("hts");
        $(".drop1 option:selected").text("Hectares");
      }
      if (dd === "hts") {
        $(".drop1").val("acre");
        $(".drop1 option:selected").text("Acres");
      }
    });
   
  });
});

setInterval(function () {
  $(".drop1").change(function () {
    dd = $(".drop").val();
    dt = $(".drop1").val();

    if (dt === "sqmillimeter") {
      $(".drop").val("sqinch");
      $(".drop option:selected").text("Square Inch");
    }
    if (dt === "sqinch") {
      $(".drop").val("sqmillimeter");
      $(".drop option:selected").text("Square Millimeter");
    }
    if (dt === "sqkm") {
      $(".drop").val("sqmiles");
      $(".drop option:selected").text("Square miles");
    }
    if (dt === "sqmiles") {
      $(".drop").val("sqkm");
      $(".drop option:selected").text("Square Kilometer");
    }
    if (dt === "sqmeter") {
      $(".drop").val("sqfeet");
      $(".drop option:selected").text("Square Feet");
    }
    if (dt === "sqfeet") {
      $(".drop").val("sqmeter");
      $(".drop option:selected").text("Square Meter");
    }
    if (dt === "sqyard") {
      $(".drop").val("sqmeter");
      $(".drop option:selected").text("Square Meter");
    }
    if (dt === "acre") {
      $(".drop").val("hts");
      $(".drop option:selected").text("Hectares");
    }
    if (dt === "hts") {
      $(".drop").val("acre");
      $(".drop option:selected").text("Acres");
    }
  });

  $("#inp1").on("input", function () {
    dt = $(".drop1").val();
    dt = $(".drop1").val();

    if (dd == "sqinch") {
      var value1 = $("#inp1").val();
      let ans = value1 * 645.2;
      $("#go").val(ans);
    } else if (dd == "sqmillimeter") {
      var value1 = $("#inp1").val();
      let ans1 = value1 / 645.2;
      $("#go").val(ans1);
    } else if (dd === "sqfeet") {
      var value1 = $("#inp1").val();
      let ans2 = value1 / 10.764;
      $("#go").val(ans2);
    } else if (dd === "sqmeter") {
      var value1 = $("#inp1").val();
      let ans3 = value1 * 10.764;
      $("#go").val(ans3);
    } else if (dd === "sqyard") {
      var value1 = $("#inp1").val();
      let ans4 = value1 / 1.196;
      $("#go").val(ans4);
    } else if (dd === "sqmeter" && dt === "sqyard") {
      var value1 = $("#inp1").val();
      let ans3 = value1 * 1.196;
      $("#go").val(ans3);
    } else if (dd === "sqmiles") {
      var value1 = $("#inp1").val();
      let ans5 = value1 * 2.589;
      $("#go").val(ans5);
    } else if (dd === "sqkm") {
      var value1 = $("#inp1").val();
      let ans6 = value1 / 2.589;
      $("#go").val(ans6);
    } else if (dd === "acre") {
      var value1 = $("#inp1").val();
      let ans6 = value1 / 2.471;
      $("#go").val(ans6);
    } else if (dd === "hts") {
      var value1 = $("#inp1").val();
      let ans6 = value1 * 2.471;
      $("#go").val(ans6);
    }
  });
});
