import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  scrollY: number | undefined;
@ViewChild('navbar') navbar: ElementRef | undefined;
  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrollY = window.scrollY;
    // Do something with the updated pageYOffset value
console.log(scrollY);

    if(this.navbar)
    if(this.scrollY > 500){
      this.navbar.nativeElement.classList.add("black-bg")
      console.log('no');

    }else{
      this.navbar.nativeElement.classList.remove("black-bg")
      console.log('yes');

    }
  }
}
