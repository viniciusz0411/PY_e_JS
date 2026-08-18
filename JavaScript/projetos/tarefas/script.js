function addTarefa(){
    let txt = document.getElementById('txt').value;

    if(txt){
        const modelo = document.getElementsByClassName("template")[0];
        const nova = modelo.cloneNode(true);

        nova.getElementsByClassName('title')[0].textContent = txt;

        nova.classList.remove('hide');
        nova.classList.remove('template');

        const lista = document.getElementById('lista');
        lista.appendChild(nova);

        document.getElementById('txt').value='';

        const deletar=nova.getElementsByClassName('delete')[0].addEventListener("click", function(r){
            remove(this)
        });

        const feito=nova.getElementsByClassName('check')[0].addEventListener('click', function(){
            terminada(this)
        })
    }
}

function terminada(task){
    const paiTask=task.parentNode;
    paiTask.classList.toggle('done');
}

function remove(task){
    task.parentNode.remove(true)
}

let botao = document.getElementById('botao');

botao.addEventListener("click", function(e){
    e.preventDefault();
    addTarefa();
});