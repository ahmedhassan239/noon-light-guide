

## Plan: Update Stats + Add 3 Legal/Support Pages

### 1. Update Stats Value
Change `415` to `215` in `src/components/StatsBar.tsx` (line 23).

### 2. Create Shared Page Layout Component
**New file: `src/components/LegalPageLayout.tsx`**
- Reusable layout for all 3 pages: back button, page title, language toggle (EN/AR), footer
- Uses existing `useLang` context for bilingual support + RTL
- Detects browser language on mount (`navigator.language`) to set default
- Noorly design system: navy background, gold accents, rounded cards, generous spacing
- Footer: "Made with care for new Muslims" / Arabic equivalent

### 3. Create 3 Page Components

**`src/pages/Privacy.tsx`** — Privacy Policy
- Sections: Intro, Data We Collect, How We Use Data, Privacy Promise, Islamic Values, Data Sharing, Security, Your Rights, Children, Contact
- Full EN/AR content as provided
- Bullet points rendered in styled lists
- "Last Updated" date field

**`src/pages/Support.tsx`** — Help & Support
- Sections: Intro, FAQ (accordion-style Q&A using existing Accordion component), Technical Help, Tips, Contact, closing message
- Full EN/AR content

**`src/pages/Feedback.tsx`** — Send Feedback
- Sections: Intro, What you can send, How to send, Before sending tips, closing message
- Email link styled as a CTA button
- Full EN/AR content

### 4. Add Routes
Update `src/App.tsx` to add:
- `/privacy` → Privacy page
- `/support` → Support page  
- `/feedback` → Feedback page

### Design Approach
- Dark navy background (`noorly-navy-deep`) consistent with landing page
- Content in rounded cards with subtle borders
- Section headings in gold accent
- Body text in light muted colors
- Mobile-first, responsive layout
- RTL fully supported via existing LangContext
- Back button navigates to `/`

### Files to Create/Edit
| File | Action |
|------|--------|
| `src/components/StatsBar.tsx` | Edit: 415 → 215 |
| `src/components/LegalPageLayout.tsx` | Create: shared layout |
| `src/pages/Privacy.tsx` | Create |
| `src/pages/Support.tsx` | Create |
| `src/pages/Feedback.tsx` | Create |
| `src/App.tsx` | Edit: add 3 routes |

