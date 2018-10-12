const getElementFormTemplate = (template) => {
    const container = document.createElement(`template`);
    container.innerHTML = template;
    return container.content;
}

const headerTemplate =  `
<header class="header">
    <div>Мир: 0</div>
    <div>
        Жизнь:
        <span class="heart_empty"></span>
        <span class="heart_empty"></span>
        <span class="heart_empty"></span>
    </div> 
</header>
`;




const container = document.querySelector(`#main`);
container.appendChild(getElementFormTemplate(headerTemplate));

const input = container.querySelector(`input`);
input.onkeydown = (e) => {
    if (e.key === `Enter`) {
        input.reset();
    }
};

input.focus();



// 24