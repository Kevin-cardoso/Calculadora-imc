let calcular = document.getElementById('calcular');
let deletar = document.getElementById('limp');

function imcalc() {
    let alt = document.getElementById('altura').value;
    let pes = document.getElementById('peso').value;
    let res = document.getElementById('resultado');
    let abai = document.getElementById('abaixo');
    let norm = document.getElementById('normal');
    let sobrep = document.getElementById('sobrepeso');
    let obe1 = document.getElementById('ob1');
    let obe2 = document.getElementById('ob2');
    let obe3 = document.getElementById('ob3');

    if(pes !== '' && alt !== ''){
        let valorImc = (pes / (alt * alt)).toFixed(1);

        if(valorImc < 14){ //  muito abaixo
            abai.style.border = "6px solid red";

            abai.scrollIntoView();

            norm.style.border = 'none';
            sobrep.style.border= 'none';
            obe1.style.border = 'none';
            obe2.style.border = 'none';
            obe3.style.border = 'none';
            res.innerHTML = `<strong> ${valorImc} Kg/ m&#xb2<br> IMC muito abaixo. Por favor adicione um número válido, ou, procure um médico com urgência</strong>`;

        }else if(valorImc < 18.4){ // abaixo
            abai.style.border = "6px solid #F1C31B";

            abai.scrollIntoView();

            norm.style.border = 'none';
            sobrep.style.border= 'none';
            obe1.style.border = 'none';
            obe2.style.border = 'none';
            obe3.style.border = 'none';
            res.innerHTML = `<strong> ${valorImc} Kg/ m&#xb2<br>Atenção! um pouco abaixo do peso</strong>`;

        }else if(valorImc >= 18.5 && valorImc <= 24.9){ // normal
            norm.style.border = "6px solid green";

            norm.scrollIntoView();

            abai.style.border = 'none';
            sobrep.style.border= 'none';
            obe1.style.border = 'none';
            obe2.style.border = 'none';
            obe3.style.border = 'none';
            res.innerHTML = `<strong> ${valorImc} Kg/ m&#xb2<br>Parabéns ! você está no peso ideal</strong>`;

        }else if(valorImc >= 25 && valorImc < 29.9){ // sobrepeso
            sobrep.style.border = "6px solid #F1C31B";

            sobrep.scrollIntoView();

            abai.style.border = 'none';
            norm.style.border = 'none';
            obe1.style.border = 'none';
            obe2.style.border = 'none';
            obe3.style.border = 'none';
            res.innerHTML = `<strong> ${valorImc} Kg/ m&#xb2<br>Atenção! Levemente acima do peso</strong>`;

        }else if(valorImc >= 30 && valorImc < 34.9){ // obeso 1
            obe1.style.border = '6px solid red';

            obe1.scrollIntoView();

            abai.style.border = 'none';
            norm.style.border = 'none';
            sobrep.style.border= 'none';
            obe2.style.border = 'none';
            obe3.style.border = 'none';
            res.innerHTML = `<strong> ${valorImc} Kg/ m&#xb2<br> Acima do peso, Procure um médico </strong>`;

        }else if(valorImc >= 35 && valorImc < 39.9){ // obeso 2
            obe2.style.border = '6px solid red';

            obe2.scrollIntoView();

            abai.style.border = 'none';
            norm.style.border = 'none';
            sobrep.style.border= 'none';
            obe1.style.border = 'none';
            obe3.style.border = 'none';
            res.innerHTML = `<strong> ${valorImc} Kg/ m&#xb2<br> Muito acima do peso, Procure um médico </strong>`;

        }else if(valorImc > 40){ // obeso 3
            obe3.style.border = '6px solid red';

            obe3.scrollIntoView();


            abai.style.border = 'none';
            norm.style.border = 'none';
            sobrep.style.border= 'none';
            obe1.style.border = 'none';
            obe2.style.border = 'none';
            res.innerHTML = `<strong> ${valorImc} Kg/ m&#xb2Procure um médico, com urgência! </strong>`;
        }


    }else {
        res.innerHTML = `<strong>Preencha todos os campos !</strong>`
    }
}

function reset(){
    let alt = document.getElementById('altura');
    let pes = document.getElementById('peso');

    alt.value = "";
    pes.value = "";

}

deletar.addEventListener("click", reset);
calcular.addEventListener("click", imcalc);