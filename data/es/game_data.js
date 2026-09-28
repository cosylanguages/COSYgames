(function() {
    const data = {
              "fluency": [
                        {
                                  "text": "Tu rutina de la mañana ☕",
                                  "level": "starter"
                        },
                        {
                                  "text": "Un recuerdo de la infancia 🧸",
                                  "level": "starter",
                                  "hints": [
                                            "¿Qué edad tenías?",
                                            "¿Dónde estabas?",
                                            "¿Con quién estabas?",
                                            "¿Qué pasó?",
                                            "¿Por qué lo recuerdas?"
                                  ]
                        },
                        {
                                  "text": "Tu estación favorita y por qué 🍂",
                                  "level": "starter"
                        },
                        {
                                  "text": "Tu mascota o animal favorito 🐶",
                                  "level": "starter"
                        },
                        {
                                  "text": "Un día de lluvia ideal 🌧️",
                                  "level": "starter"
                        },
                        {
                                  "text": "Una habilidad que desearías tener 🎸",
                                  "level": "elementary"
                        },
                        {
                                  "text": "La mejor comida que has probado 🍜",
                                  "level": "elementary"
                        },
                        {
                                  "text": "Un lugar que quieres visitar 🗺️",
                                  "level": "elementary"
                        },
                        {
                                  "text": "Una historia divertida de tu vida 🚴",
                                  "level": "elementary"
                        },
                        {
                                  "text": "Tu tradición o fiesta favorita 🎄",
                                  "level": "elementary"
                        },
                        {
                                  "text": "Tu destino de vacaciones ideal 🌴",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "La persona más interesante que conoces 🙋",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Describe tu fin de semana perfecto ☀️",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "La última vez que intentaste algo nuevo 🎯",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Un nuevo pasatiempo que te gustaría empezar 🎨",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Cómo la tecnología cambia tu vida diaria 📱",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "¿Qué harías con 1 millón de euros? 💰",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "Un libro o película que cambió tu perspectiva 📚",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "Si pudieras vivir en cualquier lugar del mundo… 🌍",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "Algo de lo que estás orgulloso 🏆",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "Una lección de vida inesperada 💡",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "¿Qué significa la felicidad para ti? 😊",
                                  "level": "advanced"
                        },
                        {
                                  "text": "La influencia de la cultura en nuestras elecciones 🏛️",
                                  "level": "advanced"
                        },
                        {
                                  "text": "El equilibrio entre la ambición y la tranquilidad ⚖️",
                                  "level": "advanced"
                        },
                        {
                                  "text": "Una vacación que recuerdas",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Adónde fuiste?",
                                            "¿Con quién fuiste?",
                                            "¿Qué hiciste allí?",
                                            "¿Cómo era el clima?",
                                            "¿Cuál fue el mejor momento?"
                                  ]
                        },
                        {
                                  "text": "Tu restaurante o café favorito",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Dónde está?",
                                            "¿Qué comida sirven?",
                                            "¿Por qué te gusta?",
                                            "¿Con quién vas?",
                                            "¿Cuándo fue la última vez que fuiste?"
                                  ]
                        },
                        {
                                  "text": "Cómo vas al trabajo o a la escuela",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Cómo viajas — autobús, coche, bici?",
                                            "¿Cuánto tiempo tardas?",
                                            "¿Disfrutas del viaje?",
                                            "¿Es caro?",
                                            "¿Qué haces por el camino?"
                                  ]
                        },
                        {
                                  "text": "Lo que haces para relajarte",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Qué te ayuda a relajarte?",
                                            "¿Prefieres estar solo o con gente?",
                                            "¿Con qué frecuencia te relajas de verdad?",
                                            "¿Tienes un lugar favorito para relajarte?",
                                            "¿Es fácil relajarse o te resulta difícil?"
                                  ]
                        },
                        {
                                  "text": "Una película que viste hace poco",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Cómo se llamaba la película?",
                                            "¿De qué trataba?",
                                            "¿Te gustó?",
                                            "¿Quién salía en ella?",
                                            "¿La recomendarías?"
                                  ]
                        },
                        {
                                  "text": "Tu fin de semana ideal",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Qué harías el viernes por la noche?",
                                            "¿Saldrías o te quedarías en casa?",
                                            "¿Viajarías a algún lugar?",
                                            "¿Con quién pasarías el tiempo?",
                                            "¿Qué comerías?"
                                  ]
                        },
                        {
                                  "text": "Una persona a la que admiras",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Quién es esta persona?",
                                            "¿A qué se dedica?",
                                            "¿Por qué la admiras?",
                                            "¿La has conocido en persona?",
                                            "¿Qué puedes aprender de ella?"
                                  ]
                        },
                        {
                                  "text": "El destino de vacaciones de tus sueños",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Adónde irías?",
                                            "¿Por qué este lugar?",
                                            "¿Con quién irías?",
                                            "¿Qué harías allí?",
                                            "¿Cuánto tiempo te quedarías?"
                                  ]
                        },
                        {
                                  "text": "Tu relación con tu teléfono",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Cuántas horas al día usas el teléfono?",
                                            "¿Para qué lo usas más?",
                                            "¿Podrías vivir sin él una semana?",
                                            "¿Te ayuda o te distrae?",
                                            "¿Lo miras nada más levantarte por la mañana?"
                                  ]
                        },
                        {
                                  "text": "Algo divertido que te pasó",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Cuándo pasó esto?",
                                            "¿Dónde estabas?",
                                            "¿Con quién estabas?",
                                            "¿Qué pasó exactamente?",
                                            "¿Todavía te ríes de ello ahora?"
                                  ]
                        },
                        {
                                  "text": "Tus aficiones",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Qué haces en tu tiempo libre?",
                                            "¿Cuándo empezaste esta afición?",
                                            "¿La haces solo o con otros?",
                                            "¿Es cara?",
                                            "¿Qué es lo que te gusta de ella?"
                                  ]
                        },
                        {
                                  "text": "El clima donde vives",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Cómo es el clima normalmente?",
                                            "¿Cuál es tu tipo de clima favorito?",
                                            "¿Afecta el clima a tu estado de ánimo?",
                                            "¿Cuál es el peor clima que recuerdas?",
                                            "¿Qué haces los días de lluvia?"
                                  ]
                        },
                        {
                                  "text": "Un cumpleaños que recuerdas",
                                  "level": "elementary",
                                  "hints": [
                                            "¿De quién era el cumpleaños?",
                                            "¿Dónde fue la celebración?",
                                            "¿Qué hicisteis?",
                                            "¿Hubo alguna sorpresa?",
                                            "¿Qué lo hizo especial?"
                                  ]
                        },
                        {
                                  "text": "Cosas que te gustan de donde vives",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Qué es lo que más te gusta de tu pueblo o ciudad?",
                                            "¿Es un buen lugar para las familias?",
                                            "¿Qué hay para hacer allí?",
                                            "¿Qué cambiarías?",
                                            "¿Se lo recomendarías a un amigo?"
                                  ]
                        },
                        {
                                  "text": "Un domingo típico",
                                  "level": "elementary",
                                  "hints": [
                                            "¿A qué hora te despiertas el domingo?",
                                            "¿Tienes una rutina?",
                                            "¿Cocinas una comida grande?",
                                            "¿Descansas o estás ocupado?",
                                            "¿Es el domingo tu día favorito?"
                                  ]
                        },
                        {
                                  "text": "Comida de tu país",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Cuál es un plato tradicional?",
                                            "¿Lo cocinas en casa?",
                                            "¿Cuándo lo come la gente?",
                                            "¿Es difícil de preparar?",
                                            "¿Se lo recomendarías a un extranjero?"
                                  ]
                        },
                        {
                                  "text": "Algo que compraste hace poco",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Qué compraste?",
                                            "¿Dónde lo compraste?",
                                            "¿Fue caro?",
                                            "¿Lo necesitabas o simplemente lo querías?",
                                            "¿Estás contento con la compra?"
                                  ]
                        },
                        {
                                  "text": "Tu aplicación favorita",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Qué aplicación usas más?",
                                            "¿Para qué la usas?",
                                            "¿Cuándo empezaste a usarla?",
                                            "¿La recomendarías?",
                                            "¿Podrías vivir sin ella?"
                                  ]
                        },
                        {
                                  "text": "Lo que comiste ayer",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Qué desayunaste?",
                                            "¿Qué almorzaste?",
                                            "¿Cocinaste o comiste fuera?",
                                            "¿Fue un día típico de comidas?",
                                            "¿Qué fue lo mejor que comiste?"
                                  ]
                        },
                        {
                                  "text": "Un lugar que sientes como tu hogar",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Es una ciudad, una casa, un país?",
                                            "¿Cuándo sentiste esto por primera vez?",
                                            "¿Qué hace que se sienta como un hogar?",
                                            "¿El hogar es un lugar o un sentimiento?",
                                            "¿Crees que se puede tener más de un hogar?"
                                  ]
                        },
                        {
                                  "text": "Algo sobre lo que hayas cambiado de opinión",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Qué solías pensar?",
                                            "¿Qué cambió?",
                                            "¿Cuándo sucedió?",
                                            "¿Fue un cambio gradual o repentino?",
                                            "¿Cómo te sientes al respecto ahora?"
                                  ]
                        },
                        {
                                  "text": "Qué hace a un buen amigo",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Qué cualidades importan más en una amistad?",
                                            "¿Tus amigos más cercanos son similares a ti o diferentes?",
                                            "¿Pueden cambiar las amistades al envejecer?",
                                            "¿Qué es algo que no tolerarías en un amigo?",
                                            "¿Es fácil hacer amigos de verdad siendo adulto?"
                                  ]
                        },
                        {
                                  "text": "Algo que desearías haber aprendido antes",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Qué es?",
                                            "¿Por qué no lo aprendiste antes?",
                                            "¿Cómo sería tu vida diferente?",
                                            "¿Es demasiado tarde para aprenderlo ahora?",
                                            "¿Se lo enseñarías a alguien más joven?"
                                  ]
                        },
                        {
                                  "text": "Una habilidad que estés intentando mejorar",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Cuál es la habilidad?",
                                            "¿Por qué decidiste trabajar en ella?",
                                            "¿Cómo practicas?",
                                            "¿Cuál es la parte más difícil?",
                                            "¿Cuánto progreso has hecho?"
                                  ]
                        },
                        {
                                  "text": "Lo que extrañas de ser niño",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Qué es algo que extrañas sinceramente?",
                                            "¿Crees que la infancia era más fácil?",
                                            "¿Qué les preocupaba a los niños que a los adultos no?",
                                            "¿Qué hacían los adultos que no entendías entonces pero ahora sí?",
                                            "¿Volverías si pudieras?"
                                  ]
                        },
                        {
                                  "text": "Tu día de trabajo ideal",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿A qué hora empezarías y terminarías?",
                                            "¿Dónde trabajarías?",
                                            "¿Con quién trabajarías?",
                                            "¿Qué estarías haciendo?",
                                            "¿Qué tan diferente es de tu día de trabajo real?"
                                  ]
                        },
                        {
                                  "text": "Cómo ha cambiado tu vida en los últimos años",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Cuál es el cambio más grande?",
                                            "¿Fue tu elección?",
                                            "¿Ha sido para mejor?",
                                            "¿Qué se mantuvo igual?",
                                            "¿Qué crees que cambiará después?"
                                  ]
                        },
                        {
                                  "text": "Qué te hace sentir más vivo",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Hay un momento o actividad que siempre te dé energía?",
                                            "¿Involucra a otras personas o la soledad?",
                                            "¿Qué tan a menudo te sientes así?",
                                            "¿Ha cambiado esto con el tiempo?",
                                            "¿Qué te impide hacerlo más a menudo?"
                                  ]
                        },
                        {
                                  "text": "Tu mayor distracción",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Qué atrae tu atención más fácilmente?",
                                            "¿Te cuesta tiempo o energía?",
                                            "¿Has intentado cambiar esto?",
                                            "¿Es completamente malo o hay algo bueno en ello?",
                                            "¿Qué harías con el tiempo si eliminaras esta distracción?"
                                  ]
                        },
                        {
                                  "text": "Un libro, película o serie que se haya quedado contigo",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Cómo se llamaba?",
                                            "¿De qué trataba?",
                                            "¿Por qué se quedó contigo?",
                                            "¿Cambió tu forma de pensar sobre algo?",
                                            "¿Lo recomendarías y a quién?"
                                  ]
                        },
                        {
                                  "text": "Qué significa el hogar para ti",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿El hogar es una persona, un lugar o un sentimiento?",
                                            "¿Dónde te sientes más en casa?",
                                            "¿Cambió tu idea del hogar al envejecer?",
                                            "¿Puedes sentirte como en casa en un lugar nuevo?",
                                            "¿Es el hogar un lugar al que regresas o algo que llevas contigo?"
                                  ]
                        },
                        {
                                  "text": "Algo que haces diferente a la mayoría de la gente",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Qué es?",
                                            "¿Cuándo empezaste a hacerlo así?",
                                            "¿Te ha preguntado la gente alguna vez al respecto?",
                                            "¿Hace tu vida mejor?",
                                            "¿Crees que todos deberían hacerlo a tu manera?"
                                  ]
                        },
                        {
                                  "text": "Un hábito del que estés orgulloso",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Cuál es el hábito?",
                                            "¿Cuánto tiempo hace que lo tienes?",
                                            "¿Cómo lo construiste?",
                                            "¿Qué diferencia hace?",
                                            "¿Alguien te inspiró?"
                                  ]
                        },
                        {
                                  "text": "Un viaje que te sorprendió",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿A dónde ibas?",
                                            "¿Qué te sorprendió?",
                                            "¿Fue el lugar, la gente o lo que pasó?",
                                            "¿Cambió tus planes?",
                                            "¿Volverías?"
                                  ]
                        },
                        {
                                  "text": "Tu relación con las redes sociales",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Qué plataformas usas?",
                                            "¿Cuánto tiempo pasas en ellas?",
                                            "¿Afecta tu estado de ánimo?",
                                            "¿Alguna vez te has tomado un descanso?",
                                            "¿Cómo sería tu vida sin ellas?"
                                  ]
                        },
                        {
                                  "text": "Cómo se ve el éxito para ti",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Cómo defines el éxito?",
                                            "¿Es dinero, felicidad, relaciones?",
                                            "¿Ha cambiado tu definición con el tiempo?",
                                            "¿Te consideras exitoso?",
                                            "¿Te importa la opinión de los demás sobre tu éxito?"
                                  ]
                        },
                        {
                                  "text": "Tu relación con la comida",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Cocinas a menudo?",
                                            "¿La comida es solo combustible o algo más?",
                                            "¿Comes con otros o solo?",
                                            "¿Hay alguna comida fuertemente conectada a un recuerdo?",
                                            "¿Ha cambiado tu relación con la comida?"
                                  ]
                        },
                        {
                                  "text": "Algo que siempre te haga reír",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Qué es?",
                                            "¿Por qué crees que te hace reír?",
                                            "¿Puedes reírte de cosas difíciles?",
                                            "¿Tú y tus amigos se ríen de lo mismo?",
                                            "¿Es tu sentido del humor diferente en diferentes idiomas?"
                                  ]
                        },
                        {
                                  "text": "Un consejo que le darías a tu yo más joven",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Qué edad tendría tu yo más joven?",
                                            "¿Cuál sería el consejo?",
                                            "¿Por qué no lo sabías entonces?",
                                            "¿Crees que habrías escuchado?",
                                            "¿Quién te dio el mejor consejo de tu vida?"
                                  ]
                        },
                        {
                                  "text": "El futuro del mundo en 50 años",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Qué cambios tecnológicos esperas?",
                                            "¿Cómo se verá el medio ambiente?",
                                            "¿Serán diferentes las estructuras sociales?",
                                            "¿Hay algo que te preocupe?",
                                            "¿Qué te hace sentir optimista sobre el futuro?"
                                  ]
                        },
                        {
                                  "text": "El impacto del cambio climático en las comunidades locales",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Cómo ha cambiado tu zona local?",
                                            "¿A qué riesgos específicos se enfrenta la gente?",
                                            "¿Quiénes son los más vulnerables?",
                                            "¿Se están tomando suficientes medidas?",
                                            "¿Qué pueden hacer los individuos para marcar la diferencia?"
                                  ]
                        },
                        {
                                  "text": "Una creencia que tienes y que la mayoría de la gente a tu alrededor no comparte",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Cuál es esa creencia?",
                                            "¿Cuándo la formaste?",
                                            "¿Alguien te ha cuestionado alguna vez por ella?",
                                            "¿Afecta a tus relaciones?",
                                            "¿Ha cambiado alguna vez debido a una conversación?"
                                  ]
                        },
                        {
                                  "text": "Lo que harías si no tuvieses miedo",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Qué es aquello que el miedo te impide hacer?",
                                            "¿Es un miedo racional o irracional?",
                                            "¿Alguna vez el miedo te ha frenado y luego te has arrepentido?",
                                            "¿Cómo sería tu vida al otro lado de ese miedo?",
                                            "¿Qué le dirías a alguien que se enfrenta al mismo miedo?"
                                  ]
                        },
                        {
                                  "text": "Lo mejor y lo peor del lugar donde creciste",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Qué fue lo que más te marcó de ese lugar?",
                                            "¿De qué te sientes agradecido?",
                                            "¿Qué desearías que hubiese sido diferente?",
                                            "¿Cómo formó tus valores?",
                                            "¿Criarías a tus hijos allí?"
                                  ]
                        },
                        {
                                  "text": "Cómo manejas el estrés",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Cuáles son tus estrategias habituales?",
                                            "¿Crees que manejas bien el estrés?",
                                            "¿Qué es lo que más te estresa?",
                                            "¿Ha cambiado tu relación con el estrés?",
                                            "¿Qué consejo le darías a alguien que lucha contra el estrés?"
                                  ]
                        },
                        {
                                  "text": "Algo que solías juzgar y que ahora entiendes",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Qué era?",
                                            "¿Qué pensabas antes?",
                                            "¿Qué cambió tu perspectiva?",
                                            "¿Te sientes avergonzado por tu antigua visión?",
                                            "¿Te ha hecho esto menos crítico en general?"
                                  ]
                        },
                        {
                                  "text": "Lo que significa la amistad para ti como adulto",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Es la amistad adulta diferente de la infantil?",
                                            "¿Cuántos amigos cercanos tienes?",
                                            "¿Cómo mantienes las amistades a distancia?",
                                            "¿Has dejado atrás alguna amistad?",
                                            "¿Qué hace que una amistad perdure?"
                                  ]
                        },
                        {
                                  "text": "Una vez que te equivocaste por completo en algo",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Qué pasó?",
                                            "¿Cuánto tiempo pasó antes de que te dieras cuenta?",
                                            "¿Cuál fue el coste de estar equivocado?",
                                            "¿Cómo lo manejaste?",
                                            "¿Qué aprendiste?"
                                  ]
                        },
                        {
                                  "text": "Tu complicada relación con las redes sociales",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Las amas, las odias o ambas cosas?",
                                            "¿Qué obtienes de ellas que no puedas conseguir en otro lugar?",
                                            "¿Alguna vez te has sentido peor después de usarlas?",
                                            "¿Crees que cambian la forma en que te presentas?",
                                            "Si pudieras rediseñar las redes sociales, ¿qué cambiarías?"
                                  ]
                        },
                        {
                                  "text": "La cosa más sobrevalorada de la vida moderna",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Qué es?",
                                            "¿Por qué la gente le da tanto valor?",
                                            "¿Cuándo te diste cuenta de que no creías que valiera la pena tanto revuelo?",
                                            "¿Provoca tu opinión alguna reacción en los demás?",
                                            "¿Por qué cosa la sustituirías?"
                                  ]
                        },
                        {
                                  "text": "Un momento que cambió la forma en que te ves a ti mismo",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Qué pasó?",
                                            "¿Esperabas que te afectara?",
                                            "¿Te cambió de forma inmediata o gradual?",
                                            "¿Es mejor la versión de ti después de este momento?",
                                            "¿Compartirías esto con alguien cercano?"
                                  ]
                        },
                        {
                                  "text": "Algo de lo que estás orgulloso en silencio",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Qué es?",
                                            "¿Por qué en silencio y no a los cuatro vientos?",
                                            "¿Cuánto tiempo te llevó?",
                                            "¿Lo saben las personas cercanas a ti?",
                                            "¿Qué dice esto sobre lo que valoras?"
                                  ]
                        },
                        {
                                  "text": "Tu teoría personal sobre por qué la gente es como es",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Es la naturaleza, la crianza o algo más?",
                                            "¿Crees que la gente puede cambiar fundamentalmente?",
                                            "¿Alguna persona te ha sorprendido por completo alguna vez?",
                                            "¿Crees que entiendes bien a la gente?",
                                            "¿Cuál es el mayor error que cometen las personas entre sí?"
                                  ]
                        },
                        {
                                  "text": "Qué piensas sobre la ambición",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Eres una persona ambiciosa?",
                                            "¿Es la ambición siempre algo bueno?",
                                            "¿Puede la ambición dañar tu vida personal?",
                                            "¿Admiras a las personas muy ambiciosas?",
                                            "¿Cuánto es suficiente?"
                                  ]
                        },
                        {
                                  "text": "La versión de ti mismo de hace cinco años",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Qué estabas haciendo?",
                                            "¿Qué te preocupaba?",
                                            "¿Cómo pensabas que sería tu vida ahora?",
                                            "¿Qué fue lo más importante que aún no sabías?",
                                            "¿Te llevarías bien con tu 'yo' del pasado?"
                                  ]
                        },
                        {
                                  "text": "Cómo tomas decisiones difíciles",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Sigues a tu cabeza o a tu instinto?",
                                            "¿Tomas decisiones rápida o lentamente?",
                                            "¿Pides consejo o decides solo?",
                                            "¿Cuál es la decisión más difícil que has tomado nunca?",
                                            "¿Sueles sentirte en paz con tus decisiones después?"
                                  ]
                        },
                        {
                                  "text": "La nostalgia y lo que te produce",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Sobre qué sientes nostalgia?",
                                            "¿Es la nostalgia reconfortante o dolorosa?",
                                            "¿Crees que el pasado fue realmente mejor o solo diferente?",
                                            "¿Te impide la nostalgia avanzar alguna vez?",
                                            "¿Cuál es un olor, sonido o sabor que desencadena un recuerdo?"
                                  ]
                        },
                        {
                                  "text": "Fama: ¿castigo o recompensa?",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Querrías ser famoso?",
                                            "¿Qué tipo de fama tendrías?",
                                            "¿Qué perderías?",
                                            "¿Crees que la mayoría de los famosos son felices?",
                                            "¿Cuál es la diferencia entre fama y respeto?"
                                  ]
                        },
                        {
                                  "text": "Qué te aburre y qué te fascina",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿De qué tema o actividad podrías hablar durante horas?",
                                            "¿Qué es lo que no soportas bajo ningún concepto?",
                                            "¿Dice algo sobre ti como persona lo que te fascina?",
                                            "¿Se ha vuelto interesante algo que antes te aburría?",
                                            "¿Qué es algo que encuentras fascinante y que sorprende a la gente?"
                                  ]
                        },
                        {
                                  "text": "Una vez que tuviste que empezar de nuevo",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Qué pasó antes del reinicio?",
                                            "¿Fue una elección o la vida te obligó a ello?",
                                            "¿Qué fue lo más difícil de empezar de nuevo?",
                                            "¿Qué conservaste de antes?",
                                            "¿Te alegras de que sucediera?"
                                  ]
                        },
                        {
                                  "text": "Lo que la gente entiende mal sobre ti",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Cuál es el malentendido más común?",
                                            "¿De dónde viene?",
                                            "¿Te molesta?",
                                            "¿Intentas corregirlo o lo dejas pasar?",
                                            "¿Hay algo de verdad en ello, después de todo?"
                                  ]
                        },
                        {
                                  "text": "Si el lugar donde creciste te hizo quien eres",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Qué cosas específicas de ese lugar te formaron?",
                                            "¿Es la gente, la cultura, el paisaje, el idioma?",
                                            "¿Podrías haberte convertido en la misma persona en otro lugar?",
                                            "¿Te sientes definido por tus orígenes o te resistes a ello?",
                                            "¿Cómo habrías sido si hubieras crecido en un lugar completamente diferente?"
                                  ]
                        },
                        {
                                  "text": "La brecha entre quién eres y quién presentas al mundo",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Existe una brecha significativa entre tu yo público y el privado?",
                                            "¿Es esta brecha saludable o te cuesta algo?",
                                            "¿In qué contextos eres más plenamente tú mismo?",
                                            "¿La gente que te conoce bien ve a una persona diferente de la que ven tus colegas o extraños?",
                                            "¿Es la actuación de la identidad inevitable o es algo a lo que resistirse?"
                                  ]
                        },
                        {
                                  "text": "Si las personas cambian fundamentalmente o simplemente se revelan poco a poco",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Puedes pensar en alguien que haya cambiado genuinamente, o simplemente no lo conocías lo suficiente antes?",
                                            "¿Qué se necesita para que una persona cambie de verdad?",
                                            "¿Crees que has cambiado o has permanecido esencialmente tú mismo?",
                                            "¿Qué dice sobre las relaciones si las personas no cambian realmente?",
                                            "¿Es necesaria la creencia de que las personas pueden cambiar para el amor y la amistad?"
                                  ]
                        },
                        {
                                  "text": "Lo que has aprendido del fracaso que no podrías haber aprendido del éxito",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Cuál es un fracaso específico que te enseñó algo insustituible?",
                                            "¿Es el fracaso realmente un mejor maestro o es solo algo que la gente dice para sentirse mejor?",
                                            "¿Crees que manejas bien el fracaso?",
                                            "¿Cuál es la forma de fracaso más dolorosa para ti personalmente?",
                                            "¿Existe tal cosa como un fracaso que no te enseñe nada?"
                                  ]
                        },
                        {
                                  "text": "Tu relación con la certeza y la duda",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Eres alguien que necesita certeza o puedes vivir cómodamente con la ambigüedad?",
                                            "¿En qué áreas de tu vida te sientes seguro y en cuáles dudas?",
                                            "¿Alguna vez un período de profunda duda ha resultado ser valioso?",
                                            "¿Confías en las personas que parecen estar completamente seguras de todo?",
                                            "¿Cuál es la diferencia entre el escepticismo saludable y la duda paralizante?"
                                  ]
                        },
                        {
                                  "text": "Las cosas que traes de tu infancia sin darte cuenta",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Hay patrones en tu comportamiento que puedas rastrear hasta experiencias tempranas?",
                                            "¿Cuándo notaste por primera vez que algo de la infancia todavía operaba en ti?",
                                            "¿Es posible comprender plenamente las influencias invisibles sobre quién eres?",
                                            "¿Cuáles de estos patrones te sirven y cuáles no?",
                                            "¿Cuánta responsabilidad tenemos de examinar nuestras tendencias heredadas?"
                                  ]
                        },
                        {
                                  "text": "Lo que protegerías incluso si te costara algo",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Qué es algo que no comprometerías, pase lo que pase?",
                                            "¿Ha sido probado esto alguna vez?",
                                            "¿Es un valor, una relación o algo más?",
                                            "¿Crees que todo el mundo tiene algo así o es raro?",
                                            "¿Saber esto sobre ti mismo te dice en qué crees realmente?"
                                  ]
                        },
                        {
                                  "text": "Lo que crees que la gente se equivoca sobre la felicidad",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Cuál es el error más común que comete la gente en la búsqueda de la felicidad?",
                                            "¿Es la felicidad algo que encuentras o algo que construyes?",
                                            "¿Crees que eres feliz? ¿Lo sabes siquiera?",
                                            "¿Existe una tensión entre la felicidad y el significado?",
                                            "¿Ha cambiado significativamente tu idea de la felicidad?"
                                  ]
                        },
                        {
                                  "text": "El papel de la suerte en tu vida",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Cuánto de donde estás ahora es suerte frente a esfuerzo?",
                                            "¿Es incómodo reconocer que la suerte jugó un papel?",
                                            "¿Ha trabajado la suerte en tu contra?",
                                            "¿Crees que la gente sobreestima cuánto control tiene?",
                                            "¿Cuál es la implicación ética de la suerte? ¿Afecta lo que nos debemos unos a otros?"
                                  ]
                        },
                        {
                                  "text": "Si la ambición y la satisfacción pueden coexistir",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Crees que puedes querer más y estar en paz simultáneamente?",
                                            "¿Alguna vez has tenido que elegir entre las dos?",
                                            "¿Admiras a las personas que están satisfechas o parece que se rinden?",
                                            "¿Es la ambición una forma de insatisfacción por definición?",
                                            "¿Cómo se vería en tu vida tener ambas?"
                                  ]
                        },
                        {
                                  "text": "Lo que les debes a las personas que te formaron",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Sientes una sensación de deuda con las personas que te formaron?",
                                            "¿Es esta deuda emocional, práctica o ambas?",
                                            "¿Qué pasa si te formaron de maneras que fueron dañinas?",
                                            "¿Cómo honras la influencia de alguien sin quedar atrapado por ella?",
                                            "¿Puedes separar la gratitud de la obligación?"
                                  ]
                        },
                        {
                                  "text": "Lo más útil que te han dicho jamás",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Qué fue y quién lo dijo?",
                                            "¿Entendiste inmediatamente su valor o solo más tarde?",
                                            "¿Lo transmites?",
                                            "¿La sabiduría útil es siempre simple o la complejidad también puede ser útil?",
                                            "¿Qué es algo que desearías que alguien te hubiera dicho y que nadie hizo?"
                                  ]
                        },
                        {
                                  "text": "Algo de la vida moderna que te preocupa genuinamente",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Qué es: la tecnología, la política, las tendencias sociales, el medio ambiente?",
                                            "¿Es esta preocupación nueva o se ha ido acumulando?",
                                            "¿Crees que otros la comparten o te sientes solo en ella?",
                                            "¿Preocuparte por ello cambia la forma en que vives?",
                                            "¿Tienes alguna esperanza de que mejore?"
                                  ]
                        },
                        {
                                  "text": "La diferencia entre estar solo y sentirse solo",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Eres alguien que disfruta de la soledad?",
                                            "¿Has experimentado la soledad en medio de una multitud?",
                                            "¿Crees que la vida moderna hace que la soledad sea más o menos común?",
                                            "¿Se puede estar solo en una relación?",
                                            "¿Cuál es el remedio para la soledad: más conexión o algo más profundo?"
                                  ]
                        },
                        {
                                  "text": "Lo que significa vivir bien, y si estás cerca de lograrlo",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Cómo defines una vida bien vivida?",
                                            "¿A qué vida miras y piensas: eso está cerca?",
                                            "¿Estás en un camino hacia ello o te alejas?",
                                            "¿Piensas en esto a menudo o la vida diaria te distrae?",
                                            "¿Vivir bien es algo que planeas o algo que sucede por accidente?"
                                  ]
                        },
                        {
                                  "text": "Si confías en tu propia memoria",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Alguna vez un recuerdo ha resultado ser falso?",
                                            "¿Crees que editamos nuestros recuerdos para adaptarlos a una narrativa sobre nosotros mismos?",
                                            "¿Cuál es el recuerdo más vívido que tienes y qué tan confiable crees que es?",
                                            "¿Importa si un recuerdo es exacto si se siente real?",
                                            "¿Qué dice la memoria sobre la identidad? Si tus recuerdos cambiaran, ¿serías una persona diferente?"
                                  ]
                        },
                        {
                                  "text": "Las instituciones y si nos sirven",
                                  "level": "advanced",
                                  "hints": [
                                            "Piensa en una institución (salud, educación, gobierno) y evalúala con honestidad.",
                                            "¿En qué punto una institución deja de cumplir su propósito?",
                                            "¿Alguna vez te has sentido defraudado por una institución en la que confiabas?",
                                            "¿Es posible la reforma o las instituciones deben ser reemplazadas por completo?",
                                            "¿Cómo sería una versión funcional de la institución elegida?"
                                  ]
                        },
                        {
                                  "text": "Las historias que cuentas sobre ti mismo",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Cuál es la historia central que cuentas sobre tu propia vida?",
                                            "¿Qué parte es exacta y cuánto es construcción?",
                                            "¿Ha cambiado la historia con el tiempo?",
                                            "¿Qué sucede con nuestro sentido de identidad cuando la historia es cuestionada?",
                                            "¿Quién eres si desnudas la historia?"
                                  ]
                        },
                        {
                                  "text": "Qué significa la comunidad en un mundo fragmentado",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Te sientes parte de una comunidad?",
                                            "¿Es la comunidad en línea una comunidad real?",
                                            "¿Qué se ha perdido y qué se ha ganado en la forma en que se forman las comunidades hoy en día?",
                                            "¿Qué requiere la comunidad de sus miembros?",
                                            "¿Se puede crear una comunidad deliberadamente o tiene que crecer orgánicamente?"
                                  ]
                        },
                        {
                                  "text": "Cómo sabes cuándo confiar en alguien",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Qué señales buscas?",
                                            "¿Tu instinto se ha equivocado alguna vez por completo?",
                                            "¿Crees que eres demasiado confiado, no lo suficiente o estás bien calibrado?",
                                            "¿La confianza se da o se gana? ¿Importa esa distinción?",
                                            "¿Qué rompe la confianza irrevocablemente para ti?"
                                  ]
                        },
                        {
                                  "text": "Complejidad de la conciencia humana",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Qué define la conciencia: la percepción, la autorreflexión o algo más?",
                                            "¿Es la conciencia un subproducto de procesos biológicos o algo fundamental?",
                                            "¿Podrá la inteligencia artificial alcanzar alguna vez una conciencia genuina?",
                                            "¿Cómo desafía el 'problema difícil' de la conciencia las visiones materialistas?",
                                            "¿Cuál es la relación entre la conciencia y el cerebro físico?"
                                  ]
                        },
                        {
                                  "text": "Si el yo es algo que descubrimos o construimos",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Hay un 'tú' fijo esperando a ser descubierto, o te haces continuamente mediante elecciones y contexto?",
                                            "¿Qué pasa con la identidad cuando el contexto cambia radicalmente: enfermedad, migración, pérdida?",
                                            "¿Es la narrativa que mantienes sobre ti mismo un descubrimiento o una invención?",
                                            "¿Importa la pregunta para cómo vives, o es puramente filosófica?",
                                            "¿Si el yo es construido, de qué somos responsables al construirlo?"
                                  ]
                        },
                        {
                                  "text": "La ética de lo que elegimos olvidar",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Tenemos una relación moral con nuestro propio olvido?",
                                            "¿Es la memoria selectiva una forma de deshonestidad con nosotros mismos?",
                                            "¿Puede el perdón requerir el olvido, o es un error de categoría?",
                                            "¿Qué revela sobre sí misma una sociedad que elige colectivamente olvidar?",
                                            "¿Existe tal cosa como la amnesia ética, para individuos o naciones?"
                                  ]
                        },
                        {
                                  "text": "Si el lenguaje da forma a lo que podemos pensar o solo a lo que podemos decir",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Aprender otro idioma te ha dado acceso a pensamientos que no podías formular del todo en tu lengua materna?",
                                            "¿Es la hipótesis de Sapir-Whorf una metáfora poética o una pretensión epistemológica genuina?",
                                            "¿Hay experiencias que se resisten a todo lenguaje?",
                                            "¿Qué significa sentir algo que no puedes nombrar?",
                                            "¿El lenguaje que usas en tu monólogo interior cambia cómo te experimentas a ti mismo?"
                                  ]
                        },
                        {
                                  "text": "La relación entre libertad y responsabilidad en tu propia vida",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Dónde te sientes más libre y qué has pagado por esa libertad?",
                                            "¿Se compra siempre la libertad a expensas de alguien más?",
                                            "¿Experimentas tus responsabilidades como limitaciones o como lo que da sentido a tu libertad?",
                                            "¿Puede una persona ser genuinamente libre sin las condiciones materiales para ejercer esa libertad?",
                                            "¿A qué renunciarías para ser más libre, y qué revela tu respuesta?"
                                  ]
                        },
                        {
                                  "text": "Lo que la nostalgia hace realmente cuando te visita",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Es la nostalgia duelo, consuelo, distorsión, o las tres cosas simultáneamente?",
                                            "¿Confías en los sentimientos nostálgicos o los tratas con sospecha?",
                                            "¿Es aquello por lo que sientes nostalgia un pasado real o una versión editada?",
                                            "¿Qué impide la nostalgia y qué hace posible?",
                                            "¿Puede una sociedad ser nostálgica de la misma manera que un individuo, y con los mismos peligros?"
                                  ]
                        },
                        {
                                  "text": "Si comprender algo siempre lo disminuye",
                                  "level": "advanced",
                                  "hints": [
                                            "Piensa en algo bello o misterioso: ¿comprenderlo lo hace menos bello?",
                                            "¿Hay valor en no saber, o es solo romanticismo?",
                                            "¿Pueden coexistir la explicación científica y el asombro estético, o una coloniza a la otra?",
                                            "¿Hay algo que evites deliberadamente comprender por miedo a perder su poder sobre ti?",
                                            "¿Qué revela esta pregunta sobre los límites del racionalismo?"
                                  ]
                        },
                        {
                                  "text": "La diferencia entre tus valores declarados y tus valores revelados",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Qué dicen tus elecciones reales —no tus creencias declaradas— que valoras más?",
                                            "¿Hay una brecha dolorosa entre ambas?",
                                            "¿Es la brecha evidencia de hipocresía o de la dificultad genuina de vivir según los principios de uno?",
                                            "¿Puedes cerrar la brecha, o siempre persiste cierta distancia entre lo ideal y lo real?",
                                            "¿A qué tendrías que renunciar para alinear más tu vida con lo que dices creer?"
                                  ]
                        },
                        {
                                  "text": "Si la honestidad radical es una virtud o una forma de autocomplacencia",
                                  "level": "advanced",
                                  "hints": [
                                            "¿El impulso de 'decir las cosas como son' trata sobre el bienestar de la otra persona o sobre tu propio alivio?",
                                            "¿Es la amabilidad a veces la elección más valiente?",
                                            "¿Dónde está la línea entre la honestidad y la crueldad?",
                                            "¿Exigir honestidad total en las relaciones refleja intimidad o control?",
                                            "¿Puedes pensar en un momento en que la honestidad radical hizo más daño que bien?"
                                  ]
                        },
                        {
                                  "text": "Si el gran arte debe desafiar o consolar",
                                  "level": "advanced",
                                  "hints": [
                                            "¿A qué recurres realmente cuando sientes dolor: a la dificultad o al consuelo?",
                                            "¿Hay arte que logre hacer ambas cosas simultáneamente?",
                                            "¿Es el arte de consuelo menos serio que el arte que desafía, o es una distinción esnob?",
                                            "¿Cuál crees que es la obligación primordial del arte?",
                                            "¿Hay algún arte que te haya cambiado de una manera que el consuelo nunca podría haberlo hecho?"
                                  ]
                        },
                        {
                                  "text": "La demanda de equilibrio y si otorga una falsa legitimidad",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Es 'presentar ambas partes' siempre justo, o puede distorsionar la realidad?",
                                            "¿Hay una diferencia entre el equilibrio y la falsa equivalencia?",
                                            "¿Quién decide qué posiciones merecen una plataforma?",
                                            "¿Puede el equilibrio periodístico coexistir con estándares epistémicos?",
                                            "¿Cuál es el costo de dar plataforma a una posición en nombre de la equidad?"
                                  ]
                        },
                        {
                                  "text": "Si el progreso moral es real o solo una moda moral",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Nuestra confianza ética de hoy es un signo de progreso genuino o el mismo provincianismo con ropa nueva?",
                                            "¿Qué significaría que el progreso moral fuera real?",
                                            "¿Puedes pensar en algo que creamos actualmente y que las generaciones futuras miren con horror?",
                                            "¿La relatividad de la moda moral socava la idea de que algo está realmente mal?",
                                            "¿Es la humildad moral compatible con la convicción moral?"
                                  ]
                        },
                        {
                                  "text": "Las partes de ti mismo que más te cuesta articular",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Hay algo que sientes pero para lo que no encuentras lenguaje?",
                                            "¿La dificultad es sobre el lenguaje o sobre la cosa misma?",
                                            "¿Crees que alguna experiencia interna es genuinamente privada, inaccesible incluso para ti mismo?",
                                            "¿Qué significaría comprender plenamente tu propia interioridad?",
                                            "¿Necesita lo inefable ser articulado para ser real?"
                                  ]
                        },
                        {
                                  "text": "Las implicaciones políticas del contentamiento",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Estar genuinamente contento en un mundo injusto es un fallo moral?",
                                            "¿Es el cultivo de la paz personal compatible con una conciencia política?",
                                            "¿Se beneficia el capitalismo de una población contenta?",
                                            "¿Hay una versión del contentamiento que no sea quietismo político?",
                                            "¿Cómo navegas personalmente la tensión entre la paz interior y el compromiso exterior?"
                                  ]
                        },
                        {
                                  "text": "Memoria, identidad y lo que queda cuando ambas cambian",
                                  "level": "advanced",
                                  "hints": [
                                            "Si tus recuerdos fueran alterados sistemáticamente, ¿seguirías siendo tú?",
                                            "¿En qué consiste realmente la continuidad del yo?",
                                            "¿Es la persona que recuerdas ser la misma que la que habla ahora?",
                                            "¿Qué sucede con la identidad en la experiencia de una pérdida o transformación radical?",
                                            "¿Importa la cuestión de la identidad personal para cómo nos tratamos unos a otros, legal y éticamente?"
                                  ]
                        },
                        {
                                  "text": "Si la vida examinada siempre vale la pena vivirla",
                                  "level": "advanced",
                                  "hints": [
                                            "Sócrates dijo que la vida no examinada no vale la pena vivirla, ¿estás de acuerdo?",
                                            "¿Hay un costo en el examen: una especie de parálisis o pérdida de la inocencia?",
                                            "¿Puede el examen convertirse en su propia forma de evitación?",
                                            "¿Hay personas que viven profunda y bien sin mucho autoexamen?",
                                            "¿Qué crees que te ha costado y qué te ha dado tu propio grado de autoexamen?"
                                  ]
                        },
                        {
                                  "text": "La cuestión de qué debes a los extraños",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Tienes obligaciones con personas que nunca conocerás?",
                                            "¿Hasta dónde llegan tus obligaciones morales: a tu vecindario, tu nación, el mundo?",
                                            "¿La distancia física o cultural disminuye la obligación o es una racionalización?",
                                            "¿Cuál es la diferencia entre caridad y justicia?",
                                            "¿Cómo vives realmente en relación con esta pregunta?"
                                  ]
                        },
                        {
                                  "text": "Las historias que las civilizaciones cuentan sobre sí mismas",
                                  "level": "advanced",
                                  "hints": [
                                            "Cada sociedad tiene un mito fundacional: ¿cuál es el tuyo y qué tan preciso es?",
                                            "¿Qué elige olvidar una nación tanto como lo que elige recordar?",
                                            "¿Es la identidad nacional una ficción útil o peligrosa?",
                                            "¿Puede una sociedad tener un relato más honesto de sí misma sin perder la cohesión?",
                                            "¿Qué historia contarías sobre tu propia civilización si tuvieras que ser totalmente honesto?"
                                  ]
                        },
                        {
                                  "text": "Si cualquier texto puede ser traducido completamente",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Has experimentado algo en otro idioma que se haya resistido a la traducción?",
                                            "¿Es la intraducibilidad de ciertas palabras evidencia de que el lenguaje da forma al pensamiento?",
                                            "¿Qué perdemos y qué ganamos en la traducción?",
                                            "¿Es una traducción excelente una forma de creación o una forma de pérdida?",
                                            "¿Qué nos dice la traducción sobre los límites de la comprensión entre culturas?"
                                  ]
                        },
                        {
                                  "text": "La experiencia de sostener cosas contradictorias como verdaderas simultáneamente",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Puedes amar a alguien y estar resentido con él al mismo tiempo sin que uno anule al otro?",
                                            "¿Es la capacidad de sostener la contradicción un signo de madurez o de confusión?",
                                            "¿Hay posiciones políticas o morales que sostengas que estén en tensión genuina?",
                                            "¿La demanda de coherencia en nuestras creencias refleja racionalismo o rigidez?",
                                            "¿Qué es algo que crees que contradice otra cosa que también crees?"
                                  ]
                        },
                        {
                                  "text": "Lo que significa que un día no existirás",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Piensas en tu propia mortalidad regularmente, ocasionalmente o casi nunca?",
                                            "¿La conciencia de la muerte ha dado forma a cómo vives o a lo que valoras?",
                                            "¿Es racional el miedo a la muerte, o es una confusión sobre lo que se pierde?",
                                            "¿Encuentras consuelo en alguna forma particular de pensar sobre la mortalidad?",
                                            "¿Qué hace posible la mortalidad que la inmortalidad podría no permitir?"
                                  ]
                        }
              ],
              "opinions": [
                        {
                                  "text": "Las redes sociales hacen más daño que bien.",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Todos deberían aprender al menos dos idiomas.",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "El trabajo desde casa es mejor que el trabajo en la oficina.",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "El dinero no compra la felicidad.",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "La tecnología nos hace menos sociables.",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Nunca es tarde para aprender algo nuevo.",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Viajar es la mejor forma de educación.",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Los animales no deberían estar en zoológicos.",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "La semana laboral de 4 días aumenta la productividad.",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "El transporte público debería ser gratuito para todos.",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "La renta básica universal es necesaria para las economías futuras.",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "La IA generativa nunca podrá reemplazar la creatividad artística humana.",
                                  "level": "advanced"
                        },
                        {
                                  "text": "La privacidad total es imposible en la era digital actual.",
                                  "level": "advanced"
                        },
                        {
                                  "text": "Los fines de semana son demasiado cortos.",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Qué haces los fines de semana?",
                                            "¿Cómo te sientes el domingo por la noche?",
                                            "¿Qué harías con un fin de semana de tres días?",
                                            "¿Trabajas o estudias los fines de semana?",
                                            "¿Cuál es el fin de semana perfecto para ti?"
                                  ]
                        },
                        {
                                  "text": "Es de mala educación llegar tarde.",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Sueles llegar a tiempo?",
                                            "¿Cuánto tiempo esperas a un amigo?",
                                            "¿Está bien llegar 10 minutos tarde?",
                                            "¿Es importante la puntualidad en tu cultura?",
                                            "¿Qué haces cuando alguien llega muy tarde?"
                                  ]
                        },
                        {
                                  "text": "La gente es más amable en los pueblos pequeños.",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Dónde vives: en un pueblo o en una ciudad?",
                                            "¿Son amigables tus vecinos?",
                                            "¿Habla la gente con extraños donde vives?",
                                            "¿Has vivido alguna vez en un tipo de lugar diferente?",
                                            "¿Qué hace que un lugar sea amigable?"
                                  ]
                        },
                        {
                                  "text": "Tener una mascota te hace más feliz.",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Tienes mascota?",
                                            "¿Cuál es la mejor mascota para una person ocupada?",
                                            "¿Son caras las mascotas?",
                                            "¿Puede una mascota ser un amigo?",
                                            "¿Qué hay que hacer para cuidar bien a una mascota?"
                                  ]
                        },
                        {
                                  "text": "Se puede saber mucho de alguien por sus zapatos.",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Miras los zapatos de la gente?",
                                            "¿Qué dicen tus zapatos de ti?",
                                            "¿Es importante la moda para ti?",
                                            "¿Se puede juzgar a una persona por su apariencia?",
                                            "¿Qué más te dice algo sobre el carácter de una persona?"
                                  ]
                        },
                        {
                                  "text": "Está bien comer solo en un restaurante.",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Has comido solo en un restaurante?",
                                            "¿Te resulta cómodo?",
                                            "¿Es mejor la comida con otras personas?",
                                            "¿Ves a mucha gente comiendo sola?",
                                            "¿Qué haces cuando comes solo?"
                                  ]
                        },
                        {
                                  "text": "Aprender un idioma es más fácil cuando eres joven.",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Qué edad tenías cuando empezaste a aprender este idioma?",
                                            "¿Crees que la edad importa para aprender idiomas?",
                                            "¿Qué es lo más difícil de aprender un idioma?",
                                            "¿Conoces a alguien que haya aprendido un idioma de adulto?",
                                            "¿Qué es lo que más te ayuda cuando estudias?"
                                  ]
                        },
                        {
                                  "text": "El transporte público es mejor que tener un coche.",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Cómo te desplazas por tu ciudad?",
                                            "¿Es bueno el transporte público donde vives?",
                                            "¿Cuáles son los problemas de tener un coche?",
                                            "¿Es caro viajar en transporte público?",
                                            "¿Qué cambiarías del transporte en tu ciudad?"
                                  ]
                        },
                        {
                                  "text": "Es difícil aburrirse cuando tienes un teléfono.",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Cuántas horas al día usas el teléfono?",
                                            "¿Para qué lo usas más?",
                                            "¿Te aburrias antes de los smartphones?",
                                            "¿Es bueno el aburrimiento a veces?",
                                            "¿Podrías dejar tu teléfono en casa por un día?"
                                  ]
                        },
                        {
                                  "text": "Cocinar en casa siempre es mejor que comer fuera.",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Con qué frecuencia cocinas en casa?",
                                            "¿Qué es más fácil: cocinar o ir a un restaurante?",
                                            "¿Es caro comer fuera donde vives?",
                                            "¿Cuál es tu restaurante favorito?",
                                            "¿Cuál es tu mejor comida casera?"
                                  ]
                        },
                        {
                                  "text": "Todo el mundo debería intentar vivir en el extranjero durante un año.",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Has vivido en otro país?",
                                            "¿Qué sería difícil de vivir en el extranjero?",
                                            "¿Qué sería emocionante?",
                                            "¿Qué país elegirías?",
                                            "¿Vivir en el extranjero cambia a una persona?"
                                  ]
                        },
                        {
                                  "text": "Los superhéroes son más interesantes que los héroes reales.",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Quién es tu superhéroe favorito?",
                                            "¿Se te ocurre un héroe de la vida real?",
                                            "¿Qué hace que alguien sea un héroe?",
                                            "¿Por qué la gente ama a los superhéroes?",
                                            "¿Son más importantes los héroes reales?"
                                  ]
                        },
                        {
                                  "text": "Es importante hacer la cama todas las mañanas.",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Haces la cama todos los días?",
                                            "¿Te hace sentir mejor una habitación ordenada?",
                                            "¿Es esto importante o no?",
                                            "¿Cuál es tu rutina matutina?",
                                            "¿Qué pequeños hábitos tienes?"
                                  ]
                        },
                        {
                                  "text": "Ir de compras es un pasatiempo.",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Te gusta ir de compras?",
                                            "¿Compras online o en tiendas?",
                                            "¿Cuánto tiempo pasas comprando?",
                                            "¿Es relajante ir de compras?",
                                            "¿Qué compras con más frecuencia?"
                                  ]
                        },
                        {
                                  "text": "Viajar solo es mejor que viajar con amigos.",
                                  "level": "elementary",
                                  "hints": [
                                            "¿Has viajado solo?",
                                            "¿Qué tiene de bueno viajar solo?",
                                            "¿Qué tiene de bueno viajar con otros?",
                                            "¿Te sientes solo cuando viajas solo?",
                                            "¿Cuál es el mejor viaje que has hecho?"
                                  ]
                        },
                        {
                                  "text": "Ser hijo único es mejor que tener hermanos.",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Eres hijo único o tienes hermanos o hermanas?",
                                            "¿Cuáles son las ventajas de tener hermanos?",
                                            "¿Cuáles son las ventajas de estar solo?",
                                            "¿Los hermanos siempre discuten?",
                                            "¿Cómo afecta la estructura de tu familia a tu personalidad?"
                                  ]
                        },
                        {
                                  "text": "Decir una mentira piadosa es a veces lo más amable que se puede hacer.",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Puedes pensar en una situación donde una mentira sea amable?",
                                            "¿Es la honestidad siempre la mejor política?",
                                            "¿Alguna vez has dicho una mentira piadosa?",
                                            "¿Cómo te sientes cuando alguien miente para protegerte?",
                                            "¿Hay alguna diferencia entre una mentira y no decir toda la verdad?"
                                  ]
                        },
                        {
                                  "text": "Las redes sociales hacen que la gente se sienta peor consigo misma.",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Cómo te sientes después de navegar por las redes sociales?",
                                            "¿Te comparas con la gente en línea?",
                                            "¿Crees que las redes sociales muestran la vida real?",
                                            "¿Alguna vez te has tomado un descanso de las redes sociales?",
                                            "¿Cómo sería la vida sin ellas?"
                                  ]
                        },
                        {
                                  "text": "No hace falta viajar para entender el mundo.",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Se puede aprender sobre el mundo a través de libros y películas?",
                                            "¿Qué enseña viajar que nada más puede enseñar?",
                                            "¿Está viajar al alcance de todos?",
                                            "¿Has aprendido algo importante sin salir de tu país?",
                                            "¿Qué es lo más importante que te ha enseñado viajar?"
                                  ]
                        },
                        {
                                  "text": "La gente a la que no le gustan los animales es un poco sospechosa.",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Confías en la gente a la que no le gustan los animales?",
                                            "¿Gustar de los animales dice algo sobre el carácter de una persona?",
                                            "¿Hay que amar a los animales para ser una buena persona?",
                                            "¿Qué piensas cuando conoces a alguien que tiene miedo a los animales?",
                                            "¿Es justo decir esto?"
                                  ]
                        },
                        {
                                  "text": "Trabajar desde casa hace que la gente sea más perezosa.",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Trabajas o estudias desde casa?",
                                            "¿Eres más o menos productivo en casa?",
                                            "¿Cuáles son las mayores distracciones en casa?",
                                            "¿Extrañas la estructura de una oficina o un aula?",
                                            "¿Crees que el trabajo remoto es el futuro?"
                                  ]
                        },
                        {
                                  "text": "Las primeras impresiones casi siempre son erróneas.",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Juzgas a la gente rápidamente?",
                                            "¿Alguna vez tu primera impresión de alguien ha sido completamente errónea?",
                                            "¿Qué es lo primero que notas en una persona?",
                                            "¿Es justo juzgar a alguien por un primer encuentro?",
                                            "¿Puedes cambiar la primera impresión que alguien tiene de ti?"
                                  ]
                        },
                        {
                                  "text": "Las películas románticas dan a la gente expectativas poco realistas.",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Ves películas románticas?",
                                            "¿Crees que afectan a cómo la gente piensa sobre las relaciones?",
                                            "¿Es el amor real como en las películas?",
                                            "¿Qué es lo poco realista de las películas románticas?",
                                            "¿Son diferentes las historias de amor en tu cultura?"
                                  ]
                        },
                        {
                                  "text": "Ser divertido es más útil que ser inteligente.",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Preferirías ser divertido o inteligente?",
                                            "¿Puedes pensar en una situación en la que el humor ayudara más que la inteligencia?",
                                            "¿Es la gente divertida más popular?",
                                            "¿Pueden la inteligencia y el humor coexistir?",
                                            "¿Qué tipo de sentido del humor tienes?"
                                  ]
                        },
                        {
                                  "text": "El silencio en la mesa no es incómodo, es pacífico.",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Hablas mucho durante las comidas?",
                                            "¿Es el silencio incómodo para ti?",
                                            "¿Comes con el teléfono?",
                                            "¿Crees que las comidas deberían ser sociales?",
                                            "¿De qué sueles hablar en la cena?"
                                  ]
                        },
                        {
                                  "text": "Es más fácil pedir perdón que pedir permiso.",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Pides permiso o actúas primero?",
                                            "¿Puedes pensar en un momento en el que esto funcionara bien?",
                                            "¿Es esta una forma responsable de comportarse?",
                                            "¿Son algunas personas demasiado cautelosas?",
                                            "¿Qué dice esto sobre la personalidad de alguien?"
                                  ]
                        },
                        {
                                  "text": "La gente lee demasiado las noticias y eso le genera ansiedad.",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Con qué frecuencia revisas las noticias?",
                                            "¿Afectan las noticias a tu estado de ánimo?",
                                            "¿Es importante mantenerse informado?",
                                            "¿Cómo eliges qué noticias seguir?",
                                            "¿Alguna vez te has tomado un descanso de las noticias?"
                                  ]
                        },
                        {
                                  "text": "Nunca puedes conocer realmente a alguien hasta que viajas con él.",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Has viajado con un amigo o pareja?",
                                            "¿Qué descubriste sobre ellos?",
                                            "¿Qué situaciones revelan el verdadero carácter de alguien?",
                                            "¿Crees que conoces bien a tus amigos?",
                                            "¿Qué más te muestra quién es alguien realmente?"
                                  ]
                        },
                        {
                                  "text": "La cultura del gimnasio ha ido demasiado lejos.",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Vas al gimnasio?",
                                            "¿Qué importancia tiene el fitness para ti?",
                                            "¿Crees que la gente está obsesionada con su cuerpo?",
                                            "¿Hay presión para lucir de cierta manera?",
                                            "¿Qué es una actitud saludable hacia el ejercicio?"
                                  ]
                        },
                        {
                                  "text": "Un poco de celos en una relación es saludable.",
                                  "level": "intermediate",
                                  "hints": [
                                            "¿Crees que los celos son siempre negativos?",
                                            "¿Alguna vez te has sentido celoso?",
                                            "¿Cuál es la diferencia entre los celos e inseguridad?",
                                            "¿En qué punto los celos se convierten en un problema?",
                                            "¿Qué dicen realmente los celos sobre una persona?"
                                  ]
                        },
                        {
                                  "text": "¿Están las redes sociales destruyendo nuestras habilidades sociales?",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Cómo ha cambiado tu estilo de comunicación en los últimos 10 años?",
                                            "¿Te resulta más difícil hablar con desconocidos ahora?",
                                            "¿Es la interacción en línea tan valiosa como la cara a cara?",
                                            "¿Qué habilidades sociales se ven más afectadas por el tiempo frente a la pantalla?",
                                            "¿Podrías pasar un mes sin redes sociales?"
                                  ]
                        },
                        {
                                  "text": "¿Debería ser gratuito el transporte público?",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Quién pagaría por el transporte público gratuito?",
                                            "¿Realmente reduciría el uso del coche?",
                                            "¿Es el transporte gratuito un derecho o un lujo?",
                                            "¿Cómo cambiaría la calidad del servicio?",
                                            "¿Cómo es la situación en tu ciudad?"
                                  ]
                        },
                        {
                                  "text": "La nostalgia es, en su mayor parte, solo una mentira que nos contamos a nosotros mismos.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿De qué sientes más nostalgia?",
                                            "¿Crees que el pasado fue realmente mejor?",
                                            "¿Es la nostalgia reconfortante o te frena?",
                                            "¿Puede la nostalgia ser peligrosa, personal o políticamente?",
                                            "¿Qué significa que editemos nuestros recuerdos?"
                                  ]
                        },
                        {
                                  "text": "La mayoría de la gente no quiere realmente comentarios honestos, quiere reafirmación.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Cuando pides feedback, ¿qué es lo que realmente quieres?",
                                            "¿Alguna vez has recibido comentarios difíciles de escuchar pero valiosos?",
                                            "¿Es amable dar a alguien comentarios honestos?",
                                            "¿Puedes pensar en un contexto donde la reafirmación sea realmente lo correcto?",
                                            "¿Cuál es la diferencia entre amabilidad y falta de honestidad?"
                                  ]
                        },
                        {
                                  "text": "Es posible ser adicto a estar ocupado.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Llenas tu agenda deliberadamente?",
                                            "¿Te hace sentir virtuoso estar ocupado?",
                                            "¿Qué pasa cuando no tienes nada que hacer?",
                                            "¿Es el estar ocupado un símbolo de estatus?",
                                            "¿Cuándo dejó el descanso de parecer aceptable?"
                                  ]
                        },
                        {
                                  "text": "La fama parece un castigo, no una recompensa.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Te gustaría ser famoso?",
                                            "¿Qué perderías si fueras famoso?",
                                            "¿Crees que la mayoría de los famosos son felices?",
                                            "¿Es la fama lo mismo que el éxito?",
                                            "¿Qué tipo de reconocimiento querrías realmente?"
                                  ]
                        },
                        {
                                  "text": "El sistema escolar aplasta la creatividad más de lo que la fomenta.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Crees que tu educación fomentó tu creatividad?",
                                            "¿Qué asignatura o momento escolar te pareció más creativo?",
                                            "¿Es posible enseñar la creatividad?",
                                            "¿Cómo sería una escuela si la creatividad fuera la prioridad?",
                                            "¿Eres más o menos creativo que cuando eras niño?"
                                  ]
                        },
                        {
                                  "text": "No existe el comportamiento verdaderamente desinteresado.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Puedes pensar en un acto genuinamente desinteresado?",
                                            "¿Hacer algo bueno te hace sentir bien y eso lo hace egoísta?",
                                            "¿Es esta una visión cínica o realista?",
                                            "¿Importa la motivación detrás de una acción si el resultado es positivo?",
                                            "¿Creer esto cambia tu forma de comportarte?"
                                  ]
                        },
                        {
                                  "text": "La mayoría de los adultos solo están improvisando.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Sientes que sabes lo que estás haciendo?",
                                            "¿Cuándo esperabas sentirte como un adulto?",
                                            "¿Sienten todos que están fingiendo?",
                                            "¿Es esto tranquilizador o aterrador?",
                                            "¿Quién es alguien que parece tenerlo todo claro? ¿Crees que realmente es así?"
                                  ]
                        },
                        {
                                  "text": "Las personas más interesantes son siempre un poco difíciles.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Puedes pensar en alguien que sea a la vez fascinante y difícil?",
                                            "¿Es la dificultad un signo de profundidad o solo... dificultad?",
                                            "¿Preferirías tener un amigo fácil y aburrido o uno desafiante e interesante?",
                                            "¿Qué hace que alguien sea genuinamente interesante para ti?",
                                            "¿Hay algo atractivo en las personas que no facilitan la vida?"
                                  ]
                        },
                        {
                                  "text": "Perdonamos a las personas que amamos por cosas que nunca perdonaríamos en extraños.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Es esto justo o es un doble rasero?",
                                            "¿Puedes pensar en un ejemplo de tu propia vida?",
                                            "¿Qué dice esto sobre la naturaleza del amor?",
                                            "¿Deberíamos exigir estándares más altos o más bajos a las personas que amamos?",
                                            "¿Hay algo que nunca perdonarías, independientemente de la relación?"
                                  ]
                        },
                        {
                                  "text": "Las zonas de confort están sobrevaloradas: el crecimiento ocurre realmente en la incomodidad.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Puedes pensar en un momento en que la incomodidad llevó al crecimiento?",
                                            "¿Es siempre necesario estar incómodo para desarrollarse?",
                                            "¿Hay alguna diferencia entre la incomodidad productiva y el simple sufrimiento?",
                                            "¿Buscas activamente la incomodidad?",
                                            "¿Qué es algo que está justo fuera de tu zona de confort en este momento?"
                                  ]
                        },
                        {
                                  "text": "La ira es una emoción infravalorada: a veces hace que las cosas se muevan.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Crees que expresas bien la ira?",
                                            "¿Puedes pensar en un momento en que la ira fue productiva?",
                                            "¿Hay alguna diferencia entre la ira sana y la ira destructiva?",
                                            "¿Hay personas que se apresuran demasiado a reprimir su ira?",
                                            "¿Qué haces cuando estás enfadado?"
                                  ]
                        },
                        {
                                  "text": "Las mascotas han reemplazado a la comunidad para mucha gente.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Crees que la soledad está aumentando?",
                                            "¿Qué papel juega una mascota en la vida emocional de alguien?",
                                            "¿Es esto triste o simplemente un tipo diferente de conexión?",
                                            "¿Qué ha reemplazado a la comunidad tradicional en la vida moderna?",
                                            "¿Te sientes parte de una comunidad?"
                                  ]
                        },
                        {
                                  "text": "Viajar solo es la única forma de descubrirse realmente a uno mismo.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Has viajado alguna vez solo?",
                                            "¿Puedes descubrirte a ti mismo sin viajar?",
                                            "¿A qué te obliga el viaje en solitario?",
                                            "¿Qué es lo máximo que has aprendido sobre ti mismo a través de una experiencia?",
                                            "¿Es el autodescubrimiento un viaje o un destino?"
                                  ]
                        },
                        {
                                  "text": "Un momento en el que tuviste que empezar de nuevo nunca es totalmente desperdiciado.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Has tenido que empezar algo de nuevo desde el principio?",
                                            "¿Qué te llevaste del primer intento?",
                                            "¿Empezar de nuevo es un fracaso o una elección?",
                                            "¿Qué es lo más difícil de empezar de nuevo?",
                                            "¿Crees que los contratiempos son necesarios?"
                                  ]
                        },
                        {
                                  "text": "La obsesión por la productividad es solo capitalismo disfrazado de superación personal.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "¿Haces un seguimiento de tu tiempo o usas aplicaciones de productividad?",
                                            "¿Te hace sentir bien ser productivo?",
                                            "¿De dónde crees que viene la presión por ser productivo?",
                                            "¿Es el descanso genuinamente parte de una vida productiva o solo una herramienta de recuperación?",
                                            "¿Puedes pensar en algo valioso que sea completamente improductivo?"
                                  ]
                        },
                        {
                                  "text": "¿Ingeniería genética: progreso o peligro?",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Cuáles son los beneficios potenciales para la medicina?",
                                            "¿Podría dar lugar a desigualdades sociales?",
                                            "¿Es ético 'diseñar' seres humanos?",
                                            "¿Quién debería regular esta tecnología?",
                                            "¿Arriesgamos cambios permanentes en el patrimonio genético?"
                                  ]
                        },
                        {
                                  "text": "La renta básica universal es la única solución a la automatización generalizada.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Cómo se financiaría la RBU?",
                                            "¿Desanimaría a la gente a trabajar?",
                                            "¿Podría reducir la pobreza y la desigualdad?",
                                            "¿Cuáles son las alternativas a la RBU?",
                                            "¿Es la automatización realmente una amenaza para todos los empleos?"
                                  ]
                        },
                        {
                                  "text": "La felicidad es una elección; las circunstancias son solo excusas.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Crees que la felicidad está bajo el control de todos?",
                                            "¿Es esta una visión privilegiada?",
                                            "¿Puedes elegir cómo responder a las malas circunstancias?",
                                            "¿Conoces a personas que son felices a pesar de tener vidas difíciles?",
                                            "¿Es la búsqueda de la felicidad en sí misma parte del problema?"
                                  ]
                        },
                        {
                                  "text": "Las personas que dicen odiar el drama suelen ser la fuente de él.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Conoces a alguien así?",
                                            "¿Por qué las personas que crean conflictos no se reconocen en ellos?",
                                            "¿Es el drama siempre malo?",
                                            "¿Cuál es la diferencia entre conflicto y drama?",
                                            "¿Es rara la autoconciencia?"
                                  ]
                        },
                        {
                                  "text": "El aburrimiento es un signo de falta de imaginación, no de falta de estimulación.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Cuándo fue la última vez que te sentiste genuinamente aburrido?",
                                            "¿Crees que hemos perdido la capacidad de aburrirnos?",
                                            "¿Qué pasa por tu mente cuando te aburres?",
                                            "¿Es el aburrimiento incómodo porque tememos lo que podríamos pensar?",
                                            "¿A qué te ha llevado alguna vez el aburrimiento a crear o descubrir?"
                                  ]
                        },
                        {
                                  "text": "La empatía sin límites es solo complacencia con buenas relaciones públicas.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Te consideras una persona empática?",
                                            "¿Se puede actuar con empatía en lugar de sentirla?",
                                            "¿Es posible empatizar demasiado?",
                                            "¿Cuál es la diferencia entre la empatía y perderse en la experiencia de otra persona?",
                                            "¿Alguna vez has tenido que protegerte de sentir demasiado?"
                                  ]
                        },
                        {
                                  "text": "Las opiniones más peligrosas son las que suenan completamente razonables.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Se te ocurre algún ejemplo de una idea peligrosa que parezca razonable?",
                                            "¿Cómo evalúas un argumento que parece correcto pero que podría no serlo?",
                                            "¿Es más difícil cuestionar una opinión errónea educada y bien razonada o una obviamente extrema?",
                                            "¿Cuál es tu prueba personal para saber si una idea es digna de confianza?",
                                            "¿Alguna vez una idea aparentemente razonable te ha llevado a un lugar que no esperabas?"
                                  ]
                        },
                        {
                                  "text": "La autenticidad se ha convertido en la actuación más cuidadosamente curada de todas.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Qué significa para ti ser auténtico?",
                                            "¿Te presentas de forma diferente online y offline?",
                                            "¿Es posible la autenticidad total?",
                                            "¿Se puede ser auténtico y estratégico al mismo tiempo?",
                                            "¿Cuándo te sientes más tú mismo?"
                                  ]
                        },
                        {
                                  "text": "El perdón es, en última instancia, algo que haces por ti mismo, no por la otra persona.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Alguna vez has perdonado a alguien que no se lo merecía, por tu propio bien?",
                                            "¿Cuál es la diferencia entre perdonar y olvidar?",
                                            "¿Es el perdón siempre posible?",
                                            "¿Perdonar a alguien significa que aceptas lo que hizo?",
                                            "¿Hay algo que te resulte difícil de perdonar?"
                                  ]
                        },
                        {
                                  "text": "Las instituciones siempre acaban protegiéndose más a sí mismas que a las personas a las que sirven.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Se te ocurre alguna institución que haya fallado a las personas a las que debía servir?",
                                            "¿Es esto inevitable o pueden reformarse las instituciones?",
                                            "¿Atraen las instituciones a personas que quieren protegerlas?",
                                            "¿Cómo sería una institución genuinamente responsable?",
                                            "¿Es ingenuo esperar que las instituciones se corrijan a sí mismas?"
                                  ]
                        },
                        {
                                  "text": "El deseo de certeza es la raíz de la mayor parte de la crueldad humana.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Crees que la incertidumbre es difícil de tolerar?",
                                            "¿Se te ocurre algún caso en el que la necesidad de certeza haya provocado daños?",
                                            "¿Es la duda una fortaleza o una debilidad?",
                                            "¿Las personas con convicciones fuertes hacen que el mundo sea mejor o peor?",
                                            "¿Cómo gestionas tu propia necesidad de certeza?"
                                  ]
                        },
                        {
                                  "text": "Los valores de la mayoría de las personas solo se mantienen cuando no cuesta nada tenerlos.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Alguna vez se han puesto a prueba tus valores por un coste real?",
                                            "¿Recuerdas algún momento en el que hayas actuado en contra de tus valores declarados?",
                                            "¿Es justo juzgar a las personas por fallar a sus valores bajo presión?",
                                            "¿Es la brecha entre los valores y el comportamiento un signo de hipocresía o simplemente de humanidad?",
                                            "¿Cuál es un valor que crees que no comprometerías?"
                                  ]
                        },
                        {
                                  "text": "Saber cuándo dejar de hablar es más raro y valioso que saber qué decir.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Crees que escuchas bien?",
                                            "¿Se te ocurre alguna situación en la que el silencio fuera la respuesta correcta?",
                                            "¿Está sobrevalorado ser un buen orador?",
                                            "¿Qué notas en las personas que escuchan más de lo que hablan?",
                                            "¿Ha sido alguna vez el silencio lo más poderoso que has podido hacer?"
                                  ]
                        },
                        {
                                  "text": "Nos define más lo que nos negamos a hacer que lo que elegimos hacer.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Qué es algo que no harías, independientemente de la recompensa?",
                                            "¿Te define decir no a algo?",
                                            "¿Tus límites reflejan tus valores?",
                                            "¿Es lo que evitamos tan revelador como lo que perseguimos?",
                                            "¿Alguna vez una negativa te ha costado algo importante?"
                                  ]
                        },
                        {
                                  "text": "La cultura de la cancelación se ha convertido en una forma de justicia digital de masas.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Se te ocurre algún caso en el que la protesta pública estuviera justificada?",
                                            "¿Hay diferencia entre responsabilidad y castigo?",
                                            "¿Quién decide qué es imperdonable?",
                                            "¿Funciona la cancelación: cambia realmente el comportamiento?",
                                            "¿Hay algo irremediablemente problemático en ella o es simplemente imperfecta?"
                                  ]
                        },
                        {
                                  "text": "Las personas que afirman no tener remordimientos o no han vivido lo suficiente o no han reflexionado lo suficiente.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Tienes remordimientos?",
                                            "¿Es el 'sin remordimientos' una filosofía saludable o un mecanismo de defensa?",
                                            "¿Qué significaría vivir sin remordimientos?",
                                            "¿Puede ser útil el remordimiento?",
                                            "¿Hay algo que cambiarías si pudieras?"
                                  ]
                        },
                        {
                                  "text": "El yo no es algo que descubrimos, sino algo que inventamos continuamente.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Esta idea te resulta liberadora o desestabilizadora?",
                                            "¿Qué significarían tus elecciones si la identidad fuera construida?",
                                            "¿Hay algo que sientas como un 'yo' fijo y esencial?",
                                            "¿El yo que presentas a los demás moldea el yo en el que te conviertes?",
                                            "¿Qué ocurre con la identidad ante una pérdida radical?"
                                  ]
                        },
                        {
                                  "text": "La compasión que requiere una historia sencilla no es verdadera compasión; es sentimentalismo.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Diferencia entre compasión genuina y reacción emocional?",
                                            "¿Un caso donde una historia simplificada distorsionó la realidad?",
                                            "¿El sentimentalismo nos hace sentir activos cuando no lo somos?",
                                            "¿Es necesaria la simplificación para la empatía?",
                                            "¿Costo de reducir el sufrimiento a un relato digerible?"
                                  ]
                        },
                        {
                                  "text": "Toda ideología, llevada a su conclusión lógica, se convierte en una forma de violencia.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Existe una ideología que escape a esta lógica?",
                                            "¿Razón para rechazar la ideología o llevarla con ligereza?",
                                            "¿Diferencia entre posición de principios e ideología?",
                                            "¿El pragmatismo evita esta trampa o la oculta?",
                                            "¿Son todas las posiciones políticas igualmente peligrosas?"
                                  ]
                        },
                        {
                                  "text": "El lenguaje no describe la realidad, la construye.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Aprender otro idioma te dio acceso a nuevos pensamientos?",
                                            "¿Sientes cosas que ningún idioma puede nombrar?",
                                            "¿El idioma en el que piensas afecta tus emociones?",
                                            "¿Es posible un concepto sin una palabra?",
                                            "¿Puede una idea ser traducida plenamente?"
                                  ]
                        },
                        {
                                  "text": "Lo más subversivo que una persona puede hacer en el mundo moderno es estar sinceramente satisfecha.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Es política la satisfacción?",
                                            "¿Requiere la economía consumidores insatisfechos?",
                                            "¿Es posible la satisfacción genuina?",
                                            "¿Diferencia entre satisfacción y resignación?",
                                            "¿Estar satisfecho significa dejar de preocuparse por la injusticia?"
                                  ]
                        },
                        {
                                  "text": "La exigencia de equilibrio en el discurso público suele dar falsa legitimidad a posiciones que no la merecen.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Es 'presentar ambos lados' siempre justo?",
                                            "¿Quién decide qué posiciones merecen una tribuna?",
                                            "¿Diferencia entre equilibrio y falsa equivalencia?",
                                            "¿Puede la neutralidad periodística coexistir con la verdad?",
                                            "¿Costo de dar espacio en nombre de la equidad?"
                                  ]
                        },
                        {
                                  "text": "La honestidad radical, practicada sin sabiduría, es simplemente crueldad con buenas intenciones.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿El impulso de 'decir las cosas como son' es por el otro o por tu alivio?",
                                            "¿Momento en que la honestidad radical hizo daño?",
                                            "¿Es la amabilidad a veces la opción más valiente?",
                                            "¿Línea entre honestidad y crueldad?",
                                            "¿La exigencia de honestidad refleja intimidad o control?"
                                  ]
                        },
                        {
                                  "text": "El libre albedrío es una ficción indispensable más que una realidad significativa.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Importa si es real si debemos actuar como si lo fuera?",
                                            "¿Responsabilidad moral sin libre albedrío?",
                                            "¿Resuelven las neurociencias la cuestión?",
                                            "¿Es determinista la creencia en el libre albedrío?",
                                            "¿Qué dice tu intuición?"
                                  ]
                        },
                        {
                                  "text": "Internet no nos ha hecho más informados, nos ha hecho más seguros en nuestros errores.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Creencia moldeada por algoritmos?",
                                            "¿Problema de Internet o de la naturaleza humana?",
                                            "¿Prácticas de protección?",
                                            "¿Tiene sentido la experiencia aún?",
                                            "¿Confianza en tu capacidad para evaluar la info?"
                                  ]
                        },
                        {
                                  "text": "El arte que consuela es menos valioso que el arte que perturba.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Arte que hizo ambos simultáneamente?",
                                            "¿Jerarquía de valores o esnobismo?",
                                            "¿A qué recurres en el dolor: dificultad o consuelo?",
                                            "¿El arte perturbador cambia el comportamiento?",
                                            "¿Propósito del arte: desafío, reflejo o trascendencia?"
                                  ]
                        },
                        {
                                  "text": "El progreso moral es real, pero la idea de que la historia avanza en una dirección es un mito.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Ejemplo de progreso moral auténtico?",
                                            "¿Algo en lo que hayamos regresado?",
                                            "¿Es el progreso un mito cultural?",
                                            "¿Se confunde la moda moral con el progreso?",
                                            "¿Prueba de que somos mejores que nuestros ancestros?"
                                  ]
                        },
                        {
                                  "text": "La búsqueda de la certeza es la raíz de la mayoría de las crueldades humanas.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Ejemplo donde la necesidad de certeza causó daño?",
                                            "¿Es la duda una virtud moral?",
                                            "¿Las convicciones inquebrantables mejoran el mundo?",
                                            "¿Certeza no peligrosa?",
                                            "¿Tener creencias fuertes sin rigidez?"
                                  ]
                        },
                        {
                                  "text": "La memoria no es un registro de lo que pasó, es una historia que seguimos reescribiendo.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Recuerdo contradicho por un testigo?",
                                            "¿Editamos los recuerdos por nuestra imagen?",
                                            "¿Consecuencia para la identidad?",
                                            "¿Recuerdo reescrito más real que el evento?",
                                            "¿Fiabilidad de tu recuerdo más vívido?"
                                  ]
                        },
                        {
                                  "text": "No hay consumo ético bajo el capitalismo tardío, y eso es una razón para actuar, no para rendirse.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Cuentan las elecciones individuales?",
                                            "¿La responsabilidad personal es una maniobra política?",
                                            "¿Cambio sistémico vs. acción individual?",
                                            "¿Vivir éticamente en un sistema no ético?",
                                            "¿La conciencia cambia tu comportamiento?"
                                  ]
                        },
                        {
                                  "text": "La vida examinada vale la pena, pero examinarla demasiado de cerca puede hacerla invivible.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Cuánta autorreflexión es demasiada?",
                                            "¿La introspección como evitación?",
                                            "¿Costo del examen continuo?",
                                            "¿Vivir bien sin autoexamen?",
                                            "¿Costo y ganancia de tu reflexión?"
                                  ]
                        },
                        {
                                  "text": "La ética de colonizar otros planetas.",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Derecho sobre otros mundos sin resolver los nuestros?",
                                            "¿Exportar sistemas humanos?",
                                            "¿Obligaciones hacia vida extraterrestre?",
                                            "¿Peligro del 'Plan B'?",
                                            "¿Propiedad de los recursos planetarios?"
                                  ]
                        },
                        {
                                  "text": "¿Existe realmente el libre albedrío o es una ilusión?",
                                  "level": "advanced",
                                  "hints": [
                                            "¿Responsabilidad en actos determinados?",
                                            "¿Sensación de elección como prueba?",
                                            "¿Un ordenador prediciendo tus decisiones?",
                                            "¿Diferencia entre 'libertad de' y 'libertad para'?",
                                            "¿El alma cambia la ecuación?"
                                  ]
                        }
              ],
              "battle": [
                        [
                                  "Montañas 🏔️",
                                  "Playa 🏖️"
                        ],
                        [
                                  "Café ☕",
                                  "Té 🍵"
                        ],
                        [
                                  "Madrugador 🌅",
                                  "Noctámbulo 🦉"
                        ],
                        [
                                  "Vida en la ciudad 🏙️",
                                  "Vida en el campo 🌾"
                        ],
                        [
                                  "Lectura 📚",
                                  "Ver películas 🎬"
                        ],
                        [
                                  "Verano ☀️",
                                  "Invierno ❄️"
                        ],
                        [
                                  "Gatos 🐱",
                                  "Perros 🐶"
                        ],
                        [
                                  "Trabajo desde casa 🏠",
                                  "Trabajo en oficina 🏢"
                        ],
                        [
                                  "Dulce 🍰",
                                  "Salado 🧀"
                        ],
                        [
                                  "Viajar solo ✈️",
                                  "Viajar con amigos 👥"
                        ],
                        [
                                  "Libros impresos 📖",
                                  "Lectores electrónicos 📱"
                        ],
                        [
                                  "Cocinar en casa 🍳",
                                  "Pedir a domicilio 🍕"
                        ],
                        [
                                  "Transporte público 🚌",
                                  "Coche propio 🚗"
                        ]
              ],
              "critic": [
                        {
                                  "title": "Delicioso pero demasiado caro 🍝",
                                  "type": "Restaurante",
                                  "review": "La comida era fantástica y los ingredientes muy frescos, pero las raciones eran pequeñas y la cuenta fue una sorpresa.",
                                  "question": "¿Volverías a pesar del elevado precio?"
                        },
                        {
                                  "title": "Trama cautivadora, final débil 🎬",
                                  "type": "Película",
                                  "review": "Las dos primeras terceras partes de la película mantenían el suspenso, pero la resolución fue apresurada e ilógica.",
                                  "question": "¿Qué tan importante es el final de una película para tu valoración general?"
                        },
                        {
                                  "title": "Gráficos impresionantes, pero muchos errores 🎮",
                                  "type": "Videojuego",
                                  "review": "Visualmente es una obra de arte, pero se congela a menudo y tiene muchos fallos técnicos.",
                                  "question": "¿Pueden los gráficos y la atmósfera compensar los fallos técnicos?"
                        }
              ],
              "action": {
                        "starter": [
                                  "Gato",
                                  "Perro",
                                  "Casa",
                                  "Coche",
                                  "Libro",
                                  "Agua",
                                  "Sol",
                                  "Luna",
                                  "Árbol",
                                  "Teléfono",
                                  "Puerta",
                                  "Silla",
                                  "Cama",
                                  "Pan",
                                  "Pez"
                        ],
                        "elementary": [
                                  "Cocina",
                                  "Jardín",
                                  "Tren",
                                  "Médico",
                                  "Profesor",
                                  "Música",
                                  "Cumpleaños",
                                  "Natación",
                                  "Vacaciones",
                                  "Tienda",
                                  "Estación",
                                  "Hospital"
                        ],
                        "intermediate": [
                                  "Museo",
                                  "Entrevista",
                                  "Arquitecto",
                                  "Periodista",
                                  "Parlamento",
                                  "Orquesta",
                                  "Maratón",
                                  "Exposición",
                                  "Laboratorio",
                                  "Telescopio"
                        ],
                        "upper_intermediate": [
                                  "Filantropía",
                                  "Embajador",
                                  "Hipótesis",
                                  "Emprendedor",
                                  "Arqueología",
                                  "Biodiversidad",
                                  "Infraestructura"
                        ],
                        "advanced": [
                                  "Paradigma",
                                  "Yuxtaposición",
                                  "Anacronismo",
                                  "Verosimilitud",
                                  "Magnánimo",
                                  "Resiliencia",
                                  "Matiz",
                                  "Perspicacia"
                        ],
                        "proficiency": [
                                  "Ubicuidad",
                                  "Efímero",
                                  "Pugnaz",
                                  "Perspicaz",
                                  "Sicofanta",
                                  "Ecuanimidad",
                                  "Vicisitud",
                                  "Inefable"
                        ]
              },
              "identity": [
                        {
                                  "person": "Un bombero",
                                  "clue": "Lleva casco y apaga incendios con agua.",
                                  "level": "elementary"
                        },
                        {
                                  "person": "Un chef",
                                  "clue": "Trabaja en una cocina y prepara deliciosos platos.",
                                  "level": "elementary"
                        },
                        {
                                  "person": "Un bibliotecario",
                                  "clue": "Gestiona una biblioteca y ayuda a la gente a encontrar libros.",
                                  "level": "elementary"
                        },
                        {
                                  "person": "Un veterinario",
                                  "clue": "Cuida a animales enfermos o heridos.",
                                  "level": "elementary"
                        },
                        {
                                  "person": "Un astronauta",
                                  "clue": "Viaja al espacio más allá de la Tierra.",
                                  "level": "intermediate"
                        },
                        {
                                  "person": "Un detective",
                                  "clue": "Investiga misterios y busca pistas.",
                                  "level": "intermediate"
                        },
                        {
                                  "person": "Un periodista",
                                  "clue": "Informa sobre noticias y escribe artículos de prensa.",
                                  "level": "intermediate"
                        },
                        {
                                  "person": "Un fotógrafo",
                                  "clue": "Captura recuerdos e imágenes con una cámara.",
                                  "level": "intermediate"
                        },
                        {
                                  "person": "Un arquitecto",
                                  "clue": "Diseña casas y edificios antes de su construcción.",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "person": "Un cirujano",
                                  "clue": "Realiza operaciones médicas en el hospital.",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "person": "Un ingeniero de software",
                                  "clue": "Escribe código para crear aplicaciones informáticas.",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "person": "Un diplomático",
                                  "clue": "Representa a su país en relaciones internacionales oficiales.",
                                  "level": "advanced"
                        },
                        {
                                  "person": "Un biólogo marino",
                                  "clue": "Estudia la fauna y flora del océano.",
                                  "level": "advanced"
                        },
                        {
                                  "person": "Un astrofísico",
                                  "clue": "Estudia las propiedades físicas de estrellas y galaxias.",
                                  "level": "advanced"
                        }
              ],
              "wordlinker": [
                        {
                                  "words": [
                                            "Manzana",
                                            "Naranja",
                                            "Plátano",
                                            "Zanahoria"
                                  ],
                                  "odd": "Zanahoria",
                                  "link": "Frutas",
                                  "oddReason": "La zanahoria es una verdura"
                        },
                        {
                                  "words": [
                                            "Madrid",
                                            "Roma",
                                            "Tokio",
                                            "Amazonas"
                                  ],
                                  "odd": "Amazonas",
                                  "link": "Capitales",
                                  "oddReason": "El Amazonas es un río"
                        },
                        {
                                  "words": [
                                            "Piano",
                                            "Guitarra",
                                            "Violín",
                                            "Trompeta"
                                  ],
                                  "odd": "none",
                                  "link": "Instrumentos musicales",
                                  "oddReason": "Todos son instrumentos"
                        },
                        {
                                  "words": [
                                            "Médico",
                                            "Enfermero",
                                            "Cirujano",
                                            "Piloto"
                                  ],
                                  "odd": "Piloto",
                                  "link": "Profesiones sanitarias",
                                  "oddReason": "El piloto pilota aviones, no en un hospital"
                        }
              ],
              "etymology": [
                        {
                                  "word": "Alcalde",
                                  "level": "easy",
                                  "options": [
                                            "Árabe",
                                            "Latín",
                                            "Visigodo",
                                            "Francés"
                                  ],
                                  "answer": "Árabe",
                                  "detail": "Proviene del árabe al-qāḍī que significa el juez, refiriéndose a la autoridad judicial o municipal en la península ibérica.",
                                  "path": "Árabe (al-qāḍī) → Español Alcalde"
                        },
                        {
                                  "word": "Aceite",
                                  "level": "easy",
                                  "options": [
                                            "Árabe",
                                            "Latín",
                                            "Griego",
                                            "Hebreo"
                                  ],
                                  "answer": "Árabe",
                                  "detail": "Deriva del árabe hispánico az-zayt (jugo de aceituna), derivado de la raíz semítica para el olivo.",
                                  "path": "Árabe (az-zayt) → Español Aceite"
                        },
                        {
                                  "word": "Ojalá",
                                  "level": "easy",
                                  "options": [
                                            "Árabe",
                                            "Latín",
                                            "Visigodo",
                                            "Hebreo"
                                  ],
                                  "answer": "Árabe",
                                  "detail": "Proviene de la expresión árabe law shāʾ Allāh que significa si Dios quiere, expresando un vivo deseo.",
                                  "path": "Árabe (law shāʾ Allāh) → Español Ojalá"
                        },
                        {
                                  "word": "Almohada",
                                  "level": "easy",
                                  "options": [
                                            "Árabe",
                                            "Latín",
                                            "Euskera",
                                            "Francés"
                                  ],
                                  "answer": "Árabe",
                                  "detail": "Procede del árabe hispánico al-mukhadda (el cojín), derivado de la raíz semítica para mejilla.",
                                  "path": "Árabe (al-mukhadda) → Español Almohada"
                        },
                        {
                                  "word": "Azúcar",
                                  "level": "easy",
                                  "options": [
                                            "Árabe",
                                            "Sánscrito",
                                            "Latín",
                                            "Persa"
                                  ],
                                  "answer": "Árabe",
                                  "detail": "Viajó desde el sánscrito śarkarā a través del persa y el árabe as-sukkar antes de incorporarse al castellano.",
                                  "path": "Sánscrito (śarkarā) → Persa → Árabe (as-sukkar) → Español Azúcar"
                        },
                        {
                                  "word": "Almacén",
                                  "level": "medium",
                                  "options": [
                                            "Árabe",
                                            "Latín",
                                            "Francés",
                                            "Alemán"
                                  ],
                                  "answer": "Árabe",
                                  "detail": "Procede del árabe al-makhzan que designaba el depósito o almacén de provisiones.",
                                  "path": "Árabe (al-makhzan) → Español Almacén"
                        },
                        {
                                  "word": "Alfombra",
                                  "level": "medium",
                                  "options": [
                                            "Árabe",
                                            "Latín",
                                            "Persa",
                                            "Turco"
                                  ],
                                  "answer": "Árabe",
                                  "detail": "Deriva del árabe al-ḥumra (la roja), originalmente refiriéndose a esteras de esparto tejidas en tonos rojos.",
                                  "path": "Árabe (al-ḥumra) → Español Alfombra"
                        },
                        {
                                  "word": "Aldea",
                                  "level": "medium",
                                  "options": [
                                            "Árabe",
                                            "Latín",
                                            "Gótico",
                                            "Celta"
                                  ],
                                  "answer": "Árabe",
                                  "detail": "Proviene del árabe hispánico al-ḍayʿa, que designaba una pequeña granja o caserío rural.",
                                  "path": "Árabe (al-ḍayʿa) → Español Aldea"
                        },
                        {
                                  "word": "Alquiler",
                                  "level": "medium",
                                  "options": [
                                            "Árabe",
                                            "Latín",
                                            "Francés",
                                            "Visigodo"
                                  ],
                                  "answer": "Árabe",
                                  "detail": "Deriva del árabe al-kirāʾ que significa el arrendamiento o pago por uso de una propiedad.",
                                  "path": "Árabe (al-kirāʾ) → Español Alquiler"
                        },
                        {
                                  "word": "Tarifa",
                                  "level": "hard",
                                  "options": [
                                            "Árabe",
                                            "Latín",
                                            "Francés",
                                            "Griego"
                                  ],
                                  "answer": "Árabe",
                                  "detail": "Proviene del árabe taʿrīf (notificación), asociado con el puerto andalusí de Tarifa donde se cobraban aranceles marítimos.",
                                  "path": "Árabe (taʿrīf) → Español Tarifa"
                        },
                        {
                                  "word": "Ajedrez",
                                  "level": "hard",
                                  "options": [
                                            "Árabe",
                                            "Sánscrito",
                                            "Persa",
                                            "Griego"
                                  ],
                                  "answer": "Árabe",
                                  "detail": "Evolucionó del juego indio chaturanga a través del persa shatranj y el árabe al-shatranj.",
                                  "path": "Sánscrito (chaturanga) → Persa → Árabe (al-shatranj) → Español Ajedrez"
                        },
                        {
                                  "word": "Albaricoque",
                                  "level": "hard",
                                  "options": [
                                            "Árabe",
                                            "Latín",
                                            "Griego",
                                            "Persa"
                                  ],
                                  "answer": "Árabe",
                                  "detail": "Pasó del latín praecoquum al griego bizantino, al árabe al-barqūq y finalmente al castellano medieval.",
                                  "path": "Latín (praecoquum) → Griego → Árabe (al-barqūq) → Español Albaricoque"
                        },
                        {
                                  "word": "Chocolate",
                                  "level": "easy",
                                  "options": [
                                            "Náhuatl",
                                            "Maya",
                                            "Quechua",
                                            "Taíno"
                                  ],
                                  "answer": "Náhuatl",
                                  "detail": "Proviene del término náhuatl xocolātl, bebida ceremonial preparada con cacao amargo.",
                                  "path": "Náhuatl (xocolātl) → Español Chocolate"
                        },
                        {
                                  "word": "Tomate",
                                  "level": "easy",
                                  "options": [
                                            "Náhuatl",
                                            "Maya",
                                            "Taíno",
                                            "Guaraní"
                                  ],
                                  "answer": "Náhuatl",
                                  "detail": "Incorporado del náhuatl tomatl (fruto hinchado), introducido a Europa tras la llegada a América.",
                                  "path": "Náhuatl (tomatl) → Español Tomate"
                        },
                        {
                                  "word": "Canoa",
                                  "level": "easy",
                                  "options": [
                                            "Taíno",
                                            "Náhuatl",
                                            "Maya",
                                            "Quechua"
                                  ],
                                  "answer": "Taíno",
                                  "detail": "Fue uno de los primeros americanismos registrados por Cristóbal Colón en 1492, tomado de los indígenas taínos.",
                                  "path": "Taíno (kanowa) → Español Canoa"
                        },
                        {
                                  "word": "Huracán",
                                  "level": "easy",
                                  "options": [
                                            "Taíno",
                                            "Caribe",
                                            "Náhuatl",
                                            "Maya"
                                  ],
                                  "answer": "Taíno",
                                  "detail": "Proviene de la lengua taína y caribe para nombrar la divinidad y la tormenta de los vientos tropicales.",
                                  "path": "Taíno/Caribe (juracán) → Español Huracán"
                        },
                        {
                                  "word": "Aguacate",
                                  "level": "easy",
                                  "options": [
                                            "Náhuatl",
                                            "Maya",
                                            "Taíno",
                                            "Quechua"
                                  ],
                                  "answer": "Náhuatl",
                                  "detail": "Deriva del náhuatl āhuacatl, nombre dado al fruto mesoamericano por su forma característica.",
                                  "path": "Náhuatl (āhuacatl) → Español Aguacate"
                        },
                        {
                                  "word": "Cacahuete",
                                  "level": "medium",
                                  "options": [
                                            "Náhuatl",
                                            "Taíno",
                                            "Quechua",
                                            "Guaraní"
                                  ],
                                  "answer": "Náhuatl",
                                  "detail": "Traducción adaptada del náhuatl tlālcacahuatl (cacao de tierra) en el imperio azteca.",
                                  "path": "Náhuatl (tlālcacahuatl) → Español Cacahuete"
                        },
                        {
                                  "word": "Maíz",
                                  "level": "medium",
                                  "options": [
                                            "Taíno",
                                            "Náhuatl",
                                            "Maya",
                                            "Quechua"
                                  ],
                                  "answer": "Taíno",
                                  "detail": "Tomado directamente del idioma taíno mahís (sustento de vida), cereal base de las Antillas.",
                                  "path": "Taíno (mahís) → Español Maíz"
                        },
                        {
                                  "word": "Barbacoa",
                                  "level": "medium",
                                  "options": [
                                            "Taíno",
                                            "Maya",
                                            "Náhuatl",
                                            "Arawak"
                                  ],
                                  "answer": "Taíno",
                                  "detail": "Término taíno que describía el armazón de madera elevado para ahumar y asar carne sobre brasas.",
                                  "path": "Taíno (barbacoa) → Español Barbacoa"
                        },
                        {
                                  "word": "Hamaca",
                                  "level": "medium",
                                  "options": [
                                            "Taíno",
                                            "Caribe",
                                            "Náhuatl",
                                            "Quechua"
                                  ],
                                  "answer": "Taíno",
                                  "detail": "Registrado en las Antillas por marineros españoles para la red suspendida utilizada para dormir.",
                                  "path": "Taíno (hamaca) → Español Hamaca"
                        },
                        {
                                  "word": "Coyote",
                                  "level": "hard",
                                  "options": [
                                            "Náhuatl",
                                            "Maya",
                                            "Navajo",
                                            "Sioux"
                                  ],
                                  "answer": "Náhuatl",
                                  "detail": "Proviene del vocablo náhuatl coyōtl para el cánido nativo de América del Norte y Central.",
                                  "path": "Náhuatl (coyōtl) → Español Coyote"
                        },
                        {
                                  "word": "Cancha",
                                  "level": "hard",
                                  "options": [
                                            "Quechua",
                                            "Aymara",
                                            "Náhuatl",
                                            "Taíno"
                                  ],
                                  "answer": "Quechua",
                                  "detail": "Del quechua kancha (terreno cercado o recinto), hoy usado ampliamente para recintos deportivos.",
                                  "path": "Quechua (kancha) → Español Cancha"
                        },
                        {
                                  "word": "Tiburón",
                                  "level": "hard",
                                  "options": [
                                            "Taíno",
                                            "Maya",
                                            "Caribe",
                                            "Tupí"
                                  ],
                                  "answer": "Taíno",
                                  "detail": "Origen caribeño o tupí adoptado por los primeros navegantes españoles en aguas tropicales.",
                                  "path": "Taíno/Tupí (tiburón) → Español Tiburón"
                        },
                        {
                                  "word": "Candidato",
                                  "level": "easy",
                                  "options": [
                                            "Latín",
                                            "Griego",
                                            "Francés",
                                            "Alemán"
                                  ],
                                  "answer": "Latín",
                                  "detail": "En la Roma antigua, los aspirantes a cargos públicos vestían una toga blanca pulcra (candida).",
                                  "path": "Latín (candidus) → Español Candidato"
                        },
                        {
                                  "word": "Nostalgia",
                                  "level": "easy",
                                  "options": [
                                            "Griego",
                                            "Latín",
                                            "Alemán",
                                            "Francés"
                                  ],
                                  "answer": "Griego",
                                  "detail": "Acuñado a partir de las raíces griegas nostos (regreso) y algos (dolor o añoranza).",
                                  "path": "Griego (nostos + algos) → Español Nostalgia"
                        },
                        {
                                  "word": "Galaxia",
                                  "level": "easy",
                                  "options": [
                                            "Griego",
                                            "Latín",
                                            "Árabe",
                                            "Hebreo"
                                  ],
                                  "answer": "Griego",
                                  "detail": "Basado en el mito griego sobre el camino lácteo formado por gotas de leche divina.",
                                  "path": "Griego (gala) → Español Galaxia"
                        },
                        {
                                  "word": "Filosofía",
                                  "level": "easy",
                                  "options": [
                                            "Griego",
                                            "Latín",
                                            "Árabe",
                                            "Hebreo"
                                  ],
                                  "answer": "Griego",
                                  "detail": "Compuesto por las raíces griegas philos (amor o afición) y sophia (sabiduría).",
                                  "path": "Griego (philos + sophia) → Español Filosofía"
                        },
                        {
                                  "word": "Biblioteca",
                                  "level": "easy",
                                  "options": [
                                            "Griego",
                                            "Latín",
                                            "Francés",
                                            "Alemán"
                                  ],
                                  "answer": "Griego",
                                  "detail": "Proviene del griego biblion (libro) y theke (caja o depósito).",
                                  "path": "Griego (biblion + theke) → Español Biblioteca"
                        },
                        {
                                  "word": "Teléfono",
                                  "level": "easy",
                                  "options": [
                                            "Griego",
                                            "Latín",
                                            "Inglés",
                                            "Francés"
                                  ],
                                  "answer": "Griego",
                                  "detail": "Neologismo científico formado con las palabras griegas tele (lejos) y phone (sonido o voz).",
                                  "path": "Griego (tele + phone) → Español Teléfono"
                        },
                        {
                                  "word": "Restaurante",
                                  "level": "medium",
                                  "options": [
                                            "Francés",
                                            "Latín",
                                            "Italiano",
                                            "Inglés"
                                  ],
                                  "answer": "Francés",
                                  "detail": "Del francés restaurant, referente al caldo reparador servido en las casas de comidas parisinas del siglo XVIII.",
                                  "path": "Francés (restaurant) → Español Restaurante"
                        },
                        {
                                  "word": "Garaje",
                                  "level": "medium",
                                  "options": [
                                            "Francés",
                                            "Alemán",
                                            "Inglés",
                                            "Italiano"
                                  ],
                                  "answer": "Francés",
                                  "detail": "Deriva del verbo francés garer (guardar o proteger bajo techado).",
                                  "path": "Francés (garage) → Español Garaje"
                        },
                        {
                                  "word": "Balcón",
                                  "level": "medium",
                                  "options": [
                                            "Italiano",
                                            "Lombardo",
                                            "Francés",
                                            "Latín"
                                  ],
                                  "answer": "Italiano",
                                  "detail": "Préstamo renacentista del italiano balcone, de origen germánico lombardo balcho (viga).",
                                  "path": "Lombardo (balcho) → Italiano (balcone) → Español Balcón"
                        },
                        {
                                  "word": "Cabalgar",
                                  "level": "medium",
                                  "options": [
                                            "Latín",
                                            "Francés",
                                            "Italiano",
                                            "Gótico"
                                  ],
                                  "answer": "Latín",
                                  "detail": "Del latín tardío caballicare, derivado del sustantivo caballus (caballo de trabajo).",
                                  "path": "Latín (caballus) → Español Cabalgar"
                        },
                        {
                                  "word": "Fútbol",
                                  "level": "easy",
                                  "options": [
                                            "Inglés",
                                            "Alemán",
                                            "Francés",
                                            "Holandés"
                                  ],
                                  "answer": "Inglés",
                                  "detail": "Adaptación fonética directa del término inglés football (pie y balón).",
                                  "path": "Inglés (football) → Español Fútbol"
                        },
                        {
                                  "word": "Bikini",
                                  "level": "medium",
                                  "options": [
                                            "Francés",
                                            "Inglés",
                                            "Polinesio",
                                            "Italiano"
                                  ],
                                  "answer": "Francés",
                                  "detail": "Diseñado en París en 1946 por Louis Réard, bautizado por el atolón Bikini de los ensayos nucleares.",
                                  "path": "Atolón Bikini → Francés (bikini) → Español Bikini"
                        },
                        {
                                  "word": "Líder",
                                  "level": "medium",
                                  "options": [
                                            "Inglés",
                                            "Alemán",
                                            "Francés",
                                            "Holandés"
                                  ],
                                  "answer": "Inglés",
                                  "detail": "Adaptación hispanizada del sustantivo inglés leader acuñado a finales del siglo XIX.",
                                  "path": "Inglés (leader) → Español Líder"
                        },
                        {
                                  "word": "Bife",
                                  "level": "hard",
                                  "options": [
                                            "Inglés",
                                            "Francés",
                                            "Alemán",
                                            "Holandés"
                                  ],
                                  "answer": "Inglés",
                                  "detail": "Deriva del término inglés beefsteak introducido en la gastronomía del Río de la Plata.",
                                  "path": "Inglés (beefsteak) → Español Bife"
                        },
                        {
                                  "word": "Guerra",
                                  "level": "hard",
                                  "options": [
                                            "Germánico",
                                            "Latín",
                                            "Árabe",
                                            "Celta"
                                  ],
                                  "answer": "Germánico",
                                  "detail": "Reemplazó al latín bellum durante la época visigoda a partir de la raíz germánica werra (discordia).",
                                  "path": "Gótico/Germánico (werra) → Español Guerra"
                        },
                        {
                                  "word": "Jardín",
                                  "level": "hard",
                                  "options": [
                                            "Francés",
                                            "Franco",
                                            "Latín",
                                            "Árabe"
                                  ],
                                  "answer": "Francés",
                                  "detail": "Tomado del francés antiguo jardin, derivado del franco germánico gardo (cercado).",
                                  "path": "Franco (gardo) → Francés (jardin) → Español Jardín"
                        }
              ],
              "storychain": []
    };

    window.gameData = window.gameData || {};
    window.gameData['es'] = data;
})();
