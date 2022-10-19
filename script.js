const form = document.querySelector('.form-dad');
const nameForm = form.querySelector('.name');
const emailForm = form.querySelector('.email');
const textAreaForm = form.querySelector('.text-area');

const name = nameForm.value;

const sendForm = (event) =>{
    event.preventDefault();
    return alert(`Obrigado! Sua mensagem foi enviada para a empresa.`);

}

form.addEventListener('submit', sendForm);