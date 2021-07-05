let text = document.getElementById("text");
text.addEventListener('input', function(){
    let a = this.value;
    let charhtml = document.getElementById("char");
    charhtml.innerHTML = a.length;
    a = a.trim();
    word = a.split(" ");
    word = word.filter(function(item){
        return item!="";
    });
    let wordhtml = document.getElementById("words");
    wordhtml.innerHTML = word.length;
    
})