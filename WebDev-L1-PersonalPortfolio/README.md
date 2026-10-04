# Personal Portfolio

Author: Ghani Abdul Rehman Khan  
Internship Track: Oasis Infobyte Web Development & Designing  
Task: Level 1, Task 2 - Personal Portfolio

## Objective

Create a professional personal portfolio using only HTML5 and CSS3. The portfolio presents profile information, education, skills, projects and contact details for Ghani Abdul Rehman Khan.

## Features

- Sticky navigation with smooth-scroll links to Home, About, Skills, Projects and Contact.
- Hero/profile section with name, role title, concise introduction and a polished "GK" avatar placeholder.
- About Me section using the required three-sentence biography.
- Grouped skills grid without invented percentages or ratings.
- Three project cards for AuralSight, iCampus360 and LandSnap.
- Contact section with name, location, working email link, verified GitHub profile link and LinkedIn profile link.
- Footer with developer credit and Oasis Infobyte task credit.
- Responsive layout using CSS Grid and Flexbox.
- Visible keyboard focus, sufficient contrast, sticky-header scroll offsets and reduced-motion support.
- Local SVG decoration and system font stack for offline use.

## Technologies Used

- HTML5
- CSS3
- Local SVG asset

No JavaScript, frameworks, backend, package installation or build tools are used.

## Folder Structure

```text
WebDev-L1-PersonalPortfolio/
  index.html
  style.css
  README.md
  assets/
    portfolio-mark.svg
  screenshots/
```

## How to Run

Open `index.html` directly in a web browser.

## Placeholders Explained

- The circular "GK" avatar is a professional initials-based photo placeholder because no profile photo was supplied.

## Task 2 Requirement Checklist

| Official requirement | Implementation |
| --- | --- |
| Name, role and professional photo/avatar placeholder | Hero includes Ghani Abdul Rehman Khan, role title and a polished "GK" avatar placeholder. |
| About Me with 2-3 sentences | About section uses the required three-sentence biography. |
| Skills grid/list | Skills are grouped into Languages, Mobile Development, AI & Computer Vision, Databases & Services and Tools. |
| At least two project cards with title and description | Three project cards are included, each with a title and description. |
| Contact details | Contact includes name, location, working mailto email, verified GitHub link and LinkedIn link. |
| Smooth-scroll navigation | Navigation and CTA links use same-page anchors with CSS smooth scrolling. |
| Consistent branding | Navy, teal, off-white and warm accent palette is used throughout. |
| Fully responsive layout | CSS media queries support desktop, tablet and mobile layouts without JavaScript. |

## Validation Notes

Browser screenshot capture was performed with local Chrome headless at approximately 375px, 768px and 1440px widths.

Captured screenshots:

- `screenshots/mobile-375.png`
- `screenshots/tablet-768.png`
- `screenshots/desktop-1440.png`

Manual browser checklist:

- Open `index.html` directly.
- Check widths near 375px, 768px and 1440px.
- Confirm Home, About, Skills, Projects and Contact links scroll correctly.
- Confirm View Projects and Contact Me buttons scroll to Projects and Contact.
- Confirm `mailto:ghanikhan1014@gmail.com` opens an email client.
- Confirm `https://github.com/i-am-gk` opens the verified GitHub profile.
- Confirm `https://www.linkedin.com/in/ghani-khan-577439247` opens the LinkedIn profile.
- Tab through links and confirm visible keyboard focus.
- Confirm sticky navigation does not cover section headings.
- Confirm there is no horizontal scrolling or overlapping content on mobile.
