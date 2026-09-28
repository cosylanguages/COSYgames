(function() {
    const data = {
              "fluency": [
                        {
                                  "text": "Sua rotina matinal ☕",
                                  "level": "starter"
                        },
                        {
                                  "text": "Uma memória de infância 🧸",
                                  "level": "starter"
                        },
                        {
                                  "text": "Sua estação favorita e por quê 🍂",
                                  "level": "starter"
                        },
                        {
                                  "text": "Seu animal de estimação favorito 🐶",
                                  "level": "starter"
                        },
                        {
                                  "text": "Um dia chuvoso ideal 🌧️",
                                  "level": "starter"
                        },
                        {
                                  "text": "Uma habilidade que você gostaria de ter 🎸",
                                  "level": "elementary"
                        },
                        {
                                  "text": "A melhor refeição que você já comeu 🍜",
                                  "level": "elementary"
                        },
                        {
                                  "text": "Um lugar que você quer visitar 🗺️",
                                  "level": "elementary"
                        },
                        {
                                  "text": "Uma história engraçada da sua vida 🚴",
                                  "level": "elementary"
                        },
                        {
                                  "text": "Sua festa ou tradição favorita 🎄",
                                  "level": "elementary"
                        },
                        {
                                  "text": "Seu destino de férias ideal 🌴",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "A pessoa mais interessante que você conhece 🙋",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Descreva seu fim de semana perfeito ☀️",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "A última vez que você tentou algo novo 🎯",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Um novo hobby que você gostaria de começar 🎨",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Como a tecnologia muda a sua vida diária 📱",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "O que você faria com 1 milhão de reais? 💰",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "Um livro ou filme que mudou sua visão 📚",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "Se você pudesse viver em qualquer lugar do mundo… 🌍",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "Algo de que você se orgulha 🏆",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "Uma lição de vida inesperada 💡",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "O que significa felicidade para você? 😊",
                                  "level": "advanced"
                        },
                        {
                                  "text": "A influência da cultura nas nossas escolhas 🏛️",
                                  "level": "advanced"
                        },
                        {
                                  "text": "O equilíbrio entre ambição e serenidade ⚖️",
                                  "level": "advanced"
                        },
                        {
                                  "text": "Vakañsoù ho peus soñj anezho",
                                  "level": "elementary",
                                  "hints": [
                                            "Pelec'h oc'h bet ?",
                                            "Gant piv oc'h bet ?",
                                            "Petra ho peus graet eno ?",
                                            "Penaos e oa an amzer ?",
                                            "Peini e oa ar mare gwellañ ?"
                                  ]
                        },
                        {
                                  "text": "Ho pretis pe ho cafedi muiañ-karet",
                                  "level": "elementary",
                                  "hints": [
                                            "Pelec'h emañ ?",
                                            "Peseurt boued a vez servijet ganto ?",
                                            "Perak e plij deoc'h ?",
                                            "Gant piv e tait di ?",
                                            "Pegoulz e oa ar wech ziwezhañ ma'z oc'h bet di ?"
                                  ]
                        },
                        {
                                  "text": "Penaos e tait d'al labour pe d'ar skol",
                                  "level": "elementary",
                                  "hints": [
                                            "Penaos e veajit — karr-boutin, karr, marc'h-houarn ?",
                                            "Pegement a amzer a gemer ?",
                                            "Ha plijout a ra ar veaj deoc'h ?",
                                            "Hag-eñ eo ker ?",
                                            "Petra a rit e-kerzh ar veaj ?"
                                  ]
                        },
                        {
                                  "text": "Petra a rit evit diskuizhañ",
                                  "level": "elementary",
                                  "hints": [
                                            "Petra a sikour ac'hanoc'h da ziskuizhañ ?",
                                            "Ha gwelloc'h eo deoc'h bezañ ho-unan pe gant tud all ?",
                                            "Pegoulz e tiskuihit da vat ?",
                                            "Hoc'h eus ul lec'h muiañ-karet evit diskuizhañ ?",
                                            "Hag-eñ eo aes diskuizhañ pe diaes eo deoc'h ?"
                                  ]
                        },
                        {
                                  "text": "Ur film ho peus gwelet n'eus ket pell",
                                  "level": "elementary",
                                  "hints": [
                                            "Petra e oa anv ar film ?",
                                            "Diwar-benn petra e oa ?",
                                            "Ha plijet oc'h bet gantañ ?",
                                            "Piv a oa er film ?",
                                            "Ha kuzuliañ a rafec'h ar film-mañ ?"
                                  ]
                        },
                        {
                                  "text": "Hoc'h dibenn-sizhun eus an dibab",
                                  "level": "elementary",
                                  "hints": [
                                            "Petra a rafec'h d'ar Gwener noz ?",
                                            "Ha mont a rafec'h er-maez pe chom er gêr ?",
                                            "Ha veajet e vefe ganeoc'h ?",
                                            "Gant piv e tremenfec'h amzer ?",
                                            "Petra a zebrfec'h ?"
                                  ]
                        },
                        {
                                  "text": "Un den a vourrit anezhañ",
                                  "level": "elementary",
                                  "hints": [
                                            "Piv eo an den-mañ ?",
                                            "Petra a ra ?",
                                            "Perak e vourrit anezhañ ?",
                                            "Ha kejet ho peus gantañ ?",
                                            "Petra a c'hallit deskiñ gantañ ?"
                                  ]
                        },
                        {
                                  "text": "Lec'h ho vakañsoù a huñvre",
                                  "level": "elementary",
                                  "hints": [
                                            "Pelec'h e vefe deoc'h mont ?",
                                            "Perak al lec'h-mañ ?",
                                            "Gant piv e vefe deoc'h mont ?",
                                            "Petra a rafec'h eno ?",
                                            "Pegement a amzer e chomfec'h eno ?"
                                  ]
                        },
                        {
                                  "text": "Ho liamm gant ho pellgomz",
                                  "level": "elementary",
                                  "hints": [
                                            "Pet eurvezh an deiz e implijit ho pellgomz ?",
                                            "Evit petra e implijit anezhañ ar muiañ ?",
                                            "Ha gallout a rafec'h bevañ hepthañ e-pad ur sizhunvezh ?",
                                            "Hag-eñ e sikour ac'hanoc'h pe e tistroll ac'hanoc'h ?",
                                            "Ha sellout a rit outi raktal pa tivunoc'h ?"
                                  ]
                        },
                        {
                                  "text": "Un dra bennak farsus a zo c'hoarvezet ganeoc'h",
                                  "level": "elementary",
                                  "hints": [
                                            "Pegoulz e oa c'hoarvezet kement-mañ ?",
                                            "Pelec'h edoc'h ?",
                                            "Gant piv edoc'h ?",
                                            "Petra a oa c'hoarvezet resis ?",
                                            "Ha c'hoari a rit c'hoazh bremañ ?"
                                  ]
                        },
                        {
                                  "text": "Ho plijadurioù",
                                  "level": "elementary",
                                  "hints": [
                                            "Petra a rit e-kerzh hoc'h amzer vak ?",
                                            "Pegoulz ho peus kroget gant ar blijadur-mañ ?",
                                            "Ha gallout a rit ober an dra-se hoc'h-unan pe gant tud all ?",
                                            "Hag-eñ eo ker ?",
                                            "Petra a garit en dra-se ?"
                                  ]
                        },
                        {
                                  "text": "An amzer en ho lec'h-bevañ",
                                  "level": "elementary",
                                  "hints": [
                                            "Penaos eo an amzer peurvuiañ ?",
                                            "Peseurt amzer a blij deoc'h ar muiañ ?",
                                            "Hag-eñ e cheñch hoc'h imor gant an amzer ?",
                                            "Peini eo an amzer washañ ho peus soñj anezhi ?",
                                            "Petra a rit e-kerzh an deizioù glav ?"
                                  ]
                        },
                        {
                                  "text": "Un deiz-ha-bloaz ho peus soñj anezhañ",
                                  "level": "elementary",
                                  "hints": [
                                            "Deiz-ha-bloaz piv e oa ?",
                                            "Pelec'h e oa ar fest ?",
                                            "Petra ho peus graet ?",
                                            "Hag-eñ e oa un souezhadenn ?",
                                            "Petra a lakae an deiz-mañ da vezañ dibar ?"
                                  ]
                        },
                        {
                                  "text": "Traoù a garit en ho lec'h-bevañ",
                                  "level": "elementary",
                                  "hints": [
                                            "Petra eo an dra a blij deoc'h ar muiañ en ho kêr ?",
                                            "Hag-eñ eo ul lec'h mat evit ar famihoù ?",
                                            "Petra a zo d'ober eno ?",
                                            "Petra a cheñchfec'h ?",
                                            "Ha kuzuliañ a rafec'h al lec'h-mañ d'ur mignon ?"
                                  ]
                        },
                        {
                                  "text": "Ur Sul peurvuiañ",
                                  "level": "elementary",
                                  "hints": [
                                            "Da bet eur e tivunoc'h d'ar Sul ?",
                                            "Hoc'h eus ur reolenn-vintin ?",
                                            "Ha poazhañ a rit ur pred bras ?",
                                            "Ha diskuizhañ a rit pe chom gant kalz traoù d'ober ?",
                                            "Hag ar Sul eo ho teiz muiañ-karet ?"
                                  ]
                        },
                        {
                                  "text": "Boued eus ho pro",
                                  "level": "elementary",
                                  "hints": [
                                            "Peini eo ur meuz hengounel ?",
                                            "Ha poazhañ a rit anezhañ er gêr ?",
                                            "Pegoulz e vez debret gant an dud ?",
                                            "Hag-eñ eo diaes d'ober ?",
                                            "Ha kuzuliañ a rafec'h anezhañ d'un den estren ?"
                                  ]
                        },
                        {
                                  "text": "Un dra bennak ho peus prenet n'eus ket pell",
                                  "level": "elementary",
                                  "hints": [
                                            "Petra ho peus prenet ?",
                                            "Pelec'h ho peus prenet an dra-se ?",
                                            "Hag-eñ e oa ker ?",
                                            "Hoc'h eus bet ezhomm anezhañ pe ho poa c'hoant hepken ?",
                                            "Ha laouen oc'h gant ar brenadenn-mañ ?"
                                  ]
                        },
                        {
                                  "text": "Hoc'h app muiañ-karet",
                                  "level": "elementary",
                                  "hints": [
                                            "Peseurt app a implijit ar muiañ ?",
                                            "Evit petra e implijit anezhañ ?",
                                            "Pegoulz ho peus kroget d'e implijout ?",
                                            "Ha kuzuliañ a rafec'h anezhañ ?",
                                            "Ha gallout a rafec'h bevañ hepthañ ?"
                                  ]
                        },
                        {
                                  "text": "Ur soñj eus ho pugaleaj",
                                  "level": "elementary",
                                  "hints": [
                                            "Oet oas d'ar mare-se ?",
                                            "Pelec'h edoc'h ?",
                                            "Gant piv edoc'h ?",
                                            "Petra a oa c'hoarvezet ?",
                                            "Perak ho peus soñj anezhañ ?"
                                  ]
                        },
                        {
                                  "text": "Petra ho peus debret dec'h",
                                  "level": "elementary",
                                  "hints": [
                                            "Petra ho peus debret evit lein ?",
                                            "Petra ho peus debret evit merenn ?",
                                            "Ha poazhet ho peus pe debret er-maez ?",
                                            "Ha bezañ e oa un deiz peurvuiañ evit ar boued ?",
                                            "Peini eo an dra wellañ ho peus debret ?"
                                  ]
                        },
                        {
                                  "text": "Ul lec'h ma fell deoc'h bezañ er gêr",
                                  "level": "intermediate",
                                  "hints": [
                                            "Ur gêr eo, un ti, ur vro?",
                                            "Pegoulz ho peus santet kement-mañ evit ar wech kentañ?",
                                            "Petra a laka al lec'h-se da vezañ evel er gêr?",
                                            "Ur plas eo ar gêr pe ur santimant?",
                                            "Hervezoc'h, hag-eñ e c'heller kaout meur a gêr?"
                                  ]
                        },
                        {
                                  "text": "Un dra bennak ho peus cheñchet ho soñj warnañ",
                                  "level": "intermediate",
                                  "hints": [
                                            "Petra a soñje deoc'h diagent?",
                                            "Petra eo ar cheñchamant?",
                                            "Pegoulz eo degouezhet?",
                                            "Ur cheñchamant tamm-ha-tamm eo bet pe un dra a-daol-trumm?",
                                            "Penaos e santit an traoù bremañ?"
                                  ]
                        },
                        {
                                  "text": "Petra a laka un den da vezañ ur mignon mat",
                                  "level": "intermediate",
                                  "hints": [
                                            "Peseurt perzhioù eo ar re bouezusañ en ur vignoniezh?",
                                            "Hañval eo ho mignoned nesañ ouzhoc'h pe disheñvel int?",
                                            "Hag-eñ e c'hell ar mignoniezhioù cheñch pa zeuier da vezañ koshoc'h?",
                                            "Petra eo an dra na c'hellfec'h ket gouzañv gant ur mignon?",
                                            "Hag-eñ eo aes kaout mignoned wirion pa vezer deuet da vezañ un den deuet?"
                                  ]
                        },
                        {
                                  "text": "Un dra bennak ho pije bet c'hoant da zeskiñ abretoc'h",
                                  "level": "intermediate",
                                  "hints": [
                                            "Petra eo?",
                                            "Perak n'ho peus ket desket an dra-se abretoc'h?",
                                            "Penaos e vije bet disheñvel ho puhez?",
                                            "Hag-eñ eo re ziwezhat evit deskiñ bremañ?",
                                            "Hag-eñ e kelennfec'h an dra-se da unan bennak yaouankoc'h?"
                                  ]
                        },
                        {
                                  "text": "Ur varregezh emaoc'h o klask gwellaat",
                                  "level": "intermediate",
                                  "hints": [
                                            "Peseurt barregezh eo?",
                                            "Perak ho peus dibabet labourat warni?",
                                            "Penaos e pleustrit?",
                                            "Petra eo ar pezh a zo ar muiañ diaes?",
                                            "Peseurt araokadennoù ho peus graet?"
                                  ]
                        },
                        {
                                  "text": "Ar pezh a vank deoc'h eus ho pugaleaj",
                                  "level": "intermediate",
                                  "hints": [
                                            "Petra eo an dra a vank deoc'h e gwirionez?",
                                            "Hag-eñ e soñj deoc'h e oa aesoc'h ar vugaleaj?",
                                            "Petra a lakae ar vugale da gaout enkrez na ra ket an dud deuet?",
                                            "Petra a rae an dud deuet na gomprenen ket d'ar mare-se met a gomprenan bremañ?",
                                            "Hag-eñ e tistrofec'h d'ar mare-se ma c'hellfec'h?"
                                  ]
                        },
                        {
                                  "text": "Ho tiviz-labour eus an dibab",
                                  "level": "intermediate",
                                  "hints": [
                                            "Da bet eur e krogfec'h ha da bet eur e echufec'h?",
                                            "E pelec'h e labourfec'h?",
                                            "Gant piv e labourfec'h?",
                                            "Petra e vefec'h o ober?",
                                            "Peseurt disheñvelder a zo gant ho tiviz-labour wirion?"
                                  ]
                        },
                        {
                                  "text": "Penaos eo cheñchet ho puhez e-kerzh ar bloavezhioù diwezhañ",
                                  "level": "intermediate",
                                  "hints": [
                                            "Petra eo ar cheñchamant brasañ?",
                                            "Hag-eñ eo bet ho tibab deoc'h-c'hwi?",
                                            "Hag-eñ eo bet evit ar gwellañ?",
                                            "Petra zo chomet heñvel?",
                                            "Petra a cheñcho goude, hervezoc'h?"
                                  ]
                        },
                        {
                                  "text": "Petra a laka ac'hanoc'h da vezañ bev-buhezek",
                                  "level": "intermediate",
                                  "hints": [
                                            "Hag un ampoent pe un obererezh a zo hag a ro nerzh deoc'h atav?",
                                            "Hag-eñ e vez tud all ganeoc'h pe e vezit hoc'h-unan?",
                                            "Pegoulz e santit kement-mañ?",
                                            "Hag-eñ eo cheñchet an dra-se gant an amzer?",
                                            "Petra a vir ouzhoc'h d'hen ober aliesoc'h?"
                                  ]
                        },
                        {
                                  "text": "Ho tistro-spered brasañ",
                                  "level": "intermediate",
                                  "hints": [
                                            "Petra eo an dra a sach ho spered an aesañ?",
                                            "Hag-eñ e koust amzer pe nerzh deoc'h?",
                                            "Hag-eñ ho peus klasket cheñch kement-mañ?",
                                            "Hag-eñ eo fall-tre pe hag-eñ ez eus un dra bennak mat ennañ?",
                                            "Petra a rafec'h gant an amzer-se ma vefe lamet an distro-spered-se?"
                                  ]
                        },
                        {
                                  "text": "Ul levr, ur film pe ur rummad filmoù a zo chomet en ho spered",
                                  "level": "intermediate",
                                  "hints": [
                                            "Peseurt anv en doa?",
                                            "Diwar-benn petra e oa?",
                                            "Perak eo chomet en ho spered?",
                                            "Hag-eñ eo cheñchet ho toare da soñjal diwar-benn un dra bennak?",
                                            "Hag-eñ e kuzuliefec'h an dra-se da unan bennak hag-e-piv?"
                                  ]
                        },
                        {
                                  "text": "Petra eo ar gêr evidoc'h",
                                  "level": "intermediate",
                                  "hints": [
                                            "Hag un den eo ar gêr, ul lec'h pe ur santimant?",
                                            "E pelec'h e santit bezañ ar muiañ er gêr?",
                                            "Hag-eñ eo cheñchet ho soñj diwar-benn ar gêr pa oc'h deuet da vezañ koshoc'h?",
                                            "Hag-eñ e c'heller santout bezañ er gêr en ul lec'h nevez?",
                                            "Hag-eñ eo ar gêr ul lec'h ma tistroit dezhañ pe un dra a zougit ganeoc'h?"
                                  ]
                        },
                        {
                                  "text": "Un dra bennak a rit en un doare disheñvel diouzh ar re all",
                                  "level": "intermediate",
                                  "hints": [
                                            "Petra eo?",
                                            "Pegoulz ho peus kroget d'ober evel-se?",
                                            "Hag-eñ ez eus bet tud o sevel goulennoù ouzhoc'h diwar-benn kement-mañ?",
                                            "Hag-eñ e ra d'ho puhez bezañ gwelloc'h?",
                                            "Hag-eñ e soñj deoc'h e tije d'an holl ober evel-se?"
                                  ]
                        },
                        {
                                  "text": "Ur boaz a zo ur lorc'h ennoch gantañ",
                                  "level": "intermediate",
                                  "hints": [
                                            "Peseurt boaz eo?",
                                            "Abaoe pegoulz ho peus ar boaz-se?",
                                            "Penaos ho peus savet an dra-se?",
                                            "Peseurt disheñvelder a ra?",
                                            "Hag unan bennak en deus ho lakaet d'ober kement-mañ?"
                                  ]
                        },
                        {
                                  "text": "Ur veaj he deus souezhet ac'hanoc'h",
                                  "level": "intermediate",
                                  "hints": [
                                            "Da belec'h e oach o vont?",
                                            "Petra en deus souezhet ac'hanoc'h?",
                                            "Al lec'h e oa, an dud, pe ar pezh a zo degouezhet?",
                                            "Hag-eñ eo bet cheñchet ho raktresoù?",
                                            "Hag-eñ e tistrofec'h di?"
                                  ]
                        },
                        {
                                  "text": "Ho liamm gant ar mediaoù sokial",
                                  "level": "intermediate",
                                  "hints": [
                                            "Peseurt savennoù a implijit?",
                                            "Pegement a amzer e tremenit warno?",
                                            "Hag-eñ e vez efedoù war ho spered?",
                                            "Hag-eñ ho peus graet troc'h ebet ganto un deiz bennak?",
                                            "Penaos e vije ho puhez hepzo?"
                                  ]
                        },
                        {
                                  "text": "Petra eo ar berzh evidoc'h",
                                  "level": "intermediate",
                                  "hints": [
                                            "Penaos e tespizit ar berzh?",
                                            "An arc'hant eo, al levenez, al liammoù gant an dud?",
                                            "Hag-eñ eo cheñchet ho tespizadur gant an amzer?",
                                            "Hag-eñ e soñjit ho peus graet berzh?",
                                            "Hag-eñ eo bouezus ali an dud all warnoc'h?"
                                  ]
                        },
                        {
                                  "text": "Ho liamm gant ar boued",
                                  "level": "intermediate",
                                  "hints": [
                                            "Hag-eñ e vezit o poazhañ boued alies?",
                                            "Hag-eñ n'eo ar boued nemet evit kaout nerzh pe un dra bennak muioc'h eo?",
                                            "Hag-eñ e tebrit gant tud all pe hoc'h-unan?",
                                            "Hag ur boued a zo liammet kreñv ouzh un eñvor?",
                                            "Hag-eñ eo cheñchet ho liamm gant ar boued?"
                                  ]
                        },
                        {
                                  "text": "Un dra bennak a laka ac'hanoc'h da c'hoarzhin atav",
                                  "level": "intermediate",
                                  "hints": [
                                            "Petra eo?",
                                            "Perak e laka ac'hanoc'h da c'hoarzhin, hervezoc'h?",
                                            "Hag-eñ e c'hellit c'hoarzhin diwar-benn traoù diaes?",
                                            "Hag-eñ e c'hoarzhit gant ho mignoned diwar-benn an hevelep traoù?",
                                            "Hag-eñ eo disheñvel ho fent e yezhoù disheñvel?"
                                  ]
                        },
                        {
                                  "text": "Ur guzul ho pije roet deoc'h-c'hwi pa oach yaouankoc'h",
                                  "level": "intermediate",
                                  "hints": [
                                            "Pegement e vije oad ho 'c'hwi' yaouankoc'h?",
                                            "Petra e vije ar guzul?",
                                            "Perak ne ouiech ket an dra-se d'ar mare-se?",
                                            "Hag-eñ e soñj deoc'h ho pije selaouet?",
                                            "Piv en deus roet deoc'h ar gwellañ kuzul en ho puhez?"
                                  ]
                        },
                        {
                                  "text": "Dazont ar bed a-benn 50 vloaz",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Peseurt cheñchamantoù teknologel a c'hortozit?",
                                            "Penaos e vo an endro?",
                                            "Hag-eñ e vo disheñvel frammoù ar gevredigezh?",
                                            "Hag ez eus un dra bennak hag a laka ac'hanoc'h da vezañ nec'het?",
                                            "Petra a laka ac'hanoc'h da vezañ spi en dazont?"
                                  ]
                        },
                        {
                                  "text": "Levezon ar cheñchamant hin war ar c'humuniezhoù lec'hel",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Penaos eo cheñchet ho korn-bro?",
                                            "Peseurt riskloù resis a zo evit an dud?",
                                            "Piv eo an dud an ezhommañ?",
                                            "Hag-eñ e vez kemeret trawalc'h a gementoù-diwall?",
                                            "Petra a c'hell an hiniennoù ober evit cheñch an traoù?"
                                  ]
                        },
                        {
                                  "text": "Ur gredenn ho peus ha n'eo ket rannet gant an darn vrasañ eus an dud tro-dro deoc'h",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Petra eo ar gredenn-se?",
                                            "Pegoulz eo bet stummet ganeoc'h?",
                                            "Hag-eñ ho peus bet kudennoù gant tud all abalamour d'an dra-se?",
                                            "Hag-eñ e vez efedoù war ho liammoù gant an dud?",
                                            "Hag-eñ eo cheñchet ar gredenn-se goude ur gaozeadenn?"
                                  ]
                        },
                        {
                                  "text": "Ar pezh a rafec'h ma ne vijec'h ket aonik",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Petra eo an dra a vir ouzhoc'h d'ober an aon?",
                                            "Un aon poellek pe diboell eo?",
                                            "Hag an aon en deus miret ouzhoc'h d'ober un dra bennak ho peus keuz dezhañ bremañ?",
                                            "Penaos e vije ho puhez ma vijec'h tremenet dreist d'an aon-se?",
                                            "Petra a lavarfec'h da unan bennak hag a zo o stourm gant an hevelep aon?"
                                  ]
                        },
                        {
                                  "text": "An dra wellañ hag an dra fallañ e-lec'h ma oc'h bet o tont war-raok",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Petra en deus ho stummet ar muiañ el lec'h-se?",
                                            "Evit petra oc'h anaoudek?",
                                            "Petra ho pije karet a vefe bet disheñvel?",
                                            "Penaos en deus stummet ho talvoudoù?",
                                            "Hag-eñ e savfec'h bugale eno?"
                                  ]
                        },
                        {
                                  "text": "Penaos e vezit o merañ ar stress",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Peseurt doareoù a implijit?",
                                            "Hag-eñ e soñjit e vezit o merañ mat ar stress?",
                                            "Petra a laka ac'hanoc'h da vezañ stresset-tre?",
                                            "Hag-eñ eo cheñchet ho liamm gant ar stress?",
                                            "Peseurt kuzul ho pije roet da unan bennak hag en deus poan gant ar stress?"
                                  ]
                        },
                        {
                                  "text": "Un dra bennak a vezec'h o varn diagent hag a gomprenit bremañ",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Petra e oa?",
                                            "Petra a soñje deoc'h a-raok?",
                                            "Petra en deus cheñchet ho spered?",
                                            "Hag-eñ ho peus mezh gant ho soñj kozh?",
                                            "Hag-eñ en deus graet ac'hanoc'h un den nebeutoc'h drouk o varn an dud all?"
                                  ]
                        },
                        {
                                  "text": "Petra eo ar vignoniezh evidoc'h pa oc'h un den deuet",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Hag-eñ eo disheñvel ar vignoniezh pa vezer un den deuet diouzh hini ar vugaleaj?",
                                            "Pegement a vignoned nesañ ho peus?",
                                            "Penaos e virit ho mignoniezhioù a-bell?",
                                            "Hag-eñ ho peus kollet liammoù gant ur mignon abalamour m'eo cheñchet ho puhez?",
                                            "Petra a laka ur vignoniezh da badout?"
                                  ]
                        },
                        {
                                  "text": "Ur wech ma oc'h bet o faziañ penn-da-benn",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Petra a zo degouezhet?",
                                            "Pegement a amzer eo bet ret deoc'h evit kompren?",
                                            "Petra eo bet koust ar fazi-se?",
                                            "Penaos ho peus graet gant kement-mañ?",
                                            "Petra ho peus desket?"
                                  ]
                        },
                        {
                                  "text": "Ho liamm luziet gant ar mediaoù sokial",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Hag-eñ e plij deoc'h, hag-eñ e tisprijit anezho, pe an eil hag egile?",
                                            "Petra a gavit enno na c'hellit ket kavout e lec'h all?",
                                            "Hag-eñ oc'h bet o santout gwashoc'h goude bezañ implijet anezho?",
                                            "Hag-eñ e cheñch an doare ma tiskouezit ac'hanoc'h d'ar bed?",
                                            "Ma c'hellfec'h kemmañ ar mediaoù sokial, petra a rafec'h?"
                                  ]
                        },
                        {
                                  "text": "An dra a vez re-vrizhet e buhez an amzer-vremañ",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Petra eo?",
                                            "Perak e vez roet kement a bouez dezhañ gant an dud?",
                                            "Pegoulz ho peus komprenet ne dalveze ket kement a drouz?",
                                            "Hag-eñ e vez kement a efedoù gant ho soñj war an dud all?",
                                            "Gant petra e vefe erlec'hiet ganeoc'h?"
                                  ]
                        },
                        {
                                  "text": "Ur mare en deus cheñchet an doare ma welit ac'hanoc'h hoc'h-unan",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Petra a zo degouezhet?",
                                            "Hag-eñ e oach o c'hortoz e vefe kement a efedoù warnoc'h?",
                                            "Hag-eñ eo bet cheñchet ho puhez a-daol-trumm pe tamm-ha-tamm?",
                                            "Hag-eñ eo gwelloc'h ho 'c'hwi' goude ar mare-se?",
                                            "Hag-eñ e rannfec'h kement-mañ gant un den nesañ?"
                                  ]
                        },
                        {
                                  "text": "Un dra bennak a oc'h lorc'h ennoch gantañ e-unan",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Petra eo?",
                                            "Perak e-unan — perak ket uhel?",
                                            "Pegement a amzer eo bet ret?",
                                            "Hag-eñ e oar an dud nesañ diwar-benn kement-mañ?",
                                            "Petra a lavar kement-mañ diwar-benn ho talvoudoù?"
                                  ]
                        },
                        {
                                  "text": "Ho teorienn bersonel diwar-benn perak eo an dud evel m'int",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "An natur eo, an deskadurezh, pe un dra bennak all?",
                                            "Hag-eñ e soñj deoc'h e c'hell an dud cheñch penn-da-benn?",
                                            "Hag un den en deus ho souezhet penn-da-benn un deiz bennak?",
                                            "Hag-eñ e soñjit e komprenit mat an dud?",
                                            "Petra eo ar fazi brasañ a ra an dud an eil gant egile?"
                                  ]
                        },
                        {
                                  "text": "Ar pezh a soñjit diwar-benn ar vallozh (ambition)",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Un den a vallozh oc'h?",
                                            "Hag ur dra vat eo ar vallozh atav?",
                                            "Hag-eñ e c'hell ar vallozh ober droug d'ho puhez prevez?",
                                            "Hag-eñ ho peus doujañs evit an dud o deus kalz a vallozh?",
                                            "Pegement eo trawalc'h?"
                                  ]
                        },
                        {
                                  "text": "Ho 'c'hwi' a-raok pemp bloaz",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Petra e oach o ober?",
                                            "Gant petra e oach nec'het?",
                                            "Penaos e soñje deoc'h e vije ho puhez bremañ?",
                                            "Petra e oa an dra bouezusañ na ouiech ket c'hoazh?",
                                            "Hag-eñ e vijec'h mignoned gant ho 'c'hwi' eus an amzer-dremenet?"
                                  ]
                        },
                        {
                                  "text": "Penaos e kemerit divizoù diaes",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Hag-eñ e selaouit ho penn pe ho kalon?",
                                            "Hag-eñ e kemerit divizoù buan pe goustad?",
                                            "Hag-eñ e goulennit kuzulioù pe hag-eñ e tivizit hoc'h-unan?",
                                            "Petra eo bet an diviz diaesañ ho peus ranket kemer?",
                                            "Hag-eñ e vezit peoc'h ganeoc'h goude-se?"
                                  ]
                        },
                        {
                                  "text": "An hiraezh (nostalgia) hag ar pezh a ra deoc'h",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Diwar-benn petra ho peus hiraezh?",
                                            "Hag-eñ e ro nerzh deoc'h an hiraezh pe hag-eñ e ra droug deoc'h?",
                                            "Hag-eñ e oa gwelloc'h an amzer-dremenet e gwirionez pe hag-eñ e oa disheñvel hepken?",
                                            "Hag-eñ e vir an hiraezh ouzhoc'h da vont war-raok?",
                                            "Peseurt c'hwezh, son pe blaz a laka un eñvor da zont en-dro?"
                                  ]
                        },
                        {
                                  "text": "Ar vrud — ur c'hastiz pe ur gopr?",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Hag-eñ ho pije c'hoant da vezañ brudet?",
                                            "Peseurt seurt brud ho pije?",
                                            "Petra a gollfec'h?",
                                            "Hag-eñ e soñj deoc'h eo eürus an darn vrasañ eus an dud vrudet?",
                                            "Peseurt disheñvelder a zo etre ar vrud hag an doujañs?"
                                  ]
                        },
                        {
                                  "text": "Ar pezh a laka ac'hanoc'h da vezañ lakaet skuizh hag ar pezh a laka ac'hanoc'h da vezañ entanet",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Diwar-benn peseurt danvez pe obererezh e c'hellfec'h komz e-pad eurvezhioù?",
                                            "Petra eo an dra na c'hellit ket gouzañv tamm ebet?",
                                            "Hag-eñ e lavar ar pezh a blij deoc'h un dra bennak diwar-benn ho micher pe ho puez?",
                                            "Hag un dra bennak a lakae ac'hanoc'h da vezañ skuizh a-raok a zo deuet da vezañ dedennus bremañ?",
                                            "Petra eo an dra a gavit entanet hag a souezh an dud all?"
                                  ]
                        },
                        {
                                  "text": "Ur wech ma oc'h bet ranket kregiñ en-dro gant pep tra",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Petra a zo degouezhet a-raok kregiñ en-dro?",
                                            "Un dibab eo bet pe ar vuhez he deus rediet ac'hanoc'h?",
                                            "Petra eo bet ar pezh a zo bet ar muiañ diaes evit kregiñ en-dro?",
                                            "Petra ho peus miret eus an amzer-gent?",
                                            "Hag-eñ oc'h laouen eo degouezhet kement-mañ?"
                                  ]
                        },
                        {
                                  "text": "Ar pezh a vez komprenet a-dreuz gant an dud diwar ho penn",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Petra eo ar fazi a vez graet an aliesañ?",
                                            "A-belec'h e teu kement-mañ?",
                                            "Hag-eñ e tregas ac'hanoc'h?",
                                            "Hag-eñ e klaskit reizhañ kement-mañ pe hag-eñ e lezit an traoù da vont?",
                                            "Hag-eñ ez eus un tamm gwirionez ennañ a-benn ar fin?"
                                  ]
                        },
                        {
                                  "text": "Ha lakaet oc'h bet gant al lec'h ma'z oc'h bet savet da vezañ an hini ma'z oc'h",
                                  "level": "advanced",
                                  "hints": [
                                            "Peseurt traoù resis eus al lec'h-se o deus stummet ac'hanoc'h?",
                                            "Hag an dud eo, ar sevenadur, ar maezioù, ar yezh?",
                                            "Hag e vije bet deuet deoc'h bezañ an hevelep den en ul lec'h all?",
                                            "Hag en em santout a rit termenet gant ho teroù pe hag-eñ e stourmit ouzh kement-se?",
                                            "Peseurt den e vijec'h bet ma vijec'h bet savet en ul lec'h disheñvel-mik?"
                                  ]
                        },
                        {
                                  "text": "An islonk etre an den ma'z oc'h hag an hini a ziskouezit d'ar bed",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag un islonk bras a zo etre ho 'me' foran hag ho 'me' prevez?",
                                            "Hag-eñ eo yac'h an islonk-se pe hag-eñ e koust un dra bennak deoc'h?",
                                            "E peseurt degouezhioù oc'h oc'h-unan penn-da-benn?",
                                            "Hag an dud a anavez ac'hanoc'h mat a wel un den disheñvel diouzh an hini a vez gwelet gant ho kenlabourerien pe gant estrenien?",
                                            "Hag-eñ eo an ober gant an identelezh un dra ret pe un dra da stourm outañ?"
                                  ]
                        },
                        {
                                  "text": "Hag an dud a cheñch penn-da-benn pe hag-eñ en em ziskouezont tamm-ha-tamm hepken",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ e c'hallit soñjal en un den en deus cheñchet evit gwir — pe hag-eñ n'anavezec'h ket anezhañ a-walc'h a-raok?",
                                            "Petra zo ezhomm evit ma cheñchfe un den evit gwir?",
                                            "Hag-eñ e soñjit oc'h bet cheñchet pe hag-eñ oc'h chomet an hevelep den e gwirionez?",
                                            "Petra a lavar kement-se diwar-benn al liammoù ma ne cheñch ket an dud evit gwir?",
                                            "Hag-eñ eo ret krediñ e c'hall an dud cheñch evit ar garantez hag ar vignoniezh?"
                                  ]
                        },
                        {
                                  "text": "Ar pezh ho peus desket diwar c'hwitadennoù ha n'ho pije ket gallet deskiñ diwar berzhioù mat",
                                  "level": "advanced",
                                  "hints": [
                                            "Peseurt c'hwitadenn resis he deus desket deoc'h un dra na c'haller ket erlec'hiañ?",
                                            "Hag-eñ eo ar c'hwitadenn ur c'helenner gwelloc'h e gwirionez pe hag-eñ eo un dra a vez lavaret gant an dud evit en em santout gwelloc'h hepken?",
                                            "Hag-eñ e soñjit e vez meret mat ar c'hwitadennoù ganeoc'h?",
                                            "Peseurt stumm c'hwitadenn eo an hini boaniusañ deoc'h-c'hwi?",
                                            "Hag-eñ ez eus eus ur c'hwitadenn ha ne zesk netra deoc'h?"
                                  ]
                        },
                        {
                                  "text": "Ho liamm gant ar serteniz hag an douetañs",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag un den oc'h hag en deus ezhomm eus serteniz pe hag-eñ e c'hallit bevañ mat gant an amjistridigezh?",
                                            "E peseurt tachennoù eus ho puhez en em santit sur hag e peseurt tachennoù ho peus douetañs?",
                                            "Hag ur prantad douetañs bras a zo bet talvoudus deoc'h a-benn ar fin?",
                                            "Hag-eñ e fizieit en dud a seblant bezañ sur-da-vat eus pep tra?",
                                            "Petra eo an diforc'h etre ur sgeptikouriezh yac'h hag un douetañs a laka an den da chom a-sav?"
                                  ]
                        },
                        {
                                  "text": "An traoù a zougit eus ho pugaleaj hep skianaat anezhañ",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ ez eus patromoù en ho tozre a c'hallit rurañ betek ho prantadoù kentañ?",
                                            "Pegoulz ho peus merket evit ar wech kentañ e oa un dra bennak eus ho pugaleaj o ren c'hoazh ennoc'h?",
                                            "Hag-eñ eo posubl kompren penn-da-benn al levezonioù dindan guzh war an den ma'z oc'h?",
                                            "Peseurt patromoù a dalvez deoc'h ha peseurt re ne reont ket?",
                                            "Peseurt kiriegezh ho peus da studial ho techou hêrezhet?"
                                  ]
                        },
                        {
                                  "text": "Ar pezh a zifennfec'h memes ma koustfe un dra bennak deoc'h",
                                  "level": "advanced",
                                  "hints": [
                                            "Petra eo an dra na vijec'h ket prest da gemmañ, n'eus forzh petra a degouezhfe?",
                                            "Hag-eñ eo bet amprouet kement-se?",
                                            "Hag un dalvoudegezh eo, ul liamm, pe un dra bennak all?",
                                            "Hag-eñ e soñjit o deus an holl dud un dra evel-se pe hag-eñ eo ral?",
                                            "Hag-eñ e lavar deoc'h gouzout kement-se diwar ho penn petra eo ar pezh a gredit evit gwir?"
                                  ]
                        },
                        {
                                  "text": "Ar pezh a soñjit e vez kammveuzet gant an dud diwar-benn al levenez",
                                  "level": "advanced",
                                  "hints": [
                                            "Petra eo ar fazi stankañ a ra an dud pa vezont o klask al levenez?",
                                            "Hag al levenez a vez kavet pe hag-eñ e vez savet?",
                                            "Hag-eñ e soñjit oc'h eürus? Hag-eñ e ouzit memes?",
                                            "Hag-eñ ez eus ur stennadur etre al levenez hag ar ster?",
                                            "Hag-eñ eo cheñchet kalz ho soñj diwar-benn al levenez?"
                                  ]
                        },
                        {
                                  "text": "Roll ar chañs en ho puhez",
                                  "level": "advanced",
                                  "hints": [
                                            "Pegen bras eo roll ar chañs e-keñver ho strivoù evit bezañ el lec'h ma'z oc'h hiziv?",
                                            "Hag-eñ eo displijus anzav he deus c'hoariet ar chañs ur roll?",
                                            "Hag-eñ he deus c'hoariet ar chañs a-enep deoc'h?",
                                            "Hag-eñ e soñjit e vez dreististimet gant an dud ar galloud o deus war an traoù?",
                                            "Petra eo heuliad etikel ar chañs — hag-eñ e cheñch ar pezh a dleet an eil d'egile?"
                                  ]
                        },
                        {
                                  "text": "Hag-eñ e c'hall ar vallozh hag an emeurusted kenvevañ",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ e soñjit e c'hallit kaout c'hoant da gaout muioc'h ha bezañ e peoc'h er memes koulz?",
                                            "Hag-eñ ho peus bet da choaz etre an daou?",
                                            "Hag-eñ e virit ouzh an dud a zo eürus gant ar pezh o deus pe hag-eñ e seblant bezañ ur seurt dilez?",
                                            "Hag-eñ eo ar vallozh ur stumm eus an nemeurusted dre dermenadur?",
                                            "Petra e vije en ho puhez kaout an daou?"
                                  ]
                        },
                        {
                                  "text": "Ar pezh a dleet d'an dud o deus ho stummet",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ ho peus ur santimant a zle d'an dud o deus ho stummet?",
                                            "Hag an dlee-se a zo un dra a denn d'ar santimant, d'an ober, pe d'an daou?",
                                            "Ha ma vijent bet stummet ac'hanoc'h en ur mod a zo bet noazus?",
                                            "Penaos e enorit levezon un den bennak hep bezañ paket ganti?",
                                            "Hag-eñ e c'hallit lakaat an drugarez a-du diouzh an dlee?"
                                  ]
                        },
                        {
                                  "text": "An dra dalvoudusañ a zo bet lavaret deoc'h biskoazh",
                                  "level": "advanced",
                                  "hints": [
                                            "Petra e oa ha gant piv e oa bet lavaret?",
                                            "Hag-eñ ho poa komprenet diouzhtu he zalvoudegezh pe diwezhatoc'h hepken?",
                                            "Hag-eñ e treuzkasit an dra-se?",
                                            "Hag-eñ eo ar furnez talvoudus un dra eeun dalc'hmat pe hag-eñ e c'hall ar gemplezhded bezañ talvoudus ivez?",
                                            "Petra eo an dra ho pije karet e vije bet lavaret deoc'h gant un den bennak ha n'eo bet graet gant den ebet?"
                                  ]
                        },
                        {
                                  "text": "Un dra bennak er vuhez vodern a laka ac'hanoc'h da vezañ nec'het evit gwir",
                                  "level": "advanced",
                                  "hints": [
                                            "Petra eo — an teknologiezhioù, ar politikerezh, an emdroadurioù sokial, an endro?",
                                            "Hag an nec'hamant-se a zo nevez pe hag-eñ eo bet o sevel tamm-ha-tamm?",
                                            "Hag-eñ e soñjit e vez rannet gant tud all pe hag-eñ en em santit hoc'h-unan gant kement-se?",
                                            "Hag-eñ e cheñch ho mod da vevañ dre ma'z oc'h nec'het gant kement-se?",
                                            "Hag-eñ ho peus un tamm spi e yelo traoù war-well?"
                                  ]
                        },
                        {
                                  "text": "An diforc'h etre bezañ e-unan ha bezañ digenvez",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag un den oc'h a gar bezañ e-unan?",
                                            "Hag-eñ ho peus santet an digenez e-kreiz ur foulad tud?",
                                            "Hag-eñ e soñjit e laka ar vuhez vodern an digenez da vezañ stankoc'h pe raloc'h?",
                                            "Hag-eñ e c'haller bezañ digenvez en ur relasion?",
                                            "Petra eo al louzoù a-enep an digenez — muioc'h a liammoù, pe un dra bennak donoc'h?"
                                  ]
                        },
                        {
                                  "text": "Petra a dalvez bevañ mat — hag-eñ oc'h tost d'an dra-se",
                                  "level": "advanced",
                                  "hints": [
                                            "Penaos e termenit ur vuhez renet mat?",
                                            "Buhez piv e sellit outi en ur soñjal: 'tost eo d'an dra-se'?",
                                            "Hag-eñ emaoc'h war un hent o vont war-du an dra-se pe o pellaat dioutañ?",
                                            "Hag-eñ e soñjit alies e kement-se pe hag-eñ e vez lakaet a-gostez gant ar vuhez pemdez?",
                                            "Hag-eñ eo bevañ mat un dra a vez raktreset pe un dra a degouezh dre zegouezh?"
                                  ]
                        },
                        {
                                  "text": "Hag-eñ e fizieit en ho memor deoc'h-c'hwi",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ ez eus bet ur memor a zo deuet da vezañ faos a-benn ar fin?",
                                            "Hag-eñ e soñjit e kempennomp hor memorioù evit ma glotfont gant un danevell diwar hor penn?",
                                            "Petra eo ar memor sklaerañ ho peus ha pegen fizius e soñjit eo?",
                                            "Hag-eñ eo pouezus e vije resis ur memor ma seblant bezañ gwir?",
                                            "Petra a lavar ar memor diwar-benn an identelezh — ma cheñchfe ho memorioù, hag-eñ e vijec'h un den disheñvel?"
                                  ]
                        },
                        {
                                  "text": "An aozadurioù hag-eñ e talvezont deomp",
                                  "level": "advanced",
                                  "hints": [
                                            "Soñjit en un aozadur — yec'hed, deskadurezh, gouarnamant — ha priziit anezhañ a-zevri.",
                                            "Pegoulz e paouez un aozadur da gas e gefridi da benn?",
                                            "Hag-eñ oc'h bet dilaosket gant un aozadur ho poa fiziañs ennañ?",
                                            "Hag-eñ eo posubl kemmañ an traoù pe hag-eñ e rank an aozadurioù bezañ kemmet penn-da-benn?",
                                            "Peseurt stumm a vefe d'un aozadur o vont en-dro mat hervezoch?"
                                  ]
                        },
                        {
                                  "text": "An istorioù a gontit diwar ho penn",
                                  "level": "advanced",
                                  "hints": [
                                            "Petra eo an istor pennañ a gontit diwar-benn ho puhez deoc'h-c'hwi?",
                                            "Pegen resis eo ha pegen savet eo?",
                                            "Hag-eñ eo cheñchet an istor gant an amzer?",
                                            "Petra a degouezh gant hor santimant a-fed 'me' pa vez lakaet an istor en arvar?",
                                            "Piv oc'h ma tennit an istor kuit?"
                                  ]
                        },
                        {
                                  "text": "Petra a dalvez ar gumuniezh en ur bed mbeget",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag en em santout a rit evel un lodenn eus ur gumuniezh?",
                                            "Hag-eñ eo ar gumuniezh enlinenn ur gumuniezh wirion?",
                                            "Petra zo bet kollet ha petra zo bet gounezet er mod ma vez savet kumuniezhioù hiziv an deiz?",
                                            "Petra a goulenn ar gumuniezh digant he mibien?",
                                            "Hag-eñ e c'haller krouiñ ur gumuniezh a-ratozh pe hag-eñ e rank kreskiñ en un doare naturel?"
                                  ]
                        },
                        {
                                  "text": "Penaos e ouzit pegoulz fiziout en un den bennak",
                                  "level": "advanced",
                                  "hints": [
                                            "Peseurt sinoù e sellit outo?",
                                            "Hag-eñ eo bet ho nien a-dreuz penn-da-benn biskoazh?",
                                            "Hag-eñ e soñjit oc'h re fizius, ket a-walc'h, pe hag-eñ eo reizh ho fiziañs?",
                                            "Hag-eñ e vez roet ar fiziañs pe gounezet — ha hag-eñ eo pouezus an diforc'h-se?",
                                            "Petra a dorr ar fiziañs da viken herveoc'h?"
                                  ]
                        },
                        {
                                  "text": "Kemplezh ar goustiañs denel",
                                  "level": "advanced",
                                  "hints": [
                                            "Petra a dermen ar goustiañs : an emskiant, an embrederiadenn, pe un dra bennak muioc'h ?",
                                            "Ha produet e vez ar goustiañs gant an argerzhioù biologel pe un dra ziazez eo ?",
                                            "Hag an naouegezh artifisiel a c'hallo tizhout ur goustiañs wirion un deiz bennak ?",
                                            "Penaos e vez lakaet an dezoù danvezel e diskred gant 'kudenn diaez' ar goustiañs ?",
                                            "Pezh liamm zo etre ar goustiañs hag an empenn fizikel ?"
                                  ]
                        },
                        {
                                  "text": "Hag an 'unan' zo un dra bennak a zizoloer pe a savjer",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag un 'unan' lakaet zo o c'hortoz bezañ dizoloet, pe savet e vezoc'h dibaouez gant ho tibaboù hag ar c'henteks ?",
                                            "Petra a degouezh gant an identelezh pa cheñch ar c'henteks penn-da-benn — kleñved, divroerezh, koll ?",
                                            "Hag an danevell ho peus diwar ho penn zo un dizoloadenn pe ur grouidigezh ?",
                                            "Hag-eñ e talvez ar goulenn-mañ evit ho sell war ar vuhez, pe ur goulenn prederouriel rik eo ?",
                                            "Ma 'z eo savet an unan, petra eo hor c'harg e sevel ?"
                                  ]
                        },
                        {
                                  "text": "Gourenerezh an traoù a zibabomp ankounac'haat",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag ul liamm moral ho peus gant hoc'h ankounac'hadur deoc'h-unan ?",
                                            "Hag ur stumm a zishonestiz gant an unan eo ar memor dibabet ?",
                                            "Hag an daskorañ a c'houlenn ankounac'haat, pe ur fazi rumm eo ?",
                                            "Petra a ziskouez ur gevredigezh a zibab ankounac'haat a-stroll diwar he fenn ?",
                                            "Hag-eñ ez eus eus an amnezia etek — evit an dud pe an vroioù ?"
                                  ]
                        },
                        {
                                  "text": "Hag ar yezh a stumm ar pezh a c'hallomp soñjal pe hepken ar pezh a c'hallomp lavarout",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ ho peus bet tro da gaout mennozhioù ne oac'h ket evit stummañ en ho yezh kentañ o teskiñ ur yezh all ?",
                                            "Hag an dezoù Sapir-Whorf zo ur skeudenn barzhoniel pe ur goulenn epistemologel wirion ?",
                                            "Hag-eñ ez eus arnodoù a harz ouzh kement yezh zo ?",
                                            "Petra a dalvez klevout un dra bennak ne c'hallit ket envel ?",
                                            "Hag ar yezh a implijit en ho monolog diabarzh a cheñch ho sell warnoc'h hoc'h-unan ?"
                                  ]
                        },
                        {
                                  "text": "Al liamm etre frankiz ha kiriegezh en ho puhez",
                                  "level": "advanced",
                                  "hints": [
                                            "Pelec'h en em santit ar frankañ ha petra ho peus paeet evit ar frankiz-se ?",
                                            "Hag ar frankiz a vez prenet bepred war goust unan bennak all ?",
                                            "Hag-eñ e welit ho kiriegezhioù evel strinkoù pe evel ar pezh a ro ster d'ho frankiz ?",
                                            "Hag un den a c'hall bezañ frank da vat hep an amveziadoù danvezel evit lakaat ar frankiz-se e pleustr ?",
                                            "Petra e vefec'h prest da goll evit bezañ frankoc'h — ha petra a ziskouez ho respont ?"
                                  ]
                        },
                        {
                                  "text": "Petra a ra an hiraezh e gwirionez pa zeu d'ho kwelet",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag an hiraezh zo glac'har, frealz, distummadur, pe an tri asambles ?",
                                            "Hag-eñ ho peus fiziañs en ho santimantoù hiraezhus pe hag-eñ e vezit disfizius outo ?",
                                            "Hag ar pezh ho peus hiraezh outañ zo un amzer dremenet wirion pe ur stumm kemmet ?",
                                            "Petra a harz an hiraezh ha petra a laka da vezañ posupl ?",
                                            "Hag-eñ e c'hall ur gevredigezh bezañ hiraezhus evel un den — ha gant an hevelep dindan-ar-reizhoù ?"
                                  ]
                        },
                        {
                                  "text": "Hag-eñ e vez lakaet an traoù da vezañ bihanoc'h bepred pa vezont komprenet",
                                  "level": "advanced",
                                  "hints": [
                                            "Soñjit en un dra bennak kaer pe gevrinus — hag-eñ e vez lakaet da vezañ nebeutoc'h a se pa vez komprenet ?",
                                            "Hag un dalvoudegezh zo gant an nann-ouiziegezh, pe n'eo nemet romantelouriezh ?",
                                            "Hag an displegadenn skiantel hag an estlamm estetik a c'hall kenvevañ, pe an eil a laka egile dindan e galloud ?",
                                            "Hag-eñ ez eus un dra bennak a wall-virit a gompren dre aon da goll e c'halloud warnoc'h ?",
                                            "Petra a ziskouez ar goulenn-mañ diwar-benn harzoù ar rationalouriezh ?"
                                  ]
                        },
                        {
                                  "text": "An diforc'h etre ho talvoudegezhioù embannet hag ho talvoudegezhioù diskouezet",
                                  "level": "advanced",
                                  "hints": [
                                            "Petra a lavar ho tibaboù gwirion — ha n'eo ket ho kredennoù embannet — diwar-benn ar pezh a gont ar muiañ deoc'h ?",
                                            "Hag un esaou poanius zo etre an daou ?",
                                            "Hag an esaou-se zo ur merk a silidigezh pe ur merk eus an diaezamant wirion da vevañ hervez e bennaennoù ?",
                                            "Hag-eñ e c'hallit serriñ an esaou, pe hag-eñ e chom bepred un tamm pellder etre an ideal hag ar gwirvoud ?",
                                            "Petra e vefec'h rediet da goll evit lakaat ho puhez muioc'h a-unvan gant ar pezh a lavarit krediñ ennañ ?"
                                  ]
                        },
                        {
                                  "text": "Hag an onestiz vras zo ur vertuz pe ur stumm a emvlastet",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag ar birvilh da 'lavarout an traoù evel m'emaint' zo evit mad an den all pe evit ho tiboan deoc'h-unan ?",
                                            "Hag ar vadelezh zo un dibab kalonekoc'h a-wechoù ?",
                                            "Pelec'h emañ ar vevenn etre an onestiz hag ar garventez ?",
                                            "Hag-eñ e tiskouez ar goulenn evit un onestiz klok en darempredoù an darempred tost pe ar c'hontrol ?",
                                            "Hag-eñ e c'hallit soñjal en ur mare m'he deus graet an onestiz vras muioc'h a zroug evit a vad ?"
                                  ]
                        },
                        {
                                  "text": "Hag an arz meur a rankfe herzel pe frealziñ",
                                  "level": "advanced",
                                  "hints": [
                                            "Petra a glaskit e gwirionez pa 'z oc'h gloazet — an diaezamant pe ar frealz ?",
                                            "Hag ez eus un arz a zeu a-benn da ober an daou asambles ?",
                                            "Hag an arz frealzus zo nebeutoc'h a bouez ennañ evit an arz a laka an den da herzel, pe un diforc'h 'snob' eo ?",
                                            "Hag-eñ ez eus ur garg pennañ gant an arz hervezoc'h ?",
                                            "Hag-eñ ez eus un oberenn arz he deus ho cheñchet en ur stumm ne vije ket deuet ar frealz a-benn d'ober ?"
                                  ]
                        },
                        {
                                  "text": "Ar goulenn evit ar c'hempouez ha hag-eñ e ro ur wirionez faos",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ 'prouiñ an daou du' zo reizh bepred, pe hag-eñ e c'hall distummañ ar wirionez ?",
                                            "Hag un diforc'h zo etre kempouez ha kevatalder faos ?",
                                            "Piv a zibab pe stumm a virit bezañ klevet ?",
                                            "Hag ar c'hempouez kazetenner a c'hall kenvevañ gant reolennoù epistemel ?",
                                            "Petra eo koust reiñ ur gador d'ur sav-poent en anv ar reizhded ?"
                                  ]
                        },
                        {
                                  "text": "Hag an araokadenn moral zo wirion pe un doare giz moral hepken",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag hor fiziañs etek hiziv zo ur merk a araokadenn wirion pe an hevelep proviñselouriezh gant dilhad nevez ?",
                                            "Petra a dalvezfe e vije gwirion an araokadenn moral ?",
                                            "Hag-eñ e c'hallit soñjal en un dra bennak a gredomp ennañ hiziv ha m'o devo mezh ar remziadoù da zont o sellout outañ ?",
                                            "Hag-eñ e laka perzh relativedel ar c'hiz moral en arvar ar mennozh e vefe un dra bennak fall e gwirionez ?",
                                            "Hag an uvelded moral zo kenglotus gant ar gredenn moral ?"
                                  ]
                        },
                        {
                                  "text": "Lodennoù ac'hanoc'h hoc'h-unan ho peus an diaesañ da ezteuler",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag ez eus un dra bennak a santit met ne c'hallit ket kavout gerioù evitañ ?",
                                            "Hag an diaezamant zo gant ar yezh pe gant an dra e-unan ?",
                                            "Hag-eñ e soñjit ez eus arnodoù diabarzh hag a zo prevez da vat — ne c'hallit ket zoken tizhout hoc'h-unan ?",
                                            "Petra a dalvezfe kompren ho tiabarzh penn-da-benn ?",
                                            "Hag-eñ eo ret anezteuladenn evit ma vefe wirion ?"
                                  ]
                        },
                        {
                                  "text": "Heuliadoù politikel ar gwalc'h",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ eo ur mank moral bezañ gwalc'het e gwirionez en ur bed direizh ?",
                                            "Hag-eñ eo kenglotus klask ar peoc'h personel gant ur goustiañs politikel ?",
                                            "Hag ar gapitalouriezh a denn gounid eus ur boblañs walc'het ?",
                                            "Hag-eñ ez eus ur stumm a walc'h ha n'eo ket sioulder politikel ?",
                                            "Penaos e merreoc'h hoc'h-unan an esaou etre ar peoc'h diabarzh hag an emouestl diavaez ?"
                                  ]
                        },
                        {
                                  "text": "Memor, identelezh, ha petra a chom pa vez kemmet an eil hag egile",
                                  "level": "advanced",
                                  "hints": [
                                            "Ma vije kemmet ho memorioù e stumm ur reizhiad, hag-eñ e vefec'h c'hoazh ac'hanoc'h hoc'h-unan ?",
                                            "Petra eo kendalc'husted an unan e gwirionez ?",
                                            "Hag an den ho peus memor anezhañ zo an hevelep den hag an hini a gomz bremañ ?",
                                            "Petra a degouezh gant an identelezh en arnoded ar c'holl pe ar cheñchamant bras ?",
                                            "Hag-eñ eo m'eus goulenn an identelezh personel evit ar stumm ma vez graet an eil ouzh egile — war an dachenn lezennel, etek ?"
                                  ]
                        },
                        {
                                  "text": "Hag-eñ e talvez bepred ar boan bevañ ur vuhez prederiet",
                                  "level": "advanced",
                                  "hints": [
                                            "Sokrates a lavare ne dalveze ket ar boan bevañ ur vuhez hep preder — hag a-du oc'h ?",
                                            "Hag-eñ ez eus ur c'houst d'ar preder — ur stumm a baralizenn pe ur c'holl a beurelezh ?",
                                            "Hag-eñ e c'hall ar preder dont da vezañ ur stumm d'en em zivizout ?",
                                            "Hag-eñ ez eus tud hag a vev don ha mat hep kalz a breder warno o-unan ?",
                                            "Petra ho peus kollet ha gounezet hervezoc'h gant ho live preder warnoc'h hoc'h-unan ?"
                                  ]
                        },
                        {
                                  "text": "Goulenn ar pezh a dleit d'an dud dianav",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ ho peus dleadennoù d'an dud ne gejet biken outo ?",
                                            "Betek pelec'h ez a ho tleadennoù moral — d'ho karter, d'ho pro, d'ar bed ?",
                                            "Hag-eñ e vez bihanaet an dlead gant an esaou fizikel pe sevenadurel, pe un doare d'en em zifenn eo ?",
                                            "Petra eo an diforc'h etre an aluzen hag ar reizhded ?",
                                            "Penaos e vevit e gwirionez e-keñver ar goulenn-mañ ?"
                                  ]
                        },
                        {
                                  "text": "An istorioù a lavar ar sevenadurioù diwar o fenn",
                                  "level": "advanced",
                                  "hints": [
                                            "Pep kevredigezh he deus ur vojenn diazez — petra eo ho hini, ha betek pelec'h eo gwirion ?",
                                            "Petra a zibab ur vroad ankounac'haat kement hag ar pezh a zibab kounaat ?",
                                            "Hag an identelezh vroadel zo ur grouidigezh talvoudus pe un dra dangereus ?",
                                            "Hag-eñ e c'hall ur gevredigezh kaout un danevell onestoc'h diwar he fenn hep koll he liamm ?",
                                            "Pezh istor a lavarfec'h diwar-benn ho sevenadur ma tlefec'h bezañ onest penn-da-benn ?"
                                  ]
                        },
                        {
                                  "text": "Hag-eñ e c'hall kement skrid zo bezañ troet penn-da-benn",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ ho peus arnoded un dra bennak en ur yezh all hag a harze ouzh an droidigezh ?",
                                            "Hag an neptraduzidigezh eus gerioù zo zo ur prouenn e stumm ar yezh ar soñj ?",
                                            "Petra a gollomp ha petra a c'hounezomp en droidigezh ?",
                                            "Hag un droidigezh dispar zo ur stumm a grouidigezh pe ur stumm a goll ?",
                                            "Petra a lavar an droidigezh deomp diwar-benn harzoù ar c'hompren etre ar sevenadurioù ?"
                                  ]
                        },
                        {
                                  "text": "Arnoded an dalc'h traoù enebet evel gwirion asambles",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ e c'hallit karout unan bennak ha kaout droug outañ asambles hep ma vefe nullet an eil gant egile ?",
                                            "Hag-eñ eo ar barregezh da zerc'hel an enebadur ur merk a maturelezh pe ur merk a gemmesk ?",
                                            "Hag-eñ ez eus sav-poentoù politikel pe moral ho peus hag a zo en emgann e gwirionez ?",
                                            "Hag ar goulenn evit ar c'henglotusted en hor c'hredennoù a ziskouez ar rationalouriezh pe ar reterezh ?",
                                            "Petra eo an dra a gredit ennañ hag a ya a-enep un dra all a gredit ennañ ivez ?"
                                  ]
                        },
                        {
                                  "text": "Petra a dalvez ne viot ket mui un deiz bennak",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ e soñjit en ho marvelezh deoc'h-unan alies, a-wechoù, pe tost biken ?",
                                            "Hag an emskiant eus ar marv he deus stummet ho stumm da vevañ pe ar pezh a dalv deoc'h ?",
                                            "Hag aon rak ar marv zo rational, pe ur c'hemmesk eo diwar-benn ar pezh a vez kollet ?",
                                            "Hag-eñ e kavit frealz en ur stumm bennak da soñjal er marvelezh ?",
                                            "Petra a laka ar marvelezh da vezañ posupl ha na vije ket lakaet gant an divarvelezh marteze ?"
                                  ]
                        }
              ],
              "opinions": [
                        {
                                  "text": "As redes sociais fazem mais mal do que bem.",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Todos deveriam aprender pelo menos dois idiomas.",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Trabalhar em casa é melhor do que no escritório.",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "Dinheiro não compra felicidade.",
                                  "level": "intermediate"
                        },
                        {
                                  "text": "A semana de trabalho de 4 dias aumenta a produtividade.",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "O transporte público deveria ser gratuito para todos.",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "A renda básica universal é necessária para as economias do futuro.",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "text": "A IA generativa nunca poderá substituir a verdadeira criatividade artística humana.",
                                  "level": "advanced"
                        },
                        {
                                  "text": "A privacidade total é impossível na era digital atual.",
                                  "level": "advanced"
                        },
                        {
                                  "text": "Re verr eo an dibenn-sizhun.",
                                  "level": "elementary",
                                  "hints": [
                                            "Petra a rit d'an dibenn-sizhun?",
                                            "Penaos e santit d'ar sul noz?",
                                            "Petra a rafec'h gant un dibenn-sizhun tri devezh?",
                                            "Hag-eñ e labourit pe e studit d'an dibenn-sizhun?",
                                            "Petra eo an dibenn-sizhun peurvat evidoc'h?"
                                  ]
                        },
                        {
                                  "text": "Displed eo bezañ war-lerc'h.",
                                  "level": "elementary",
                                  "hints": [
                                            "Hag-eñ e vezit d'ar mare reizh peurvuiañ?",
                                            "Keit ha ma gortozit ur mignon?",
                                            "Hag-eñ eo mat bezañ 10 munut war-lerc'h?",
                                            "Hag-eñ eo pouezus bezañ d'ar mare reizh en ho sevenadur?",
                                            "Petra a rit pa vez unan bennak kalz war-lerc'h?"
                                  ]
                        },
                        {
                                  "text": "Gwelloc'h eo an dud er c'hêrioù bihan.",
                                  "level": "elementary",
                                  "hints": [
                                            "Pelec'h e chomit — kêriadenn pe gêr?",
                                            "Hag-eñ eo mignonel ho amezeien?",
                                            "Hag-eñ e komz an dud gant an estrenien pelec'h e chomit?",
                                            "Hag-eñ az peus bevet en ul lec'h disheñvel gwechall?",
                                            "Petra a laka ul lec'h da vezañ mignonel?"
                                  ]
                        },
                        {
                                  "text": "Laouenoc'h e vezit pa az peus ul loen-ti.",
                                  "level": "elementary",
                                  "hints": [
                                            "Hag-eñ az peus ul loen-ti?",
                                            "Petra eo al loen-ti gwellañ evit un den micherel?",
                                            "Hag-eñ e koust ker al loened-ti?",
                                            "Hag-eñ e c'hall ul loen-ti bezañ ur mignon?",
                                            "Petra a rankit ober evit soursial ouzh ul loen-ti mat?"
                                  ]
                        },
                        {
                                  "text": "Gallout a rit lavaret kalz traoù diwar-benn unan bennak dre o botoù.",
                                  "level": "elementary",
                                  "hints": [
                                            "Hag-eñ e sellit ouzh botoù an dud?",
                                            "Petra a lavar ho potoù diwar-benn ac'hanoc'h?",
                                            "Hag-eñ eo pouezus ar c'hiz evidoc'h?",
                                            "Hag-eñ e c'hallit barn un den diwar o neuz?",
                                            "Petra a lavar deoc'h traoù all diwar-benn doare un den?"
                                  ]
                        },
                        {
                                  "text": "Mat eo debriñ e-unan en un ti-debriñ.",
                                  "level": "elementary",
                                  "hints": [
                                            "Hag-eñ az peus debret e-unan en un ti-debriñ c'hoazh?",
                                            "Hag-eñ e kav deoc'h eo aes?",
                                            "Hag-eñ eo gwelloc'h ar boued gant tud all?",
                                            "Hag-eñ e welit kalz tud o debriñ o-unan?",
                                            "Petra a rit pa zebrit ho-unan?"
                                  ]
                        },
                        {
                                  "text": "Aesoc'h eo deskiñ ur yezh pa vezit yaouank.",
                                  "level": "elementary",
                                  "hints": [
                                            "Pet bloaz e oach pa az peus kroget da zeskiñ ar yezh-mañ?",
                                            "Hag-eñ e soñjit eo pouezus an oad evit deskiñ yezhoù?",
                                            "Petra eo an dra diaesañ pa zesker ur yezh?",
                                            "Hag-eñ ec'h anavezit unan bennak en deus desket ur yezh pa oa den deuet?",
                                            "Petra a sikour ac'hanoc'h ar muiañ pa studier?"
                                  ]
                        },
                        {
                                  "text": "Gwelloc'h eo an dezougen boutin eget kaout ur c'harr-tan.",
                                  "level": "elementary",
                                  "hints": [
                                            "Penaos e veajit en ho kêr?",
                                            "Hag-eñ eo mat an dezougen boutin pelec'h e chomit?",
                                            "Petra eo ar c'hudennoù pa az peus ur c'harr-tan?",
                                            "Hag-eñ eo ker veajiñ gant an dezougen boutin?",
                                            "Petra a cheñchfec'h diwar-benn an dezougen en ho kêr?"
                                  ]
                        },
                        {
                                  "text": "Diaes eo bezañ en deus dregantiñ pa az peus ur pellgomz.",
                                  "level": "elementary",
                                  "hints": [
                                            "Pet eurvezh bemdez e implijit ho pellgomz?",
                                            "Petra a rit gantañ ar muiañ?",
                                            "Hag-eñ e oach dregantet a-raok ar pellgomzoù hezoug?",
                                            "Hag-eñ eo mat an dregantiñ a-wechoù?",
                                            "Hag-eñ e c'hallfec'h lezel ho pellgomz er gêr e-pad un devezh?"
                                  ]
                        },
                        {
                                  "text": "Gwelloc'h eo poazhañ er gêr eget debriñ en un ti-debriñ.",
                                  "level": "elementary",
                                  "hints": [
                                            "Pegement e poazhit er gêr?",
                                            "Petra eo an aesañ — poazhañ pe mont d'un ti-debriñ?",
                                            "Hag-eñ eo ker debriñ en un ti-debriñ pelec'h e chomit?",
                                            "Petra eo ho ti-debriñ karetañ?",
                                            "Petra eo ho pred gwellañ poazhet er gêr?"
                                  ]
                        },
                        {
                                  "text": "An holl a rankfe klask bevañ en estrenvro e-pad ur bloaz.",
                                  "level": "elementary",
                                  "hints": [
                                            "Hag-eñ az peus bevet en ur vro all?",
                                            "Petra a vije diaes diwar-benn bevañ en estrenvro?",
                                            "Petra a vije plijus?",
                                            "Peseurt bro a zibabfec'h?",
                                            "Hag-eñ e cheñch un den pa vev en estrenvro?"
                                  ]
                        },
                        {
                                  "text": "Dedennotoc'h eo ar gourharozed eget ar harozed wirion.",
                                  "level": "elementary",
                                  "hints": [
                                            "Piv eo ho kourharoz karetañ?",
                                            "Hag-eñ e c'hallit soñjal en ur haroz en deiz a hiziv?",
                                            "Petra a laka un den da vezañ ur haroz?",
                                            "Perak e plij ar gourharozed d'an dud?",
                                            "Hag-eñ eo pouezusoc'h ar harozed wirion?"
                                  ]
                        },
                        {
                                  "text": "Pouezus eo ober ho kwele bemdez d'ar mintin.",
                                  "level": "elementary",
                                  "hints": [
                                            "Hag-eñ e rit ho kwele bemdez?",
                                            "Hag-eñ e santit gwelloc'h en ur gambr kempenn?",
                                            "Hag-eñ eo pouezus pe get?",
                                            "Petra eo ho reolenn-vintin?",
                                            "Peseurt boazioù bihan az peus?"
                                  ]
                        },
                        {
                                  "text": "Un dudi eo ar prenañ traoù.",
                                  "level": "elementary",
                                  "hints": [
                                            "Hag-eñ e plij deoc'h prenañ traoù?",
                                            "Hag-eñ e prenit traoù enlinenn pe er stalioù?",
                                            "Pegement a amzer e tremenit o prenañ traoù?",
                                            "Hag-eñ eo un dra dudi prenañ traoù?",
                                            "Petra a brenit ar muiañ?"
                                  ]
                        },
                        {
                                  "text": "Gwelloc'h eo veajiñ ho-unan eget veajiñ gant mignoned.",
                                  "level": "elementary",
                                  "hints": [
                                            "Hag-eñ az peus veajet ho-unan c'hoazh?",
                                            "Petra a zo mat pa veajier ho-unan?",
                                            "Petra a zo mat pa veajier gant tud all?",
                                            "Hag-eñ e santit an digenvez pa veajiot ho-unan?",
                                            "Petra eo ar veaj wellañ az peus graet?"
                                  ]
                        },
                        {
                                  "text": "Gwell eo bezañ bugel pennhêr eget kaout breudeur ha c'hoarezed.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Ha bugel pennhêr oc'h pe breudeur ha c'hoarezed hoc'h eus?",
                                            "Petra eo an talvoudegezhioù da gaout breudeur ha c'hoarezed?",
                                            "Petra eo an talvoudegezhioù da vezañ e-unan?",
                                            "Ha tabaat a ra ar vreudeur hag ar c'hoarezed dizehan?",
                                            "Penaos e levezon framm ho tiegezh ho fersonelezh?"
                                  ]
                        },
                        {
                                  "text": "Lavarout ur gaou gwenn a zo a-wechoù an tra nesañ d'ober.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Hoc'h eus soñj eus ur stad ma vije un dra vat lavarout ur gaou?",
                                            "Ha bezañ onest eo ar politikerezh gwellañ bepred?",
                                            "Hoc'h eus lavaret ur gaou gwenn un deiz bennak?",
                                            "Penaos e tigorit ho kalon pa lavar unan bennak ur gaou d'ho tiwall?",
                                            "Hoc'h eus gwelet un diforc'h etre ur gaou ha chom hep lavarout ar wirionez penn-da-benn?"
                                  ]
                        },
                        {
                                  "text": "Lakaat a ra ar mediaoù sokial an dud d'en em santout gwashoc'h.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Penaos en em santit goude bezañ lennet ar mediaoù sokial?",
                                            "Ha keñveriañ a rit ac'hanoc'h gant an dud enlinenn?",
                                            "Ha soñjal a rit e tiskouez ar mediaoù sokial ar vuhez wirion?",
                                            "Hoc'h eus ehanet un deiz bennak gant ar mediaoù sokial?",
                                            "Penaos e vije ar vuhez hepto?"
                                  ]
                        },
                        {
                                  "text": "N'eus ket ezhomm da veajiñ evit kompren ar bed.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Gallout a reer deskiñ diwar-benn ar bed gant levrioù ha filmoù?",
                                            "Petra a zesk ar veaj ha na c'hall netra all deskiñ?",
                                            "Hag e c'hall an holl veajiñ?",
                                            "Hoc'h eus desket un dra bouezus hep kuitaat ho pro?",
                                            "Petra eo an dra bouezusañ hoc'h eus desket o veajiñ?"
                                  ]
                        },
                        {
                                  "text": "An dud n'o deus ket aon rak al loened a zo un tamm diskred warno.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Ha fiziañs hoc'h eus en dud n'o deus ket aon rak al loened?",
                                            "Ha lavarout a ra ar fed da garout al loened un dra bennak diwar-benn perzh un den?",
                                            "Hag-eñ e ranker karout al loened evit bezañ un den mat?",
                                            "Petra a soñjit pa gejit gant unan bennak en deus aon rak al loened?",
                                            "Ha reizh eo lavarout kement-mañ?"
                                  ]
                        },
                        {
                                  "text": "Lakaat a ra al labour er gêr an dud da vezañ lezirekoc'h.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Ha labourat pe studiañ a rit er gêr?",
                                            "Hag-eñ oc'h efedusoc'h er gêr?",
                                            "Petra eo ar boazioù gwashañ a denn ho spered diouzh ho labour er gêr?",
                                            "Ha faltazi hoc'h eus eus framm ur burev pe ur c'hlas?",
                                            "Ha soñjal a rit eo al labour a-bell an amzer da zont?"
                                  ]
                        },
                        {
                                  "text": "Ar santimant kentañ a zo dizehan fall.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Ha kemmañ a rit ho soñj diwar-benn an dud buan?",
                                            "Hag-eñ eo bet ho santimant kentañ diwar-benn unan bennak fall penn-da-benn?",
                                            "Petra a verkit da gentañ en un den?",
                                            "Ha reizh eo kemmañ ho soñj diwar-benn unan bennak goude un emgav kentañ?",
                                            "Gallout a rit kemmañ ar santimant kentañ o deus an dud diwar-benn ac'hanoc'h?"
                                  ]
                        },
                        {
                                  "text": "Ar filmoù karantez a ro d'an dud gortozadennoù n'int ket gwirion.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Ha sellout a rit ouzh filmoù karantez?",
                                            "Ha soñjal a rit e levezonont penaos e soñj an dud diwar-benn an darempredoù?",
                                            "Hag-eñ eo ar garantez wirion evel er filmoù?",
                                            "Petra n'eo ket gwirion er filmoù karantez?",
                                            "Ha disheñvel eo an istorioù karantez en ho sevenadur?"
                                  ]
                        },
                        {
                                  "text": "Talvoudusoc'h eo bezañ fentus eget bezañ speredek.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Ha gwell eo ganeoc'h bezañ fentus pe speredek?",
                                            "Hoc'h eus soñj eus ur stad ma'z eus bet sikouret muioc'h gant ar fent eget gant ar spered?",
                                            "Hag-eñ eo an dud fentus an dud a garer ar muiañ?",
                                            "Hag-eñ e c'hall ar spered hag ar fent bevañ asambles?",
                                            "Peseurt seurt fent hoc'h eus?"
                                  ]
                        },
                        {
                                  "text": "Ar silans ouzh taol n'eo ket un dra direnkus — sioul eo.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Ha komz a rit kalz e-kerzh ar pred?",
                                            "Hag-eñ eo ar silans un dra direnkus evidoc'h?",
                                            "Ha debriñ a rit gant ho pellgomz?",
                                            "Ha soñjal a rit e rankfe ar pred bezañ ur mare sokial?",
                                            "Diwar-benn petra e komzit peurvuiañ ouzh taol koan?"
                                  ]
                        },
                        {
                                  "text": "Aesoc'h eo goulenn pardon eget goulenn an aotre.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Ha goulenn a rit an aotre pe ober a rit an traoù da gentañ?",
                                            "Hoc'h eus soñj eus ur mare ma'z eus aet traoù en-dro mat evel-se?",
                                            "Hag-eñ eo ur feson kiriek d'en em zerc'hel?",
                                            "Ha re ziwallus eo tud zo?",
                                            "Petra a lavar kement-mañ diwar-benn personelezh un den?"
                                  ]
                        },
                        {
                                  "text": "Re a geleier a lenn an dud, hag ankenius eo evito.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Pegoulz e sellit ouzh ar c'heleier?",
                                            "Ha levezoniñ a ra ar c'heleier ho spered?",
                                            "Hag-eñ eo pouezus chom kelaouet?",
                                            "Penaos e tibabit peseurt keleier da heuliañ?",
                                            "Hoc'h eus ehanet un deiz bennak gant ar c'heleier?"
                                  ]
                        },
                        {
                                  "text": "N'anavezit ket unan bennak penn-da-benn ken n'hoc'h eus ket veajet gantañ.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Hoc'h eus veajet gant ur mignon pe ur c'haredig?",
                                            "Petra hoc'h eus desket diwar e benn?",
                                            "Peseurt stad a ziskouez perzh gwirion un den?",
                                            "Ha soñjal a rit ec'h anavezit ho mignoned mat?",
                                            "Petra all a ziskouez piv eo un den e gwirionez?"
                                  ]
                        },
                        {
                                  "text": "Ar sevenadur d'ar sal-sport a zo aet re bell.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Ha mont a rit d'ar sal-sport?",
                                            "Ha pouezus eo ar sport evidoc'h?",
                                            "Ha soñjal a rit eo an dud sot gant o c'horf?",
                                            "Hag-eñ ez eus ur wask evit kaout ur seurt neuz?",
                                            "Petra eo ur feson yac'h da welout ar sport?"
                                  ]
                        },
                        {
                                  "text": "Un tamm gwarizi en un darempredañ a zo yac'h.",
                                  "level": "intermediate",
                                  "hints": [
                                            "Ha soñjal a rit eo ar gwarizi un dra fall bepred?",
                                            "Hoc'h eus santet gwarizi un deiz bennak?",
                                            "Petra eo an diforc'h etre ar gwarizi hag an diogel?",
                                            "Pegoulz e teu ar gwarizi da vezañ ur gudenn?",
                                            "Petra a lavar ar gwarizi diwar-benn un den e gwirionez?"
                                  ]
                        },
                        {
                                  "text": "Hag-eñ emañ ar mediaoù sokial o tistrujañ hor barregezhioù sokial?",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Penaos eo kemmet ho feson da gomz e-kerzh an 10 vloaz diwezhañ?",
                                            "Ha kaletoc'h eo deoc'h komz gant tud dianav bremañ?",
                                            "Ha kement a dalvoudegezh a zo gant an darempredoù enlinenn ha gant re ar vuhez wirion?",
                                            "Peseurt barregezhioù sokial a zo levezonet ar muiañ gant an amzer tremenet dirak ur skramm?",
                                            "Ha gallout a rafec'h tremen ur miz hep media sokial ebet?"
                                  ]
                        },
                        {
                                  "text": "Hag-eñ e rankfe an treuzdougen foran bezañ digoust?",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Piv a baeje evit an treuzdougen foran digoust?",
                                            "Ha bihanaat a rafe niver ar c'hirri-tan evit gwir?",
                                            "Hag un drugar pe ur gwir eo an treuzdougen digoust?",
                                            "Penaos e kemmfe perzh ar servij?",
                                            "Penaos emañ an traoù en ho kêr?"
                                  ]
                        },
                        {
                                  "text": "Ur gaou a lavaromp deomp hon-unan eo an hiraezh peurvuiañ.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Petra eo an traoù a laka ac'hanoc'h da gaout ar muiañ a hiraezh?",
                                            "Ha soñjal a rit e oa gwelloc'h an amzer dremenet e gwirionez?",
                                            "Ha lakaat a ra an hiraezh ac'hanoc'h d'en em santout gwelloc'h pe hag-eñ e laka ac'hanoc'h da chom a-sav?",
                                            "Ha gallout a ra an hiraezh bezañ dañjerus — evit an dud pe evit ar politikerezh?",
                                            "Petra a dalvez kement-mañ: kemmañ a reomp hor memorioù?"
                                  ]
                        },
                        {
                                  "text": "An darn vrasañ eus an dud ne fell ket dezho kaout un ali onest — fellout a ra dezho bezañ rassurance.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Pa c'houlennit un ali, petra ho pez ezhomm e gwirionez?",
                                            "Hoc'h eus resevet un ali a oa kalet da glevout met talvoudus?",
                                            "Ha brav eo lavarout ur soñj onest da unan bennak?",
                                            "Hoc'h eus soñj eus ur stad ma vije bezañ rassurance an tra d'ober e gwirionez?",
                                            "Petra eo an diforc'h etre ar vadelezh hag an dionestezoù?"
                                  ]
                        },
                        {
                                  "text": "Gallout a reer bezañ pitilh gant ar fed da vezañ bepred o labourat.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Ha leuniañ a rit ho programm a-ratozh?",
                                            "Ha lakaat a ra ac'hanoc'h d'en em santout un den mat ar fed da vezañ bepred o labourat?",
                                            "Petra a c'hoarvez pa n'hoc'h eus netra d'ober?",
                                            "Hag ur merk a renk sokial eo ar fed da vezañ bepred o labourat?",
                                            "Pegoulz eo paouezet an diskuizh da vezañ gwelet mat?"
                                  ]
                        },
                        {
                                  "text": "Evel ur c'hastiz eo ar vrud, n'eo ket evel ur gopr.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Ha fellout a rafe deoc'h bezañ brudet?",
                                            "Petra a gollfec'h ma vefec'h brudet?",
                                            "Ha soñjal a rit eo laouen an darn vrasañ eus an dud vrudet?",
                                            "Hag an un dra eo ar vrud hag an deuet-mat?",
                                            "Peseurt seurt anaoudegezh ho pefe c'hoant e gwirionez?"
                                  ]
                        },
                        {
                                  "text": "Mougañ a ra ar reizhiad skol ar grouidigezh muioc'h evit na laka anezhi da greskiñ.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Ha soñjal a rit eo bet sikouret ho krouidigezh gant ho deskadurezh?",
                                            "Peseurt danvez pe peseurt mare er skol eo bet ar muiañ krouus evidoc'h?",
                                            "Hag-eñ e c'haller deskiñ ar grouidigezh?",
                                            "Penaos e vije ur skol ma vije ar grouidigezh an tra bouezusañ?",
                                            "Ha krouusoc'h oc'h bremañ pe pa oac'h bugel?"
                                  ]
                        },
                        {
                                  "text": "N'eus ket eus un emzalc'h a vije hep tamm emgarantez ebet.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Hoc'h eus soñj eus un ober a vije hep tamm emgarantez ebet e gwirionez?",
                                            "Ha lakaat a ra ac'hanoc'h d'en em santout mat ober un dra vat — hag-eñ e teu an dra-se da vezañ emgar neuze?",
                                            "Ha gwelet a rit an traoù evel-se en ur feson ginek pe wirion?",
                                            "Ha pouezus eo an abeg d'un ober ma'z eo mat an disoc'h?",
                                            "Ha kemmañ a ra ho emzalc'h pa gredit kement-mañ?"
                                  ]
                        },
                        {
                                  "text": "An darn vrasañ eus an dud vras a laka an traoù da vont en-dro evel ma c'hallont.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Ha soñjal a rit e ouzit petra emaoc'h oc'h ober?",
                                            "Pegoulz ho poa gortozet en em santout evel un den bras?",
                                            "Hag an holl o deus ar santimant da vezañ o wiskañ ur maskl?",
                                            "Ha lakaat a ra kement-mañ ac'hanoc'h da vezañ dinec'h pe spontet?",
                                            "Piv a zo un den hag a seblant gouzout pep tra — ha soñjal a rit e oar e gwirionez?"
                                  ]
                        },
                        {
                                  "text": "An dud dedennusañ a zo bepred un tamm diaes o natur.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Hoc'h eus soñj eus unan bennak a zo dedennus ha diaes asambles?",
                                            "Hag ur merk a donder eo ar fed da vezañ diaes pe hag-eñ eo... diaes hepken?",
                                            "Ha gwell eo ganeoc'h kaout ur mignon aes ha borodus pe unan muioc'h a strivoù gantañ met dedennus?",
                                            "Petra a laka unan bennak da vezañ dedennus deoc'h e gwirionez?",
                                            "Hag-eñ ez eus un dra bennak ho tenn d'an dud na lakaont ket ar vuhez da vezañ aes?"
                                  ]
                        },
                        {
                                  "text": "Pardoniñ a reomp traoù d'an dud a garomp ha na bardonfemp ket un deiz bennak da dud dianav.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Ha reizh eo kement-mañ pe hag-eñ eo ur reolenn doubl?",
                                            "Hoc'h eus ur skouer en ho puhez?",
                                            "Petra a lavar kement-mañ diwar-benn natur ar garantez?",
                                            "Hag e rankfemp kaout gortozadennoù uheloc'h pe izeloc'h evit an dud a garomp?",
                                            "Hag eus un dra bennak na bardonfec'h ket un deiz bennak, ne vern peseurt darempred ho pefe?"
                                  ]
                        },
                        {
                                  "text": "Re e vez gwelet mat ar zonenn confort — er fed da vezañ diaes eo e kresker e gwirionez.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Hoc'h eus soñj eus ur mare ma'z eus bet kresket ganeoc'h dre ur stad diaes?",
                                            "Hag-eñ eo pouezus bezañ en ur stad diaes evit emziorren?",
                                            "Hag un diforc'h a zo etre un diaes krouus hag ar fed da soufrañ hepken?",
                                            "Ha klask a rit bezañ en ur stad diaes a-ratozh?",
                                            "Petra eo an dra a zo just e-maez ho zonenn confort bremañ?"
                                  ]
                        },
                        {
                                  "text": "Ar gounnar a zo ur santimant na vez ket gwelet mat a-walc'h — a-wechoù e laka an traoù da vont en-dro.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Ha soñjal a rit e tiskouezit mat ho kounnar?",
                                            "Hoc'h eus soñj eus ur mare ma'z eo bet krouus ar gounnar?",
                                            "Hag un diforc'h a zo etre ur gounnar yac'h hag ur gounnar a zistruj?",
                                            "Ha tud zo a voug o gounnar re buan?",
                                            "Petra a rit pa oc'h e gounnar?"
                                  ]
                        },
                        {
                                  "text": "Al loened-ti o deus kemeret plas ar gumuniezh evit kalz a dud.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Ha soñjal a rit emañ an digenvezed o kreskiñ?",
                                            "Peseurt perzh a c'hoari ul loen-ti e buhez un den?",
                                            "Ha trist eo kement-mañ, pe ur seurt darempred disheñvel hepken?",
                                            "Petra en deus kemeret plas ar gumuniezh hengounel er vuhez vodern?",
                                            "Ha n'en em santit ket evel un tamm eus ur gumuniezh?"
                                  ]
                        },
                        {
                                  "text": "Beajiñ e-unan eo ar feson nemetañ d'en em ziskoachañ e gwirionez.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Hoc'h eus veajet ho-unan un deiz bennak?",
                                            "Hag e c'haller en em ziskoachañ hep beajiñ?",
                                            "Petra e vez rediet d'ober pa veajeur e-unan?",
                                            "Petra eo an tra bouezusañ hoc'h eus desket diwar ho penn dre un dra bennak hoc'h eus graet?",
                                            "Hag ur veaj pe ur pal eo an emziskoachañ?"
                                  ]
                        },
                        {
                                  "text": "Ur mare ma'z eus bet ranket kregiñ en-dro n'eo ket kollet penn-da-benn un deiz bennak.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Hoc'h eus ranket kregiñ gant un dra bennak en-dro adalek an derou?",
                                            "Petra hoc'h eus miret eus ar c'hentañ gwech?",
                                            "Hag ur c'hwitadenn pe un dibab eo kregiñ en-dro?",
                                            "Petra eo an dra galetañ pa groger en-dro?",
                                            "Ha soñjal a rit eo pouezus ar reuzioù?"
                                  ]
                        },
                        {
                                  "text": "Ar fed da vezañ sot gant ar produktivitezh n'eo ket nemet ar gapi-talouriezh gwisket evel un emziorren.",
                                  "level": "upper_intermediate",
                                  "hints": [
                                            "Ha n'heulian ket ho amzer pe hag-eñ e implijit arloadoù produktivitezh?",
                                            "Ha lakaat a ra ac'hanoc'h d'en em santout mat ar fed da vezañ produktiv?",
                                            "Penaos e soñjit, eus pelec'h e teu ar wask-mañ da vezañ produktiv?",
                                            "Hag un tamm eus ur vuhez produktiv eo an diskuizh e gwirionez pe ur benveg nemetken?",
                                            "Hoc'h eus soñj eus un dra bennak talvoudus ha n'eo ket produktiv tamm ebet?"
                                  ]
                        },
                        {
                                  "text": "Gingenieurezh : araokadenn pe dañjer ?",
                                  "level": "advanced",
                                  "hints": [
                                            "Petra eo ar gounid evit ar medisinerezh ?",
                                            "Heliñ a rafe an dinegal-gevredigezh ?",
                                            "Hag un dra etikel eo 'tresañ' mab-den ?",
                                            "Piv a rankfe reoliñ an teknoloji-mañ ?",
                                            "Hag ur riskl eo kemmañ da vat ar lamm-genek ?"
                                  ]
                        },
                        {
                                  "text": "Ar leve diazez hollvedel eo an diskoulm nemetañ d'an emgefreerezh meur.",
                                  "level": "advanced",
                                  "hints": [
                                            "Penaos e vefe arc'hantaouet al leve diazez ?",
                                            "Hag un dra vije da lakaat an dud da chom hep labourat ?",
                                            "Hag-eñ e c'hallfe digreskiñ ar baourentez hag an dinegal ?",
                                            "Petra eo an dibaboù all ?",
                                            "Hag ur gourdrouz eo an emgefreerezh evit an holl implijoù ?"
                                  ]
                        },
                        {
                                  "text": "Un dibab eo al levenez — an amveziadoù n'int nemet digarez.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ e soñj deoc'h emañ al levenez dindan beli pep hini ?",
                                            "Hag ur sell azividik eo ?",
                                            "Hag-eñ e c'hallit dibab penaos respont d'an amveziadoù fall ?",
                                            "Hag anaout a rit tud hag a zo eürus daoust d'ur vuhez diaes ?",
                                            "Hag-eñ eo klask al levenez ul lodenn eus ar gudenn he unan ?"
                                  ]
                        },
                        {
                                  "text": "An dud a lavar n'o deus ket c'hoant da gaout 'drama' eo ar re a grou anezhañ peurliesañ.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag anaout a rit unan bennak evel-se ?",
                                            "Perak ne wel ket an dud a grou tabutoù emaint o ober ?",
                                            "Hag-eñ eo fall an 'drama' atav ?",
                                            "Petra eo an diforc'h etre un tabut hag an 'drama' ?",
                                            "Hag-eñ eo ral an emskiant ac'hanon va-unan ?"
                                  ]
                        },
                        {
                                  "text": "Ar rann-galon (neurter) a zo ur merk a vank a imajinasion, pas ur mank a stimuladur.",
                                  "level": "advanced",
                                  "hints": [
                                            "Pegoulz ho peus lakaet rann-galon deoc'h evit ar wech ziwezhañ ?",
                                            "Hag-eñ ho peus aon rak ar pezh a c'hallfec'h soñjal ?",
                                            "Petra a dremen en ho spered pa vezit o tregantiñ ?",
                                            "Hag un dra displijus eo ar rann-galon ?",
                                            "Petra eo bet krouet pe dizoloet ganeoc'h gant ar rann-galon ?"
                                  ]
                        },
                        {
                                  "text": "An emgarantez (empathy) hep bevenn n'eo nemet klask plijout d'an dud gant ur PR mat.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag un den emgar oc'h ?",
                                            "Hag-eñ e c'haller c'hoari an emgarantez e-lec'h he santout ?",
                                            "Hag-eñ e c'haller kaout re a emgarantez ?",
                                            "Petra eo an diforc'h etre an emgarantez hag en em goll e buhez ar re all ?",
                                            "Hag-eñ ho peus ranket en em wareziñ rak re a santimantoù ?"
                                  ]
                        },
                        {
                                  "text": "Ar soñjoù dañjerusañ eo ar re a seblant bezañ poellek penn-da-benn.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ e c'hallit reiñ ur skouer a soñj dañjerus a seblant bezañ poellek ?",
                                            "Penaos e priziit un arguzenn a seblant bezañ reizh met a c'hallfe bezañ faziek ?",
                                            "Hag-eñ eo diaesoc'h da lakaat e diskred ur soñj fall met sevener ha poellek, pe ur soñj dregantus ?",
                                            "Petra eo ho test evit gouzout hag-eñ e c'haller kaout fiziañs en ur soñj ?",
                                            "Hag ur soñj poellek en deus ho kaset d'ul lec'h na oach ket o c'hortoz ?"
                                  ]
                        },
                        {
                                  "text": "An aotantizelezh (authenticity) a zo deuet da vezañ ur c'hoari-pezh prizet-tre.",
                                  "level": "advanced",
                                  "hints": [
                                            "Petra eo an aotantizelezh evidoc'h ?",
                                            "Hag-eñ en em ziskouezit en un doare disheñvel enlinenn hag er-maez ?",
                                            "Hag-eñ eo posupl bezañ aotantek penn-da-benn ?",
                                            "Hag-eñ e c'haller bezañ aotantek ha strategel war un dro ?",
                                            "Pegoulz en em santit ar muiañ eveldoc'h-c'hwi ?"
                                  ]
                        },
                        {
                                  "text": "Ar pardon a zo un dra a rit evidoc'h-c'hwi e fin ar gont, pas evit an den all.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ ho peus pardonet d'unan bennak n'en doa ket merit d'an dra-se ?",
                                            "Petra eo an diforc'h etre pardoniñ hag ankounac'haat ?",
                                            "Hag-eñ eo posupl pardoniñ atav ?",
                                            "Hag-eñ e fell deoc'h pardoniñ e asantit d'ar pezh a zo bet graet ?",
                                            "Hag-eñ ez eus un dra bennak a zo diaes deoc'h pardoniñ ?"
                                  ]
                        },
                        {
                                  "text": "An ensavadurioù a echu atav o tiffenn anezho o-unan muioc'h evit an dud a servijont.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ ho peus ur skouer a ensavadur en deus graet tro-wenn d'an dud ?",
                                            "Hag un dra ret eo, pe hag-eñ e c'haller kemmañ an ensavadurioù ?",
                                            "Hag-eñ e sacho an ensavadurioù tud a fell dezho difenn anezho ?",
                                            "Penaos e vefe un ensavadur kiriek e gwirionez ?",
                                            "Hag un dra vunut eo gortoz e kemmfe an ensavadurioù o-unan ?"
                                  ]
                        },
                        {
                                  "text": "Ar c'hoant da gaout surantez eo gwrizienn ar muiañ niver a grizderioù an den.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ eo diaes gouzañv an ansurantez ?",
                                            "Hag-eñ e c'hallit reiñ ur skouer ma oa bet droug gant ar c'hoant da gaout surantez ?",
                                            "Hag-eñ eo an diskred un nerzh pe ur wanidigezh ?",
                                            "Hag an dud gant kredoù kreñv a laka ar bed da vezañ gwelloc'h pe falloc'h ?",
                                            "Penaos e verit ho c'hoant da gaout surantez ?"
                                  ]
                        },
                        {
                                  "text": "Talvoudegezhioù an darn vrasañ eus an dud ne badont nemet pa ne goustont netra.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag ho talvoudegezhioù a zo bet lakaet d'ar proued gant ur c'houst gwirion ?",
                                            "Hag-eñ e c'hallit soñjal en ur mare m'ho peus graet an eneb d'ho talvoudegezhioù ?",
                                            "Hag-eñ eo reizh barn an dud o deus graet tro-wenn dindan ar wask ?",
                                            "Hag-eñ eo ar gap etre an talvoudegezhioù hag an emzalc'h ur merk a hypocrisy pe an denelezh hepken ?",
                                            "Petra eo an dalvoudegezh na asantfec'h ket kemmañ ?"
                                  ]
                        },
                        {
                                  "text": "Gouzout pegoulz paouez da gomz a zo raloc'h ha talvoudusoc'h evit gouzout petra lavarout.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ e soñjit e selaouit mat ?",
                                            "Hag-eñ e c'hallit soñjal en ur stad ma oa ar sioulder ar respont mat ?",
                                            "Hag-eñ eo re uhel priz an dud a oar komz mat ?",
                                            "Petra a remerkit en dud a selaou muioc'h evit na gomzont ?",
                                            "Hag-eñ eo bet ar chom sioul an dra galloudusañ ho peus graet ?"
                                  ]
                        },
                        {
                                  "text": "Termenet omp muioc'h gant ar pezh a nac'hom ober evit gant ar pezh a zibabomp ober.",
                                  "level": "advanced",
                                  "hints": [
                                            "Petra eo an dra na rafec'h ket, forzh petra e vefe ar gopr ?",
                                            "Hag-eñ e lavarout 'nann' d'un dra bennak a dermeno ac'hanoc'h ?",
                                            "Hag-eñ e tiskouez ho bevennoù ho talvoudegezhioù ?",
                                            "Hag-eñ eo ar pezh a dec'hom rak kement a verkoù hag ar pezh a glaskomp ?",
                                            "Hag un nac'hadenn he deus koustet un dra bennak deoc'h ?"
                                  ]
                        },
                        {
                                  "text": "Ar vroadelezh gant ar produerezh n'eo nemet ar gapitalouriezh gwisket evel un emwelladur ac'hanon va-unan.",
                                  "level": "advanced",
                                  "hints": [
                                            "A-belec'h e teu ar wask da wellaat ho prantad amzer ?",
                                            "Hag-eñ eo an diskwizh ul lodenn eus ur vuhez produus e gwirionez ?",
                                            "Hag-eñ e varnit ac'hanoc'h ho-unan hervez ar pezh a rit ?",
                                            "Hag-eñ e c'hallit soñjal en un dra dalvoudus-tre hag a zo displijus evit ar produerezh ?",
                                            "Hag un doare ambision ez eus hag a vefe hep gounid ebet ?"
                                  ]
                        },
                        {
                                  "text": "Ar 'cancel culture' a zo deuet da vezañ ur seurt justis niverel gant an engroez.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ e c'hallit soñjal en ur stad ma oa reizh ar c'hriadenn foran ?",
                                            "Hag un diforc'h a zo etre ar giriegezh hag ar c'hastiz ?",
                                            "Piv a zibab ar pezh a zo dibardonus ?",
                                            "Hag-eñ e labour ar 'c'hancel culture' — hag-eñ e cheñch an emzalc'h e gwirionez ?",
                                            "Hag un dra bennak a zo fall da vat en dra-se, pe hag-eñ eo ur mank hepken ?"
                                  ]
                        },
                        {
                                  "text": "An dud a lavar n'o deus keuz (regret) ebet, pe n'o deus ket bevet a-walc'h, pe n'o deus ket soñjet a-walc'h.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ ho peus keuz d'un dra bennak ?",
                                            "Hag ur brederouriezh yac'h eo 'keuz ebet', pe ur gwintañ-difenn ?",
                                            "Petra e vefe bevañ hep keuz ebet ?",
                                            "Hag-eñ e c'hall ar c'heuz bezañ talvoudus ?",
                                            "Hag ez eus un dra bennak a gemmfec'h m'ho pefe an tu ?"
                                  ]
                        },
                        {
                                  "text": "An unan n'eo ket un dra a zizoloer — un dra a grouer bepred eo.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ e santit ar mennozh-mañ evel un dra a zieub ac'hanoc'h pe a laka ac'hanoc'h da goll ho kempouez ?",
                                            "Petra a dalvezfe evit ho tibaboù ma vije an identelezh savet e-lec'h bezañ kavet ?",
                                            "Hag ez eus un dra bennak a santit evel un 'unan' stag ha pennañ ?",
                                            "Hag an unan a ziskouezit d'ar re all a stumm an unan a zeuit da vezañ ?",
                                            "Petra a zegouezh gant an identelezh en arnoded ar c'holl pe ar cheñchamant bras ?"
                                  ]
                        },
                        {
                                  "text": "Ar drugarez a c'houlenn un istor eeun n'eo ket drugarez wirion — sentimentalouriezh eo.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag un diforc'h zo etre an drugarez wirion hag an emzalc'h santimantel ouzh un istor bamus ?",
                                            "Hag-eñ e c'hallit soñjal en un degouezh m'he deus un istor eeunaet distummet ar gwirvoud ?",
                                            "Hag ar sentimentalouriezh a laka ac'hanomp da santout emaomp oc'h ober un dra bennak pa n'emaomp ket ?",
                                            "Hag-eñ eo ret an eeunadur evit an emskiant ?",
                                            "Petra eo koust bihanaat ar boan d'un danevell aes da gompren ?"
                                  ]
                        },
                        {
                                  "text": "Kement ideologiezh, lakaet da benn he poell, a zeu da vezañ ur stumm a feulster.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ e c'hallit soñjal en un ideologiezh a dec'h rak ar boell-mañ ?",
                                            "Hag un abeg eo evit nac'hañ an ideologiezh penn-da-benn pe evit he dougen gant skañvded ?",
                                            "Petra eo an diforc'h etre ur sav-poent a bennaenn hag un ideologiezh ?",
                                            "Hag ar bratikelezh a dec'h rak an trap-mañ pe hag e guzhat a ra ?",
                                            "Hag-eñ e talvez kement-mañ e vefe kement sav-poent politikel zo ken dangeros an eil hag egile ?"
                                  ]
                        },
                        {
                                  "text": "Ar yezh ne zeskriv ket ar gwirvoud — e sevel a ra.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ ho peus bet tro da gaout mennozhioù ne oac'h ket evit stummañ en ho yezh kentañ o teskiñ ur yezh all ?",
                                            "Hag un dra bennak a santit ne c'hall yezh ebet envel ?",
                                            "Hag ar yezh a implijit evit soñjal a cheñch ho santimantoù ?",
                                            "Hag-eñ eo posupl kaout ur mennozh hep ger ebet evitañ ?",
                                            "Petra a dalvez kement-mañ evit an droidigezh — hag-eñ e c'hall ur mennozh bezañ troet penn-da-benn ?"
                                  ]
                        },
                        {
                                  "text": "An dra dispackeroc'h a c'hall un den ober er bed modern eo bezañ gwalc'het a-greiz-kalon.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag ar gwalc'h zo politikel ?",
                                            "Hag an ekonomiezh he deus ezhomm eus bevezerien digwalc'h ?",
                                            "Hag ar gwalc'h gwirion zo posupl zoken pe un istor a lavaromp deomp hon-unan eo ?",
                                            "Hag un diforc'h zo etre ar gwalc'h hag an daskorañ ?",
                                            "Hag-eñ e talvez bezañ gwalc'het n'ho peus ket ken a nann-onestiz ouzh ar bed ?"
                                  ]
                        },
                        {
                                  "text": "Ar goulenn evit ar c'hempouez er gaoz foran a ro alies ur wirionez faos da sav-poentoù ne veritont ket anezhi.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ 'prouiñ an daou du' zo reizh bepred, pe hag-eñ e c'hall distummañ ar wirionez ?",
                                            "Piv a zibab pe stumm a virit bezañ klevet ?",
                                            "Hag un diforc'h zo etre kempouez ha kevatalder faos ?",
                                            "Hag ar c'hempouez kazetenner a c'hall kenvevañ gant reolennoù epistemel ?",
                                            "Petra eo koust reiñ ur gador d'ur sav-poent en anv ar reizhded ?"
                                  ]
                        },
                        {
                                  "text": "An onestiz vras, hep furnez, n'eo nemet garventez gant mennozhioù mat.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag ar birvilh da 'lavarout an traoù evel m'emaint' zo evit mad an den all pe evit ho tiboan deoc'h-unan ?",
                                            "Hag-eñ e c'hallit soñjal en ur mare m'he deus graet an onestiz vras ur gaou wirion ?",
                                            "Hag ar vadelezh zo un dibab kalonekoc'h a-wechoù ?",
                                            "Pelec'h emañ ar vevenn etre an onestiz hag ar garventez ?",
                                            "Hag-eñ e tiskouez ar goulenn evit un onestiz klok en darempredoù an darempred tost pe ar c'hontrol ?"
                                  ]
                        },
                        {
                                  "text": "Ar frankiz a youl zo ur grouidigezh ret muioc'h evit ur gwirvoud a ster.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ e talvez un dra bennak e vefe gwirvoudel ma rankomp ober evel pa vije ?",
                                            "Petra e vefe ar giriegezh moral en ur bed hep frankiz a youl ?",
                                            "Hag ar skiantoù an empenn a diskoulm ar goulenn pe hag e lakaat a reont en ur stumm all ?",
                                            "Hag ar gredenn er frankiz a youl zo ur produ eus un argerzh rakstummet ?",
                                            "Petra a lavar ho spered deoc'h — ha fiziañs ho peus ennañ diwar-benn ar goulenn-mañ ?"
                                  ]
                        },
                        {
                                  "text": "An internet n'en deus ket lakaet ac'hanomp da vezañ muioc'h titouret — lakaet en deus ac'hanomp da vezañ muioc'h sur eus hor fazioù.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ e c'hallit soñjal en ur gredenn ho poa hag a zo bet stummet gant algoritmoù ?",
                                            "Hag an internet eo ar gudenn pe natur an den o kemmañ gantañ ?",
                                            "Pezh pratik epistemel a warez diouzh kement-mañ ?",
                                            "Hag-eñ eo an ampartiz un dra a ster c'hoazh d'ur mare ma c'hall kement den zo embann traoù ?",
                                            "Fiziañs ho peus en ho parregezh da lakaat un talvoudegezh d'an titouroù war an internet ?"
                                  ]
                        },
                        {
                                  "text": "An arz a frealz zo nebeutoc'h a dalvoudegezh ennañ evit an arz a laka an den da herzel.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ e c'hallit soñjal en un arz en deus graet an daou asambles ?",
                                            "Hag un urzhaz eus an talvoudegezhioù arz zo, pe hag ur snobelezh eo ?",
                                            "Petra a glaskit e gwirionez pa 'z oc'h gloazet — an diaezamant pe ar frealz ?",
                                            "Hag an arz a laka an den da herzel a cheñch an emzalc'h pe ar santimant hepken ?",
                                            "Petra eo pal an arz — herzel, prederiañ pe treizhañ ?"
                                  ]
                        },
                        {
                                  "text": "An araokadenn moral zo wirion, met ar mennozh e kerzh an istor en ur roud eo ur vojenn.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ e c'hallit soñjal en un dra degemeret hiziv hag a ziskouez un araokadenn moral wirion ?",
                                            "Hag-eñ e c'hallit soñjal en un dra hon deus kollet ?",
                                            "Hag ar gredenn en araokadenn moral zo ur mennozh sevenadurel dibar ?",
                                            "Hag ar c'hiz moral a vez kemmesket gant an araokadenn moral ?",
                                            "Petra eo ho prouenn omp gwelloc'h evit ar remziadoù kent ?"
                                  ]
                        },
                        {
                                  "text": "Klask ar c'hredusted eo gwrizienn ar muiañ a garventez denel.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ e c'hallit soñjal en un istor pe en un dra personel m'he deus an ezhomm a gredusted graet droug ?",
                                            "Hag an douetañs zo ur vertuz moral ?",
                                            "Hag an dud gant kredennoù kreñv a laka ar bed da vezañ gwelloc'h pe washoc'h ?",
                                            "Hag ez eus ur stumm a gredusted n'eo ket dangereus ?",
                                            "Penaos dougen kredennoù kreñv hep bezañ reut ?"
                                  ]
                        },
                        {
                                  "text": "Ar memor n'eo ket un enrolladur eus ar pezh a zo c'hoarvezet — un istor a adskrivomp bepred eo.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag ur memor deoc'h zo bet lakaet e rann ar marteze gant un den a oa eno ?",
                                            "Hag-eñ e soñjit e cheñchomp hor memorioù evit gwareziñ ur skeudenn ac'hanomp hon-unan ?",
                                            "Petra a dalvez kement-mañ evit an identelezh personel — hag-eñ oc'h an den ho peus koun anezhañ ?",
                                            "Hag-eñ e c'hall ur memor adskrivet bezañ muioc'h gwirion evit an darvoud kentañ ?",
                                            "Petra eo ar memor kreñvañ ho peus, ha pegen sur oc'h anezhañ e gwirionez ?"
                                  ]
                        },
                        {
                                  "text": "N'eus ket a veveziñ etek dindan ar gapitalouriezh ziwezhat — hag ur rann evit ober eo, ha n'eo ket evit daskoriñ.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag-eñ e soñjit e talvez dibaboù ar vevezerien ?",
                                            "Hag ar stumm m'eo diskouezet ar cheñchamant hin hag ar gwall-implij evel ur giriegezh personel zo ur mennozh politikel a-ratozh ?",
                                            "Petra eo an diforc'h etre ar cheñchamant reizhiad hag an oberenn unan ?",
                                            "Hag-eñ eo posupl bevañ en ur stumm etek en ur reizhiad nann-etek ?",
                                            "Hag an anaoudegezh eus an dibosublusted a veveziñ etek a cheñch ho stumm d'en em zerc'hel ?"
                                  ]
                        },
                        {
                                  "text": "Ar vuhez prederiet a dalias bevañ — met he frediñ re dost a c'hall he lakaat da vezañ divevuz.",
                                  "level": "advanced",
                                  "hints": [
                                            "Pegen a breder warnoc'h hoc'h-unan zo re ?",
                                            "Hag-eñ e c'hall ar preder dont da vezañ ur stumm d'en em zivizout ?",
                                            "Hag-eñ ez eus ur c'houst d'ar preder warnoc'h hoc'h-unan bepred ?",
                                            "Hag-eñ ez eus tud hag a vev don ha mat hep kalz a breder warno o-unan ?",
                                            "Petra ho peus kollet ha gounezet hervezoc'h gant ho live preder warnoc'h hoc'h-unan ?"
                                  ]
                        },
                        {
                                  "text": "Etek an drevadennerezh war blanedennoù all.",
                                  "level": "advanced",
                                  "hints": [
                                            "Hag ur gwir hon eus da gemer bedoù all pa n'hon deus ket diskoulmet kudennoù hor bed ?",
                                            "Hag-eñ e rankfemp kas reizhiadoù denel (kapitalouriezh, broadelouriezh) d'an egorenn ?",
                                            "Petra eo hor dleadennoù moral ouzh ur vuhez all marteze, zoken ma 'z eo mikrobennel ?",
                                            "Hag ar mennozh 'Steuñv B' zo un dra dangereus evit ar gwareziñ ekologel war an Douar ?",
                                            "Piv a rankfe kaout pe ren ar pinvidigezhioù planetel ?"
                                  ]
                        },
                        {
                                  "text": "Hag ar frankiz a youl zo anezhi e gwirionez pe hag ur skeud eo ?",
                                  "level": "advanced",
                                  "hints": [
                                            "Ma 'z eo hon oberoù rakstummet, hag-eñ omp kiriek ?",
                                            "Hag ar santimant a zibab zo a-walc'h evit prouiñ ar frankiz a youl ?",
                                            "Hag un urzhiataer ampart a c'hallfe rakwelout kement dibab ho peus d'ober ?",
                                            "Petra eo an diforc'h etre 'frankiz diouzh' ha 'frankiz evit' ?",
                                            "Hag an ene pe an emskiant a cheñch ar goulenn ?"
                                  ]
                        }
              ],
              "battle": [
                        [
                                  "Montanhas 🏔️",
                                  "Praia 🏖️"
                        ],
                        [
                                  "Café ☕",
                                  "Chá 🍵"
                        ],
                        [
                                  "Madrugador 🌅",
                                  "Noturno 🦉"
                        ],
                        [
                                  "Vida na cidade 🏙️",
                                  "Vida no campo 🌾"
                        ],
                        [
                                  "Ler 📚",
                                  "Assistir filmes 🎬"
                        ],
                        [
                                  "Verão ☀️",
                                  "Inverno ❄️"
                        ],
                        [
                                  "Gatos 🐱",
                                  "Cães 🐶"
                        ],
                        [
                                  "Trabalho em casa 🏠",
                                  "Trabalho no escritório 🏢"
                        ],
                        [
                                  "Doce 🍰",
                                  "Salgado 🧀"
                        ],
                        [
                                  "Viajar sozinho ✈️",
                                  "Viajar com amigos 👥"
                        ],
                        [
                                  "kemmoù hin",
                                  ""
                        ],
                        [
                                  "surentez urzhiataerel",
                                  ""
                        ],
                        [
                                  "iaouankiz ha dazed",
                                  ""
                        ],
                        [
                                  "ingalded ar goproù",
                                  ""
                        ],
                        [
                                  "morañ ar skiant",
                                  ""
                        ],
                        [
                                  "frankiz an embann",
                                  ""
                        ],
                        [
                                  "energietlezh padus",
                                  ""
                        ],
                        [
                                  "diorren lec'hel",
                                  ""
                        ],
                        [
                                  "deskadurezh digor",
                                  ""
                        ],
                        [
                                  "stourm ouzh ar baourentez",
                                  ""
                        ],
                        [
                                  "bevañ e surentez",
                                  ""
                        ],
                        [
                                  "micherioù an dazont",
                                  ""
                        ],
                        [
                                  "rannañ ar madoù",
                                  ""
                        ],
                        [
                                  "gwareziñ ar yezhoù",
                                  ""
                        ],
                        [
                                  "treuzdougen glan",
                                  ""
                        ],
                        [
                                  "ekonomiezh kelc'hiek",
                                  ""
                        ],
                        [
                                  "reizhidigezh an havoù",
                                  ""
                        ],
                        [
                                  "amzer-labour kempouez",
                                  ""
                        ],
                        [
                                  "teknologiezh ha spered",
                                  ""
                        ],
                        [
                                  "kenstaget ar pobloù",
                                  ""
                        ],
                        [
                                  "reizhder sokial ha denel",
                                  ""
                        ],
                        [
                                  "ethik an inteligentezh krouet",
                                  ""
                        ],
                        [
                                  "treusfurmadur niverel al labour",
                                  ""
                        ],
                        [
                                  "gwareziñ ar vevdiverseurted",
                                  ""
                        ],
                        [
                                  "amzeriadur ar c'hêrioù bras",
                                  ""
                        ],
                        [
                                  "diorren padus ar yec'hed",
                                  ""
                        ],
                        [
                                  "frankiz ar c'heleier niverel",
                                  ""
                        ],
                        [
                                  "kenlabour etrevroadel evit an hin",
                                  ""
                        ],
                        [
                                  "reizhiad deskadurezh an dazont",
                                  ""
                        ],
                        [
                                  "gwareziñ ar glad sevenadurel",
                                  ""
                        ],
                        [
                                  "keñveriañ ar goproù etre merc'hed ha paotred",
                                  ""
                        ],
                        [
                                  "peoc'h ha surentez er bed",
                                  ""
                        ],
                        [
                                  "ekonomiezh treuswelus ha reizh",
                                  ""
                        ],
                        [
                                  "dileuriadur ar galloud sokial",
                                  ""
                        ],
                        [
                                  "treusgas ar gouiziegezhioù",
                                  ""
                        ]
              ],
              "critic": [
                        {
                                  "title": "Delicioso, mas muito caro 🍝",
                                  "type": "Restaurante",
                                  "review": "A comida estava incrível e os ingredientes frescos, mas as porções eram pequenas e a conta foi uma surpresa.",
                                  "question": "Você voltaria apesar do preço elevado?"
                        },
                        {
                                  "title": "Enredo envolvente, final fraco 🎬",
                                  "type": "Filme",
                                  "review": "Os dois primeiros terços do filme foram cheios de suspense, mas o desfecho foi apressado e ilógico.",
                                  "question": "O quanto o final afeta a sua avaliação geral?"
                        },
                        {
                                  "title": "Gráficos incríveis, mas com falhas 🎮",
                                  "type": "Jogo",
                                  "review": "O jogo é visualmente espetacular, mas trava com frequência e tem falhas técnicas.",
                                  "question": "A atmosfera e os gráficos podem compensar os problemas técnicos?"
                        }
              ],
              "action": {
                        "starter": [
                                  "Gato",
                                  "Cão",
                                  "Casa",
                                  "Carro",
                                  "Livro",
                                  "Água",
                                  "Sol",
                                  "Lua",
                                  "Árvore",
                                  "Telefone",
                                  "Porta",
                                  "Cadeira",
                                  "Cama",
                                  "Pão",
                                  "Peixe"
                        ],
                        "elementary": [
                                  "Cozinha",
                                  "Jardim",
                                  "Trem",
                                  "Médico",
                                  "Professor",
                                  "Música",
                                  "Aniversário",
                                  "Natação",
                                  "Férias",
                                  "Loja",
                                  "Estação",
                                  "Hospital"
                        ],
                        "intermediate": [
                                  "Museu",
                                  "Entrevista",
                                  "Arquiteto",
                                  "Jornalista",
                                  "Parlamento",
                                  "Orquestra",
                                  "Maratona",
                                  "Exposição",
                                  "Laboratório",
                                  "Telescópio"
                        ],
                        "upper_intermediate": [
                                  "Filantropia",
                                  "Embaixador",
                                  "Hipótese",
                                  "Empreendedor",
                                  "Arqueologia",
                                  "Biodiversidade",
                                  "Infraestrutura"
                        ],
                        "advanced": [
                                  "Paradigma",
                                  "Juxtaposição",
                                  "Anacronismo",
                                  "Verossimilhança",
                                  "Resiliência",
                                  "Matiz",
                                  "Perspicácia"
                        ],
                        "proficiency": [
                                  "Ubiquidade",
                                  "Efêmero",
                                  "Perspicaz",
                                  "Equanimidade",
                                  "Vicisitude",
                                  "Inefável"
                        ]
              },
              "identity": [
                        {
                                  "person": "Um bombeiro",
                                  "clue": "Usa capacete e apaga fogos com água.",
                                  "level": "elementary"
                        },
                        {
                                  "person": "Um chef",
                                  "clue": "Trabalha numa cozinha e prepara pratos deliciosos.",
                                  "level": "elementary"
                        },
                        {
                                  "person": "Um bibliotecário",
                                  "clue": "Gere uma biblioteca e ajuda as pessoas a encontrar livros.",
                                  "level": "elementary"
                        },
                        {
                                  "person": "Um veterinário",
                                  "clue": "Cuida de animais doentes ou feridos.",
                                  "level": "elementary"
                        },
                        {
                                  "person": "Um astronauta",
                                  "clue": "Viaja no espaço além da Terra.",
                                  "level": "intermediate"
                        },
                        {
                                  "person": "Um detetive",
                                  "clue": "Investiga mistérios e procura pistas.",
                                  "level": "intermediate"
                        },
                        {
                                  "person": "Um jornalista",
                                  "clue": "Informa o público e escreve artigos de notícias.",
                                  "level": "intermediate"
                        },
                        {
                                  "person": "Um fotógrafo",
                                  "clue": "Capta memórias e imagens com uma câmara.",
                                  "level": "intermediate"
                        },
                        {
                                  "person": "Um arquiteto",
                                  "clue": "Projeta casas e edifícios antes da sua construção.",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "person": "Um cirurgião",
                                  "clue": "Realiza operações médicas no hospital.",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "person": "Um engenheiro de software",
                                  "clue": "Escreve código para criar aplicações de software.",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "person": "Um diplomata",
                                  "clue": "Representa o seu país em relações internacionais oficiais.",
                                  "level": "advanced"
                        },
                        {
                                  "person": "Um biólogo marinho",
                                  "clue": "Estuda a fauna e flora dos oceanos.",
                                  "level": "advanced"
                        },
                        {
                                  "person": "Um astrofísico",
                                  "clue": "Estuda as propriedades físicas das estrelas e galáxias.",
                                  "level": "advanced"
                        }
              ],
              "wordlinker": [
                        {
                                  "words": [
                                            "Maçã",
                                            "Laranja",
                                            "Banana",
                                            "Cenoura"
                                  ],
                                  "odd": "Cenoura",
                                  "link": "Frutas",
                                  "oddReason": "Cenoura é um vegetal"
                        },
                        {
                                  "words": [
                                            "Lisboa",
                                            "Roma",
                                            "Tóquio",
                                            "Amazonas"
                                  ],
                                  "odd": "Amazonas",
                                  "link": "Capitais",
                                  "oddReason": "O Amazonas é um rio"
                        },
                        {
                                  "words": [
                                            "Piano",
                                            "Guitarra",
                                            "Violino",
                                            "Trompete"
                                  ],
                                  "odd": "none",
                                  "link": "Instrumentos musicais",
                                  "oddReason": "Todos são instrumentos"
                        },
                        {
                                  "words": [
                                            "Médico",
                                            "Enfermeiro",
                                            "Cirurgião",
                                            "Piloto"
                                  ],
                                  "odd": "Piloto",
                                  "link": "Profissões de saúde",
                                  "oddReason": "O piloto pilota aviões, não no hospital"
                        }
              ],
              "etymology": [
                        {
                                  "word": "Avel",
                                  "level": "easy",
                                  "options": [
                                            "Keltiek / Celtic",
                                            "Galleg",
                                            "Latin",
                                            "Saozneg"
                                  ],
                                  "answer": "Keltiek / Celtic",
                                  "detail": "Kevatal d'ar kembraeg awel, o tont eus ar gwrizienn keltiek hag indezeuropeek evit an avel.",
                                  "path": "Keltiek (aglo) → Brezhoneg Avel"
                        },
                        {
                                  "word": "Kador",
                                  "level": "easy",
                                  "options": [
                                            "Latin",
                                            "Keltiek / Celtic",
                                            "Galleg",
                                            "Saozneg"
                                  ],
                                  "answer": "Latin",
                                  "detail": "Amprestet eus al latin cathedra, deuet eus ar gresianeg kathedra (kador-oskoaz).",
                                  "path": "Latin (cathedra) → Brezhoneg Kador"
                        },
                        {
                                  "word": "Menez",
                                  "level": "easy",
                                  "options": [
                                            "Keltiek / Celtic",
                                            "Latin",
                                            "Galleg",
                                            "Gouezeleg"
                                  ],
                                  "answer": "Keltiek / Celtic",
                                  "detail": "Kevatal d'ar kembraeg mynydd hag ar kerneveureg mynydh, o tont eus ar predeneg monidos.",
                                  "path": "Keltiek (monidos) → Brezhoneg Menez"
                        },
                        {
                                  "word": "Ti",
                                  "level": "easy",
                                  "options": [
                                            "Keltiek / Celtic",
                                            "Latin",
                                            "Galleg",
                                            "Saozneg"
                                  ],
                                  "answer": "Keltiek / Celtic",
                                  "detail": "Kevatal d'ar kembraeg ty ha gouezeleg tigh, eus ar c'heltieg teg- o dalvezout ti pe gloz.",
                                  "path": "Keltiek (tegos) → Brezhoneg Ti"
                        },
                        {
                                  "word": "Mor",
                                  "level": "easy",
                                  "options": [
                                            "Keltiek / Celtic",
                                            "Latin",
                                            "Galleg",
                                            "Gouezeleg"
                                  ],
                                  "answer": "Keltiek / Celtic",
                                  "detail": "Kevatal d'ar kembraeg mor, kerneweureg mor, ha gouezeleg muir, eus ar c'heltieg koshañ mori.",
                                  "path": "Keltiek (mori) → Brezhoneg Mor"
                        },
                        {
                                  "word": "Eost",
                                  "level": "easy",
                                  "options": [
                                            "Latin",
                                            "Keltiek / Celtic",
                                            "Galleg",
                                            "Saozneg"
                                  ],
                                  "answer": "Latin",
                                  "detail": "Deuet eus anv an impalaer roman Augustus, evit envel miz an eost ha trevadoù an hañv.",
                                  "path": "Latin (Augustus) → Brezhoneg Eost"
                        },
                        {
                                  "word": "Kastell",
                                  "level": "easy",
                                  "options": [
                                            "Latin",
                                            "Keltiek / Celtic",
                                            "Galleg",
                                            "Saozneg"
                                  ],
                                  "answer": "Latin",
                                  "detail": "Amprestet e-pad mare ar Romaned eus al latin castellum (kreñvlec'h).",
                                  "path": "Latin (castellum) → Brezhoneg Kastell"
                        },
                        {
                                  "word": "Plou-",
                                  "level": "easy",
                                  "options": [
                                            "Latin",
                                            "Keltiek / Celtic",
                                            "Galleg",
                                            "Saozneg"
                                  ],
                                  "answer": "Latin",
                                  "detail": "Prefiks el lec'hanvadurezh vreizhat o tont eus al latin plebem (pobl pe parrez).",
                                  "path": "Latin (plebem) → Brezhoneg Plou-"
                        },
                        {
                                  "word": "Korn",
                                  "level": "easy",
                                  "options": [
                                            "Keltiek / Celtic",
                                            "Latin",
                                            "Galleg",
                                            "Gouezeleg"
                                  ],
                                  "answer": "Keltiek / Celtic",
                                  "detail": "Kevatal d'ar kembraeg corn hag al latin cornu, kenwriziennek er kerentiad indezeuropeek.",
                                  "path": "Keltiek (karno) → Brezhoneg Korn"
                        },
                        {
                                  "word": "Bara",
                                  "level": "easy",
                                  "options": [
                                            "Keltiek / Celtic",
                                            "Latin",
                                            "Galleg",
                                            "Saozneg"
                                  ],
                                  "answer": "Keltiek / Celtic",
                                  "detail": "Kevatal d'ar kembraeg bara hag ar c'herneweureg bara, ger keltiek evit boad ar pemdez.",
                                  "path": "Keltiek (borage) → Brezhoneg Bara"
                        },
                        {
                                  "word": "Gwin",
                                  "level": "medium",
                                  "options": [
                                            "Latin",
                                            "Keltiek / Celtic",
                                            "Galleg",
                                            "Saozneg"
                                  ],
                                  "answer": "Latin",
                                  "detail": "Amprestet e-pad Mare ar Romaned eus al latin vinum (gwin/evaj).",
                                  "path": "Latin (vinum) → Brezhoneg Gwin"
                        },
                        {
                                  "word": "Marc'h",
                                  "level": "medium",
                                  "options": [
                                            "Keltiek / Celtic",
                                            "Latin",
                                            "Galleg",
                                            "Gouezeleg"
                                  ],
                                  "answer": "Keltiek / Celtic",
                                  "detail": "Ger keltiek koshañ evit ar marc'h, kavet ivez e gouezeleg marc hag e galloueg marc-.",
                                  "path": "Keltiek (markos) → Brezhoneg Marc'h"
                        },
                        {
                                  "word": "Nedeleg",
                                  "level": "medium",
                                  "options": [
                                            "Latin",
                                            "Keltiek / Celtic",
                                            "Galleg",
                                            "Saozneg"
                                  ],
                                  "answer": "Latin",
                                  "detail": "Deuet eus al latin Natalicia (deiz ginivelezh), kevatal d'ar c'hembraeg Nadolig.",
                                  "path": "Latin (Natalicia) → Brezhoneg Nedeleg"
                        },
                        {
                                  "word": "Gouel",
                                  "level": "medium",
                                  "options": [
                                            "Latin",
                                            "Keltiek / Celtic",
                                            "Galleg",
                                            "Saozneg"
                                  ],
                                  "answer": "Latin",
                                  "detail": "Amprestet eus al latin vigilia (deiz beyliat pe gouel relijiel).",
                                  "path": "Latin (vigilia) → Brezhoneg Gouel"
                        },
                        {
                                  "word": "Penn",
                                  "level": "medium",
                                  "options": [
                                            "Keltiek / Celtic",
                                            "Latin",
                                            "Galleg",
                                            "Gouezeleg"
                                  ],
                                  "answer": "Keltiek / Celtic",
                                  "detail": "Ger keltiek gallaouek-predenek evit ar penn pe ar c'hrec'h, kavet er c'hembraeg pen.",
                                  "path": "Keltiek (penno) → Brezhoneg Penn"
                        },
                        {
                                  "word": "Lenn",
                                  "level": "medium",
                                  "options": [
                                            "Keltiek / Celtic",
                                            "Latin",
                                            "Galleg",
                                            "Gouezeleg"
                                  ],
                                  "answer": "Keltiek / Celtic",
                                  "detail": "Eus ar ger geltiek lindo (dour/lenn), kevatal d'ar c'hembraeg llyn ha d'ar gouezeleg linn.",
                                  "path": "Keltiek (lindo) → Brezhoneg Lenn"
                        },
                        {
                                  "word": "Koukoug",
                                  "level": "medium",
                                  "options": [
                                            "Onomatopeik / Onomatopoeic",
                                            "Latin",
                                            "Galleg",
                                            "Saozneg"
                                  ],
                                  "answer": "Onomatopeik / Onomatopoeic",
                                  "detail": "Ger onomatopeek o treveziñ kan an evn koukoug, kavet ivez er c'hembraeg cwcw.",
                                  "path": "Son an evn → Brezhoneg Koukoug"
                        },
                        {
                                  "word": "Egliz",
                                  "level": "medium",
                                  "options": [
                                            "Latin",
                                            "Gresianeg",
                                            "Keltiek / Celtic",
                                            "Galleg"
                                  ],
                                  "answer": "Latin",
                                  "detail": "Deuet eus al latin ecclesia, e-unan amprestet eus ar gresianeg ekklēsia (bodadenn).",
                                  "path": "Gresianeg (ekklēsia) → Latin (ecclesia) → Brezhoneg Egliz"
                        },
                        {
                                  "word": "Karr",
                                  "level": "medium",
                                  "options": [
                                            "Keltiek / Celtic",
                                            "Latin",
                                            "Galleg",
                                            "Saozneg"
                                  ],
                                  "answer": "Keltiek / Celtic",
                                  "detail": "Ger keltiek koshañ amprestet goude gant al latin carrus evit ar c'herri-stramm.",
                                  "path": "Keltiek (karros) → Brezhoneg Karr"
                        },
                        {
                                  "word": "Lestr",
                                  "level": "medium",
                                  "options": [
                                            "Keltiek / Celtic",
                                            "Latin",
                                            "Galleg",
                                            "Gouezeleg"
                                  ],
                                  "answer": "Keltiek / Celtic",
                                  "detail": "Kevatal d'ar c'hembraeg llestr, o tarkozañ ur lestr pe un bagigoù mor.",
                                  "path": "Keltiek (lestr) → Brezhoneg Lestr"
                        },
                        {
                                  "word": "Kozh",
                                  "level": "hard",
                                  "options": [
                                            "Keltiek / Celtic",
                                            "Latin",
                                            "Galleg",
                                            "Gouezeleg"
                                  ],
                                  "answer": "Keltiek / Celtic",
                                  "detail": "Eus ar galleg-predeneg kotto- (kozh), kavet er c'hembraeg cothead ha gallaoueg.",
                                  "path": "Keltiek (kotto) → Brezhoneg Kozh"
                        },
                        {
                                  "word": "Glas",
                                  "level": "hard",
                                  "options": [
                                            "Keltiek / Celtic",
                                            "Latin",
                                            "Galleg",
                                            "Gouezeleg"
                                  ],
                                  "answer": "Keltiek / Celtic",
                                  "detail": "Rannliv geltiek evit ar glaz hag ar gwer, kavet er c'hembraeg glas ha gouezeleg glas.",
                                  "path": "Keltiek (glasto) → Brezhoneg Glas"
                        },
                        {
                                  "word": "Aviel",
                                  "level": "hard",
                                  "options": [
                                            "Gresianeg",
                                            "Latin",
                                            "Keltiek / Celtic",
                                            "Galleg"
                                  ],
                                  "answer": "Gresianeg",
                                  "detail": "Amprestet eus ar gresianeg euangelion (keloù mat), kavet er c'hembraeg efengyl.",
                                  "path": "Gresianeg (euangelion) → Brezhoneg Aviel"
                        },
                        {
                                  "word": "Yezhadur",
                                  "level": "hard",
                                  "options": [
                                            "Keltiek / Celtic",
                                            "Latin",
                                            "Gresianeg",
                                            "Galleg"
                                  ],
                                  "answer": "Keltiek / Celtic",
                                  "detail": "Neologisme brezhonek : yezh (yezh) + radikal -adur evit ar studi yezhadurel.",
                                  "path": "Brezhoneg (yezh + adur) → Yezhadur"
                        },
                        {
                                  "word": "Morlaer",
                                  "level": "hard",
                                  "options": [
                                            "Keltiek / Celtic",
                                            "Latin",
                                            "Galleg",
                                            "Saozneg"
                                  ],
                                  "answer": "Keltiek / Celtic",
                                  "detail": "Ger kevrennek brezhonek : mor (mor) + laer (laeront), o dalvezout morlaer.",
                                  "path": "Brezhoneg (mor + laer) → Morlaer"
                        },
                        {
                                  "word": "Ker",
                                  "level": "hard",
                                  "options": [
                                            "Keltiek / Celtic",
                                            "Latin",
                                            "Galleg",
                                            "Gouezeleg"
                                  ],
                                  "answer": "Keltiek / Celtic",
                                  "detail": "Eus ar predeneg kaer (lec'h kreñvaet/kêr), kement hag ur gêr pe ur vilajenn er stumm a-hed.",
                                  "path": "Keltiek (kaer) → Brezhoneg Ker"
                        },
                        {
                                  "word": "Tad",
                                  "level": "hard",
                                  "options": [
                                            "Keltiek / Celtic",
                                            "Latin",
                                            "Galleg",
                                            "Gouezeleg"
                                  ],
                                  "answer": "Keltiek / Celtic",
                                  "detail": "Kevatal d'ar c'hembraeg tad ha d'ar c'herneweureg tas, ger kentañ an indezeuropeeg.",
                                  "path": "Keltiek (tatos) → Brezhoneg Tad"
                        },
                        {
                                  "word": "Mamm",
                                  "level": "hard",
                                  "options": [
                                            "Keltiek / Celtic",
                                            "Latin",
                                            "Galleg",
                                            "Gouezeleg"
                                  ],
                                  "answer": "Keltiek / Celtic",
                                  "detail": "Ger babig indezeuropeek evit ar vamm, kavet e kembraeg mamm hag e gresianeg ma.",
                                  "path": "Keltiek (mamma) → Brezhoneg Mamm"
                        },
                        {
                                  "word": "Ster",
                                  "level": "hard",
                                  "options": [
                                            "Keltiek / Celtic",
                                            "Latin",
                                            "Galleg",
                                            "Gouezeleg"
                                  ],
                                  "answer": "Keltiek / Celtic",
                                  "detail": "Ger keltiek henvreizhonek evit ur stêr pe un dourredenn.",
                                  "path": "Keltiek (stera) → Brezhoneg Ster"
                        },
                        {
                                  "word": "Douar",
                                  "level": "hard",
                                  "options": [
                                            "Keltiek / Celtic",
                                            "Latin",
                                            "Galleg",
                                            "Gouezeleg"
                                  ],
                                  "answer": "Keltiek / Celtic",
                                  "detail": "Kevatal d'ar c'hembraeg daear ha c'herneweureg doar, ger keltiek evit an douar.",
                                  "path": "Keltiek (dowro) → Brezhoneg Douar"
                        }
              ],
              "storychain": [
                        {
                                  "prompt": "Numa terça-feira chuvosa, o Marcos encontrou uma chave antiga no bolso…",
                                  "level": "starter"
                        },
                        {
                                  "prompt": "O trem parou numa estação que não figurava em nenhum mapa…",
                                  "level": "elementary"
                        },
                        {
                                  "prompt": "Uma carta misteriosa estava na mesa da cozinha sem remetente…",
                                  "level": "intermediate"
                        },
                        {
                                  "prompt": "Quando a luz faltou em toda a cidade, a Sofia notou um brilho invulgar…",
                                  "level": "upper_intermediate"
                        },
                        {
                                  "prompt": "No sótão da casa antiga, o António descobriu um diário datado de 1888…",
                                  "level": "advanced"
                        }
              ]
    };

    window.gameData = window.gameData || {};
    window.gameData['br'] = data;
})();
