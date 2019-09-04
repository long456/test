// click more
var x = document.getElementById("conten-icon-right");
function show() {
    var y = document.getElementById("action-menu");

    if (y.style.display == "block") {           
        y.style.display = "none";
    } else {
        y.style.display = "block";       
    }
}
x.addEventListener("click",show);
// click sort
var z = document.getElementById("conten-icon-main");
function show1() {
    var y = document.getElementById("menu-sort");

    if (y.style.display == "block") {           
        y.style.display = "none";
    } else {
        y.style.display = "block";       
    }
}
z.addEventListener("click",show1);
// mo user setting
var h = document.getElementById("open");
function show2() {
    var y = document.getElementById("user-list")
    if (y.style.display == "block") {           
        y.style.display = "none";
    } else {
        y.style.display = "block";       
    }
}
h.addEventListener("click",show2);
// mo ben phai
function rightopen(){
    var y =document.getElementById("right");
    y.style.display='flex';
}

// dong ben phai
function rightclose(){
    var y =document.getElementById("right");
    y.style.display='none';
}
var close = document.getElementById("right-close");
close.addEventListener("click",rightclose);
// dong mo ben trai
function close_lelft (){
    var left = document.getElementById("left");
    left.classList.toggle('class1');
}
var left = document.getElementsByClassName("left-icon")[0];
left.addEventListener("click",close_lelft);

// đóng mở account setting
var acc = document.getElementsByClassName("text-list");
function open_acc(event){
    var x = document.getElementById("wrapper");
    x.style.display = "block";
    var z=document.getElementById("newlst");
    z.style.display="none"
    var y = document.getElementById("user-list");
    event.stopPropagation();
    y.style.display = "none"; 
}
acc[2].addEventListener("click",open_acc);

var dong =document.getElementById("text-done");
function close_acc(){
    var x = document.getElementById("wrapper");
    x.style.display="none";
}
dong.addEventListener("click",close_acc);
// đóng right click popup
var hideMe = document.getElementById('popup');
var hideMe1 = document.getElementById('popup-complete');
document.onclick = function(e){
    if(e.target.id != 'popup' | e.target.id != 'popup-complete'){
        hideMe.style.display = 'none';
        hideMe1.style.display = 'none';
    }
};

// thêm task mới 
function myFunction(event) {
    if (event.keyCode == 13) {
       event.preventDefault();
       var itm = document.getElementById("task");
       var cln = itm.cloneNode(true);
       document.getElementById("list-add-task").appendChild(cln);
       cln.classList.add("task");
       
       cln.addEventListener("click",function(){
       var y = cln.childNodes[3];  
       document.getElementById("rightip").placeholder = y.innerHTML;
       })
       cln.addEventListener("click",rightopen);
       
       cln.addEventListener('contextmenu',showpopup); 
       
       var z = cln.getElementsByTagName("input")[0];
       z.addEventListener("click",function(){
           var done =cln.classList.contains("task-complete");
           if(done==true){              
               cln.classList.remove("task-complete");
               document.getElementById("list-add-task").appendChild(cln);
            }
            else{
               document.getElementById("task-drop").appendChild(cln);
               cln.classList.add("task-complete");
            }
        })
    }
    var x = document.getElementById("met").value;
    var y = document.getElementById("task1");
    y.innerHTML = x;  
}

    
    
// right click popup
function showpopup(event) {
    var task =this;
    event.preventDefault();
    var x = event.pageX;
    var y = event.pageY;
    var done = this.classList.contains("task-complete");
    if(done==true){
        document.getElementById("popup-complete").style.left = x+"px";
        document.getElementById("popup-complete").style.top = y+"px";
        document.getElementById("popup-complete").style.display="block";
        document.getElementById("popup").style.display="none";
    }
    else{
        document.getElementById("popup").style.left = x+"px";
        document.getElementById("popup").style.top = y+"px";
        document.getElementById("popup").style.display="block";
        document.getElementById("popup-complete").style.display="none";
    }

    var del = document.getElementsByClassName("context-menu");
       del[10].addEventListener("click",function(){    
        task.parentNode.removeChild(task);
        })
       del[15].addEventListener("click",function(){       
        task.parentNode.removeChild(task);
        })

}

// thay đổi icon left 
var left= document.getElementById("head-left");
var icon= left.getElementsByTagName("input");
var click = document.getElementsByClassName("left-icon");
icon[0].addEventListener('click',function(){
    click[1].style.display="none";
    click[2].style.display="block";
})
click[2].addEventListener('click',function(){
    click[2].style.display="none";
    click[1].style.display="block";
})

//close-open account setting tab
var tab = document.getElementsByClassName('tab-row');
function general (){
    var x = document.getElementById("general-setting");
    x.style.display="block";
    var y = document.getElementById("setting");
    y.style.display="none";
}
function account (){
    var x = document.getElementById("general-setting");
    x.style.display="none";
    var y = document.getElementById("setting");
    y.style.display="block";
}
tab[0].addEventListener("click",general)
tab[1].addEventListener("click",account)

// add new list
function addnewlist(event) {
    if (event.keyCode == 13) {
       event.preventDefault();
      var itm = document.getElementsByClassName("left-list");
      var cln = itm[1].cloneNode(true);
      document.getElementById("main-left").appendChild(cln);
      cln.classList.add("left-list-style");
      document.getElementById("wrapper").style.display = "none";
    }
    var x = document.getElementById("separator-input").value;
    var y = document.getElementsByClassName("left-tittle");
    y[1].innerHTML = x;  
    
}
// open add new list 
var plus = document.getElementById("plus");
plus.addEventListener('click',function(){
    var x=document.getElementById("wrapper");
    x.style.display="block"
    var y=document.getElementById("newlst");
    y.style.display="block"
    var z=document.getElementById("account");
    z.style.display="none"
})
var add_list = document.getElementsByClassName("creat-btn");
add_list[1].addEventListener("click",function(){
    var itm = document.getElementsByClassName("left-list");
    var cln = itm[1].cloneNode(true);
    document.getElementById("main-left").appendChild(cln);
    cln.classList.add("left-list-style");
    var x = document.getElementById("separator-input").value;
    var y = document.getElementsByClassName("left-tittle");
    y[1].innerHTML = x;  
    document.getElementById("wrapper").style.display = "none";
});
function winFunction(w) {
    if (w.matches) { 
        document.getElementById("left").classList.add('class1');
    } else {
        document.getElementById("left").classList.remove('class1');
    }
}
var w = window.matchMedia("(max-width: 700px)")
winFunction(w) 
w.addListener(winFunction)

