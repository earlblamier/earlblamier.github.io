import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true, // latest Angular version
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
  encapsulation: ViewEncapsulation.None, // Use this if you want to apply global styles
})
export class MainContentComponent implements AfterViewInit {

  private starContainer!: HTMLDivElement; // Declare starContainer as a class property

  ngAfterViewInit(): void {
    const canvas = document.getElementById('constellation-canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);
  
    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.5 + 0.5,
    }));
  
    function draw() {
      ctx!.clearRect(0, 0, width, height);
      for (let star of stars) {
        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx!.fillStyle = "#fff";
        ctx!.fill();
      }
  
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx!.beginPath();
            ctx!.moveTo(stars[i].x, stars[i].y);
            ctx!.lineTo(stars[j].x, stars[j].y);
            ctx!.strokeStyle = `rgba(255,255,255,${1 - dist / 100})`;
            ctx!.stroke();
          }
        }
      }
  
      for (let star of stars) {
        star.x += star.vx;
        star.y += star.vy;
        if (star.x < 0 || star.x > width) star.vx *= -1;
        if (star.y < 0 || star.y > height) star.vy *= -1;
      }
  
      requestAnimationFrame(draw);
    }
  
    draw();
  


    // Burst effect logic for the URL
    const urlElement = document.getElementById('burst-url');
    this.starContainer = document.createElement('div'); // Initialize starContainer
    this.starContainer.id = 'star-container';
    this.starContainer.style.position = 'absolute';
    this.starContainer.style.top = '0';
    this.starContainer.style.left = '0';
    this.starContainer.style.width = '100%';
    this.starContainer.style.height = '100%';
    this.starContainer.style.pointerEvents = 'none';
    document.body.appendChild(this.starContainer);

    if (urlElement) {
      urlElement.addEventListener('mouseenter', (event) => {
        const rect = urlElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 30; i++) {
          const star = document.createElement('div');
          star.className = 'burst-star';
          star.style.position = 'absolute';
          star.style.width = '5px';
          star.style.height = '5px';
          star.style.backgroundColor = '#fff';
          star.style.borderRadius = '50%';
          star.style.left = `${centerX}px`;
          star.style.top = `${centerY}px`;
          star.style.transform = `translate(-50%, -50%)`;
          star.style.animation = `star-burst 1s ease-out forwards`;
          star.style.setProperty('--x', (Math.random() * 2 - 1).toString());
          star.style.setProperty('--y', (Math.random() * 2 - 1).toString());
          this.starContainer.appendChild(star);

          // Remove the star after the animation ends
          star.addEventListener('animationend', () => {
            star.remove();
          });
        }
      });
    }
  }
}
