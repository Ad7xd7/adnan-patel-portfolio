# Adnan Patel — Portfolio

Next.js 14 · React · TypeScript · Tailwind CSS · Framer Motion · Lucide

## Run locally
    npm install
    npm run dev        # http://localhost:3000
    npm run build && npm start

## Where things go
- Resume PDF: `public/resume/Adnan_Patel_Resume.pdf` (path set in `src/data/site.ts`)
- Project images: `public/projects/{ids,xray,rewear,android}/`, then list them in `images` in `src/data/projects.ts`
- Experience images: `public/experience/`; certificate images: `public/certifications/`

## Update content
All content is data, no component edits needed:
`src/data/site.ts` (contact, GitHub URL, metrics) · `skills.ts` · `experience.ts` · `projects.ts` · `certifications.ts` · `cyber.ts`
- The GitHub link stays hidden until you set `site.github` / `project.github`.
- Add `url` to a cert in `certifications.ts` only when you have the real credential link.

## Data conflicts to resolve (nothing was silently reconciled)
1. X-ray classes: the PDF lists Healthy / COVID-19 / Bacterial Pneumonia / Viral Pneumonia (used on the site). The resume lists Normal / COVID-19 / Viral Pneumonia / Lung Opacity.
2. X-ray model size: your brief said ~2.75M parameters; the PDF screenshot shows 25,718,532 (~25.7M). The site uses 25.7M.
3. X-ray dataset size: the PDF says 133 images on one slide and shows 428 train / 104 validation images elsewhere; the report evaluates 40 images. The site quotes only the 40-image evaluation and shows classes by index, because the report does not name them.
4. Documentation: the resume claims technical documentation, workflow diagrams and validation reports; the site claims only the PostgreSQL-monitoring design document, as you instructed.
5. Cybersecurity tools: Maltego, Nikto, SQLMap, Metasploit, John the Ripper and Hashcat come from your brief; the resume lists only Nmap and Recon-ng.
6. The resume's IDS bullet names a Random Forest classifier; your brief did not. The site uses it.

## Deploy
    git init && git add . && git commit -m "Initial portfolio"
    git branch -M main
    git remote add origin https://github.com/<your-username>/<repo>.git
    git push -u origin main

Then on vercel.com: Add New → Project → import the repo → framework preset "Next.js" → Deploy.
