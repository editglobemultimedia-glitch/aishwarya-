# Aishwarya Sarvahith Foundation — Website

A complete, responsive, multi-page website for **Aishwarya Sarvahith Foundation (ASF)**, built with React, TypeScript, Vite, Tailwind CSS and React Router.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite 5 | Build tool and dev server |
| Tailwind CSS 3 | Styling |
| React Router 6 | Client-side routing |
| Lucide React | Icons |

---

## Local Development

### Prerequisites
- Node.js 18+ and npm

### Setup

Install dependencies:
```
npm install
```

Start the development server:
```
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for Production
```
npm run build
```
Output goes to the `dist/` folder.

### Preview Production Build
```
npm run preview
```

---

## All Routes

| Route | Page |
|---|---|
| / | Home |
| /about | About Landing |
| /about/philosophy | Our Philosophy |
| /about/pancha-mahabhuta | Pancha Mahabhuta |
| /about/bhagavadgita | Bhagavadgita |
| /about/vision | Our Vision |
| /about/mission | Our Mission |
| /team | Our Team |
| /campaigns | Campaigns Landing |
| /campaigns/vishwa-mahotsav | Vishwa Mahotsav Campaign |
| /campaigns/research-centre | Research Centre Campaign |
| /campaigns/seva | Seva Campaign |
| /campaigns/education-youth | Education and Youth Campaign |
| /campaigns/environment | Environment Campaign |
| /projects | Projects Landing |
| /projects/vishwa-mahotsav | Vishwa Mahotsav Project |
| /projects/research-centre | Research Centre Project |
| /projects/organic-farming | Organic Farming Project |
| /projects/healthy-living-carnival | Healthy Living Carnival Project |
| /asf-club | ASF Club |
| /asf-club/stories | Stories |
| /partners | Our Partners |
| /get-involved | Get Involved |
| /media | Media Landing |
| /media/newsletter | Newsletter |
| /media/gallery | Gallery |
| /media/videos | Videos |
| /contact | Contact |
| /support-us | Support Us |
| * | 404 Not Found |

---

## Project Structure

```
src/
  components/
    shared/
      Header.tsx        Sticky header with dropdowns and mobile menu
      Footer.tsx        Site-wide footer
      Layout.tsx        Page layout wrapper
    ui/
      PageBanner.tsx    Page hero banners with breadcrumbs
      SectionHeader.tsx Reusable section headings
      GoldDivider.tsx   Ornamental gold divider
      QuoteBlock.tsx    Styled quote blocks
      CampaignCard.tsx  Image-led campaign and project cards
  pages/
    Home.tsx
    Team.tsx
    Partners.tsx
    GetInvolved.tsx
    Contact.tsx
    SupportUs.tsx
    NotFound.tsx
    about/
    campaigns/
    projects/
    asfclub/
    media/
  data/
    navigation.ts       Nav structure
  styles/
    index.css           Global styles and Tailwind
  App.tsx               Router and routes
  main.tsx              Entry point
public/
  images/               Logo and media assets
```

---

## Before Going Live

1. **Team page**: Add real team profiles, names, designations and portraits
2. **Partners page**: Add verified partner logos with permission from each organisation
3. **Contact form**: Connect to a backend service (e.g. Formspree, EmailJS)
4. **Newsletter**: Configure an email service (e.g. Mailchimp, ConvertKit)
5. **Support Us**: Add official donation details and payment gateway once confirmed
6. **Videos**: Add verified YouTube or Vimeo embed URLs
7. **Gallery**: Replace placeholders with approved Foundation photography
8. **SEO**: Update Open Graph image URL in index.html with your production domain
9. **Privacy Policy / Terms**: Complete legal pages before publication
10. **Analytics**: Add Google Analytics or similar tracking

---

## Design System

| Token | Value |
|---|---|
| Cream 50 | #FFFDF8 |
| Cream 100 | #FAF7F0 |
| Maroon | #7C1724 |
| Dark Maroon | #5E101B |
| Antique Gold | #C68A28 |
| Champagne Gold | #E5B85C |
| Navy | #082C4D |
| Heading font | Cormorant Garamond (serif) |
| Body font | DM Sans (sans-serif) |

---

## Deployment

The project builds to static HTML/JS/CSS and can be deployed to:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag the dist/ folder to Netlify dashboard
- **GitHub Pages**: Set `base: '/repo-name/'` in vite.config.ts
- **Any static host**: Upload the dist/ folder

For React Router to work correctly on static hosts, configure URL rewriting to serve index.html for all routes.

---

*Rooted in Dharma. Dedicated to Seva. Committed to Society.*  
*— Aishwarya Sarvahith Foundation*
