# Site Audit TODO

## Critical — Customer Engagement

### 1. Add "Why Choose Us" Section
- Trust badges: insured/bonded, background-checked staff, satisfaction guarantee, eco-friendly products
- Specific differentiators — answer "why pick you over 50 other Winnipeg cleaners?"
- Place between Services and Stats sections on home page

### 2. Use `<Link>` for All Internal Navigation
Files to fix:
- `HomeBanner.tsx` — lines 43-56: hero CTAs use `<a>` instead of `<Link>`
- `About.tsx` — line 24: "Our Services" button uses `<a>`
- `Footer.tsx` — lines 54-63: About, Services, Contact, Privacy all use `<a>` (only Home uses `<Link>`)
- `ContactSection.tsx` — line 151: "Apply Now" uses `<a>`
- `ContactUs.tsx` — line 229: "Apply Now" uses `<a>`
- `JoinUs.tsx` — line 20: "Apply Now" uses `<a>` AND links to `/contact` instead of `/apply`

### 3. No Social Proof (Testimonials Commented Out)
- Testimonials component exists but is commented out on home page
- Stats section has fake numbers also commented out
- Need real Google reviews, star ratings, or customer counts

### 4. No Pricing Transparency
- No pricing info anywhere — not even ballpark ranges
- Competitors show prices; without them, customers leave
- Add "starting at $X" or a pricing table

### 5. No Before/After Portfolio
- Portfolio component exists but has placeholder construction content
- Need real cleaning photos showing results

### 6. Weak CTA / Contact Form
- "Get Free Quote" goes to generic Name/Email/Subject/Message form
- No service selector, property size, or frequency options
- High friction — customer has to type everything from scratch
- Consider: pick service → pick frequency → pick size → get instant estimate

### 7. No Online Booking
- In 2026 people expect to book online
- Even a Calendly or booking widget would convert better
- "We'll get back to you" is not what a busy person wants

## Medium — Content & Copy

### 8. About Section Is Generic
- "Premier cleaning company... exceptional service" is filler every cleaning site uses
- Add: who started it, why, how long, how many staff, team photos

### 9. Duplicate Content
- "Join Us" card appears 3+ times (home contact section, contact page twice)
- Business hours repeated in footer, home contact section, contact page
- Consolidate

### 10. Blog Is Dead Placeholder
- Contains lorem ipsum text
- Links to `single-blog.html` (doesn't exist)
- Either build it or remove it

## Low — Technical / Guidelines

### 11. Web Interface Guidelines Violations
- `HomeBanner.tsx:8` — `paddingTop: '-10px'` is invalid CSS
- `ContactUs.tsx:196` — `<iframe>` missing `title` attribute
- `MainMenu.tsx:34` — brand text lowercase, should be Title Case
- `Stats.tsx:26` — `<br />` used for layout instead of CSS
- `Footer.tsx:81` — `<i>` icons missing `aria-hidden="true"`
- Forms missing `autocomplete` attributes on inputs
- Form placeholders don't end with `…`
- No error handling for network failures in forms

### 12. Copyright Year
- `Footer.tsx:71` — says 2025, should be 2026
