alert('10-5');

function createDiv() {
    let div = document.createElement('div');
    div.innerHTML = "Вы прочитали важное сообщение.";
    div.className = "JSdiv"
    return div;
    }
    
    document.body.append(createDiv());
    document.body.append(createDiv());
    document.body.append(createDiv());
    document.body.append(createDiv());

