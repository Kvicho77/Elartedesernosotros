// script.js
const book = document.getElementById('book');

for (let i = 1; i <= 27; i++) {
  const page = document.createElement('div');
  page.classList.add('page');
  page.style.zIndex =27 - i;

 if (i === 1) {
    page.innerHTML = `
      <div class="front">
        <div class="content">
          <h2>Introduccion.</h2>
          <p>
            Este libro trata de en la forma que eh vivido mi relacion con mi novia Angela Ignacia Figueroa Lizana. Sin dudarlo la mujer mas linda de este mundo podran ver como conoci. me enamore y como eh tenido la relacion mas hermosa estos 9 meses.Y como en toda relacion contare lo hermoso que hemos vivido como pareja.<br/>Esos momentos que te das cuenta que esa persona que esta a tu lado es el amor de tu vida y no puedes estar mas agradecido de que la vida los haya juntado, pero tambien lo malo de esta me refiero a los momentos dificiles de una relacion, cuando los errores perjudican la relacion,cuando sentimos que la relacion no da mas.<br/> <span id="cita">"nuestra historia de amor es mi libro favorito que nunca me cansare de leer"</span>
          </p>
        </div>
        <div class="page-number">1</div>
      </div>
    `;
  }
  if (i === 2) {
    page.innerHTML = `
      <div class="front">
        <div class="content">
          <h2>El existir del otro.</h2>
          <p>
             La primera vez que supimos del otro, aunque yo supe de Angela antes que ella,alguien de poca importancia nombrar me dijo que si queria me la presentaria y me dio su instagram, yo me negue por obvias razones pero la curiosidad de saber como era o quien era me mataba. Al dia siguiente fui a jugar con mi papa al patricio mekis, antes de ir mande la solicitud y le pide a tal persona que le dijera que me aceptara esa solicitud, y la acepto. En un momento ya estaba viendo sus destacadas me causaba curiosidad que cara tendria alguien que tiene en su nombre una medusa y una foto de perfil de un color celeste suave, entre a la primera destacada eran de amigos, cuyos amigos hoy en dia conozco y con alguno tengo una buena relacion. La siguiente seccion de mascotas, solo una foto, una gato anaranjado y ella acostados.
          </p>
        </div>
        <div class="page-number">2</div>
      </div>
    `;
  }

   if (i === 3) {
    page.innerHTML = `
      <div class="front">
        <div class="only-content-p">
          <p>
             La tercera destacada.fotos de ella y con esas fotos te dabas cuenta de lo dulce que parece una persona con su cara, sus ojos y su sonrisa, y es que aunque todas las destacadas serian de diferentes fines mostrar amistades, mascotas o fotos de ella.<br/>Eso era lo que sobresalia en cada de una de esas secciones<span id=ella>"Ella"</span>. En todo ella resaltaba mas de lo que hubiese a su alrededor, ya sean sus ojos, su pelo, esa sonrisa tan dulce que te hace olvidarte de todo y te enboba, o simplemente su carita.Todo esto pense en un minuto en el tiempo que vi sus destacadas.luego nos pusimos a jugar pero paraba cada cinco minutos para poder ver sus destacadas denuevo y eso paso durante todo el dia hasta que pense"para que seguir viendo esto es algo tonto como si le fuera a hablar" y la deje de seguir,pero poco tiempo despues mande una solicitud denuevo y por como yo conozco su parte de la historia fue lo mejor que pude haber hecho.
          </p>
        </div>
        <div class="page-number">3</div>
      </div>
    `;
  }
  book.appendChild(page);
  if (i === 4) {
    page.innerHTML = `
      <div class="front">
        <div class="only-content-p">
          <p>
             Una amiga de ella le mostro un video mio haciendo el tonto y al parecer a ella le gusto el que un ser humano sea gracioso de una forma tonta lo cual me alegra porque es algo en lo que soy experto, tambien dijo que era lindo y su amiga Genesis le dijo que hablaramos,esa amiga era justamente la novia de mi mejor amigo quien me dijo lo mismo acepte, Samuel le enseño fotos y videos mios incluso uno durmiendo con la boca abierta.Angela ya me conocia por completo en mis formas mas tontas o humildes posible, pero yo conocia fotos solo con filtro lo cual pedi una foto sin filtro y Angela despues de un tiempo se convencio.Subio una historia en donde se veia hermosa y yo estuve todo el dia viendo esa foto pero sin darle like hasta que le conte a Samuel y nos dimos cuenta que era tarde para darle like pero le hicimos saber a Angela que me parecio hermosa y decidi hablarle  
          </p>
        </div>
        <div class="page-number">4</div>
      </div>
    `;
  }

  if (i === 5) {
    page.innerHTML = `
      <div class="front">
        <div class="content">
          <h2>¿Esta vez si?</h2>
          <p>
            Le hable lo hice,  el primer mensaje un hola con cinco “a” para que viera que tenia interes por ella, los nervios era una cosa obvia de un momento a otro estaba a punto de empezar a hablar con una niña cuyos ojos me enamoraron desde el primer momento en que los vi en esas destacadas, durante todo ese día hablamos y yo pensaba en cada palabra y mensaje que enviaba quería hacerlo perfecto en todo momento con el pasar del tiempo fue descubriendo que no solo era una cara bonita y ya, si no que era una persona increíble tanto inteligente como carismática,divertida y con un hablar que te gustaría hablar día y noche con alguien así y me hizo pensar si llegara a ser alguien como quienes terminan siendo lo mas importante en tu vida.<br/><span id="cita">"Hablar contigo es lo que me alegra el dia y la vida por siempre y para siempre"</span>

 
          </p>
        </div>
        <div class="page-number">5</div>

      </div>
    `;
  }

   if (i === 6) {
    page.innerHTML = `
      <div class="front">
        <div class="content">
          <h2>¿Y si nos vemos?</h2>
          <p>
        Estuvimos hablando dos semana y dieron la idea de que nos viéramos Ángela y yo lo cual estuve de acuerdo aunque si fue un poco difícil y eso complicaba todo, hasta que un día se pudo luego de cancelar bastantes salidas,solo que era verse 15 minutos afuera de su colegio me demoraría mas en ir hacia alla pero sin dudarlo acepte,durante el día estuve bastante nervioso,me fui con Samuel pase a comprarle un chocolate un milka de oreo, es el favorito de Angela aunque por el calor parecía mas chocolate caliente. LLegamos a casa de Samuel, en un rato nos fuimos.Me fuera del colegio esperando que saliera,mas nervioso no podía estar y entonces ella salió tan nerviosa como yo nos saludamos y me sorprendió lo que pequeña que era pero lo bonita no se le iba nunca,se veía hermosa, nos fuimos a un lado del colegio y hablamos poco pero si sentía bonita de estar con ella,ya después se tuvo que ir a clases y yo me fui siendo el niño mas feliz del mundo por ese poco tiempo.
          </p>
        </div>
        <div class="page-number">6</div>

      </div>
    `;
  }
  
   if (i === 6) {
    page.innerHTML = `
      <div class="front">
        <div class="content">
          <h2>¿Pasa algo?</h2>
          <p>
        Luego de ese dia por lo menos para mi todo fue muy lindo hablamos siempre que podiamos, seguimos hablando asi un par de semanas mas, pero de un dia para otro todo se volvio raro Angela respondia ciertamente raro, cortante, incluso si antes duraba solo minutos en responderme media hora casi que maximo, paso a responder en horas desde muy lejos se noto el interes que perdio en seguir hablando. Fue algo que me mantuvo triste y deprimido en donde quisiera que este, hable demasiado con Genesis y Samuel, Genesis me recomendo preguntarle o decirle lo que sentia que su actitud me tenia mal y lo hice, prepare un texto diciendo todo lo que sentia y lo envie, Angela un dia entero en responderlo recuerdo que iba saliendo de la casa con mi papa y me llega su respuesta,en pocas palabras que no lo sabia y que lo pensaria si seguir hablando o no espere ese mensaje una semana pero el silencio respondio por ella
          </p>
        </div>
        <div class="page-number">6</div>

      </div>
    `;
  }

  if (i === 7) {
    page.innerHTML = `
      <div class="front">
        <div class="content">
          <h2>Gracias universo</h2>
           <p>
            Despues de todo ese tiempo en cierta parte supere a esa personita pero habia un problema, no menor. Angela entraria este año a mi liceo y pues en ese entonces no era lo mas bonito y comodo ya que se volvio raro con ella en el momento que nunca me respondio solo desaparecio, aunque hubo unas veces que la vi en fotos y paso lo mismo que siempre con una foto de <span id=ella>"ella"</span> embobarme con esa foto y querer verla dia y noche. Luego de muchos nervios llego los primeros dias del liceo y me aterraba el llegar a verla,no se que haria en ese momento, por suerte los primeros dias no la vi pero llego el momento que me toco pasar cerca de ella y no la quise mirar suena ilogico no querer ver en persona a quien te enboba por fotos, a la siguiente vez nos miramos y como era de esperar no sabia que hacer pero fue algo que paso y ya.
           <p/>
        </div>
        <div class="page-number">7</div>

      </div>
    `;
  }

   if (i === 8) {
    page.innerHTML = `
      <div class="front">
        <div class="only-content-p">
          <p>
             Un dia estaba con Genesis y Samuel, en un momento Genesis me dijo de presentarme a alguien cualquiera que le pareciera linda y yo dije que no, y de pronto me dice y angela, solo me quedo mirar hacia abajo y no poder aguantarme la sonrisa nerviosa y es que aunque pasaron muchas cosas una persona no cambia y esa personita me seguia pareciendo la mas preciosa de todas independiente quien estuviera ahi.Luego de eso pasaron muchas cosas, Genesis intento juntarnos nos convencia a los dos para que volvieramos a hablar. A Angela le decia que yo si queria que fuera ella mientras que a mi me decia que Angela queria volver a hablar conmigo, y Angela se decidio queria hablarme en persona pero no lo hacia nunca, queria empezar de cero y pedirme perdon y el dia que lo haria yo falte Genesis le aconsejo que lo hiciera por mensaje y Angela lo hizo. 
          </p>
        </div>
        <div class="page-number">8</div>
      </div>
    `;
  }

  if (i === 9) {
    page.innerHTML = `
      <div class="front">
        <div class="content">
          <h2>¿Un amor sempiterno?</h2>
           <p>
            Un Viernes 14 de Abril de 2025 a las 11:35 AM. Me llego un mensaje de Angela primero un holaa como estas??, luego pidiendome perdon por todo y preguntando si queria que lo hablaramos por mensaje o el lunes en persona, yo le dije que hablaramos un poco del tema y que hablaramos durante el fin de semana, asi no seria tan raro o incomodo cuando estuvieramos en persona.<br/> Esos dias actue mal por mi parte ya que intente ser una persona que no era, intentaba ser alguien seco y frio para no demostrar que la perdonaba tan rapido por lo que paso pero en el fondo yo no soy asi, simplente cambie esa actitud y hablamos durante el finde, llego el lunes al recreo hablariamos o bueno yo esperaba quien fuera ella quien hablara todo el recreo diciendo lo que pensaba, pero no fue asi solo dije un par de cosas que ya habia dicho en el chat asi que hable yo.   
           <p/>
        </div>
        <div class="page-number">9</div>

      </div>
    `;
  }

  if (i === 10) {
    page.innerHTML = `
      <div class="front">
        <div class="only-content-p">
          <p>
             Le dije que todo lo que hubiera pasado no importaba desde ese momento, que yo nunca le sacaria eso en cara, que simplemente empecemos de cero y asi fue. Recreos juntos, mensajes todo el dia, salidas pequeñas, llamadas y mas cosas que me hacian ser feliz junto a ella, y mi vida gracias a ella empezo a ser mas linda que nunca me transmitio y me regalo esa felicidad unica que ella lleva consigo siempre, siendo tan poco en la relacion habia una conexion que me hacia agradecer tenerla en mi vida esos ojos que me enbobaban por fotos hacia un tiempo, hoy en dia se convirtio en la luz de mi vida y mi razon de levantarme cada mañana con tal solo de verla, cada mensaje y llamada se convertian en conocer al otro de mejor forma entender sus gustos, conocer todo del otro,sus  <br/>Empezamos a tratar la relacion como si casi fueramos pareja pero faltaba algo importante en una relacion algo tan simple como un beso.  
          </p>
        </div>
        <div class="page-number">10</div>
      </div>
    `;
  }

   if (i === 11) {
    page.innerHTML = `
      <div class="front">
        <div class="content">
          <h2>El primer beso</h2>
           <p>
            luego de un tiempo planee una salida con ella, y poder darnos nuestro primer beso,le dije que saliéramos a donde ella quisiera y que para hacer la salida mas bonita yo le daría un regalo que tenia guardado del año pasado ya que cuando hablamos por primera vez se acercaba su cumpleaños y decidí comprarle un peluche de hello Kitty, una de las cosas que mas adora en este mundo. Y di la idea de que nos escribiríamos una carta para en algún momento leernos dicha carta, yo pase mucho tiempo haciendo esa carta queriendo expresar todo lo que no se puede decir solo por decirle.Cuando llego el día nos fuimos en micro hacia el mcdonald’s en el plaza america llegamos y no sabíamos que pedir o que tanto y terminamos pidiendo mas comida de la que creía, pero esa ya es una rutina para nosotros comprar comida de mas.
           <p/>
        </div>
         <div class="page-number">11</div>
      </div>
    `;
}

if (i === 12) {
    page.innerHTML = `
      <div class="front">
        <div class="only-content-p">
           <p>
            Comimos, con mucha vergüenza era la primera vez comiendo enfrente del otro y para mas una hamburguesa, luego de comer fuimos a una plaza pequeña pero antes pasamos a el mall porque angela me compraría un regalo un peluche de Spiderman el primer peluche que eh recibido luego fuimos a unas bancas, nos sentamos y nos íbamos a leer las cartas tuve que recostarme en ella porque le daba vergüenza leer enfrente de mi, luego de eso le dije que le daría un regalo que cerrara los ojos y cuando los cerro con los nervios al máximo le di un beso y fue la sensación mas linda del mundo luego le di su peluche y la fui a dejar a su casa, unos de los días mas hermosos que eh vivido porque estuve con <span id="ella">"ella"</span>
           <p/>
        </div>
         <div class="page-number">12</div>
      </div>
    `;
}

 if (i === 13) {
    page.innerHTML = `
      <div class="front">
        <div class="content">
          <h2>Primer dia de cine</h2>
           <p>
        Hubo la coincidencia que cuando empezamos a hablar denuevo, en los cines iba a salir una pelicula de until dawn que se inspiraba en un juego de consola, y justamente era un juego que le gustaba mucho a angela entonces decidimos ir a verla, no nos la podíamos perder pero había un problema era mayor de dieciocho años y pues el mas grande de los dos tenia 15 entonces si era un problema muy grande, estuve días pensando que podíamos hacer, quizás podíamos intentar ir y ver si nos dejarían pasar pero, y si no? nos perderíamos la película que tanto angela quería ver así que no se me ocurrió mejor idea que pedirle a mi papa el favor de que nos acompañara solo a entrar luego el se iría y acepto tuve que comprar tres entradas pero no había problema en eso.Cuando llego el día, luego del liceo pasamos a comprar cosas para comer dentro del cine y como siempre nos pasamos comprando comida y sobro al final del todo.
           <p/>
        </div>
         <div class="page-number">13</div>
      </div>
    `;
}

if (i === 14) {
    page.innerHTML = `
      <div class="front">
        <div class="only-content-p">
           <p>
            Subimos y entramos a la sala y aunque la pelicula me gusto mucho lo que mas me encanto fue la compañia que tuve, y es que me recoste en Angela, ella me hacia cariño y cada 5 minutos miraba hacia ella y pedia besitos un aprovechador total, me hacia sentir como un niño pequeño estuvimos asi hasta el final de la pelicula luego salimos y la vino a buscar su mama, lo cual me asuste demasiado no sabria que opinaria de mi. 
           <p/>
          <img src="resources/foto1.jpg" id="foto-pagina14"> 
        </div>
         <div class="page-number">14</div>
      </div>
    `;
}

 if (i === 15) {
    page.innerHTML = `
      <div class="front">
        <div class="content">
          <h2>Vacaciones de invierno </h2>
           <p>
            quedaban dos semanas para que entráramos a las vacaciones de invierno y yo por esas fechas quería regalarle flores eternas que las hacia Genesis y Samuel, así que les pedí un ramo blanco y rosado y de hello Kitty. Yo por mi lado tenia pensado hacerle una carta también de hello Kitty como regalo de despedida por decirlo de alguna forma y darle las gracias de lo feliz que empece a ser con ella desde que empezamos a hablar nuevamente y le pedí ayuda a mi hermana para que me hiciera los dibujos de Hello Kitty y Dear Daniel así que un día fui a su casa y mientras ella hacia los dibujos yo hacia la carta estuvimos la tarde haciéndolo, yo me fui a mi casa y termine la carta con la ayuda de Genesis mandandole fotos y aunque mi idea era una termino siendo otra totalmente distinta pero con todo el amor posible porque es para <span id="ella"> "ella".</span>
           <p/>
        </div>
         <div class="page-number">15</div>
      </div>
    `;
}

if (i === 16) {
    page.innerHTML = `
      <div class="front">
        <div class="only-content-p">
           <p>
           El ultimo día de clases le pedimos con Samuel permiso a la profesora para salir antes y poder ir a buscar el ramo, así que fuimos lo recogimos me escondí afuera de la sala de Genesis y esperamos que saliera Angela a recreo, me avisaron cuando estaba cerca y salí a sorprenderla, es inexplicable el sentimiento que me da cuando la veo así de feliz, esas sonrisas me llenan la vida y me dicen que todo lo que pude gastar ya sea dinero o tiempo, valió la pena y lo volvería a hacer mil veces mas por hacerla feliz
           <p/>
          <img src="resources/Fotovacaciones.png" id="foto-pagina16"> 
        </div>
         <div class="page-number">16</div>
      </div>
    `;
}

 if (i === 17) {
    page.innerHTML = `
      <div class="front">
        <div class="content">
          <h2>Mi cumpleaños</h2>
           <p>
           Este será mas corto, paso mi cumpleaños y mi papa me organizo un cumpleaños sorpresa en la casa de mi hermana, invito a mis amigos y a Angela. Para mi fue especial ya que seria el primer cumpleaños de uno de los dos que estaríamos juntos, porque ella hace que todo se vuelva especial y único, para mi su presencia hace que todo sea mas lindo,Y porque ese día pasaron dos cosas en esa casa, Angela me dio unos regalos que me demostraron lo que se esforzó por mi una carta gigante, un cuadro y unos muñecos que somos nosotros prácticamente y realmente regalos así y el tiempo que le dedico a ella solo es algo de ella podría tener mil parejas mas pero solo ella haría algo así por mi y eso amo de ella. Y también paso algo único que ella sabrá de que hablo, un momento especial de esos que sientes una conexión y un sentimiento que desearías que ese momento sea eterno o que el tiempo se detuviera, y ella es la única que logra eso.
           <p/>
        </div>
         <div class="page-number">17</div>
      </div>
    `;
}

if (i === 18) {
    page.innerHTML = `
      <div class="front">
        <div class="only-content-p">
           <p>
           Estas son fotos de ese dia, el dia que solo una mujer, la mujer de mi vida me hizo tan feliz como solo ella puede
           <p/>
          <img src="resources/Fotocumpleaños1.png" id="foto-pagina181"> 
          <img src="resources/Fotocumpleaños2.png" id="foto-pagina182"> 
        
        </div>
         <div class="page-number">18</div>
      </div>
    `;
}

 if (i === 19) {
    page.innerHTML = `
      <div class="front">
        <div class="content">
          <h2>¿Quieres ser mi novia?</h2>
           <p>
           Un 14 de Julio de 2025 aproximadamente a las 17:20 le pedí noviazgo a Angela pero obviamente como todo de ese tipo viene con mucho tipo de planeación siempre y cuando dependiendo de como decidas hacerlo, estuve por mucho tiempo a Genesis que cuando creía que debería pedirle noviazgo a Angela y me dijo que 4 meses así que espere, pensé en pedirle un 14 porque seria el día que volvimos a hablar y era una fecha especial para los dos.Genesis me recomendó que le decorara la pieza para hacerlo y me pareció la forma mas bonita, así que hable con su mama por mensaje le pedí el permiso para pedirle noviazgo, ya que primero necesitaba  que me dejara decorarle la pieza pero era mas por respeto hacia sus padres me dijo que si y empece a preparar todo.
           <p/>
        </div>
         <div class="page-number">19</div>
      </div>
    `;
}

if (i === 20) {
    page.innerHTML = `
      <div class="front">
        <div class="only-content-p">
           <p>
          Compre las letras y lo que usaría para decorar como fotos qué teni pensando pegarlas en unas hilos colgados del techo, le pedí a mi suegra si me compraba unos pétalos para poner en la cama, dulces que a ella le gustaban y lo mas importante y especial que le pude haber comprado, un peluche de pochacco, una carta gigante y lo mas significativo en mi opinión la inicial del otro para nuestra cadena, habia pensado en comprarle un anillo pero angela siempre pierde de todo asi que me asegure. Ese dia falte a clases ya que era dia de semana y mi hermana me fue a dejar a la casa de Angela cuando llegue solo estaba la mama pero iban a venir la Homara que es la hermana mayor de Angela y la Ale que es una amiga de Homara y que me quisieron ayudar a decorar, hablamos un rato con mi suegra esperando a que llegaran, cuando llegaron la Homara subio a ordenar un poco y luego subi yo y empezamos a decorar poner las letras fotos decorar la cama y todo lo demas.
           <p/>
        </div>
         <div class="page-number">20</div>
      </div>
    `;
}

if (i === 21) {
    page.innerHTML = `
      <div class="front">
        <div class="only-content-p">
           <p>
            La verdad es que sin la ayuda de ellas que mi suegra tambien subio a ayudar no hubiera quedado tan hermoso como quedo, asi que luego de decorar almorzamos y esperamos a que llegara Angela, estaba muy nervioso y decidi grabar aunque puse un poco mal los celulares pero bueno. Cuando llego subi e hice silencio a esperar que tambien subiera y cuando subio con los nervios en todo mi ser, abrio la puerta y luego realmente fue hermoso todo lo que paso, como me abrazo, como reacciono y le encanto y obviamente me dijo que si, unos de los dias mas importantes de mi vida y de nuestra relación.
           <p/>
          <img src="resources/Noviazgo.png" id="foto-pagina21"> 
        </div>
         <div class="page-number">21</div>
      </div>
    `;
}

 if (i === 22) {
    page.innerHTML = `
      <div class="front">
        <div class="content">
          <h2>Cumpleaños de mi novia</h2>
           <p>
           Para el cumpleaños de mi novia queria estar a la altura que estuvo ella para mi cumpleaños asi que me prepare bien con mis regalos, le hice un buzon de snoopy que llevaba hace mucho tiempo queriendo hacerle e hice cartas,compre dulces pars meter dentro del buzon, le hice cuadro con hilo y clavos en forma de corazón por como una semana y con mi hermana nos organizamos para poder comprarle unas flores ya que no tenia como ir a buscarlas asi que ella me ayudo en eso, le compre lirios y peonias, y como todo regalo valió totalmente la pena, me invitaron a su cumpleaños, lo celebraron con una junta familiar y fue super lindo pero paso algo con una de sus hermanas, Camila con su actitud hizo llorar a Angela y ver eso me sirvio para darme cuenta que siempre debo estar ahi para ella. Angela ese día se veía hermosa y me di cuenta que por esos ojitos puedo mover cielo, tierra y mar, sinceramente haria todo por<span id="ella">"ella"</span>. 
           <p/>
        </div>
         <div class="page-number">22</div>
      </div>
    `;
}

if (i === 23) {
    page.innerHTML = `
      <div class="front">
        <div class="content">
          <h2>14 de febrero</h2>
           <p>
           Aunque un poco engañoso el titulo ya que este año el 14 de febrero lo tuvimos que celebrar el 13 de febrero ya que Angela no podria el 14 fue un dia hermoso, decidimos salir al centro y dimos demasiadas vueltas, muchas tiendas y muchas compras, todo lo que ella le gustaba lo comprabamos porque si le gusta algo lo minimo es darselo. Comimos en el mcdonalds y como siempre nos pasamos con la comida, tuvimos que llevarla para la casa y al llegar a la casa nos dimos nuestros regalos, yo le compre un chanchito dinosaurio demasiado lindo y le hice de nuevo la carta gigante que le hice para pedirle noviazgo  y un libro que a ella le gusta mucho.En cuanto a ella me regalo cosas hermosas un panda gigante que duermo abrazado a el todos los dias una cabina fotográfica con nuestras fotos y un tipo de cajita con dulces cartas, detalles realmente hermosos que ame.

Estuvimos el resto del dia en su casa y fue muy lindo 14 de febrero para mi.
           <p/>
        </div>
         <div class="page-number">23</div>
      </div>
    `;
}

if (i === 24) {
    page.innerHTML = `
      <div class="front">
        <div class="content">
          <h2>Gracias por todo</h2>
           <p>
           Se que diria y contaria nuestros problemas y peleas pero la verdad veo insensible recordar lo malo, lo que si puedo decir que como pareja hemos tenido demasiados problemas desde pequeñas a grandes inclusos algunos que te daban para pensar que ya no daria mas esa relación, pero con Angela aunque haya sido muy difícil siempre hemos estado ahí para cambiar, remendar nuestros errores o simplemente para seguir adelante, tengo una relación que amo pero no siempre es una relación bonita, siento que en los momentos malos uno la pasa mal pero ciertamente es necesario hasta un limite para crecer como pareja entender lo que nos rompe y lo que nos une, Amo a Ángela como a nadie en este mundo, desde que la conocí eh dado y seguiría dando todo de mi por llegar hasta el fin del mundo con ella pero se que quizas no podra ser así, ojala lo logremos pero si es que no, estoy infinitamente agradecido por las experiencias y momentos que vivimos juntos.


           <p/>
        </div>
         <div class="page-number">24</div>
      </div>
    `;
}

if (i === 25) {
    page.innerHTML = `
      <div class="front">
        <div class="only-content-p">
           <p>
            Algo tan simple junto a ella lo hacia el momento mas bonito de mi vida y agradezco en todo momento por hacer que me cruzara con esta maravillosa mujer, porque ella es única y nunca podré encontrar a alguien con su misma forma de ser y esa sensación que te da el estar con ella, difícilmente habrá alguien en este mundo que abrace, bese, me mire y me ame como ella. Angela Ignacia Figueroa Lizana gracias por todo, gracias por esos momentos y por los que nos quedan, anhelando que sean muchos, eres el amor de mi vida y no pude tener tanta suerte de encontrarte a ti, el regalo mas lindo que me ah dado la vida ah sido compartir mi vida contigo, te amo tanto que soy capaz de dar mi vida por ti, soy capaz de mojarme por ti. Mi vida nunca ah sido buena y siempre eh tenido problemas con todo conmigo mismo y con mi familia pero esa forma en como me sacas de la oscuridad para entregarme tu luz es algo inigualable y estaré agradecido de por vida lo tanto que me das, y nunca dudes de que hare lo mismo por ti, siempre que necesites algo o a alguien estare para ti, sin dudarlo y de forma incondicional 
           <p/>

        </div>
         <div class="page-number">25</div>
      </div>
    `;
}

if (i === 26) {
    page.innerHTML = `
      <div class="front">
        <div class="only-content-p">
           <p>
           Gracias por amarme y por todo lo que haces por mi, lo que eres tu, no lo es nadie más, desde que empezamos a hablar hasta hoy tus ojitos es la razón del porque voy todos los días al liceo, para hablar contigo, reír contigo y me encanta todo eso y mucho mas, no sabes cuanto realmente valoro tantas cosas de usted, como me cuida y como me ama, las veces que ah elegido nuestra relación por encima de otras cosas cuando quizás no debería, su forma de amarme y escucharme. Cuando me ayuda con mis problemas con todas esas llamadas escuchándome llorar, ahí estuvo usted diciéndome que todo iba a estar bien y fue así porque usted con el día a día me apoyo y estuvo conmigo. Gracias por ayudarme a ser mejor hombre día a día con los errores que eh cometido y usted me ah ayudado a darme cuenta y cambiar, espero que estemos juntitos toda la vida amor apoyarnos en nuestros momentos importantes, celebrarnos cada pasito y logro del otro.
           <p/>
        </div>
         <div class="page-number">26</div>
      </div>
    `;
}

if (i === 27) {
    page.innerHTML = `
      <div class="front">
        <div class="only-content-p">
           <p>
           Hasta el punto que podamos vivir juntos amor en nuestra casita como nosotros queramos, si queremos no bañarnos, si queremos pedir algo, si queremos estar todo el día en nuestra casa. Y cuando tengamos que armar nuestra casa, armemos toda nuestras cosas amor, de verdad espero que todo esto algún día se haga realidad con usted a mi lado y yo al suyo. La amo mucho amor, con mucho cariño hice esto para usted por bonito.
           <p/>
        </div>
         <div class="page-number">27</div>
      </div>
    `;
}



  }



const pages = document.querySelectorAll('.page');
const sound = document.getElementById('pageSound');

let currentPage = 0;

book.addEventListener('click', (e) => {
  const bookWidth = book.offsetWidth;
  const clickX = e.offsetX;

  if (clickX > bookWidth / 2) {
    if (currentPage < pages.length) {
      pages[currentPage].style.zIndex = 100 + currentPage;
      pages[currentPage].classList.add('flipped');
      setTimeout(() => {
      pages[currentPage - 1].classList.add('hide');
      }, 1200);
      sound.currentTime = 0;
      sound.play();
      currentPage++;
    }
  } else {
    if (currentPage > 0) {
      currentPage--;
      pages[currentPage].classList.remove('hide');
      pages[currentPage].classList.remove('flipped');
      pages[currentPage].style.zIndex = 100 - currentPage;
      sound.currentTime = 0;
      sound.play();
    }
  }
});
setTimeout(() => {
  const intro = document.getElementById('intro');
  intro.style.opacity = '0';

  setTimeout(() => {
    intro.style.display = 'none';
  }, 1500);
}, 5000);