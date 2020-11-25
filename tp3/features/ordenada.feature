# language: es
# encoding: utf-8

Característica: La lista devuelve un array ordenado de claves

Escenario: Dada una lista de elementos
    Dado una lista con los siguientes elementos
    | "X"  | 1 |
    | "C"  | 2 |
    | "B"  | 3 |
    | "A"  | 7 |
    Entonces se obtiene 
    | "A"  |
    | "B"  |
    | "C"  |
    | "X"  |
