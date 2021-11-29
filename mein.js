let bloc = document.getElementById('one');
//clik bolganda
bloc.onclick = function (){
    this.style.background = 'green';
    // this.onclick = null;
}
bloc.ondblclick = function (){
    this.style.background = 'red'
}