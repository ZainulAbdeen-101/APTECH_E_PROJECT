//  $(document).ready(function(){

//     $("#k").click(function(){

//         var input1 = $("#inp1").val();
//         console.log(input1);
//     });

//  });

$(document).ready(function () {
  dd = $("#drop").val();
  dt = $("#drop1").val();

  $("#drop").change(function () {
    dd = $("#drop").val();
    dt = $("#drop1").val();
   
  });

  $("#drop1").change(function () {
    dd = $("#drop").val();
    dt = $("#drop1").val();
    console.log(dt);
  });

  $("#inp1").on("input", function () {
    if (dd == "inch" && dt == "millimeter") {
      var value1 = $("#inp1").val();
      let and = value1 * 25.4;
      $("#go").val(and);
    } else if (dd == "millimeter" && dt == "inch") {
      var value1 = $("#inp1").val();
      let and1 = value1 / 25.4;
      $("#go").val(and1);
    }
  });
});
