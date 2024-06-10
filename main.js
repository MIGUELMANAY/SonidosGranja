function playSonido(IdElementoAudio){
    document.querySelector(IdElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla')
let contador = 0;
console.log(listaDeTeclas);

for(let i=0; i<listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i];
    const animal= tecla.classList[1];
    console.log(animal);

    
    const idAudio=`#sonido_${animal}`;
    console.log(idAudio);

    tecla.onclick= function(){
        playSonido(idAudio);
    };
    tecla.onkeydown= function(){
        tecla.classList.add('activa');
    };

    tecla.onkeyup= function(){
        tecla.classList.remove('activa');
    };
   /* tecla.onfocus= function(){
        tecla.classList.add('activa');
    };*/
    tecla.onblur= function(){     
        tecla.classList.remove('activa');
    }

/*while(contador < 9){
    const tecla = listaDeTeclas[contador];
    const animal= tecla.classList[1];
    console.log(animal);

    
    const idAudio=`#sonido_${animal}`;
    console.log(idAudio);

    tecla.onclick= function(){
        playSonido(idAudio);
    };
    contador++;
console.log('vuelta '+contador);
*/
}

/*
switch (contador<9) {
    case listaDeTeclas[0]:
        tecla='#sonido_tecla_vaca';
        break;
    case listaDeTeclas[1]:
        tecla ='#sonido_tecla_pato';
        break;
    case listaDeTeclas[2]:
        tecla = '#sonido_tecla_gallina';
        break;
    case listaDeTeclas[3]:
        tecla = '#sonido_tecla_cerdo';
        break;
    case listaDeTeclas[4]:
        tecla = '#sonido_tecla_caballo';
        break;
    case listaDeTeclas[5]:
        tecla = '#sonido_tecla_perro';
        break;
    case listaDeTeclas[6]:
        tecla = '#sonido_tecla_oveja';
        break;
    case listaDeTeclas[7]:
        tecla = '#sonido_tecla_gato';
        break;
    default:
        break;

}

function playSonido(tecla){
    document.querySelector(tecla).play();
}

playSonido();


//document.querySelector('.tecla_vaca').onclick=playSonidoVaca;

/*
function playSonidoPato(){
    document.querySelector('#sonido_tecla_pato').play();
}

document.querySelector('.tecla_pato').onclick=playSonidoPato;
*/
