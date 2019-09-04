// đóng mở more
$("#conten-icon-right").click(function(){
    $("#action-menu").toggle();
})
// đóng mở sort
$("#conten-icon-main").click(function(){
    $("#menu-sort").toggle();
})
// đóng mở user menu
$("#open").click(function(){
    $("#user-list").toggle();
})
$("#name").click(function(){
    $("#user-list").toggle();
})
// đóng right
$("#right-close").click(function(){
    $("#right").hide();
})
// đóng mở left
$(".left-icon:first").click(function(){
    $("#left").toggleClass("class1");
})
// đóng mở account setting
$(".text-list:nth-child(3)").click(function(event){
    $("#wrapper").show();
    $("#newlst").hide();
    event.stopPropagation();
    $("#user-list").hide();
})
$("#text-done").click(function(){
    $("#wrapper").hide();
})
// đóng right click popup
$(document).click(function(e){
    var x = $("#popup");
    var y = $("#popup-complete");
    if (!x.is(e.target) && x.has(e.target).length === 0|!y.is(e.target) && y.has(e.target).length === 0)
    {
        x.hide();
        y.hide();
    }
})
// thêm task mới
$("#met").keydown(function(e){

    if(e.keyCode == 13)
    {
        $(".task").children("div#task1").html($("#met").val());
        var cln = $(".task").clone(true).appendTo("#list-add-task");
        cln.removeClass("task");
        cln.addClass("task1");

        function chuyentask(){
            var coclass=cln.hasClass("task-complete")
            if(coclass==true){

                cln.removeClass("task-complete")
                $("#list-add-task").append(cln);
            }
            else{
                $("#task-drop").append(cln);
                cln.addClass("task-complete");
            }
        }
        cln.find("input").click(chuyentask)
        cln.contextmenu(showpopup);
    }
})
// mở bên phải
$(".task1").each(function(){
    var a=$(this);

    function chuyentask(){
        var coclass=a.hasClass("task-complete")
        if(coclass==true){
            a.removeClass("task-complete")
            $("#list-add-task").append(a);
        }
        else{
            $("#task-drop").append(a);
            a.addClass("task-complete");
        }
    }
    $(this).find("input").click(chuyentask)
    $(this).contextmenu(showpopup);


    $(this).contextmenu(function(){
        $("#list-id").val(a.children("span").html());
    })
    $(this).click(function(){
        $("#rightip").val(a.children("#task1").html());
        $(".fake-right-tip").val(a.children("span").html());

    })
    $(this).mouseenter(function(){
        a.find(".auto-request").submit();

    })


})



function showpopup (event){
    var task = this ;
    event.preventDefault();
    var done = this.classList.contains("task-complete");
    if(done==true){
        $("#popup-complete").css({"left":event.pageX+"px","top":event.pageY+"px","display":"block"});
        $("popup").css("display","none")
    }
    else{
        $("#popup").css({"left":event.pageX+"px","top":event.pageY+"px","display":"block"});
        $("popup-complete").css("display","none")
    }

}
// đóng mở account setting
$(".tab-row:nth-child(1)").click(function(){
    $("#general-setting").css("display","block")
    $("#setting").css("display","none")
})
$(".tab-row:nth-child(2)").click(function(){
    $("#general-setting").css("display","none")
    $("#setting").css("display","block")
})
// thay đổi icon left
$("#head-left").find("input").click(function(){
    $(".left-icon:nth-child(3)").css("display","none");
    $(".left-icon:nth-child(4)").css("display","block");
})
$(".left-icon:nth-child(4)").click(function(){
    $(".left-icon:nth-child(4)").css("display","none");
    $(".left-icon:nth-child(3)").css("display","block");
})
// tạo list mới
$("#separator-input").keydown(function(e){

    if(e.keyCode == 13)
    {
        $(".left-tittle:nth-of-type(1)").html($("#separator-input").val());
        var cln = $(".left-list:nth-of-type(3)").clone(true).appendTo("#main-left");
        cln.addClass("left-list-style");
        $("#wrapper").css("display","none");
    }
})
//
$("#plus").click(function(){
    $("#wrapper").css("display","block");
    $("#newlst").css("display","block");
    $("#account").css("display","none");
})


$(".date_sumit").submit(function(){
    $(".fake-right-tip fake-input").submit();

})

$(".add-file").click(function(){
    $(".upload").click();
})
var id_user;
var a;
var id_task;
var status;
var id_sub_task;
var res;
var id_comment;
$(document).on("click", ".left-list-style", function(){
    a =$(this).find($('.fake')).html();
    $.get("request.php",{a:a},function(data){
        var str = data;
        res = JSON.parse('[' + str.replace(/}{/g, '},{') + ']');
        $('#list-add-task').empty();
        $('#task-drop').empty();

        for (i = 0;i < res.length; i++) {
            if (res[i].status =='no'){
                $('#list-add-task').append("<div class='task1 '><div class='check-box'><svg class='task-check' width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;'> <g> <path d='M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z' style='fill:none;stroke-width:1px'></path> </g> </svg></div><div id='task1' style='flex:1;padding:12px 0'>"+res[i].name+"</div><div style='fill:#b4b4b4;padding:12px'><svg width='18px' height='18px' viewBox='0 0 18 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'> <g> <path d='M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z'></path> </g> </svg></div><span class='fake'>"+res[i].id+"</span></div>");
            }

            if (res[i].status == 'yes'){
                $('#task-drop').append("<div class='task1 task-complete'><div class='check-box'><svg class='task-checked' width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;'> <g> <path d='M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004'></path> <path d='M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5'></path> </g> </svg></div><div id='task1' style='flex:1;padding:12px 0'>"+res[i].name+"</div><div style='fill:#b4b4b4;padding:12px'><svg width='18px' height='18px' viewBox='0 0 18 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'> <g> <path d='M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z'></path> </g> </svg></div><span class='fake'>"+res[i].id+"</span></div>");
            }
        }


    });

})

$(document).on("click", ".task1", function(){

    id_task = $(this).find($('.fake')).html();

    $("#right").css("display","flex");
    for (i = 0;i < res.length; i++) {
        if (res[i].id==id_task){
            $("#rightip").val(res[i].name);
            $("#date_task").val(res[i].date);
            $("#note").val(res[i].note);


        };


    }
    // show sub-task
    $.get("sub_task.php",{id_task:id_task},function(data){
        var str = data;
        var res = JSON.parse('[' + str.replace(/}{/g, '},{') + ']');
        $('#subtask-drop').empty();
        for (i = 0;i < res.length; i++) {
            if (res[i].status =='no'){
                $("#subtask-drop").append("<div class='sub-task'><div class='row-15 sub-task-checkbox'><input type='checkbox' ></div><div class='row-70'><input type='text' class='input-sub-task' value="+res[i].sub_name+" ></div><div class='row-15'><i class='fas fa-times sub-task-icon'></i></div><span class='fake'>"+res[i].id+"</span></div>")
            }
            if (res[i].status =='yes'){
                $("#subtask-drop").append("<div class='sub-task'><div class='row-15 sub-task-checkbox'><input type='checkbox' checked></div><div class='row-70'><input type='text' class='input-sub-task xong' value="+res[i].sub_name+" ></div><div class='row-15 d'><i class='fas fa-times sub-task-icon'></i></div><span class='fake'>"+res[i].id+"</span></div>")
            }

        }
    })
    //show file
    $.ajax({
        url : 'file.php',
        type : 'GET',
        data:{
            id_task:id_task
        }
    }).done(function(data){
        var str = data;
        var res = JSON.parse('[' + str.replace(/}{/g, '},{') + ']');
        $('#file-drop').empty();
        for (i = 0;i < res.length; i++) {
            $('#file-drop').append("<div class='file'><div class='file-icon'>jgp</div><form method='post' class='file-form' action='show.php'><input type='tex't value="+res[i]+" class=fake-input name=file_id><input type='submit' class='file-input' value="+res[i].link+"></form></div>")
        }
    })
    // show commnet
    $.ajax({
        url : 'comment.php',
        type : 'GET',
        data:{
            id_task:id_task
        }
    }).done(function(data){
        var str = data;
        var res = JSON.parse('[' + str.replace(/}{/g, '},{') + ']');
        $("#comment-drop").empty();
        for (i = 0;i < res.length; i++) {
            $("#comment-drop").append("<div class='cm'><div class='img_cm'><img src='mrd.png'></div><div class='cm_note'><div class='cm_title'>Mrd Nguyen</div><div>"+res[i].name+"</div></div><div class='close-cm'><i class='fas fa-times sub-task-icon'></i></div><span class='fake'>"+res[i].id+"</span></div>")
        }
    })
    if($("#note").val()!==''){
        $("#note").parents(".right-task").find('.right-icon').css("fill","orange");
    }
    else{
        $("#note").parents(".right-task").find('.right-icon').css("fill","#b3b3b2");
    }
    if($("#subtask-drop").text()!==''){
        $("#add_sub_task").parents(".right-task").find('.right-icon').css("fill","#67ae2b");
    }else{
        $("#add_sub_task").parents(".right-task").find('.right-icon').css("fill","#b3b3b2");
    }
    if($("#date_task").val()!==''){
        $("#date_task").parents(".right-task").find('.right-icon').css("fill","#63a6df");
    }
    else{
        $("#date_task").parents(".right-task").find('.right-icon').css("fill","#b3b3b2");
    }


    $(".task1").css("background-color","#ffffff");
    $(this).css("background-color","#e1f2fe"); 

    var tt=$(this).hasClass("task-complete");
    if (tt==true){
        status = 'no';
    }else{
        status = 'yes';
    }

    if (tt==true){
        $(".detail-check").css("display","none");
        $(".detail-checked").css("display","inline");
    }
    else{
        $(".detail-check").css("display","inline");
        $(".detail-checked").css("display","none");
    }

})


$(document).on("contextmenu", ".task1",function(event){
    id_task = $(this).find($('.fake')).html();
    event.preventDefault();
    var done = this.classList.contains("task-complete");
    if(done !=true){
        $("#popup").css({"left":event.pageX+"px","top":event.pageY+"px","display":"block"});
        $("#popup-complete").css("display","none");

    }
    else{

        $("#popup-complete").css({"left":event.pageX+"px","top":event.pageY+"px","display":"block"});
        $("#popup").css("display","none");
    }

})
//them task
$(document).on("keydown", "#met", function(e){
    if(e.keyCode == 13){
        var note = $('#met').val();

        e.preventDefault();
            $.ajax({
                url : 'add_task.php',
                type : 'GET',
                data:{
                    a:a,
                    new_task:note
                }
            }).done(function(data){
                var str = data;
                var res = JSON.parse('[' + str.replace(/}{/g, '},{') + ']');
                $('#list-add-task').empty();
                $('#task-drop').empty();

                for (i = 0;i < res.length; i++) {
                    if (res[i].status =='no'){
                        $('#list-add-task').append("<div class='task1 '><div class='check-box'><svg class='task-check' width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;'> <g> <path d='M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z' style='fill:none;stroke-width:1px'></path> </g> </svg></div><div id='task1' style='flex:1;padding:12px 0'>"+res[i].name+"</div><div style='fill:#b4b4b4;padding:12px'><svg width='18px' height='18px' viewBox='0 0 18 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'> <g> <path d='M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z'></path> </g> </svg></div><span class='fake'>"+res[i].id+"</span></div>");
                    }

                    if (res[i].status == 'yes'){
                        $('#task-drop').append("<div class='task1 task-complete'><div class='check-box'><svg class='task-checked' width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;'> <g> <path d='M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004'></path> <path d='M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5'></path> </g> </svg></div><div id='task1' style='flex:1;padding:12px 0'>"+res[i].name+"</div><div style='fill:#b4b4b4;padding:12px'><svg width='18px' height='18px' viewBox='0 0 18 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'> <g> <path d='M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z'></path> </g> </svg></div><span class='fake'>"+res[i].id+"</span></div>");
                    }
                }
            })
        $('#met').val('');
    }
})
$(document).on("click", "#delete", function(){
    $.ajax({
        url : 'delete_task.php',
        type : 'GET',
        data:{
            a:a,
            id_task:id_task
        }
    }).done(function(data){
        var str = data;
        var res = JSON.parse('[' + str.replace(/}{/g, '},{') + ']');
        $('#list-add-task').empty();
        $('#task-drop').empty();

        for (i = 0;i < res.length; i++) {
            if (res[i].status =='no'){
                $('#list-add-task').append("<div class='task1 '><div class='check-box'><svg class='task-check' width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;'> <g> <path d='M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z' style='fill:none;stroke-width:1px'></path> </g> </svg></div><div id='task1' style='flex:1;padding:12px 0'>"+res[i].name+"</div><div style='fill:#b4b4b4;padding:12px'><svg width='18px' height='18px' viewBox='0 0 18 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'> <g> <path d='M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z'></path> </g> </svg></div><span class='fake'>"+res[i].id+"</span></div>");
            }

            if (res[i].status == 'yes'){
                $('#task-drop').append("<div class='task1 task-complete'><div class='check-box'><svg class='task-checked' width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;'> <g> <path d='M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004'></path> <path d='M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5'></path> </g> </svg></div><div id='task1' style='flex:1;padding:12px 0'>"+res[i].name+"</div><div style='fill:#b4b4b4;padding:12px'><svg width='18px' height='18px' viewBox='0 0 18 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'> <g> <path d='M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z'></path> </g> </svg></div><span class='fake'>"+res[i].id+"</span></div>");
            }
        }
    })
})
$(document).on("click", ".check-box", function(){
    var tt=$(this).parents(".task1").hasClass("task-complete");
    if (tt==true){
        status = 'no';
    }else{
        status = 'yes';
    }
    id_task = $(this).parents(".task1").find($('.fake')).html();
    $.ajax({
        url : 'change_status.php',
        type : 'GET',
        data:{
            a:a,
            id_task:id_task,
            status:status
        }
    }).done(function(data){
        var str = data;
        var res = JSON.parse('[' + str.replace(/}{/g, '},{') + ']');
        $('#list-add-task').empty();
        $('#task-drop').empty();

        for (i = 0;i < res.length; i++) {
            if (res[i].status =='no'){
                $('#list-add-task').append("<div class='task1 '><div class='check-box'><svg class='task-check' width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;'> <g> <path d='M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z' style='fill:none;stroke-width:1px'></path> </g> </svg></div><div id='task1' style='flex:1;padding:12px 0'>"+res[i].name+"</div><div style='fill:#b4b4b4;padding:12px'><svg width='18px' height='18px' viewBox='0 0 18 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'> <g> <path d='M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z'></path> </g> </svg></div><span class='fake'>"+res[i].id+"</span></div>");
            }

            if (res[i].status == 'yes'){
                $('#task-drop').append("<div class='task1 task-complete'><div class='check-box'><svg class='task-checked' width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;'> <g> <path d='M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004'></path> <path d='M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5'></path> </g> </svg></div><div id='task1' style='flex:1;padding:12px 0'>"+res[i].name+"</div><div style='fill:#b4b4b4;padding:12px'><svg width='18px' height='18px' viewBox='0 0 18 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'> <g> <path d='M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z'></path> </g> </svg></div><span class='fake'>"+res[i].id+"</span></div>");
            }
        }
    })
})
$(document).on("keydown", "#add_sub_task", function(e){
    if(e.keyCode == 13){
        var note = $('#add_sub_task').val();
        $.ajax({
            url : 'add_sub_task.php',
            type : 'GET',
            data:{
                id_task:id_task,
                name_sub_task:note
            }
        }).done(function(data){
            var str = data;
            var res = JSON.parse('[' + str.replace(/}{/g, '},{') + ']');
            $('#subtask-drop').empty();
            for (i = 0;i < res.length; i++) {
                if (res[i].status =='no'){
                    $("#subtask-drop").append("<div class='sub-task'><div class='row-15 sub-task-checkbox'><input type='checkbox' ></div><div class='row-70'><input type='text' class='input-sub-task' value="+res[i].sub_name+" ></div><div class='row-15 d'><i class='fas fa-times sub-task-icon'></i></div><span class='fake'>"+res[i].id+"</span></div>")
                }
                if (res[i].status =='yes'){
                    $("#subtask-drop").append("<div class='sub-task'><div class='row-15 sub-task-checkbox'><input type='checkbox' checked></div><div class='row-70'><input type='text' class='input-sub-task xong' value="+res[i].sub_name+" ></div><div class='row-15 d'><i class='fas fa-times sub-task-icon'></i></div><span class='fake'>"+res[i].id+"</span></div>")
                }

            }
        })
        $('#add_sub_task').val('');
    }
})
$(document).on("keydown", "#rightip", function(e){
    if(e.keyCode == 13){
        var note = $('#rightip').val();

        $.ajax({
            url : 'change_task_name.php',
            type : 'GET',
            data:{
                a:a,
                id_task:id_task,
                name_task:note
            }
        }).done(function(data){
            var str = data;
            var res = JSON.parse('[' + str.replace(/}{/g, '},{') + ']');
            $('#list-add-task').empty();
            $('#task-drop').empty();

            for (i = 0;i < res.length; i++) {
                if (res[i].status =='no'){
                    $('#list-add-task').append("<div class='task1 '><div class='check-box'><svg class='task-check' width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;'> <g> <path d='M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z' style='fill:none;stroke-width:1px'></path> </g> </svg></div><div id='task1' style='flex:1;padding:12px 0'>"+res[i].name+"</div><div style='fill:#b4b4b4;padding:12px'><svg width='18px' height='18px' viewBox='0 0 18 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'> <g> <path d='M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z'></path> </g> </svg></div><span class='fake'>"+res[i].id+"</span></div>");
                }

                if (res[i].status == 'yes'){
                    $('#task-drop').append("<div class='task1 task-complete'><div class='check-box'><svg class='task-checked' width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;'> <g> <path d='M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004'></path> <path d='M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5'></path> </g> </svg></div><div id='task1' style='flex:1;padding:12px 0'>"+res[i].name+"</div><div style='fill:#b4b4b4;padding:12px'><svg width='18px' height='18px' viewBox='0 0 18 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'> <g> <path d='M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z'></path> </g> </svg></div><span class='fake'>"+res[i].id+"</span></div>");
                }
            }
        })

    }
})

//xóa sub_task
$(document).on("click", ".d", function(){
    id_sub_task = $(this).parents(".sub-task").find($('.fake')).html();
    $.ajax({
        url : 'delete_sub_task.php',
        type : 'GET',
        data:{
            id_task:id_task,
            id:id_sub_task
        }
    }).done(function(data){
        var str = data;
        var res = JSON.parse('[' + str.replace(/}{/g, '},{') + ']');
        $('#subtask-drop').empty();
        for (i = 0;i < res.length; i++) {
            if (res[i].status =='no'){
                $("#subtask-drop").append("<div class='sub-task'><div class='row-15 sub-task-checkbox'><input type='checkbox' ></div><div class='row-70'><input type='text' class='input-sub-task' value="+res[i].sub_name+" ></div><div class='row-15 d'><i class='fas fa-times sub-task-icon'></i></div><span class='fake'>"+res[i].id+"</span></div>")
            }
            if (res[i].status =='yes'){
                $("#subtask-drop").append("<div class='sub-task'><div class='row-15 sub-task-checkbox'><input type='checkbox' checked></div><div class='row-70'><input type='text' class='input-sub-task xong' value="+res[i].sub_name+" ></div><div class='row-15 d'><i class='fas fa-times sub-task-icon'></i></div><span class='fake'>"+res[i].id+"</span></div>")
            }

        }
    })


})
//đổi tên sub task
$(document).on("keydown", ".input-sub-task", function(e){
    var x = $(this).val();
    id_sub_task = $(this).parents(".sub-task").find($('.fake')).html();
    if(e.keyCode == 13){
        $.ajax({
            url : 'change_name_sub_task.php',
            type : 'GET',
            data:{
                id_task:id_task,
                name:x,
                id:id_sub_task
            }
        }).done(function(data){
            var str = data;
            var res = JSON.parse('[' + str.replace(/}{/g, '},{') + ']');
            $('#subtask-drop').empty();
            for (i = 0;i < res.length; i++) {
                if (res[i].status =='no'){
                    $("#subtask-drop").append("<div class='sub-task'><div class='row-15 sub-task-checkbox'><input type='checkbox' ></div><div class='row-70'><input type='text' class='input-sub-task' value="+res[i].sub_name+" ></div><div class='row-15 d'><i class='fas fa-times sub-task-icon'></i></div><span class='fake'>"+res[i].id+"</span></div>")
                }
                if (res[i].status =='yes'){
                    $("#subtask-drop").append("<div class='sub-task'><div class='row-15 sub-task-checkbox'><input type='checkbox' checked></div><div class='row-70'><input type='text' class='input-sub-task xong' value="+res[i].sub_name+" ></div><div class='row-15 d'><i class='fas fa-times sub-task-icon'></i></div><span class='fake'>"+res[i].id+"</span></div>")
                }
            }
        })
    }
})
//update date
$(document).on("change", "#date_task", function(){
    var x = $(this).val();

    $.ajax({
        url : 'update_date.php',
        type : 'GET',
        data:{
            id_task:id_task,
            date:x,
        }
    }).done(function(data){
        var str = data;
        var res = JSON.parse('[' + str.replace(/}{/g, '},{') + ']');

        $("#date_task").val(res[i].date);


    })

})
//change status sub task
var sub;
$(document).on("click",".row-15.sub-task-checkbox", function(){
    id_sub_task = $(this).parents(".sub-task").find($('.fake')).html();
    var x = $(this).find('input[type=checkbox]').prop('checked')
    if(x==true){
        sub = 'yes';
    }else{
        sub= 'no';
    }

    $.ajax({
        url : 'change_sub_task_status.php',
        type : 'GET',
        data:{
            sub:sub,
            id_task:id_task,
            id:id_sub_task
        }
    }).done(function(data){
        var str = data;
        var res = JSON.parse('[' + str.replace(/}{/g, '},{') + ']');
        $('#subtask-drop').empty();
        for (i = 0;i < res.length; i++) {
            if (res[i].status =='no'){
                $("#subtask-drop").append("<div class='sub-task'><div class='row-15 sub-task-checkbox'><input type='checkbox' ></div><div class='row-70'><input type='text' class='input-sub-task' value="+res[i].sub_name+" ></div><div class='row-15 d'><i class='fas fa-times sub-task-icon'></i></div><span class='fake'>"+res[i].id+"</span></div>")
            }
            if (res[i].status =='yes'){
                $("#subtask-drop").append("<div class='sub-task'><div class='row-15 sub-task-checkbox'><input type='checkbox' checked></div><div class='row-70'><input type='text' class='input-sub-task xong' value="+res[i].sub_name+" ></div><div class='row-15 d'><i class='fas fa-times sub-task-icon'></i></div><span class='fake'>"+res[i].id+"</span></div>")
            }
        }
    })

})
$(document).on("keydown",".comment-me", function(e){
    var x = $(this).val();
    if(e.keyCode == 13){
        $.ajax({
            url : 'add-comment.php',
            type : 'GET',
            data:{
                id_task:id_task,
                comment:x
            }
        }).done(function(data){
            var str = data;
            var res = JSON.parse('[' + str.replace(/}{/g, '},{') + ']');
            $("#comment-drop").empty();
            for (i = 0;i < res.length; i++) {
                $("#comment-drop").append("<div class='cm'><div class='img_cm'><img src='mrd.png'></div><div class='cm_note'><div class='cm_title'>Mrd Nguyen</div><div>"+res[i].name+"</div></div><div class='close-cm'><i class='fas fa-times sub-task-icon'></i></div><span class='fake'>"+res[i].id+"</span></div>")
            }
        })

    }
})
$(document).on("click",".close-cm", function(){
    id_comment = $(this).parents(".cm").find($('.fake')).html();
    $.ajax({
        url : 'delete_comment.php',
        type : 'GET',
        data:{
            id_task:id_task,
            id_comment:id_comment
        }
    }).done(function(data){
        var str = data;
        var res = JSON.parse('[' + str.replace(/}{/g, '},{') + ']');
        $("#comment-drop").empty();
        for (i = 0;i < res.length; i++) {
            $("#comment-drop").append("<div class='cm'><div class='img_cm'><img src='mrd.png'></div><div class='cm_note'><div class='cm_title'>Mrd Nguyen</div><div>"+res[i].name+"</div></div><div class='close-cm'><i class='fas fa-times sub-task-icon'></i></div><span class='fake'>"+res[i].id+"</span></div>")
        }
    })
})

$(document).on("click",".cancel", function(){
    $("#wrapper").hide();
})

$(document).on("click",".save", function(){
    var text=$(".separator-input").val();
    id_user = $("#name").find($('.fake')).html();
    $.ajax({
        url : 'add_list.php',
        type : 'GET',
        data:{
            id_user:id_user,
            list_name:text
        }
    }).done(function(data){
        var str = data;
        var res = JSON.parse('[' + str.replace(/}{/g, '},{') + ']');
        $("#list-drop").empty();
        for (i = 0;i < res.length; i++) {
            $("#list-drop").append("<a class='left-list-style'><div class='list-icon'><svg class='list rtl-flip' width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <g id='Web-svgs' stroke='none' stroke-width='1' fill-rule='evenodd'> <g id='list'> <path d='M3,7 C2.44,7 2,6.56 2,6 L2,5 C2,4.44 2.44,4 3,4 L4,4 C4.56,4 5,4.44 5,5 L5,6 C5,6.56 4.56,7 4,7 L3,7 Z M4,5 L3,5 L3,6 L4,6 L4,5 Z M7.5,6 C7.22,6 7,5.78 7,5.5 C7,5.22 7.22,5 7.5,5 L17.5,5 C17.78,5 18,5.22 18,5.5 C18,5.78 17.78,6 17.5,6 L7.5,6 Z M3,12 C2.44,12 2,11.56 2,11 L2,10 C2,9.44 2.44,9 3,9 L4,9 C4.56,9 5,9.44 5,10 L5,11 C5,11.56 4.56,12 4,12 L3,12 Z M4,10 L3,10 L3,11 L4,11 L4,10 Z M7.5,11 C7.22,11 7,10.78 7,10.5 C7,10.22 7.22,10 7.5,10 L17.5,10 C17.78,10 18,10.22 18,10.5 C18,10.78 17.78,11 17.5,11 L7.5,11 Z M3,17 C2.44,17 2,16.56 2,16 L2,15 C2,14.44 2.44,14 3,14 L4,14 C4.56,14 5,14.44 5,15 L5,16 C5,16.56 4.56,17 4,17 L3,17 Z M4,15 L3,15 L3,16 L4,16 L4,15 Z M7.5,16 C7.22,16 7,15.78 7,15.5 C7,15.22 7.22,15 7.5,15 L17.5,15 C17.78,15 18,15.22 18,15.5 C18,15.78 17.78,16 17.5,16 L7.5,16 Z' id='K'> </path> </g> </g> </svg></div><span class='left-tittle'>"+res[i].name+"</span><span class=fake>"+res[i].id+"</span></a>")
        }

    })
})

//reponsive
$(window).resize(function(){
    var x = window.matchMedia("(max-width: 700px)")
    if(x.matches){
        $("#left").addClass("class1");
    }
    else{
        $("#left").removeClass("class1");
    }
})

$(document).on("click","h2",function(){
    $("#task-drop").toggle();
})

$(document).on("click",".detail-check",function(){
    $(".detail-checked").css("display","inline");
    $(this).css("display","none");
})

$(document).on("click",".detail-checked",function(){
    $(".detail-check").css("display","inline");
    $(this).css("display","none");
})

$(document).on("click",".xxx",function(){
    $.ajax({
        url : 'change_status.php',
        type : 'GET',
        data:{
            a:a,
            id_task:id_task,
            status:status
        }
    }).done(function(data){
        var str = data;
        var res = JSON.parse('[' + str.replace(/}{/g, '},{') + ']');
        $('#list-add-task').empty();
        $('#task-drop').empty();
        console.log(status);

        for (i = 0;i < res.length; i++) {
            if (res[i].status =='no'){
                $('#list-add-task').append("<div class='task1 '><div class='check-box'><svg class='task-check' width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;'> <g> <path d='M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z' style='fill:none;stroke-width:1px'></path> </g> </svg></div><div id='task1' style='flex:1;padding:12px 0'>"+res[i].name+"</div><div style='fill:#b4b4b4;padding:12px'><svg width='18px' height='18px' viewBox='0 0 18 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'> <g> <path d='M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z'></path> </g> </svg></div><span class='fake'>"+res[i].id+"</span></div>");
            }

            if (res[i].status == 'yes'){
                $('#task-drop').append("<div class='task1 task-complete'><div class='check-box'><svg class='task-checked' width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;'> <g> <path d='M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004'></path> <path d='M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5'></path> </g> </svg></div><div id='task1' style='flex:1;padding:12px 0'>"+res[i].name+"</div><div style='fill:#b4b4b4;padding:12px'><svg width='18px' height='18px' viewBox='0 0 18 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'> <g> <path d='M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z'></path> </g> </svg></div><span class='fake'>"+res[i].id+"</span></div>");
            }


        }

        
    })
})