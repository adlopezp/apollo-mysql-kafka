CREATE TABLE preguntas.pregunta (
	id_pregunta INTEGER NOT NULL AUTO_INCREMENT,
	nombre_pregunta varchar(4000) NOT NULL,
	tema varchar(100) NOT NULL,
	CONSTRAINT pregunta_pk PRIMARY KEY (id_pregunta)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;

CREATE TABLE preguntas.opcion_pregunta (
	id_opcion_pregunta INTEGER NOT NULL AUTO_INCREMENT,
	id_pregunta INTEGER NOT NULL,
	nombre_opcion varchar(4000) NOT NULL,
	correcta BOOL NULL,
	CONSTRAINT opcion_pregunta_pk PRIMARY KEY (id_opcion_pregunta),
	CONSTRAINT opcion_pregunta_pregunta_fk FOREIGN KEY (id_pregunta) REFERENCES preguntas.pregunta(id_pregunta)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;

INSERT INTO preguntas.pregunta (nombre_pregunta,tema) VALUES 
('¿Cuál es la descripción que crees que define mejor el concepto ''clase'' en la programación orientada a objetos?','JAVA')
,('¿Qué elementos crees que definen a un objeto?','JAVA')
,('¿Qué código de los siguientes tiene que ver con la herencia?','JAVA')
,('¿Qué significa instanciar una clase?','JAVA')
,('¿Qué es Eclipse?','JAVA')
,('¿Cuál es el resultado que se obtiene al ejecutar esta instrucción Python? ">>> print(1+ 2 + 3 + (4 + 5) * 2)"','Python')
,('¿Cuál es el resultado que se obtiene al ejecutar esta instrucción Python? ">>> print(17 % 3)"','Python')
,('Colocar el punto decimal a un numero la convierte en un float ">>> 78."','Python')
,('Para convertir un número de tipo de dato float a integer utilizo la función int(). Ejemplo: ">>> int(78.90)"','Python')
,('La salida de la siguiente instrucción Python es: ">>> print(2**3)"','Python');

INSERT INTO preguntas.opcion_pregunta (id_pregunta,nombre_opcion,correcta) VALUES 
(1,'Es un concepto similar al de ''array''',NULL)
,(1,'Es un tipo particular de variable',NULL)
,(1,'Es un modelo o plantilla a partir de la cual creamos objetos',1)
,(1,'Es una categoria de datos ordenada secuencialmente',NULL)
,(2,'Sus cardinalidad y su tipo',NULL)
,(2,'Sus atributos y sus métodos',1)
,(2,'La forma en que establece comunicación e intercambia mensajes',NULL)
,(2,'Su interfaz y los eventos asociados',NULL)
,(3,'public class Componente extends Producto',1)
,(3,'public class Componente inherit Producto',NULL)
;
INSERT INTO preguntas.opcion_pregunta (id_pregunta,nombre_opcion,correcta) VALUES 
(3,'public class Componente implements Producto',NULL)
,(3,'public class Componente belong to Producto',NULL)
,(4,'Duplicar una clase',NULL)
,(4,'Eliminar una clase',NULL)
,(4,'Crear un objeto a partir de la clase',1)
,(4,'Conectar dos clases entre sí',NULL)
,(5,'Una libreria de Java',NULL)
,(5,'Una versión de Java especial para servidores',NULL)
,(5,'Un IDE para desarrollar aplicaciones',1)
,(5,'Ninguna de las anteriores',NULL)
;
INSERT INTO preguntas.opcion_pregunta (id_pregunta,nombre_opcion,correcta) VALUES 
(6,'30',NULL)
,(6,'25',NULL)
,(6,'20',1)
,(6,'15',NULL)
,(7,'5',NULL)
,(7,'3',NULL)
,(7,'2',1)
,(7,'1',NULL)
,(8,'Verdadero',1)
,(8,'Falso',NULL)
;
INSERT INTO preguntas.opcion_pregunta (id_pregunta,nombre_opcion,correcta) VALUES 
(9,'Verdadero',1)
,(9,'Falso',NULL)
,(10,'6',NULL)
,(10,'5',NULL)
,(10,'8',1)
,(10,'9',NULL)
;

