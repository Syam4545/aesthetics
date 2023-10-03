
//click to hide
$(document).ready(function(){
$(".p1").click (function(){
    $(this).hide();
});

$("#p2").click (function(){
    $(this).hide();
});
});

//hide button and show button
$(document).ready(function(){
    $("#hide").click(function(){
      $(".p3").hide();
    });
    $("#show").click(function(){
      $(".p3").show();
    });
  });

//double click to hide

  $(document).ready(function(){
    $(".p4").dblclick(function(){
      $(this).hide();
    });
  });

  //mouse hover to hide

  $(document).ready(function(){
    $(".p5").mouseenter(function(){
      $(".p5").hide();
  });
  $("#show1").click(function(){
    $(".p5").show();
  });
  });

//on
  $(document).ready(function(){
    $(".p6").on({
      mouseenter: function(){
        $(this).css("background-color", "lightgray");
      },  
      mouseleave: function(){
        $(this).css("background-color", "lightblue");
      }, 
      click: function(){
        $(this).css("background-color", "yellow");
      }  
    });
  });
 

  //slow - fast
  $(document).ready(function(){
    $("#btn1").click(function(){
      $(".p7").hide(1000);
    }); 
  });
