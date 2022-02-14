<template>
    <Step hide-skip-button>
        <div class="relative z-0">
            <div
                class="flex space-x-1 sm:space-x-2 justify-center -mb-10 z-10 relative text-white"
            >
                <button
                    class="p-2 bg-black text-white disabled:opacity-50"
                    :class="{
                        'opacity-0':
                            slider && slider.data.currentSlide.value < 1,
                    }"
                    @click="slider.prev()"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <button
                    v-for="(slide, index) in list"
                    :key="index"
                    class="md:px-2 px-1 py-1 text-white rounded"
                    :class="{
                        'text-[#9ACF00]':
                            slider && index === slider.data.currentSlide.value,
                    }"
                    @click="slider.slideTo(index)"
                >
                    {{ index + 1 }}
                </button>

                <button
                    class="p-2 bg-black text-white disabled:opacity-50"
                    @click="slider.next()"
                    :class="{
                        'opacity-0':
                            slider &&
                            slider.data.currentSlide.value > list.length - 2,
                    }"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
            <Carousel
                :items-to-show="1"
                ref="slider"
                class="relative z-0 max-w-[350px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] mx-20"
            >
                <Slide
                    v-for="slide in list"
                    :key="slide.id"
                    style="align-items: start"
                    class=""
                >
                    <div
                        class="md:px-20 px-5 pb-10 pt-20 flex justify-center bg-black"
                    >
                        <div class="space-y-8 text-center text-white text-lg">
                            <img
                                :src="`/assets/31/${slide.img}.svg`"
                                alt=""
                                class="mx-auto"
                            />
                            <p
                                v-for="(paragraph, index) in slide.paragraphs"
                                :key="index"
                                v-html="paragraph"
                            ></p>
                            <p class="text-[#9ACF00]" v-html="slide.footer"></p>
                        </div>
                    </div>
                </Slide>
            </Carousel>
        </div>
    </Step>
</template>

<script setup>
import Step from "@/components/Step.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import { ref } from "vue";

const slider = ref(null);

const list = [
    {
        id: 1,
        img: "klasyfikacja",
        paragraphs: [
            "Podział społeczeństwa na grupy: na „nas” i „ich”, np. Polacy i Żydzi.",
            "Co można zrobić, by przeciwdziałać podziałom? <br> Szukać tego, co łączy obie grupy, czyli wspólnych wartości i obszarów porozumienia poprzez tworzenie grup wsparcia i inicjatyw walczących z nienawiścią, a nie skupiać się na tym, co je dzieli;",
        ],
        footer: "Kim dla Ciebie są tzw. „oni” czy „inni”? Podaj 3 przykłady takich grup, do których Ty nie należysz. Jak myślisz, co mógłbyś/mogłabyś zrobić, aby bliżej poznać ich członków/człon.",
    },
    {
        id: 2,
        img: "symbolizacja",
        paragraphs: [
            "Wizualne odróżnienie jednej grupy od pozostałych poprzez nadanie nazw lub narzucenie siłą symboli umożliwiających automatyczne rozpoznanie jednych od drugich, np. konieczność noszenia opaski z gwiazdą Dawida podczas okresu okupacji niemieckiej. Klasyfikacja i symbolizacja to powszechne zjawiska. Stają się niebezpieczne, jeśli towarzyszy im nienawiść i dehumanizacja.",
            "Jakie są sposoby przeciwdziałania symbolizacji? <br> Z jednej strony należy wprowadzić zakaz używania symboli nienawiści i mowy nienawiści, z drugiej zaś dołożyć starań, by był w praktyce przestrzegany.",
        ],
        footer: "Czy potrafisz wymienić jakieś symbole, które współcześnie budzą kontrowersje? Co symbolizują, a jakie wzbudzają skojarzenia? Dlaczego?",
    },
    {
        id: 3,
        img: "dyskryminacja",
        paragraphs: [
            "Dominująca grupa łamie prawa innych grup, prowadząc do ich wykluczenia. Ideologia grupy dominującej pomaga w utrzymaniu przywilejów lub pełni władzy, a że jest oparta na istniejących uprzedzeniach, stereotypach i lękach, to zdobywa masowe poparcie.",
            "Jak należy przeciwdziałać dyskryminacji? <br> Podstawową kwestią jest przyznanie równych praw wszystkim grupom społecznym bez względu na rasę, religię, narodowość oraz inne przesłanki oraz przestrzeganie równości w praktyce.",
        ],
        footer: "Czy kiedykolwiek byłeś/aś dyskryminowany/a? Jak się wtedy czułeś/aś? Czy kiedykolwiek zdarzyło Ci się dyskryminować jakąś osobę lub grupę osób? Co wtedy czułeś/aś? Czy z tej sytuacji wyciągnąłeś/aś jakieś wnioski?",
    },
    {
        id: 4,
        img: "dehumanizacja",
        paragraphs: [
            "Jedna grupa traktuje drugą jak podludzi, porównując jej członków/inie do zwierząt, insektów czy chorób albo do maszyn i robotów. Nienawistna propaganda, przekazywana wszelkimi dostępnymi kanałami, oskarża grupę ofiar, której członkowie/inie stopniowo mogą być pozbawiani/ane własnej tożsamości, włącznie z używaniem w stosunku do nich numerów zamiast imion i nazwisk. Celem tych działań jest zminimalizowanie naturalnego oporu jednego człowieka przed krzywdzeniem czy zabiciem innego.",
            "Jakie są sposoby przeciwdziałania dehumanizacji? <br> Z perspektywy wewnętrznej konieczne jest bezwarunkowe przestrzeganie zakazu nienawistnej propagandy i działalności odpowiedzialnych za nią podmiotów, a co za tym idzie i bezzwłoczne karanie sprawców przestępstw z nienawiści i innych okrucieństw.",
            "Natomiast z perspektywy międzynarodowej ważny jest przekaz potępiający użycie mowy nienawiści przez lokalnych i międzynarodowych liderów/ki, włącznie z nałożeniem ograniczeń wobec liderów/ek nawołujących do ludobójstwa, w postaci zakazu podróży zagranicznych i zamrożenia środków w międzynarodowych bankach oraz pociąganiem ich do odpowiedzialności karnej. W edukacji ważne są też działania rozbudzające empatię do ludzi spoza danego narodu. Gdy potrafimy współczuć obcym, wtedy trudniej nam ich dehumanizować.",
        ],
        footer: "Kto we współczesnej Polsce pada ofiarą procesu dehumanizacji? Czy znasz współczesne przykłady porównań grup osób do zwierząt czy oskarżanie ich o przenoszenie chorób?",
    },

    {
        id: 5,
        img: "organizacja",
        paragraphs: [
            "Ludobójstwo nie jest działaniem przypadkowym, lecz wcześniej zaplanowanym i zorganizowanym przez władzę – zwykle przez państwo, przy użyciu sił paramilitarnych bezpośrednio niezwiązanych z jej aparatem, by możliwe było zaprzeczenie udziału państwa w ich poczynaniach. Specjalne jednostki armii lub sił paramilitarnych przechodzą szkolenia i są uzbrajane, zaś tajna policja śledzi, aresztuje i torturuje ludzi podejrzanych o działania w opozycji.",
            "Jakie są sposoby przeciwdziałania organizacji ludobójstwa? <br> Jeśli jest taka możliwość w ramach danego państwa, to konieczna jest delegalizacja i faktyczne rozwiązanie organizacji paramilitarnych, a także pociąganie do odpowiedzialności przed sądami sprawców/czyń przykładów łamania praw człowieka. Natomiast społeczność międzynarodowa powinna sprawcom/czyniom naruszeń praw człowieka odmawiać wjazdu do innych krajów i zamrozić środki na kontach w międzynarodowych bankach. ONZ może uniemożliwić lub utrudnić zakup broni poprzez wprowadzenie zakazu handlu bronią dla rządu danego państwa (embargo).",
        ],
        footer: "Czy zauważasz takie procesy wokół siebie? Czy wiesz o działaniach militarnych lub paramilitarnych? W jakich kontekstach są one obecne? Komu przyniesie to korzyść i jakiego rodzaju? Jak Ty możesz się przeciwstawić systemowej niesprawiedliwości? <br> Co możesz zrobić on-line?",
    },
    {
        id: 6,
        img: "polaryzacja",
        paragraphs: [
            "Wykorzystując media, ekstremiści dzielą ludzi przy pomocy nienawistnej propagandy. W niektórych przypadkach prawo zabrania kontaktów pomiędzy grupami, np. małżeństw mieszanych. Terror jest kierowany w pierwszej kolejności w stosunku do osób o umiarkowanych poglądach z grup sprawców, by je zastraszyć i uciszyć, gdyż to właśnie one mają największe możliwości powstrzymania ludobójstwa. Grupa dominująca przyznaje sobie nieograniczoną władzę i kontrolę nad sytuacją wprowadzając stany wyjątkowe lub rządząc za pomocą dekretów, znosząc prawa i wolności obywatelskie, zaś grupa ofiar jest unieszkodliwiana, by nie mogła się bronić.",

            "Jakie są sposoby przeciwdziałania polaryzacji?  <br>Przede wszystkim wysiłki powinny się skoncentrować na ochronie grup ofiar, polegającej również na jej uzbrojeniu, jeśli jest to niezbędne do zapewnienie ich samoobrony. Ponadto  konieczna jest ochrona umiarkowanych liderów/ek i wspieranie grup działających na rzecz praw człowieka. Niezależnie od tego należy podjąć działania wobec (potencjalnych) sprawców poprzez przejęcie ich majątku i wprowadzenie zakazu wjazdu do innych krajów. Wspólnota międzynarodowa powinna rozważyć i/lub wprowadzić międzynarodowe sankcje w odpowiedzi na ewentualne zamachy stanu, a międzynarodowa opinia publiczna dopominać się o prawa grup opozycyjnych czy grup ofiar i protestować przeciwko ich rozbrojeniu w zdecydowany sposób.",
        ],
        footer: "W stosunku do jakich grup, w jakich mediach i za pomocą jakich przekazów dokonuje się polaryzacja? Czy znasz jakieś przykłady współczesne, z własnego państwa, miejscowości, bliższego otoczenia? Jak je odbierasz? Jak na nie reagujesz? <br> Jak reagujesz na nawoływanie do nienawiści i przemocy wobec grup osób? W jaki sposób możesz się przyczyniać do zmniejszania napięć i nieporozumień w swoim otoczeniu?",
    },
    {
        id: 7,
        img: "przygotowanie",
        paragraphs: [
            'Plany ludobójstwa są przygotowywane, często bez nazywania rzeczy po imieniu, by ukryć prawdziwe intencje (jest w nich mowa o "działaniach antyterrorystycznych", "ostatecznym rozwiązaniu danej kwestii", "zapewnianiu bezpieczeństwa rodakom" etc.). Tworzone są armie, kupowana jest broń, oddziały paramilitarne są szkolone. Społeczeństwo jest poddawane intensywnej indoktrynacji, by wzbudzić strach przed grupą ofiar, aż w końcu liderzy/ki twierdzą, że należy "ich zabić, zanim oni zabiją nas", nazywając ludobójstwo samoobroną. Jeśli trwa konflikt zbrojny, to ludobójstwo bywa kamuflowane jako działania przeciw partyzantce. Próby porozumienia, które mogą odebrać pełnię władzy grupie dominującej, mogą w praktyce sprowokować rozpoczęcie ludobójstwa.',
            "Jakie są sposoby przeciwdziałania przygotowaniom do ludobójstwa? <br> Ważne jest przekonanie,  że sprawcy nie są bezkarni i że nie unikną odpowiedzialności za swoje czyny, dlatego konieczne jest oskarżenie liderów/ek o nawoływanie do ludobójstwa i zmowę na rzecz jego realizacji. Aby zminimalizować ryzyko rozlewu krwi należy wprowadzić i konsekwentnie wdrażać w życie zakaz handlu bronią pod obserwacją międzynarodowych obserwatorów czy komisji sprawdzających.",
        ],
        footer: "Czy spotkałeś/aś osoby, które zaczęły się mocno radykalizować, dołączyły do zorganizowanych grup radykalnych, zmieniły drastycznie swój sposób zachowania, wyrażały swoje radykalne poglądy? <br> Czy zdarzyło Ci się nie zareagować, gdy ktoś potrzebował pomocy? Dlaczego? Czy jest coś, co ułatwiłoby Ci zareagowanie inaczej w tamtej sytuacji?",
    },
    {
        id: 8,
        img: "przesladowanie",
        paragraphs: [
            "Grupy ofiar są identyfikowane i zmuszane do noszenia symboli  ułatwiających identyfikację. Sporządza się listy śmierci. Ponadto grupy ofiar są odseparowane od reszty społeczeństwa: często są zmuszane do życia w gettach, deportowane do obozów koncentracyjnych lub zatrzymywane na ograniczonym terenie dotkniętym klęską głodu lub bez dostępu do wody. Ich własność jest skonfiskowana. Ofiary bywają także poddawane przymusowym sterylizacjom lub aborcjom, zaś dzieci są siłą odbierane rodzicom. Są one systematycznie pozbawiane wszelkich praw, poddawane torturom i deportacjom. Rozpoczynają się masowe mordy. Sprawcy uważnie śledzą, czy ich działania wywołują zdecydowane reakcje ze strony międzynarodowej opinii publicznej. Jeśli takiej reakcji nie ma, to sprawcy wiedzą, że mogą na oczach biernych świadków kontynuować swój plan.",

            "Jakie są sposoby przeciwdziałania prześladowaniom? <br> Ze strony społeczności międzynarodowej konieczna jest zdecydowana reakcja: masowa pomoc dla grupy ofiar w celu umożliwienia samoobrony oraz pomoc humanitarna ze strony ONZ lub innych organizacji, a także międzynarodowa interwencja zbrojna, aby zapobiec masowym mordom.",
        ],
        footer: "Jak byś się czuł/czuła, gdyby odebrano Ci podstawowe prawa? Czy współcześnie w Polsce są grupy osób, które są bezprawnie pozbawiane swoich praw?",
    },
    {
        id: 9,
        img: "eksterminacja",
        paragraphs: [
            "Brak reakcji na masowe mordy utwierdza sprawców w przekonaniu, że mają przyzwolenie na dokonanie ludobójstwa. Sprawcy unikają używania tego i podobnych pojęć, ponieważ nie uważają swoich ofiar za ludzi. Jeśli to państwo stoi za ludobójstwem, siły zbrojne współuczestniczą w zabijaniu milicją/policją. Czasem w odwecie za masowe zbrodnie pierwotna grupa ofiar dokonuje mordów na grupie sprawców i cykl się powtarza. Ludobójstwo pokazuje jak bardzo ofiary są zdehumanizowane: zwłoki bywają bezczeszczone, rozczłonkowane i nie są zwyczajowo chowane w grobach. Gwałty są używane jako narzędzie wojny, aby genetycznie zmienić i wytępić drugą grupę. Niszczenie dóbr kultury i dziedzictwa religijnego jest używane do wymazania istnienia danej grupy w historii.",

            "Jakie są sposoby przeciwdziałania eksterminacji? <br> Tylko szybka, skuteczna i efektywna interwencja zbrojna może powstrzymać ludobójstwo, a zgodnie z koncepcją międzynarodowej odpowiedzialności za ochronę, od 2005 r. społeczność międzynarodowa może i powinna reagować, broniąc życia ludności. Konieczne jest też tworzenie stref bezpieczeństwa lub korytarzy humanitarnych pod skuteczną ochroną sił międzynarodowych.",
        ],
        footer: "Jak myślisz, dlaczego doszło do kolejnych ludobójstw pomimo doświadczenia Holokaustu? ",
    },
    {
        id: 10,
        img: "negacja",
        paragraphs: [
            "Sprawcy ludobójstwa zacierają ślady poprzez niszczenie zwłok, ukrywanie dowodów i śladów zbrodni czy zastraszanie potencjalnych świadków. Zaprzeczają popełnienia jakichkolwiek przestępstw, często obwiniają ofiary za to, co się stało. Uniemożliwiają śledztwa i starają się pozostać przy władzy do momentu, kiedy siłą są zmuszeni do jej oddania lub ucieczki. Na wygnaniu pozostają bezkarni, jeśli nie zostaną pojmani i przekazani pod jurysdykcję właściwych sądów czy trybunałów.",

            "Jakie są sposoby przeciwdziałania negacji? <br>Kluczowe są działania na rzecz przywrócenia sprawiedliwości, czyli aresztowania i zebrania dowodów przeciwko sprawcom oraz oskarżenie ich i ukaranie przed trybunałami międzynarodowymi czy sądami krajowymi. Niezależnie od tego, ważne jest poszukiwanie mechanizmów na poziomie lokalnym, by przesłuchać i przedstawić dowody zbrodni również szeregowym sprawcom, aby dzięki temu możliwe były pojednanie, przeproszenie ofiar za wyrządzoną krzywdę oraz ewentualny zwrot majątku. Aby zapobiegać występowaniu ludobójstwa w przyszłości konieczna jest edukacja w szkołach i w mediach dotycząca ludobójstwa.",
        ],
        footer: "Czy w Twojej okolicy możesz odnaleźć ślady różnorodności (dotyczące np. mniejszości narodowych, etnicznych czy religijnych), o których się nie mówi, ich historia jest przemilczana lub nawet negowana? Dlaczego tak się dzieje?",
    },
    {
        id: 11,
        img: "cisza",
        paragraphs: [
            "Ofiary nie mają już prawa głosu, ślady zbrodni zostały zatarte, ci którzy uciekli stali się pozbawionymi środków do życia uchodźcami, czyli ludźmi starającymi się zadbać o swój podstawowy byt, a często nawet przeżycie. Kluczową rolę w formowaniu się okresu ciszy odgrywa syndrom winy ocalonego.  Dla początkowego okresu ciszy charakterystyczne są próby zmiany tożsamości lub wyparcia traumatycznych doświadczeń. Okres ciszy jest inicjowany poprzez kolejną fazę obojętności świata zewnętrznego względem zjawiska ludobójstwa. Dokonane ludobójstwo staje się stopniowo społecznym tabu i niejednokrotnie pamięć o nim zostaje wymazana z kart historii. Mechanizmy okresu ciszy i zapominania ludobójstwa przyczyniają się do pogłębiania się społecznej obojętności na kolejne, późniejsze fazy radykalizacji języka i ideologii państwa, mogące ponownie prowadzić do wejścia na ścieżkę błędnego koła postępujących po sobie etapów na drodze do kolejnego ludobójstwa.",

            "Jakie są sposoby przeciwdziałania wymazywania pamięci o ludobójstwie i ciszy wokół tego tematu? <br> Podstawową kwestią jest badanie zbrodni i zbieranie materiałów dowodowych, w tym zbieranie świadectw ocalałych oraz ściganie i przeprowadzanie postępowań sądowych na gruncie prawa międzynarodowego. Ponadto należy poszukiwać ocalałych i działać na rzecz łączenia rodzin oraz wypracowywać mechanizmy opieki ekonomicznej i psychologicznej nad ocalałymi. I wreszcie, niezwykle ważne jest też upamiętnienie ofiar zbrodni i wypracowanie lokalnego języka narracji.",
        ],
        footer: "Czy Twoim zdaniem upamiętnianie jest równoznaczne z pamiętaniem? W jaki sposób można zachowywać pamięć nie tylko stawiając pomniki?",
    },
];
</script>

<style>
/* .carousel__slide {
    flex-shrink: 1;
} */

.carousel__icon {
    width: 60px;
    height: 60px;
}
.carousel__next {
    right: 40px;
    top: 20px;
    background-color: black;
    z-index: 30;
}
.carousel__prev {
    left: 40px;
    top: 20px;
    background-color: black;
    z-index: 30;
}

.carousel__prev--in-active,
.carousel__next--in-active {
    display: none;
}
</style>
