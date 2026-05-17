"use client";
import { useEffect, useMemo, useState } from "react";
import { GROUPS, GROUP_DESCRIPTIONS, MAX_POINTS, QUESTIONS } from "./questions";
const STORAGE_KEY = "leadership-quiz-progress";
function getInitialAnswers() {
  return QUESTIONS.reduce((acc, question) => {
    acc[question.id] = question.answers.reduce((answerAcc, answer) => {
      answerAcc[answer.id] = 0;
      return answerAcc;
    }, {});
    return acc;
  }, {});
}
const APP_DISABLED = true; // Set to true to disable the form
function calculateResults(userAnswers) {
  const scores = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
  };

  QUESTIONS.forEach((question) => {
    const questionAnswers = userAnswers[question.id] || {};

    question.answers.forEach((answer) => {
      const points = questionAnswers[answer.id] || 0;
      scores[answer.group] += points;
    });
  });

  const leadershipScores = {
    A: scores.A,
    B: scores.B,
    C: scores.C,
  };

  const winnerKey = Object.entries(leadershipScores).sort(
    (a, b) => b[1] - a[1],
  )[0][0];

  return {
    scores,
    leadershipScores,
    winnerKey,
    winnerLabel: winnerKey,
  };
}

function getDiagramSvg(result) {
  const scores = result.leadershipScores || result.scores;

  const maxScore = Math.max(
    scores.A || 0,
    scores.B || 0,
    scores.C || 0,
    scores.D || 0,
    1,
  );

  const maxRadius = 90;
  const scale = maxRadius / maxScore;

  const leaderRadius = Math.max((scores.A || 0) * scale, 18);
  const listenerRadius = Math.max((scores.B || 0) * scale, 18);
  const supporterRadius = Math.max((scores.C || 0) * scale, 18);

  return `
    <svg width="500" height="420" viewBox="0 0 500 420" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="420" fill="white"/>

      <circle cx="250" cy="135" r="${leaderRadius}" fill="none" stroke="#e11d48" stroke-width="4"/>
      <circle cx="170" cy="255" r="${listenerRadius}" fill="none" stroke="#2563eb" stroke-width="4"/>
      <circle cx="330" cy="255" r="${supporterRadius}" fill="none" stroke="#16a34a" stroke-width="4"/>

      <circle cx="250" cy="135" r="22" fill="#e11d48"/>
      <text x="250" y="142" text-anchor="middle" fill="white" font-size="18" font-weight="900">A</text>

      <circle cx="170" cy="255" r="22" fill="#2563eb"/>
      <text x="170" y="262" text-anchor="middle" fill="white" font-size="18" font-weight="900">B</text>

      <circle cx="330" cy="255" r="22" fill="#16a34a"/>
      <text x="330" y="262" text-anchor="middle" fill="white" font-size="18" font-weight="900">C</text>
    </svg>
  `;
}

function LeadershipVennDiagram({ scores }) {
  const maxScore = Math.max(scores.A || 0, scores.B || 0, scores.C || 0, 1);

  const maxRadius = 90;
  const scale = maxRadius / maxScore;

  const leaderRadius = Math.max((scores.A || 0) * scale, 18);
  const listenerRadius = Math.max((scores.B || 0) * scale, 18);
  const supporterRadius = Math.max((scores.C || 0) * scale, 18);

  return (
    <div className="mt-8 rounded-[2rem] bg-white p-6 text-slate-950 shadow-xl ring-1 ring-slate-100">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-pink-500">
        Twój profil lidera
      </p>

      <div className="mt-5 flex justify-center">
        <svg viewBox="0 0 500 420" className="w-full max-w-[420px]">
          <circle
            cx="250"
            cy="135"
            r={leaderRadius}
            fill="none"
            stroke="#e11d48"
            strokeWidth="4"
          />

          <circle
            cx="170"
            cy="255"
            r={listenerRadius}
            fill="none"
            stroke="#2563eb"
            strokeWidth="4"
          />

          <circle
            cx="330"
            cy="255"
            r={supporterRadius}
            fill="none"
            stroke="#16a34a"
            strokeWidth="4"
          />

          <circle cx="250" cy="135" r="22" fill="#e11d48" />
          <text
            x="250"
            y="142"
            textAnchor="middle"
            fill="white"
            fontSize="18"
            fontWeight="900"
          >
            A
          </text>

          <circle cx="170" cy="255" r="22" fill="#2563eb" />
          <text
            x="170"
            y="262"
            textAnchor="middle"
            fill="white"
            fontSize="18"
            fontWeight="900"
          >
            B
          </text>

          <circle cx="330" cy="255" r="22" fill="#16a34a" />
          <text
            x="330"
            y="262"
            textAnchor="middle"
            fill="white"
            fontSize="18"
            fontWeight="900"
          >
            C
          </text>
        </svg>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-2xl bg-rose-50 p-4 text-center ring-1 ring-rose-100">
          <p className="text-xs font-black uppercase tracking-wide text-rose-500">
            A
          </p>
          <p className="mt-2 text-3xl font-black text-slate-950">
            {scores.A || 0}
          </p>
        </div>

        <div className="rounded-2xl bg-blue-50 p-4 text-center ring-1 ring-blue-100">
          <p className="text-xs font-black uppercase tracking-wide text-blue-500">
            B
          </p>
          <p className="mt-2 text-3xl font-black text-slate-950">
            {scores.B || 0}
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-50 p-4 text-center ring-1 ring-emerald-100">
          <p className="text-xs font-black uppercase tracking-wide text-emerald-500">
            C
          </p>
          <p className="mt-2 text-3xl font-black text-slate-950">
            {scores.C || 0}
          </p>
        </div>
        <div className="rounded-2xl bg-slate-100 p-4 text-center ring-1 ring-slate-200">
          <p className="text-xs font-black uppercase tracking-wide text-slate-500">
            D
          </p>

          <p className="mt-2 text-3xl font-black text-slate-950">
            {scores.D || 0}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [name, setName] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState(getInitialAnswers());
  const [isLoaded, setIsLoaded] = useState(false);
  const [status, setStatus] = useState("editing");
  const [error, setError] = useState("");
  if (APP_DISABLED) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-white">
        <div className="max-w-xl rounded-[2rem] bg-white/10 p-10 text-center backdrop-blur">
          <h1 className="text-4xl font-black">Ankieta chwilowo niedostępna</h1>

          <p className="mt-4 text-white/70">
            Formularz został tymczasowo wyłączony.
          </p>
        </div>
      </main>
    );
  }

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        const parsed = JSON.parse(saved);

        if (parsed.name) setName(parsed.name);

        if (typeof parsed.currentQuestionIndex === "number") {
          setCurrentQuestionIndex(parsed.currentQuestionIndex);
        }

        if (parsed.responses) setResponses(parsed.responses);
      } catch (error) {
        console.error("Nie udało się odczytać postępu ankiety:", error);
      }
    }

    setIsLoaded(true);
  }, []);
  useEffect(() => {
    scrollToTop();
  }, [currentQuestionIndex, status]);

  useEffect(() => {
    if (!isLoaded || status === "done") return;

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        name,
        currentQuestionIndex,
        responses,
      }),
    );
  }, [name, currentQuestionIndex, responses, status, isLoaded]);

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const currentResponses =
    responses[currentQuestion.id] || getInitialAnswers()[currentQuestion.id];

  const totalUsed = Object.values(currentResponses).reduce(
    (sum, value) => sum + value,
    0,
  );

  const remaining = MAX_POINTS - totalUsed;

  const progress = Math.round(
    ((currentQuestionIndex + 1) / QUESTIONS.length) * 100,
  );

  const result = useMemo(() => calculateResults(responses), [responses]);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function updatePoints(answerId, direction) {
    const currentValue = currentResponses[answerId];
    const nextValue = currentValue + direction;
    const pointsWithoutCurrent = totalUsed - currentValue;
    const maxAllowed = MAX_POINTS - pointsWithoutCurrent;

    if (nextValue < 0 || nextValue > maxAllowed) return;

    setResponses((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        ...prev[currentQuestion.id],
        [answerId]: nextValue,
      },
    }));
  }

  function goNext() {
    if (remaining !== 0) return;

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);

      return;
    }

    submitSurvey();
  }

  function goBack() {
    setCurrentQuestionIndex((prev) => Math.max(0, prev - 1));
  }

  async function submitSurvey() {
    setError("");

    if (!name.trim()) {
      setError("Podaj imię i nazwisko przed wysłaniem ankiety.");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/send-result", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          responses,
          result,
          diagramSvg: getDiagramSvg(result),
        }),
      });

      if (!response.ok) {
        throw new Error("Nie udało się wysłać wyniku.");
      }

      localStorage.removeItem(STORAGE_KEY);
      setStatus("done");
    } catch (err) {
      console.error("BŁĄD WYSYŁKI FRONTEND:", err);
      setError("Nie udało się wysłać wyniku. Spróbuj ponownie.");
      setStatus("editing");
    }
  }

  if (status === "done") {
    return (
      <main className="flex min-h-screen w-full justify-center px-5 py-8 sm:px-6 md:px-8">
        <section className="w-full max-w-xl overflow-hidden rounded-[2rem] bg-white/85 p-7 text-center shadow-2xl ring-1 ring-white/70 backdrop-blur sm:p-10">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-pink-500 to-violet-500 text-4xl shadow-lg">
            ✨
          </div>

          <p className="text-sm font-black uppercase tracking-[0.3em] text-pink-500">
            Dziękujemy
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Ankieta została wysłana
          </h1>

          <p className="mt-4 text-slate-600">
            Twoje odpowiedzi zostały zapisane i przekazane administratorowi.
          </p>

          <div className="mt-8 rounded-[1.75rem] bg-gradient-to-br from-slate-950 to-green-950 p-6 text-white shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-pink-200">
              Twój dominujący typ
            </p>

            <p className="mt-3 text-5xl font-black">{result.winnerLabel}</p>

            <p className="mt-4 text-sm leading-6 text-white/75">
              {GROUP_DESCRIPTIONS[result.winnerKey]}
            </p>
          </div>

          <LeadershipVennDiagram scores={result.scores} />
        </section>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen w-full justify-center px-5 py-8 sm:px-6 md:px-8">
      <section className="mx-auto w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white/90 shadow-2xl ring-1 ring-white/80 backdrop-blur md:rounded-[2.5rem]">
        <div className="bg-gradient-to-r from-slate-950 via-violet-950 to-pink-700 p-7 text-white sm:p-9">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-pink-200">
                Kwestionariusz profilu przywództwa osobistego
              </p>

              <h1 className="mt-3 text-2xl font-black tracking-tight sm:text-4xl">
                Rozdaj 5 punktów
              </h1>
            </div>

            <div className="rounded-2xl bg-white/15 px-4 py-3 text-center backdrop-blur">
              <p className="text-xs text-white/70">Pytanie</p>

              <p className="text-2xl font-black">
                {currentQuestionIndex + 1}/{QUESTIONS.length}
              </p>
            </div>
          </div>

          <div className="mt-6 h-3 rounded-full bg-white/15">
            <div
              className="h-3 rounded-full bg-white transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="p-6 sm:p-9">
          <label className="block">
            <span className="text-sm font-black uppercase tracking-wide text-slate-500">
              Imię i nazwisko
            </span>

            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="np. Anna Kowalska"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-lg text-slate-950 shadow-sm outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
            />
          </label>

          <div className="mt-8 rounded-[1.75rem] bg-slate-50 p-5 ring-1 ring-slate-100 sm:p-6">
            <p className="text-sm font-black uppercase tracking-wide text-pink-500">
              Pytanie {currentQuestionIndex + 1}
            </p>

            <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
              {currentQuestion.text}
            </h2>

            <p className="mt-3 text-slate-500">
              Przyznaj punkty odpowiedziom. Suma w tym pytaniu musi wynosić
              dokładnie 5.
            </p>
          </div>

          <div className="mt-6 space-y-5">
            {currentQuestion.answers.map((answer) => {
              const currentValue = currentResponses[answer.id];
              const canDecrease = currentValue > 0;
              const canIncrease = remaining > 0;

              return (
                <article
                  key={answer.id}
                  className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm ring-1 ring-slate-50 transition sm:p-6 md:hover:-translate-y-0.5 md:hover:shadow-md"
                >
                  <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
                    <h3 className="text-lg font-black leading-snug text-slate-950 sm:text-xl">
                      {answer.label}
                    </h3>

                    <div className="mx-auto flex items-center justify-center gap-4">
                      <button
                        type="button"
                        onClick={() => updatePoints(answer.id, -1)}
                        disabled={!canDecrease}
                        aria-label={`Odejmij punkt: ${answer.label}`}
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-slate-100 text-4xl font-black leading-none text-slate-700 shadow-sm transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        −
                      </button>

                      <div className="flex h-14 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-pink-50 to-violet-50 text-center shadow-inner ring-1 ring-pink-100">
                        <span className="text-3xl font-black leading-none tracking-tight text-slate-950">
                          {currentValue}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => updatePoints(answer.id, 1)}
                        disabled={!canIncrease}
                        aria-label={`Dodaj punkt: ${answer.label}`}
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-slate-950 text-4xl font-black leading-none text-white shadow-lg transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="rounded-[1.75rem] bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-center justify-between">
                <p className="text-sm font-black uppercase tracking-wide text-slate-500">
                  Pozostało punktów
                </p>

                <p className="text-4xl font-black text-slate-950">
                  {remaining}
                </p>
              </div>

              <div className="mt-4 grid grid-cols-5 gap-2">
                {Array.from({ length: MAX_POINTS }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-3 rounded-full transition ${
                      index < totalUsed ? "bg-pink-500" : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div
              className={`rounded-[1.75rem] px-5 py-4 text-center font-black shadow-sm ${
                remaining === 0
                  ? "bg-emerald-500 text-white"
                  : "bg-pink-500 text-white"
              }`}
            >
              {remaining === 0 ? "Rozdano" : `Rozdaj jeszcze ${remaining}`}
            </div>
          </div>

          {error && (
            <p className="mt-4 rounded-2xl bg-red-50 p-4 text-center font-bold text-red-600">
              {error}
            </p>
          )}

          <div className="mt-8 flex gap-3 pb-1">
            <button
              type="button"
              onClick={goBack}
              disabled={currentQuestionIndex === 0 || status === "sending"}
              className="w-1/3 rounded-2xl bg-white py-4 font-black text-slate-700 shadow-sm ring-1 ring-slate-200 transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
            >
              Wstecz
            </button>

            <button
              type="button"
              onClick={goNext}
              disabled={remaining !== 0 || status === "sending"}
              className="flex-1 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-600 py-4 font-black text-white shadow-lg shadow-pink-200 transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
            >
              {status === "sending"
                ? "Wysyłanie..."
                : currentQuestionIndex === QUESTIONS.length - 1
                  ? "Wyślij ankietę"
                  : "Dalej"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
