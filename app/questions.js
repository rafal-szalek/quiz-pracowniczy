export const MAX_POINTS = 5;

export const GROUPS = {
  A: "A",
  B: "B",
  C: "C",
  D: "D",
};

export const GROUP_DESCRIPTIONS = {
  A: "Potrzeba osiągania celów jest ważna sama w sobie, ale wpływa również na morale zespołu oraz na to, w jakim stopniu jego członkowie odczuwają satysfakcję i dumę z wykonanej pracy.",
  B: "Silny duch zespołowy opiera się na autentycznym poczuciu wspólnoty i dumy z działania. Taki zespół działa skuteczniej, osiąga lepsze wyniki i wzajemnie wspiera swoich członków.",
  C: "Każda osoba w zespole potrzebuje rozwoju oraz zaspokojenia różnych potrzeb motywacyjnych. Obejmuje to zarówno potrzebę osiągania sukcesów i doskonalenia swoich umiejętności, jak i potrzebę kontaktów społecznych oraz poczucia zaangażowania w funkcjonowanie praktyki.",
  D: "",
};

export const QUESTIONS = [
  {
    id: 1,
    text: "Czy podczas rozmowy z przełożonym na temat swoich celów i zadań:",
    answers: [
      {
        id: "q1a1",
        label:
          "Bierzesz pod uwagę statystyczną ocenę wyników z poprzedniego okresu",
        group: "A",
      },
      {
        id: "q1a2",
        label:
          "Bierzesz pod uwagę zdolność swojego zespołu do realizacji powierzonych mu zadań",
        group: "B",
      },
      {
        id: "q1a3",
        label:
          "Bierzesz pod uwagę różne możliwości swojego zespołu w zakresie przyczyniania się do realizacji ogólnych celów",
        group: "C",
      },
    ],
  },
  {
    id: 2,
    text: "Czy analizując swoją pracę, która nie przyniosła oczekiwanych rezultatów:",
    answers: [
      {
        id: "q2a1",
        label:
          "Dokładnie porównujesz wyniki z pierwotnie uzgodnionymi celami i ograniczeniami",
        group: "A",
      },
      {
        id: "q2a2",
        label: "Odrzucasz wyniki i skupiasz się na kolejnym priorytecie",
        group: "D",
      },
      {
        id: "q2a3",
        label: "Analizujesz wkład każdego członka zespołu",
        group: "C",
      },
    ],
  },
  {
    id: 3,
    text: "Analizując potrzeby szkoleniowe swojego zespołu, czy:",
    answers: [
      {
        id: "q3a1",
        label:
          "Zorganizowałbyś spotkanie zespołu, podczas którego wszyscy mogliby omówić swoje mocne i słabe strony",
        group: "B",
      },
      {
        id: "q3a2",
        label:
          "Dałbyś pierwszeństwo ocenie wiedzy i umiejętności poszczególnych osób",
        group: "C",
      },
      {
        id: "q3a3",
        label: "Oceniłbyś wyniki wyłącznie pod kątem osiągniętych rezultatów",
        group: "A",
      },
    ],
  },
  {
    id: 4,
    text: "Rozmawiając z pracownikiem o słabych wynikach, czy:",
    answers: [
      {
        id: "q4a1",
        label: "Skupiasz się na jakości/ilości oczekiwanych standardów",
        group: "A",
      },
      {
        id: "q4a2",
        label:
          "Uważasz, że codzienne wzloty i upadki są nieistotne w porównaniu z ukończoną pracą",
        group: "D",
      },
      {
        id: "q4a3",
        label:
          "Stawiasz na indywidualną rozmowę, aby podnieść standardy wydajności",
        group: "C",
      },
    ],
  },
  {
    id: 5,
    text: "Czy przekazując decyzje zespołowi:",
    answers: [
      {
        id: "q5a1",
        label:
          "Zwołujesz spotkanie całego zespołu, aby upewnić się, że wszyscy rozumieją, czego się od nich oczekuje",
        group: "B",
      },
      {
        id: "q5a2",
        label:
          "Dbasz o maksymalną dokładność, wydając pisemne instrukcje, w których dokładnie opisujesz, czego oczekujesz",
        group: "A",
      },
      {
        id: "q5a3",
        label:
          "Przekazujesz wszystkie informacje innej osobie i prosisz ją o przekazanie ich dalej",
        group: "D",
      },
    ],
  },
  {
    id: 6,
    text: "Czy podczas rozmowy z przełożonym na temat wyników pracy:",
    answers: [
      {
        id: "q6a1",
        label:
          "Bierzesz pod uwagę zdolność swojego zespołu do współpracy w celu realizacji powierzonych mu zadań",
        group: "B",
      },
      {
        id: "q6a2",
        label:
          " Starasz się wynegocjować konkretną poprawę wyników w stosunku do celu",
        group: "A",
      },
      {
        id: "q6a3",
        label:
          "Starasz się wynegocjować minimalne cele, aby zapewnić sukces zespołu",
        group: "C",
      },
    ],
  },
  {
    id: 7,
    text: "Analizując udane zadania, czy:",
    answers: [
      {
        id: "q7a1",
        label:
          "Zorganizowałbyś spotkanie zespołu, podczas którego wszyscy mogliby omówić przyczyny sukcesu",
        group: "B",
      },
      {
        id: "q7a2",
        label: "Porównałbyś wyniki z pierwotnymi oczekiwaniami",
        group: "A",
      },
      {
        id: "q7a3",
        label:
          " Potraktuj wyniki jako „przeszłość” i skup się na kolejnych zadaniach",
        group: "D",
      },
    ],
  },
  {
    id: 8,
    text: "Czy przekazując zespołowi cele dotyczące jakości:",
    answers: [
      {
        id: "q8a1",
        label: "Rozmawiasz z każdą osobą, aby dobrze znała swoją rolę",
        group: "C",
      },
      {
        id: "q8a2",
        label:
          "Zapewniasz maksymalną dokładność poprzez pisemne instrukcje, w których dokładnie opisujesz, czego oczekujesz",
        group: "A",
      },
      {
        id: "q8a3",
        label:
          "Zwołujesz spotkanie, aby zapewnić wszystkim szerokie zrozumienie",
        group: "B",
      },
    ],
  },
  {
    id: 9,
    text: "Czy przekazując zadania członkowi swojego zespołu:",
    answers: [
      {
        id: "q9a1",
        label:
          "Zachęcasz grupę do dyskusji na temat najlepszego sposobu rozwiązania tej kwestii",
        group: "B",
      },
      {
        id: "q9a2",
        label: "Bierzesz pod uwagę indywidualny rozwój każdej osoby",
        group: "C",
      },
      {
        id: "q9a3",
        label:
          "Koncentrujesz się na konieczności wykonania zadania na najwyższym możliwym poziomie",
        group: "A",
      },
    ],
  },
  {
    id: 10,
    text: "Czy podczas rozmowy z zespołem na temat obciążenia pracą:",
    answers: [
      {
        id: "q10a1",
        label:
          "Bierzesz pod uwagę, że wzloty i upadki są nieuniknione i nieistotne w porównaniu z ukończoną pracą",
        group: "D",
      },
      {
        id: "q10a2",
        label:
          "Polegasz na rozmowach indywidualnych, aby osiągnąć jak najlepsze wyniki",
        group: "C",
      },
      {
        id: "q10a3",
        label:
          "Zwołujesz spotkanie, aby upewnić się, że wszyscy są świadomi całej sytuacji",
        group: "B",
      },
    ],
  },
  {
    id: 11,
    text: "Czy przy ustalaniu standardów i ograniczeń, w ramach których musi działać Twój zespół:",
    answers: [
      {
        id: "q11a1",
        label:
          "Bierzesz pod uwagę zdolność swojego zespołu do osiągnięcia tego, o co się go prosi",
        group: "B",
      },
      {
        id: "q11a2",
        label:
          "Bierzesz pod uwagę zróżnicowane umiejętności członków zespołu i to, w jaki sposób przyczynią się one do osiągnięcia ogólnych celów",
        group: "C",
      },
      {
        id: "q11a3",
        label:
          "Rozważasz wynegocjowanie konkretnych poziomów w oparciu o procentową poprawę wstosunku do poprzedniego okresu",
        group: "A",
      },
    ],
  },
  {
    id: 12,
    text: "Czy podczas analizowania pracy, która nie osiągnęła wyznaczonych celów:",
    answers: [
      {
        id: "q12a1",
        label:
          "Poświęcasz czas na ocenę wkładu poszczególnych osób w niepowodzenie",
        group: "C",
      },
      {
        id: "q12a2",
        label: "Dokładnie porównujesz wyniki z założeniami i ograniczeniami",
        group: "A",
      },
      {
        id: "q12a3",
        label:
          "Organizujesz spotkanie, podczas którego cały zespół będzie mógł omówić niepowodzenie",
        group: "B",
      },
    ],
  },
  {
    id: 13,
    text: "Gdy przed rozpoczęciem nowego procesu masz bardzo mało czasu, czy jesteś bardziej skłonny do:",
    answers: [
      {
        id: "q13a1",
        label: "Rozważenia zaangażowania każdego członka swojego zespołu",
        group: "C",
      },
      {
        id: "q13a2",
        label:
          "Skoncentrowania się na konieczności wykonania zadania zgodnie z normami i w ramach ustalonych ograniczeń",
        group: "A",
      },
      {
        id: "q13a3",
        label:
          "Zaangażowania zespółu w dyskusję na temat najlepszego sposobu rozwiązania problemu",
        group: "B",
      },
    ],
  },
  {
    id: 14,
    text: "Zanim zaakceptujesz budżety proponowane dla Twojego obszaru / zespołu, czy:",
    answers: [
      {
        id: "q14a1",
        label:
          "Bierzesz pod uwagę reakcję swojego zespołu na proponowane ograniczenia",
        group: "C",
      },
      {
        id: "q14a2",
        label:
          "Rozważasz wynegocjowanie logicznej poprawy wyników w stosunku do poprzedniego okresu",
        group: "A",
      },
      {
        id: "q14a3",
        label:
          "Rozważasz zróżnicowane możliwości swojego zespołu w zakresie przyczynienia się do osiągnięcia celu",
        group: "B",
      },
    ],
  },
  {
    id: 15,
    text: "Kiedy przekazujesz decyzje swojemu zespołowi, czy jesteś bardziej skłonny do:",
    answers: [
      {
        id: "q15a1",
        label:
          "Zadbania o to, by poświęcić zespołowi wystarczająco dużo czasu, aby móc odpowiedzieć na wszystkie poruszone kwestie",
        group: "A",
      },
      {
        id: "q15a2",
        label:
          "Rozmawiania z każdym z osobna, aby wszyscy byli świadomi swojej roli",
        group: "C",
      },
      {
        id: "q15a3",
        label:
          "Zwołania spotkania i powiedzenia im, czego się od nich oczekuje",
        group: "D",
      },
    ],
  },
  {
    id: 16,
    text: "Gdy praca została wykonana ponad standardowy poziom, czy:",
    answers: [
      {
        id: "q16a1",
        label:
          "Traktujesz wyniki jako „to, czego się oczekuje” i skupiasz się na kolejnym zadaniu do wykonania",
        group: "D",
      },
      {
        id: "q16a2",
        label:
          "Koncentrujesz się na ocenie wkładu każdej osoby w osiągnięte wyniki",
        group: "C",
      },
      {
        id: "q16a3",
        label:
          "Zorganizujesz spotkanie, podczas którego cały zespół będzie mógł wspólnie omówić sukces",
        group: "B",
      },
    ],
  },
  {
    id: 17,
    text: "Czy podczas realizacji zadań w swojej praktyce częściej:",
    answers: [
      {
        id: "q17a1",
        label: "Skupiasz się na ocenie jakości wykonywanej pracy",
        group: "A",
      },
      {
        id: "q17a2",
        label:
          "Organizujesz spotkanie zespołu, aby upewnić się, że wszyscy znają priorytety",
        group: "B",
      },
      {
        id: "q17a3",
        label:
          "Polegasz na rozmowach indywidualnych, aby osiągnąć najlepsze ogólne wyniki",
        group: "C",
      },
    ],
  },
  {
    id: 18,
    text: "Czy przekazując informacje od kierownictwa wyższego szczebla swojemu zespołowi:",
    answers: [
      {
        id: "q18a1",
        label: "Zapewniasz maksymalną dokładność, wydając pisemne instrukcje",
        group: "A",
      },
      {
        id: "q18a2",
        label:
          "Dbasz o to, by spędzić wystarczająco dużo czasu z przedstawicielami zespołu, aby móc odpowiedzieć na wszystkie poruszone kwestie",
        group: "B",
      },
      {
        id: "q18a3",
        label:
          "Rozmawiasz z każdym indywidualnie, aby każdy wiedział, w jaki sposób ta wiadomość go dotyczy",
        group: "C",
      },
    ],
  },
  {
    id: 19,
    text: "W obliczu poważnego niedoboru „materiałów” czy jesteś bardziej skłonny do:",
    answers: [
      {
        id: "q19a1",
        label:
          "Skupienia się na konieczności wykonania zadania zgodnie z normami i w ramach określonych ograniczeń",
        group: "A",
      },
      {
        id: "q19a2",
        label:
          "Skorzystania ze swoich dotychczasowych doświadczeniach, aby zminimalizować ryzyko błędu w stosowanej metodzie",
        group: "D",
      },
      {
        id: "q19a3",
        label:
          "Wzięcia pod uwagę zaangażowania każdego członka zespołu oraz jego doświadczenie lub brak doświadczenia",
        group: "C",
      },
    ],
  },
  {
    id: 20,
    text: "Podejmując działania dyscyplinarne wobec członka zespołu, czy częściej:",
    answers: [
      {
        id: "q20a1",
        label:
          "Polegasz na rozmowie w cztery oczy, aby osiągnąć najlepszy ogólny wynik",
        group: "C",
      },
      {
        id: "q20a2",
        label: "Skupiasz się na ocenie jakości i ilości wykonanej pracy",
        group: "A",
      },
      {
        id: "q20a3",
        label:
          "Zorganizujesz spotkanie zespołu, aby upewnić się, że wszyscy znają całą sytuację",
        group: "B",
      },
    ],
  },
  {
    id: 21,
    text: "Informując zespół o standardach, do których należy dążyć, czy:",
    answers: [
      {
        id: "q21a1",
        label:
          "Koncentrujesz się na konieczności wykonania zadania zgodnie ze standardami i w ramach ustalonych ograniczeń",
        group: "A",
      },
      {
        id: "q21a2",
        label:
          "Angażujesz grupę w dyskusję na temat wspólnych sukcesów i porażek",
        group: "B",
      },
      {
        id: "q21a3",
        label:
          "Bierzesz pod uwagę zaangażowanie i rozwój każdego członka zespołu",
        group: "C",
      },
    ],
  },
  {
    id: 22,
    text: "Oceniając swój zespół pod kątem potrzeb szkoleniowych, czy raczej:",
    answers: [
      {
        id: "q22a1",
        label:
          "Dokładnie porównujesz wyniki z pierwotnie uzgodnionymi celami praktyki",
        group: "A",
      },
      {
        id: "q22a2",
        label:
          "Zorganizujesz spotkanie, podczas którego wszyscy będą mogli wspólnie omówić swoje sukcesy i porażki",
        group: "B",
      },
      {
        id: "q22a3",
        label:
          "Skoncentrujesz się na ocenie wkładu każdej osoby w wykonaną pracę",
        group: "C",
      },
    ],
  },
  {
    id: 23,
    text: "Zanim podejmiesz decyzję o dalszym postępowaniu, w jakim stopniu:",
    answers: [
      {
        id: "q23a1",
        label:
          "Opierasz się na tym, co robiłeś w przeszłości, aby zminimalizować ryzyko popełnienia błędu",
        group: "D",
      },
      {
        id: "q23a2",
        label:
          "Bierzesz pod uwagę mocne i słabe strony każdego członka swojego zespołu",
        group: "C",
      },
      {
        id: "q23a3",
        label:
          "Zaangażuj wszystkich w dyskusję na temat najlepszego sposobu rozwiązania tej kwestii",
        group: "B",
      },
    ],
  },
  {
    id: 24,
    text: "Aby upewnić się, że praca jest wykonywana w sposób zadowalający, częściej:",
    answers: [
      {
        id: "q24a1",
        label: "Zbierasz swój zespół i prosisz o raporty z postępów",
        group: "B",
      },
      {
        id: "q24a2",
        label:
          "Rozmawiasz indywidualnie z członkami zespołu i prosisz o raporty z postępów",
        group: "C",
      },
      {
        id: "q24a3",
        label: "Skupiasz się na jakości i ilości wyników pracy w praktyce",
        group: "A",
      },
    ],
  },
  {
    id: 25,
    text: "Przekazując informacje dotyczące zasad i procedur, czy wolisz:",
    answers: [
      {
        id: "q25a1",
        label:
          "Zwołać spotkanie, aby upewnić się, że wszyscy dobrze rozumieją, czego się od nich oczekuje",
        group: "B",
      },
      {
        id: "q25a2",
        label: "Wyjaśnić poszczególnym osobom, jak to wpływa na ich sytuację",
        group: "C",
      },
      {
        id: "q25a3",
        label:
          "Zapewnić maksymalną dokładność, wydając pisemne instrukcje szczegółowo opisujące wymagania",
        group: "A",
      },
    ],
  },
  {
    id: 26,
    text: "Przed podjęciem decyzji o dalszym postępowaniu, w jakim stopniu:",
    answers: [
      {
        id: "q26a1",
        label:
          "Zasięgasz opinii zespołu na temat najlepszego sposobu rozwiązania problemu",
        group: "B",
      },
      {
        id: "q26a2",
        label:
          "Skupiasz się na konieczności terminowego wykonania zadań zgodnie z oczekiwanymi standardami",
        group: "A",
      },
      {
        id: "q26a3",
        label:
          "Opierasz się na tym, co robiłeś w przeszłości, aby zminimalizować ryzyko błędu w przyjętej metodzie",
        group: "D",
      },
    ],
  },
  {
    id: 27,
    text: "Czy podczas rozmowy z przełożonym na temat postępów w pracy:",
    answers: [
      {
        id: "q27a1",
        label:
          "Rozważasz wynegocjowanie poprawy wyników liczbowych w stosunku do osiągnięć z poprzedniego okresu",
        group: "A",
      },
      {
        id: "q27a2",
        label:
          "Próbujesz wynegocjować minimalne możliwe cele, aby zapewnić jak najwyższy poziom osiągnięć",
        group: "D",
      },
      {
        id: "q27a3",
        label:
          "Bierzesz pod uwagę zróżnicowane możliwości członków swojego zespołu w zakresie realizacji tych celów",
        group: "C",
      },
    ],
  },
  {
    id: 28,
    text: "Czy podczas zajmowania się codziennymi rutynowymi sprawami:",
    answers: [
      {
        id: "q28a1",
        label:
          "Organizujesz nieformalne spotkania, aby upewnić się, że wszyscy są na bieżąco z ogólną sytuacją",
        group: "B",
      },
      {
        id: "q28a2",
        label:
          "Koncentrujesz się na omawianiu jakości i ilości wykonywanej pracy",
        group: "A",
      },
      {
        id: "q28a3",
        label:
          "Uważasz, że rutynowa praca jest nieistotna w porównaniu z zadaniami priorytetowymi",
        group: "D",
      },
    ],
  },
  {
    id: 29,
    text: "Zanim zgodzisz się na proponowane budżety, czy:",
    answers: [
      {
        id: "q29a1",
        label:
          "Postarasz się wynegocjować jak najwięcej, aby zapewnić uzyskanie jak najwyższej kwoty",
        group: "D",
      },
      {
        id: "q29a2",
        label:
          "Bierzesz pod uwagę zróżnicowane możliwości swojego zespołu w zakresie przyczyniania się do realizacji ogólnych celów praktyki i negocjuj w ich imieniu",
        group: "C",
      },
      {
        id: "q29a3",
        label:
          "Omówiasz z zespołem wymagania budżetowe, aby zwiększyć zarówno Twoje, jak i ich zrozumienie potrzeb działu",
        group: "B",
      },
    ],
  },
  {
    id: 30,
    text: "Kiedy delegujesz zadanie członkowi swojego zespołu, w jakim stopniu:",
    answers: [
      {
        id: "q30a1",
        label:
          "Koncentrujesz się na konieczności wykonania zadania zgodnie ze standardami i w wyznaczonym terminie",
        group: "A",
      },
      {
        id: "q30a2",
        label:
          "Angażujesz grupę w dyskusje na temat najlepszego sposobu wykonania zadania",
        group: "B",
      },
      {
        id: "q30a3",
        label: "Bierzesz pod uwagę indywidualny wkład każdej osoby",
        group: "C",
      },
    ],
  },
];
