function showDate(){
    let out = document.getElementById('current-date');
    let out_1 = document.getElementById('a');
    let out_2 = document.getElementById('b');
    let out_3 = document.getElementById('c');
    let out_4 = document.getElementById('d');
    let today = new Date();
    out.innerHTML = "Дата и время русской локали"+ " " + today.toLocaleString('ru-Ru');
    out_1.innerHTML = "Дата и время белорусской локали"+ " " + today.toLocaleString('be');
    out_2.innerHTML = "Дата и время испанской локали"+ " " + today.toLocaleString('es');
    out_3.innerHTML = "Дата и время чешской локали"+ " " + today.toLocaleString('cs-CZ');
    out_4.innerHTML = "Дата и время итальянской локали"+ " " + today.toLocaleString('it');
}