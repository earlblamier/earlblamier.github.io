header:

<header class="bg-dark text-white py-3 border-bottom border-secondary">
  <div class="d-flex flex-wrap justify-content-between align-items-center px-4">
    <!-- Logo and Home Link -->
    <a routerLink="/" class="d-flex align-items-center text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32" aria-hidden="true">
        <use xlink:href="#bootstrap"></use>
      </svg>
      <span class="fs-4">Earl Lamier</span>
    </a>

    <!-- Navigation Menu -->
    <nav>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a routerLink="/" 
          routerLinkActive="active" 
          class="nav-link" 
          aria-current="page">Home</a>
        </li>
        <li class="nav-item">
          <a 
            routerLink="/" 
            fragment="about" 
            routerLinkActive="active" 
            [routerLinkActiveOptions]="{ exact: false }"
            class="nav-link">About</a>
        </li>
        <li class="nav-item">
          <a routerLink="/" fragment="skills" 
          routerLinkActive="active" class="nav-link">Skills</a>
        </li>
        <li class="nav-item">
          <a routerLink="/" fragment="projects" 
          routerLinkActive="active" class="nav-link">Projects</a>
        </li>
        <li class="nav-item">
          <a routerLink="/" fragment="contact" 
          routerLinkActive="active " class="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

.nav-link:hover {
  background-color: var(--hover-color) !important;  /* Hover background */
  /* color: var(--text-light) !important;  */ /* Hover text */
  color: dark !important; /* Bootstrap default dark */
/*     background-color: transparent; */
/*   color: inherit; */
}

/* Active link styling */
/* .nav-link.active { */
/*   color: #212529 !important;  *//* Bootstrap default dark */
  /* background-color: #f8f9fa !important; */ /* light bg */
/*   font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  color: inherit;
} */
