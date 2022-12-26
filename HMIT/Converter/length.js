$(document).ready(function () {
  dd = $(".drop").val();
 
  dt = $(".drop1").val();

  setInterval(function () {
    $(".drop").change(function () {
      dd = $(".drop").val();
      dt = $(".drop1").val();
      if (dd === "millimeter") {
        $(".drop1").val("inch");
        $(".drop1 option:selected").text("inch"); 
      }
      if (dd == "inch") {
        $(".drop1").val("millimeter");
        $(".drop1 option:selected").text("millimeter");
      }

      if (dd === "feet") {
        $(".drop1").val("meter");
        $(".drop1 option:selected").text("Meter");
      }

      if (dd == "meter") {
        $(".drop1").val("feet");
        $(".drop1 option:selected").text("Feet");
      }

      if (dd === "yard") {
        $(".drop1").val("meter");
        $(".drop1 option:selected").text("Meter");
      }
      if (dd === "miles") {
        $(".drop1").val("km");
        $(".drop1 option:selected").text("kilometer");
      }
      if (dd === "km") {
        $(".drop1").val("miles");
        $(".drop1 option:selected").text("Miles");
      }
    });
  
   


    })
  }),
  setInterval(function(){
    $(".drop1").change(function () {
      
      dd = $(".drop").val();
      dt = $(".drop1").val();
      

      if(dt==="millimeter"){
        $(".drop").val("inch");
        $(".drop option:selected").text("inch");
      }
      if(dt==="inch"){
        $(".drop").val("millimeter");
        $(".drop option:selected").text("millimeter");
      }
     if(dt==="km"){
      $(".drop").val("miles");
      $(".drop option:selected").text("miles");
    }
    if(dt==="miles"){
      $(".drop").val("km");
      $(".drop option:selected").text("Kilometer");
    }
    
     if(dt==="meter"){
     $(".drop").val("feet");
     $(".drop option:selected").text("Feet");
   }
   if(dt==="feet"){

     $(".drop").val("meter");
       $(".drop option:selected").text("Meter");
   }
   if(dt==="yard"){
    $(".drop").val("meter");
    $(".drop option:selected").text("Meter");
   }
    })



    $("#inp1").on("input", function () {
      dt = $(".drop1").val();
      dt = $(".drop1").val();

      if (dd == "inch") {
        var value1 = $("#inp1").val();
        let ans = value1 * 25.4;
        $("#go").val(ans);
      } else if (dd == "millimeter") {
        var value1 = $("#inp1").val();
        let ans1 = value1 / 25.4;
        $("#go").val(ans1);
      } else if (dd === "feet") {
        var value1 = $("#inp1").val();
        let ans2 = value1 / 3.281;
        $("#go").val(ans2);
      } else if (dd === "meter") {
        var value1 = $("#inp1").val();
        let ans3 = value1 * 3.281;
        $("#go").val(ans3);
      } else if (dd === "yard") {
        var value1 = $("#inp1").val();
        let ans4 = value1 * 1.094;
        $("#go").val(ans4);
      }
      else if (dd==="miles"){
        var value1 = $("#inp1").val();
        let ans5 = value1 * 1.6;
        $("#go").val(ans5);
      }else if(dd==="km"){
        var value1 = $("#inp1").val();
        let ans6= value1 / 1.6;
        $("#go").val(ans6);
      }
    });
});
