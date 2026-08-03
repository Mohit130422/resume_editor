# Mohit Varshney — Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS v4 portfolio, jisme ek
**Download resume** button hai jo page ke data se hi A4 PDF generate karta hai —
attached resume design me.

## Chalao

```bash
npm install
npm run dev      # http://localhost:3000
```

Resume ka layout browser me check karne ke liye: `http://localhost:3000/resume-preview`

## Sirf ek file edit karni hai

Poora content `src/data/portfolio.ts` me hai. Website aur PDF dono wahi se
render hote hain — ek jagah badlo, dono jagah update ho jayega.

| Kya badalna hai | Kahan |
| --- | --- |
| Naam, role, summary, resume file ka naam | `profile` |
| Email, phone, links | `contact` |
| Hero ke neeche ke numbers | `stats` |
| Skills (category-wise) | `skillGroups` |
| Jobs aur bullet points | `experience` |
| Main projects | `projects` |
| Chhote projects | `smallProjects` |
| Certifications | `certifications` |
| Education | `education` |
| Nav links | `navigation` |
| Theme colors | `theme` + `src/app/globals.css` ke `@theme` block |

Nayi job ya project add karna ho to sirf array me ek object push karo. PDF
automatically 1 ya 2 page me adjust ho jayegi.

## PDF kaise banti hai

1. `ResumeTemplate.tsx` resume ka HTML replica hai (A4 = 794px width), offscreen
   render hota hai — inline hex styles me, kyunki `html2canvas` Tailwind ke
   modern color functions nahi samajhta.
2. Click par `src/lib/generateResumePdf.ts` us node ka canvas banata hai aur
   A4 pages me slice karta hai. Slicing "whitespace-aware" hai — page break
   wahan lagta hai jahan pixel row me text nahi hota, taaki line beech se
   na kate.
3. `jsPDF` file save kar deta hai. Sab kuch browser me hota hai — koi server,
   koi API key nahi.

## Vercel par deploy

```bash
git init && git add -A && git commit -m "portfolio"
git remote add origin <your-repo-url>
git push -u origin main
```

Phir vercel.com par **New Project → Import repository → Deploy**. Koi
environment variable nahi chahiye. Default settings kaafi hain.

Ya CLI se:

```bash
npx vercel --prod
```

## Notes

- Fully responsive (mobile drawer nav, single-column layouts, fluid type).
- Scroll reveal + hover animations `prefers-reduced-motion` ka respect karte hain.
- Fonts: Space Grotesk (display) + Inter (body) via `next/font` — build ke time
  Google Fonts se fetch hote hain, isliye pehla build internet ke saath chalao.
- Keyboard focus rings, `aria-label`s aur semantic headings already jagah par hain.
