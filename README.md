My HotWheels Collection V0.9

--Refactor expo SDK ver 52 <br>
--implemento dotenv

Usuario de prueba:
test@user.com
pass1234

App para entrega final CoderHouse - Desarrollo de Aplicaciones(57275) y para posterior uso personal.

Funcionalidades:

La idea de la app es ayudar a los que coleccionamos HotWheels, a mantener a mano la información de qué autos tenemos, cuales queremos tener, y sobre todo no comprar repetidos por no recordar que los tenemos.

-Manejo de usuarios.
-Agregar un auto nuevo a mi colección (debo ingresar los datos, todos obligatorios, y una imágen)
-Visualizar mi colección: me despliega en pantalla todos los autos que voy ingresando. Al tener un usuario loggeado, los autos ingresados en el punto anterior están asociados al mismo y son los que se muestran en esta pantalla.
-Deseos: La lista de deseos me permite ver todos los modelos que existen de HotWheels (para esta entrega subí 260 de más de 5800 que tengo, por un tema de practicidad y performance ya que por ahora por ejemplo los muestro con flatlist, y eso podría enlentecerse bastante al scrollear una lista de tantos autos que además va a recuperar cada imágen a una url)
En caso de querer marcar alguno de los autos como deseado, se agregará a mi lista de deseados, persistida también en RealTime Database asociada a mi usuario.
-Filtrado de autos por modelo en las patallas de Colección, Deseados, y Todos los autos
-En la pantalla de colección cuando un usuario no tiene coleccionados aún, despliega un componente para registrar el primer auto.
-En la pantalla de Usuario: Funcionalidad de LogOut, para poder cambiar de usuarios.

Comentarios:

La app la ageneré a medida que iba aprendiendo con el curso, youtube y prueba y error. Algunas de las funcionalidades están basadas en lo que dimos en el curso, no estoy seguro que se mantengan luego de la corrección ya que pienso realmente usar la app y no me serían útiles. Como los deseados.

Futuros Upgrades:
-Lectura de CB para registrar junto con el auto, de esta forma controlaría no agregar repetidos, más allá del control humano de no agregar dos veces un mismo auto.
-Comentarios opcionales en cada auto, por ejemplo: "Regalo por mi cumple"
-Manejo de nicknames para los usuarios, para personalizar mensajes por ejemplo. La idea sería persistir por cada usuario un nick, siendo iniciado con el valor igual al email, pero siendo posible personalizarlo por cada usuario.
-Imágen de perfil de usuario
-Funcionalidad de poder agregar más de una imágen por auto (requiere cambio en la forma en que persisto las imágenes de los autos actualmente)
-Funcionalidad de visualizar en pantalla completa las imágenes de cada auto.
-Sistema de medallas para los usuarios, por ejemplo : "Por coleccionar 10, 25, 50, 100, 500, 1000, 2000, etc, autos"
-Rangos de usuario, asociado a las medallas y alguna idea más.


My HotWheels Collection V1.0
*
*
*

---.AGUSTÍN RODRÍGUEZ.---