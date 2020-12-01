# language: es
# encoding: utf-8

Característica: Gestionar las parejas almacenadas en la lista

Escenario: Agregar un elemento a una lista vacia
    Dado una lista vacía
    Cuando se agrega la pareja { "clave": "valor" }
    Entonces la lista tiene 1 elemento almacenado

Escenario: Agregar una clave numerica a una lista vacia
    Dado una lista vacía
    Cuando se agrega la pareja { "1": "valor" }
    Entonces la lista tiene 0 elemento almacenado

Escenario: Agregar un elemento a una lista con elementos
    Dado una lista con los siguientes elementos
    | "uno"  | 1 |
    Cuando se agrega la pareja { "dos": 2 }
    Entonces la lista tiene 2 elementos almacenados

Escenario: Agregar un elemento que ya existe a una lista con elementos
    Dado una lista con los siguientes elementos
    | "uno"  | 1 |
    Cuando se agrega la pareja { "uno": 2 }
    Entonces la lista tiene 1 elementos almacenados
        
Escenario: Eliminar un elemento de una lista con elementos
    Dado una lista con los siguientes elementos
    | "uno"  | 1 |
    | "dos"  | 2 |
    | "tres" | 3 |
    Cuando se elimina la clave "dos"
    Entonces la lista tiene 2 elementos almacenados

Escenario: Modificar un valor asociedo a una clave
    Dado una lista con los siguientes elementos
    | "uno"  | 1 |
    | "dos"  | 2 |
    Cuando se cambia el valor de { "dos" } por 3
    Entonces al leer "dos", deberia retornar 3

Escenario: Devolver la cantidad de elementos de una lista vacia
    Dado una lista con los siguientes elementos
    | "uno"  | 1 |
    | "dos"  | 2 |
    | "tres" | 3 |
    Cuando se consulta la cantidad de elementos
    Entonces la lista tiene 3 elementos almacenados

Escenario: Devolver la cantidad de elementos de una lista con elementos
    Dado una lista vacía
    Cuando se consulta la cantidad de elementos
    Entonces la lista tiene 0 elementos almacenados
