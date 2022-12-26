$(document).ready(function () {
    dd = $(".drop").val();
   
    dt = $(".drop1").val();
  
    setInterval(function () {
      $(".drop").change(function () {
        dd = $(".drop").val();
        dt = $(".drop1").val();
        if (dd === "ounce") {
          $(".drop1").val("gram");
          $(".drop1 option:selected").text("Gram"); 
        }
        if (dd == "gram") {
          $(".drop1").val("ounce");
          $(".drop1 option:selected").text("Ounce");
        }
  
        if (dd === "pound") {
          $(".drop1").val("kg");
          $(".drop1 option:selected").text("Kilogram");
        }
  
        if (dd == "kg") {
          $(".drop1").val("pound");
          $(".drop1 option:selected").text("Pound");
        }
  
        if (dd === "shton") {
          $(".drop1").val("mgGram");
          $(".drop1 option:selected").text("Mega Grams");
        }
        if (dd === "mgGram") {
          $(".drop1").val("shton");
          $(".drop1 option:selected").text("Short Tons");
        }
      
      });
    
     
  
  
      })
    }),
    setInterval(function(){
      $(".drop1").change(function () {
        
        dd = $(".drop").val();
        dt = $(".drop1").val();
        
  
        if(dt==="ounce"){
          $(".drop").val("gram");
          $(".drop option:selected").text("Grams");
        }
        if(dt==="gram"){
          $(".drop").val("ounce");
          $(".drop option:selected").text("Ounce");
        }
       if(dt==="kg"){
        $(".drop").val("pound");
        $(".drop option:selected").text("Pound");
      }
      if(dt==="pound"){
        $(".drop").val("kg");
        $(".drop option:selected").text("Kilogram");
      }
      
       if(dt==="mgGram"){
       $(".drop").val("shton");
       $(".drop option:selected").text("Short Tons");
     }
     if(dt==="shton"){
  
       $(".drop").val("mgGram");
         $(".drop option:selected").text("Mega Grams");
     }
     
      })
  
  
  
      $("#inp1").on("input", function () {
        dt = $(".drop1").val();
        dt = $(".drop1").val();
  
        if (dd == "ounce") {
          var value1 = $("#inp1").val();
          let ans = value1 * 28.35;
          $("#go").val(ans);
        } else if (dd == "gram") {
          var value1 = $("#inp1").val();
          let ans1 = value1 / 28.35;
          $("#go").val(ans1);
        } else if (dd === "pound") {
          var value1 = $("#inp1").val();
          let ans2 = value1 / 2.205;
          $("#go").val(ans2);
        } else if (dd === "kg") {
          var value1 = $("#inp1").val();
          let ans3 = value1 * 2.205;
          $("#go").val(ans3);
        } else if (dd === "shton") {
          var value1 = $("#inp1").val();
          let ans4 = value1 / 1.102;
          $("#go").val(ans4);
        }
        else if (dd==="mgGram"){
          var value1 = $("#inp1").val();
          let ans5 = value1 * 1.102;
          $("#go").val(ans5);
        }
      });
  });
  