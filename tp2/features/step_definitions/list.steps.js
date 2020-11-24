const Dado = require('@cucumber/cucumber').Given
const Cuando = require('@cucumber/cucumber').When
const Entonces = require('@cucumber/cucumber').Then
const expect = require("chai").expect;
const Lista = require("../../src/lista")

let contexto = {};

Dado('una lista vacía', function () {
    contexto.lista = new Lista();
});

Dado('una lista con los siguientes elementos', function (tabla) {
    contexto.lista=new Lista();
    tabla.rawTable.forEach(pareja => {
        contexto.lista.add(eval(pareja[0]), eval(pareja[1]));
    });
});


Cuando('se agrega la pareja {}', function  (pareja) {
    pareja=JSON.parse(pareja);
    contexto.lista.add(Object.keys(pareja)[0], Object.values(pareja)[0]);
});



Cuando('se elimina la clave {string}', function (clave) {
    // Write code here that turns the phrase above into concrete actions
    contexto.lista.delete(clave);
  });

Cuando('se busca la clave {string}', function (clave) {
    contexto.lista.find(clave);
    //expect(contexto.encontrado).is.false;
});

Cuando('se cambia el valor de {} por {}', function (string,int) {
    // Write code here that turns the phrase above into concrete actions
    //console.log(int)
    contexto.lista.update(string,int);
    

});

Entonces(/^se obtiene el valor (false|[\"\d\w]+)$/, function (clave) {
    expect(contexto.lista.get_value(clave)).to.equal(false);
});

Entonces('al leer {}, deberia retornar {}', function (clave,valor) {
    // Write code here that turns the phrase above into concrete actions
    //valor=eval(valor.toString());
    expect(contexto.lista.get_value(clave)).to.equal(valor);
  });

Entonces('la lista tiene {int} elemento almacenado', function (cantidad) {
    expect(contexto.lista.count()).to.equal(cantidad);
});


Entonces('la lista tiene {int} elementos almacenados', function (cantidad) {
    expect(contexto.lista.count()).to.equal(cantidad);
});