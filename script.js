function happy(){
    document.querySelector('#feels').classList.remove('sad');
    document.querySelector('#feels').classList.remove('soso');
    document.querySelector('#feels').classList.remove('grr');
    document.querySelector('#feels').classList.add('happy');
}
function sad(){
    document.querySelector('#feels').classList.remove('happy');
    document.querySelector('#feels').classList.remove('soso');
    document.querySelector('#feels').classList.remove('grr');
    document.querySelector('#feels').classList.add('sad');
}
function soso(){
    document.querySelector('#feels').classList.remove('sad');
    document.querySelector('#feels').classList.remove('happy')
    document.querySelector('#feels').classList.remove('grr');
    document.querySelector('#feels').classList.add('soso');
}
function grr(){
    document.querySelector('#feels').classList.remove('sad');
    document.querySelector('#feels').classList.remove('happy')
    document.querySelector('#feels').classList.remove('soso');
    document.querySelector('#feels').classList.add('grr');
}
var contadorHappy = document.querySelector('.badge');

document.querySelector('.buttonHappy').addEventListener('click', function(){
  var numeroHappy = parseInt(contadorHappy.textContent) + 1;
  contadorHappy.textContent = numeroHappy;
});

var contadorSad = document.querySelector('.badgeSad');

document.querySelector('.buttonSad').addEventListener('click', function(){
  var numeroSad = parseInt(contadorSad.textContent) + 1;
  contadorSad.textContent = numeroSad;
});

var contadorSoso = document.querySelector('.badgeSoso');

document.querySelector('.buttonSoso').addEventListener('click', function(){
  var numeroSoso = parseInt(contadorSoso .textContent) + 1;
  contadorSoso .textContent = numeroSoso;
});

var contadorGrr = document.querySelector('.badgeGrr');

document.querySelector('.buttonGrr').addEventListener('click', function(){
  var numeroGrr = parseInt(contadorGrr .textContent) + 1;
  contadorGrr .textContent = numeroGrr;
});

function atualizaRelogio(){ 
    var momentoAtual = new Date();
    
    var vhora = momentoAtual.getHours();
    var vminuto = momentoAtual.getMinutes();
    var vsegundo = momentoAtual.getSeconds();
    
    var vdia = momentoAtual.getDate();
    var vmes = momentoAtual.getMonth() + 1;
    var vano = momentoAtual.getFullYear();
    
    if (vdia < 10){ vdia = "0" + vdia;}
    if (vmes < 10){ vmes = "0" + vmes;}
    if (vhora < 10){ vhora = "0" + vhora;}
    if (vminuto < 10){ vminuto = "0" + vminuto;}
    if (vsegundo < 10){ vsegundo = "0" + vsegundo;}

    dataFormat = vdia + " / " + vmes + " / " + vano;
    horaFormat = vhora + " : " + vminuto + " : " + vsegundo;

    document.getElementById("data").innerHTML = dataFormat;
    document.getElementById("hora").innerHTML = horaFormat;

    setTimeout("atualizaRelogio()",1000);
}
	





