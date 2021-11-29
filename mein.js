let bloc = document.getElementById('one');
//clik bolganda
bloc.onclick = function (){
    this.style.background = 'green';
    // this.onclick = null;
}
bloc.ondblclick = function (){
    this.style.background = 'red'
}
bloc.oncontextmenu = function (){
    this.style.background = 'black';
    return false;
}
document.oncontextmenu = function(){
    return false;
}
bloc.onmouseenter = function(){
    console.log
}
