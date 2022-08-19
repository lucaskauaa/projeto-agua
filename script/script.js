const principal = document.getElementById('principal');
const form = document.querySelector('form');
const idade = document.getElementById('idade');
const peso = document.getElementById('peso');
const button = document.querySelector('button');
button.addEventListener('click', verificar);

function verificar() {
    if (idade.valeu == 0 || peso.value == 0) {
        window.alert('Preencha todos os espaços.');
    } else {
        let result = 0;
        if (idade.value < 18) {
            result = peso.value * 40;
        } else if (idade.value < 55) {
            result = peso.value * 35;
        } else if (idade.value < 65) {
            result = peso.value * 30;
        } else {
            result = peso.value * 25;
        }

        const res = result / 1000;
    
        form.remove();

        const exibir = (texto, estilo) => {
            const div = document.createElement('div');
            estilo(div);
            div.textContent = texto;
            principal.appendChild(div);
        }

        const estilo01 = (div) => {
            div.style.cssText = `
            margin: 25px 0 30px 0;
            font-size: 22px;
            `
            return div;
        }

        const estilo02 = (div) => {
            div.style.cssText = `
            font-size: 18px;
            margin-top: 15px;
            border-top: 0.5px solid black;
            `
            return div;
        }
        
        exibir(`Você precisa beber no mínimo ${res.toFixed(1).replace('.',',')} litros de água por dia.`, estilo01);

        const tabela = ['Até 17 anos - 40ml / kg', '18 a 55 anos - 35ml / kg', '56 a 65 anos - 30ml / kg', 'Mais de  66 anos - 25ml / kg'];

        for (let c in tabela) {
            exibir(tabela[c], estilo02);
        }
    }
}