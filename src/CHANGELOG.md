# Changelog

All notable changes to this project will be documented in this file.

## [1.2.0] - 2025-04-09
### Added
- Added a "Join Our Waiting List" subscription form in the `FooterComponent`.
- Included social media links (Facebook, Instagram) with icons in the `FooterComponent`.
- Enhanced the `AboutComponent` with a "Blogs" section linking to Blogspot.
- Added rounded corners to certification icons in the `AboutComponent`.

### Fixed
- Resolved issues with Bootstrap Icons not displaying properly in the `FooterComponent`.
- Fixed alignment issues in the `FooterComponent` for social media links.

### Changed
- Updated the `FooterComponent` layout for better spacing and responsiveness.
- Improved the styling of the "Certifications" section in the `AboutComponent`.

---

## [1.1.0] - 2025-04-09
### Added
- Implemented a custom glowing cursor with highlights using CSS and JavaScript.
- Added a "burst of stars" effect when hovering over the `www.earl-lamier.dev` URL in the `MainContentComponent`.
- Enhanced the `MainContentComponent` with a constellation canvas animation in the background.

### Fixed
- Resolved TypeScript errors related to uninitialized properties (`cursor` and `starContainer`) in `AppComponent` and `MainContentComponent`.
- Fixed `mt-5` and `pt-5` spacing issues for the `www.earl-lamier.dev` text in `MainContentComponent`.

### Changed
- Updated the `MainContentComponent` layout to improve spacing and alignment for the hero section.
- Adjusted the `fancy-url` styling for better visibility and responsiveness.

---

## [1.0.0] - 2025-04-08
### Added
- Enabled fragment scrolling and scroll position restoration in the router configuration.
- Updated navigation links to use `fragment` for smooth scrolling to sections.
- Ensured all sections in `HomeComponent` have matching `id` attributes for fragment navigation.

### Fixed
- Resolved the error with `scrollPositionRestoration` and `anchorScrolling` in `main.ts`.


## [0.29.0] - 2025-04-04
### Added
- Initial release of the **Earl Lamier Angular Web Project**.
- Implemented the following components:
  - `HeaderComponent` with navigation links and logo.
  - `FooterComponent` for page footer.
  - `HomeComponent` as the main landing page.
  - `ProjectsComponent` to showcase projects with cards.
  - `MapComponent` with an embedded Google Map.
- Added routing for the application with `RouterModule`.
- Integrated Bootstrap for responsive design and styling.
- Added project cards with links to GitHub repositories.

### Changed
- Customized the header and footer for a consistent theme.
- Styled the project cards with dark backgrounds and shadows.

---

## [Unreleased]
### Planned
- Add more projects to the `ProjectsComponent`.
- Enhance the `MapComponent` with dynamic location markers.
- Implement a contact form in the `ContactComponent`.
- Add unit tests for all components.

---

## Initial Commit - 2025-03-31
### Added
- Initial setup of the Angular project.
- Implemented basic routing and component structure.


## deploy bash script
- $ ./scripts/deploy.sh
