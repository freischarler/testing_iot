/**
 * En una lista vacia hay cero elementos.
 * Cuando se agrega un elemento a una lista vacia hay un elemento.
 * En una lista vacia no se encuentra ninguna clave.
 *
 */

const assert = require("chai").assert;
const Lista = require("../src/lista.js");

describe("en una lista vacia", function(){
    var lista=new Lista();
    lista.add("clave","valor");

    it("hay un elemento", function(){
        assert.equal(lista.count(),1);
    })

    it("no se encuentra ninguna clave", function(){
        assert.isNaN(lista.find("clave","valor"));
    })


})