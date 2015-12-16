var b = 1;
function addText(){
    var input = document.getElementById('input').value;
    var para = document.createElement("p");
    para.setAttribute('id', 'seth0018-'+b);
    var textpara = document.createTextNode(input);
    para.appendChild(textpara);

    var removepara = document.createElement("input");
    removepara.setAttribute('type', 'button');
    removepara.setAttribute('value', 'Delete item');
    removepara.setAttribute("onclick", "removeText('seth0018-"+b+"')");
    para.appendChild(removepara);
    localStorage.setItem('seth0018-'+b, input);
    b++;
    document.getElementById('todo').appendChild(para);
    
}

function removeText(item){
    var child=document.getElementById(item);
    document.getElementById('todo').removeChild(child);
    localStorage.removeItem(item);
}

$(document).ready(function(e){
    
    if (localStorage.length) {
        for (var index = 0; index < localStorage.length; index++) {
   
    var input = localStorage.getItem(localStorage.key(index));
    var para = document.createElement("p");
    para.setAttribute('id', localStorage.key(index));
    var textpara = document.createTextNode(input);
    para.appendChild(textpara);

    var removepara = document.createElement("input");
    removepara.setAttribute('type', 'button');
    removepara.setAttribute('value', 'Delete item');
    removepara.setAttribute("onclick", "removeText('"+localStorage.key(index)+"')");
    para.appendChild(removepara);
    document.getElementById('todo').appendChild(para);
    
        }
    } 
	else {
        
		    }
    
});