<<<<<<< HEAD

# Quiz pracowniczy — React + Vercel

Aplikacja ma:
- ankietę mobilną,
- 4 grupy wyników: A,B,C,D
- rozdawanie 5 punktów na pytanie,
- stronę z podziękowaniem i wynikiem,
- wysyłkę maila do administratora przez Resend.

## Uruchomienie lokalnie

```bash
npm install
npm run dev
```

Otwórz: http://localhost:3000

## Konfiguracja maili

Skopiuj `.env.example` jako `.env.local` i uzupełnij:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
ADMIN_EMAIL=admin@twojadomena.pl
FROM_EMAIL=Ankieta <onboarding@resend.dev>
```

Na start możesz użyć testowego `onboarding@resend.dev`. Dla produkcji najlepiej zweryfikować własną domenę w Resend.

## Deploy na Vercel

1. Wrzuć projekt na GitHub.
2. W Vercel kliknij `Add New Project`.
3. Wybierz repozytorium.
4. W `Settings → Environment Variables` dodaj:
   - `RESEND_API_KEY`
   - `ADMIN_EMAIL`
   - `FROM_EMAIL`
5. Kliknij `Deploy`.

## Dodawanie pytań

W pliku `app/page.jsx` znajdź tablicę `QUESTIONS` i dodaj kolejne pytania według wzoru:

```js
{
  id: 4,
  text: "Treść pytania?",
  answers: [
    { id: "q4a1", label: "Odpowiedź dla Lidera", group: "leader" },
    { id: "q4a2", label: "Odpowiedź dla Słuchacza", group: "listener" },
    { id: "q4a3", label: "Odpowiedź dla Przytakiwacza", group: "supporter" },
  ],
}
```
=======
# quiz-pracowniczy
Ankieta badająca predyzpozycje liderskie
>>>>>>> 6f891cc32bfb07c0169511c4408bc045e8b37804
