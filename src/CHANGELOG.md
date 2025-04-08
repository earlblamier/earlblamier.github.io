# Changelog

All notable changes to this project will be documented in this file.

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