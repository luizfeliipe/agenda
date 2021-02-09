/* import { validate } from 'webpack'; *
//* fazer validação quando tiver tempo. 
import validator from 'validator';

export default class Contato{
    constructor(form){
        this.form = document.querySelector(form);
    }

        init(){
            this.events();
        }

        events() {
            if(!this.form) return;
            this.form.addEventListener('submit', e => {
              e.preventDefault();
              this.validate(e);
            });
        }

        validate(e){
            const el = e.target;
            const nomeInput = el.querySelector('input[name="nome"]');
            const sobreNomeInput = el.querySelector('input[name="sobrenome"]');
            const emailInput = el.querySelector('input[name="email"]');
            const telefoneInput = el.querySelector('input[name="telefone"]');
            const formGroup = document.querySelector('.form-group');

            let error = false;

            if(!nomeInput.value){
                const p = document.createElement('p');
                p.style.color= 'red';
                p.innerText = 'Campo nome Obrigatório.';
                formGroup.appendChild(p);
                error = true;
                return;
            }else{
                p.remove();
                error = false;
                return;
            }

            if(sobreNomeInput.value.length < 3){
                p.style.color= 'red';
                p.innerText = 'Campo nome Obrigatório.';
                error = true;
                //return;
            }else{
                p.remove();
                error = false;
                return;
            }

            if(!validator.isEmail(emailInput.value)) {
                p.innerHTML = "campo email inválido";
                p.style.color= 'red';

                error = true;
            }else{
                p.remove();
                error = false;
                return;
            }

        }
} */