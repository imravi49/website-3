Minimal tasweer final v2 scaffold. Replace assets, run npm install, then npm start. For full feature set, request full rebuild.

---
Updates applied per your request:

1) Admin panel now requires Google Sign-In and only allows access to the admin email `ravi.rv73838@gmail.com`.

2) Portfolio lightbox: added a top-right X close button and Prev/Next controls.

3) EmailJS: TEMPLATE_ID and USER_ID have been hard-coded in `src/ui/InquiryModal.js` as `template_inquiry` and `user_ravi_default` respectively. Replace these with your actual EmailJS template & user IDs if desired.

4) Firestore security rules added: `firebase.firestore.rules` (recommended rule set). Apply these in Firebase console > Firestore > Rules.

5) Netlify/GitHub: To publish, create a GitHub repo, push this project, and connect Netlify. Use build command `npm run build` and publish folder `build`. Add any env vars (if you revert to env-based EmailJS) in Netlify settings.

If you want, I can now:
- Replace the hard-coded EmailJS IDs with the real ones if you paste them here and repackage the project.
- Apply stricter Firestore rules or adjust them to allow site readers but protect writes.
- Help push to a GitHub repo (I can generate the git commands and instructions for you) and prepare Netlify settings.


SOCIALS & CONTACTS (added to Contact page):
- Instagram: @tasweer.photography
- WhatsApp: +91 7383826282
- YouTube: @tasweerphotographybyravisharma
- Email: ravi.rv73838@icloud.com

NETLIFY DEPLOY
1. Create a GitHub repo and push this project.
2. In Netlify, click 'New site from Git' -> connect your GitHub -> select the repo.
3. Build command: `npm run build`, Publish directory: `build`.
4. Add environment variables in Netlify if you want to use EmailJS envs (optional).

Note: EmailJS currently uses service id `service_zl7rcg1`. Replace TEMPLATE_ID and USER_ID in `src/ui/InquiryModal.js` with your EmailJS template & user ids (or add them as Netlify env vars) for email sending to work.
