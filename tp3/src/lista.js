module.exports = class Lista {    
    #elementos;

    constructor(){
        this.#elementos=[]
    }
    
    add(key, value) {
        if(isNaN(key)){
            this.#elementos.push({'clave': key, 'valor': value});
            return true;
        }
        return false;
    }

    count (){
        return this.#elementos.length;
    }

    indexOf(key) {
        for (var indice = 0; indice < this.#elementos.length; indice++) {
            if (this.#elementos[indice].clave == key) {
                return indice;
            }
        }
        return NaN;
    }

    delete(key) {
        var indice = this.indexOf(key);
        if (!isNaN(indice)) {
            this.#elementos.splice(indice, 1);
            return
        }
    }

    find(clave) {
        if(this.#elementos.length>0){
            for (var i=0; i < this.#elementos.length; i++) {
                if (this.#elementos[i].clave === clave) { 
                    return true;
                }
            }
        }
        else{
            return false;
        } 
    }

    get_value(clave) {
        //console.log('valor que llega a get_value: '+clave)
        //console.log(this.#elementos)
        clave=eval(clave.toString())
        if(this.#elementos.length>0){
            for (var i=0; i < this.#elementos.length; i++) {
                if (this.#elementos[i].clave === clave) { 
                    //console.log(this.#elementos[i].valor);
                    return this.#elementos[i].valor;
                }
            }
            return false;
        }
        else{
            return false;
        } 
    }

    update(clave,valor) {
        
        //console.log(this.#elementos)
        //console.log(this.get_value_by_id(clave));
        //console.log(valor);
        if(!isNaN(this.get_value_by_id(clave))){
            this.#elementos[this.get_value_by_id(clave)].valor=valor;
            return true;
        }
        else{
            return false;
        }
        
        
    }

    get_value_by_id(clave){
        
        if(this.#elementos.length>0){
            for (var i=0; i < this.#elementos.length; i++) {
                //console.log(this.#elementos[i].clave);
                if (this.#elementos[i].clave === eval(clave)) {
                    return i;
                }
            }
        }
        else{
            return false;
        }
    }

    get_order() {
        //console.log(this.#elementos)
        let claves = [];
        if (this.#elementos.length===0) {
            return false;
        } else {
            for (let i = 0; i < this.#elementos.length; i++) {
                
                claves.push(this.#elementos[i].clave);
            }
            claves.sort();
            //console.log('Salida de get order: '+claves);
            return claves;
        }
    }
}