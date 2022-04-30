---
title: Higher Order Functions - Progração Funcional
meta:
  - name: description
    content: Hello World
---

# Higher Order Functions - Programação Funcional


## No Javascript funções são valores. Assim como Strings ou números, funções podem ser atribuídas à variáveis.

```js
const triplica = function(x) {
  return x * 3;
}

const waffle = triplica;

waffle(5); // 15

```

## Funções também podem ser passadas para outras funções, ou seja: Higher Order Functions.


### Higher order functions são funções que recebem uma função ou mais como argumento, retornando outra função.


### Mas Jeff, no que essas Higher Order Functions são boas? Elas permitem a composição de funções, ou seja, ter funções pequenas que compõem outras funções maiores.


### A Higher Order Function mais básica e útil é o famoso "filter"


### Filter é uma função do Array que aceita outra função como argumento, a qual ele usa para retornar uma nova versão filtrada do Array.


### Exemplo:
```js
const animals = [
  { name: 'Fluffykins', species: 'coelho' },
  { name: 'Caro', species: 'cachorro' },
  { name: 'Hamilton', species: 'fish' },
  { name: 'Jack', species: 'cachorro' },
  { name: 'Aroldo', species: 'Gato' },
]

const isDog = (animal) => (animal.species === 'cachorro');

const cachorros = animals.filter(isDog)
console.log(cachorros);
/*
  [
    { name: 'Caro', species: 'cachorro' },
    { name: 'Jack', species: 'cachorro' },
  ]
/*
```

### Like, comentário, salvamento...