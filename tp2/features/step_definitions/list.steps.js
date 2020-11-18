const Dado = require('@cucumber/cucumber').Given
const Cuando = require('@cucumber/cucumber').When
const Entonces = require('@cucumber/cucumber').Then
const expect = require("chai").expect;
const Lista = require("../../src/lista")

let contexto = {};

Dado('una lista vacía', function () {
    contexto.lista = new Lista();
});

Cuando('se agrega la pareja {}', function  (pareja) {
    pareja=JSON.parse(pareja);
    contexto.lista.add(Object.keys(pareja)[0], Object.values(pareja)[0]);
});

Entonces('la lista tiene {int} elemento almacenado', function (cantidad) {
    expect(contexto.lista.count()).to.equal(cantidad);
});


Dado('una lista con los siguientes elementos', function (tabla) {
    contexto.lista=new Lista();
    tabla.rawTable.forEach(pareja => {
        contexto.lista.add(eval(pareja[0]), eval(pareja[1]));
    });
});

Entonces('la lista tiene {int} elementos almacenados', function (cantidad) {
    expect(contexto.lista.count()).to.equal(cantidad);
});

Cuando('se elimina la clave {string}', function (clave) {
    // Write code here that turns the phrase above into concrete actions
    contexto.lista.delete(clave);
  });

Cuando('se busca la clave {string}', function (clave) {
    contexto.encontrado = contexto.lista.find(clave);
    expect(contexto.encontrado).is.NaN;

  });


Cuando('se busca la clave {string}', function (clave) {
    contexto.encontrado = contexto.lista.find(clave);
});

Entonces('se obtiene el valor NaN', function () {
    expect(contexto.encontrado).is.NaN;
});

Entonces('se obtiene el valor NaN', function () {
    expect(contexto.encontrado).is.NaN;
});