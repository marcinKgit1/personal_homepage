# Frontend Developer Portfolio

Nowoczesne portfolio Front-End Developera z obsługą dwóch języków, motywem jasnym/ciemnym oraz automatycznym pobieraniem technologii z GitHub API.

## Demo

- **Live demo (GitHub Pages):** https://marcinkgit1.github.io/personal_homepage/
- Kod źródłowy: https://github.com/marcinKgit1/personal_homepage

## Funkcje

- Sekcje: Hero, About, Projects, Contact
- i18n: polski i angielski
- Theme switch: light/dark
- Dane projektów i treści w jednym miejscu (`src/data/content.ts`)
- Auto-aktualizacja technologii na podstawie GitHub API (z cache w localStorage)

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- motion/react
- lucide-react

## Uruchomienie lokalne

Wymagania:

- Node.js 18+

Kroki:

1. Zainstaluj zależności:
   npm install
2. Uruchom aplikację:
   npm run dev
3. Sprawdź typy TypeScript:
   npm run lint
4. Zbuduj wersję produkcyjną:
   npm run build

## Weryfikacja linków demo

Sprawdzone linki demo z sekcji projektów zwracają status HTTP 200 (stan na 2026-03-15).
