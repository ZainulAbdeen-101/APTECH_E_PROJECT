$(document).ready(function () {
    dd = $(".drop").val();
   
    dt = $(".drop1").val();
  
    setInterval(function () {
      $(".drop").change(function () {
        dd = $(".drop").val();
        dt = $(".drop1").val();
        if(dd==="flounce"){
            $(".drop1").val("millimeter");
            $(".drop1 option:selected").text("Millimeter"); 
        }
        if (dd === "millimeter") {
          $(".drop1").val("flounce");
          $(".drop1 option:selected").text("FLuid Ounce"); 
        }
        if (dd == "gl") {
          $(".drop1").val("ltr");
          $(".drop1 option:selected").text("Liters");
        }
  
        if (dd === "ltr") {
          $(".drop1").val("gl");
          $(".drop1 option:selected").text("Gallon");
        }
  
        if (dd == "cbfeet") {
          $(".drop1").val("cbmeter");
          $(".drop1 option:selected").text("Cubic Meter");
        }
  
        if (dd === "cbmeter") {
            $(".drop1").val("cbfeet");
            $(".drop1 option:selected").text("Cubic Feet");
        }
        if (dd === "km") {
            $(".drop1").val("miles");
            $(".drop1 option:selected").text("Miles");
        }
        if (dd === "cbyard") {
          $(".drop1").val("cbmeter");
          $(".drop1 option:selected").text("Cubic Meter");
        }
      });
    
     
  
  
      })
    }),
    setInterval(function(){
      $(".drop1").change(function () {
        
        dd = $(".drop").val();
        dt = $(".drop1").val();
        
  
        if(dt==="flounce"){
          $(".drop").val("millimeter");
          $(".drop option:selected").text("Millimeter");
        }
        if(dt==="ltr"){
          $(".drop").val("gl");
          $(".drop option:selected").text("Gallon");
        }
       if(dt==="gl"){
        $(".drop").val("ltr");
        $(".drop option:selected").text("Liters");
      }
      if(dt==="cbfeet"){
        $(".drop").val("cbmeter");
        $(".drop option:selected").text("Cubic Meter");
      }
      
       if(dt==="cbmeter"){
       $(".drop").val("cbfeet");
       $(".drop option:selected").text("Cubic Feet");
     }
    
     if(dt==="cbyard"){
      $(".drop").val("cbmeter");
      $(".drop option:selected").text("Cubic Meter");
     }
      })
  
  
  
      $("#inp1").on("input", function () {
        dt = $(".drop1").val();
        dt = $(".drop1").val();
  
        if (dd == "flounce") {
          var value1 = $("#inp1").val();
          let ans = value1 * 29.574;
          $("#go").val(ans);
        } else if (dd == "millimeter") {
          var value1 = $("#inp1").val();
          let ans1 = value1 / 29.574;
          $("#go").val(ans1);
        } else if (dd === "gl") {
          var value1 = $("#inp1").val();
          let ans2 = value1 * 3.785;
          $("#go").val(ans2);
        } else if (dd === "ltr") {
          var value1 = $("#inp1").val();
          let ans3 = value1 /3.785;
          $("#go").val(ans3);
        } else if (dd === "cbfeet") {
          var value1 = $("#inp1").val();
          let ans4 = value1 /35.315 ;
          $("#go").val(ans4);
        }
        else if (dd==="cbmeter"){
          var value1 = $("#inp1").val();
          let ans5 = value1 *35.315;
          $("#go").val(ans5);
        }else if(dd==="cbyard"){
          var value1 = $("#inp1").val();
          let ans6= value1 / 1.308;
          $("#go").val(ans6);
        }
         if(dt=="cbyard"){
            var value1 = $("#inp1").val();
            let ans7= value1 * 1.308;
            $("#go").val(ans7);
        }
      });
  });