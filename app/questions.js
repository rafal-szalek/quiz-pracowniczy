export const MAX_POINTS = 5;

export const GROUPS = {
  leader: "Lider",
  listener: "Słuchacz",
  supporter: "Przytakiwacz",
  nonLeader: "Brak podejścia liderskiego",
};

export const GROUP_DESCRIPTIONS = {
  leader:
    "Masz naturalną energię do przejmowania inicjatywy i nadawania kierunku.",
  listener: "Twoją mocą jest uważność, analiza i wyczuwanie nastroju zespołu.",
  supporter:
    "Świetnie wzmacniasz innych, pomagasz dowozić tematy i budujesz stabilność.",
};

export const QUESTIONS = [
  {
    id: 1,
    text: "Jakim typem pracownika jesteś?",
    answers: [
      { id: "q1a1", label: "Lubię przejmować inicjatywę", group: "leader" },
      {
        id: "q1a2",
        label: "Najpierw słucham, potem działam",
        group: "listener",
      },
      { id: "q1a3", label: "Wspieram decyzje zespołu", group: "supporter" },
    ],
  },
  {
    id: 2,
    text: "Co robisz, gdy pojawia się problem?",
    answers: [
      { id: "q2a1", label: "Szybko proponuję plan działania", group: "leader" },
      { id: "q2a2", label: "Zbieram opinie i fakty", group: "listener" },
      {
        id: "q2a3",
        label: "Pomagam wdrożyć wybrane rozwiązanie",
        group: "supporter",
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
        group: "leader",
      },
      {
        id: "q3a2",
        label: "Dbam, żeby każdy został wysłuchany",
        group: "listener",
      },
      {
        id: "q3a3",
        label: "Dopasowuję się i pomagam innym",
        group: "supporter",
      },
    ],
  },
];
