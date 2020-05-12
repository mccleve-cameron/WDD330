let names = [];

names.push('Cameron');
names.push('John');
names.push('Bill');

names.forEach(
    name => {
        let li = document.createElement('li');
        li.textContent = name;

        let section = document.querySelector('section');
        section.appendChild(li);
    }
);