# Test-ED
Respuestas al test de evaluación

Ejercicio 1
Implementa una maquetación responsive como muestra la imagen a continuación. El fondo del cuerpo será de color #f2f2f2, el de las Cards de color blanco y con algo de sombreado.
El tamaño de ancho de las Cards debe ser proporcional como los de la imagen. No se permite el uso de librerías ni de frameworks.


Ejercicio 2
Implementa la función removeProperty la cual recibe un objeto (obj) y una propiedad (prop) y hace lo siguiente:

Si el objeto obj tiene la propiedad prop, la función borra la propiedad del object y devuelve true, en los demás casos devuelve false.

        function removeProperty(obj, prop) {
          // add lines
          return null;
        }

Ejercicio 3
Implementa la función formatDate que convierta la fecha introducida por el usuario formateada como M/D/AAAA a un formato requerido por una API (AAAAMMDD). 
El parámetro 'userDate' y el valor de retorno son strings.

Por ejemplo, debería convertir la fecha "11/26/2014" introducida por el usuario en "20141126" adecuada para la API.


        function formatDate(userDate) {
          // format from M/D/YYYY to YYYYMMDD
        }
        console.log(formatDate('11/26/2014'));

Ejercicio 4
Implementa un mapa dividido en comunidades autónomas, sobre las que al situar el ratón por encima te mostrará un tooltip con el nombre de la comunidad.
Al hacer click sobre una comunidad se hará zoom sobre esa comunidad, y al volver a hacer click se recuperará el tamaño original del mapa.

* Está permitido en este ejercicio el uso de librerías y/o frameworks.

Ejercicio 5
Implementar una función que dado un número entero, devuelva otro número formado por sus mismos dígitos ordenados descendentemente.

Ejemplos:

          7573 ---> 7753
          2756938 ---> 9876532
          3040 ---> 4300
          
Ejercicio 6
Implementar un método que permita acceder de forma segura a propiedades de un objeto, incluso cuando dichas propiedades no existen.

La función debe admitir tres parámetros: 
el objeto al que se va a acceder
el valor por defecto que va a devolver la función en caso de que la propiedad no exista dentro del objeto
y por último, un string indicando el path de la propiedad a consultar.

El path delimitará el camino en el cual se encuentra la propiedad a consultar. Los distintos niveles de profundidad se delimitaran con puntos.
Además este último parámetro es opcional. En caso de no proveerse, la función devolverá otra función que esperará ser invocada con el path de la propiedad como argumento.

Ejemplos:

        const obj = { p1: {
                            p2: 'value'
                        }
                    }

        accessor(obj, null, 'p1.p2') // ---> returns 'value'


        const obj = { p1: {
                            p2: 'value'
                        }
                    }

        accessor(obj, 'default', 'p1.p2.p3') // ---> returns 'default'

        const obj = { p1: {
                            p2: 'value'
                        }
                    }

        accessor(obj, null, 'p5.p2') // ---> returns null

        const obj = { p1: {
                            p2: 'value'
                        }
                    }

        const accessor = get(obj, null)

        accessor('p1.p2') // ---> returns 'value'
        accessor('p3.p2.p5') // ---> returns null


