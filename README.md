# Sakshi Nandgude: Portfolio

Single-page React (Vite) portfolio. All content lives in `src/data/`, so you rarely touch the components.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into /dist
```

## Add or change content
| To change | Edit this file |
|---|---|
| Name, intro, contact, links, hero table, nav | `src/data/profile.js` |
| Add a job (paste at top of the list) | `src/data/experience.js` |
| Add a project (filter chips update automatically) | `src/data/projects.js` |
| Add skills or skill groups | `src/data/skills.js` |
| Add a certification | `src/data/certifications.js` |
| Education | `src/data/education.js` |
| Leadership / extracurricular | `src/data/leadership.js` |

- Project links: fill `github` / `live` in a project and the buttons appear. Leave `""` to hide.
- CV button: replace `public/Sakshi_Nandgude_CV.pdf` (keep the filename) or change `resume` in `profile.js`.
- Hide phone number: set `phone: ""` in `profile.js`.
- Colours: edit the tokens at the top of `src/styles.css`.

## Deploy on Vercel
1. Push this folder to a GitHub repo.
2. vercel.com → Add New → Project → import the repo.
3. Framework Preset: Vite (auto-detected). Build command `npm run build`, output `dist`.
4. Click Deploy. Every `git push` redeploys automatically.
