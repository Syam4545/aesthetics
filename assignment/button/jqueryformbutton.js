$(document).ready(function () {
  $("#btn1").click(function () {
    var name = $("#name").val();
    var pwd = $("#pwd").val();
    var email = $("#email").val();
    var rd1 = $("#rd1").is(":checked");
    var rd2 = $("#rd2").is(":checked");
    var rd3 = $("#rd3").is(":checked");
    var ckbx1 = $("#ckbx1").is(":checked");
    var ckbx2 = $("#ckbx2").is(":checked");
    var ckbx3 = $("#ckbx3").is(":checked");

    $(".errorckbx").html("");
    $(".errorname").html("");
    $(".errorpwd").html("");
    $(".errormail").html("");
    $(".errorrd").html("");

    if (name == "") {
      $(".errorname").html("plz enter username");
    }

    if (pwd == "") {
      $(".errorpwd").html("plz enter password");
    }

    if (email == "") {
      $(".errormail").html("plz enter Mail ID");
    }

    if (!rd1 && !rd2 && !rd3) {
      $(".errorrd").html("plz select Gender");
    }

    if (!ckbx1 && !ckbx2 && !ckbx3) {
      $(".errorckbx").html("plz select any interests");
    }
  });
});
