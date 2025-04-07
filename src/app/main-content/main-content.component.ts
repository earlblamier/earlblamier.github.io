import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true, // latest Angular version
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
  encapsulation: ViewEncapsulation.None, // Use this if you want to apply global styles
})
export class MainContentComponent implements AfterViewInit {
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
  }
  

}
