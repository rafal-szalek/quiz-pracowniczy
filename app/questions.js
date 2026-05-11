export const MAX_POINTS = 5;

export const GROUPS = {
  A: "A",
  B: "B",
  C: "C",
  D: "D",
};

export const GROUP_DESCRIPTIONS = {
  A: "Masz naturalną energię do przejmowania inicjatywy i nadawania kierunku.",
  B: "Twoją mocą jest uważność, analiza i wyczuwanie nastroju zespołu.",
  C: "Świetnie wzmacniasz innych, pomagasz dowozić tematy i budujesz stabilność.",
  D: "Jesteś elastyczny i dostosowujesz się do zmieniających się warunków.",
};

export const QUESTIONS = [
  {
    id: 1,
    text: "Jakim typem pracownika jesteś?",
    answers: [
      { id: "q1a1", label: "Lubię przejmować inicjatywę", group: "A" },
      {
        id: "q1a2",
        label: "Najpierw słucham, potem działam",
        group: "B",
      },
      { id: "q1a3", label: "Wspieram decyzje zespołu", group: "C" },
    ],
  },
  {
    id: 2,
    text: "Co robisz, gdy pojawia się problem?",
    answers: [
      { id: "q2a1", label: "Szybko proponuję plan działania", group: "A" },
      { id: "q2a2", label: "Zbieram opinie i fakty", group: "B" },
      {
        id: "q2a3",
        label: "Pomagam wdrożyć wybrane rozwiązanie",
        group: "C",
      },
    ],
  },
  {
    id: 3,
    text: "Jak działasz w zespole?",
    answers: [
      {
        id: "q3a1",
        label: "Biorę odpowiedzialność za kierunek",
        group: "A",
      },
      {
        id: "q3a2",
        label: "Dbam, żeby każdy został wysłuchany",
        group: "B",
      },
      {
        id: "q3a3",
        label: "Dopasowuję się i pomagam innym",
        group: "C",
      },
    ],
  },
  {
    id: 4,
    text: "Jak działasz w zespole?",
    answers: [
      {
        id: "q4a1",
        label: "Biorę odpowiedzialność za kierunek",
        group: "A",
      },
      {
        id: "q4a2",
        label: "Dbam, żeby każdy został wysłuchany",
        group: "B",
      },
      {
        id: "q4a3",
        label: "Dopasowuję się i pomagam innym",
        group: "D",
      },
    ],
  },
];
