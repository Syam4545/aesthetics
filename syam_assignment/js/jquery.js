$(document).ready(function () {


    // -------width pixel-----------
    $("#W-px").change(function () {
        var wpx = $("#W-px").val();
        $("img").attr("width", wpx);
    });

    // ------height pixel-----------
    $("#H-px").change(function () {
        var hpx = $("#H-px").val();
        $("img").attr("height", hpx);
    });



    // ------width degree-----------
    $("#W-percent").change(function () {
        var wpercent = $("#W-percent").val();
        $("img").attr("width", wpercent);
    });


    // ------height degree-----------
    $("#H-percent").change(function () {
        var hpercent = $("#H-percent").val();
        $("img").attr("height", hpercent + "%");
    });


    $("#link1").change(function(){
        $("img").click(function(){
            var link = $("#link1").val();
            if($("#CKBX").is(":checked"))
            {
                window.open(link,"_blank");
            }

            else{
                $("a").attr("href",link);
            }

        })
    })
});