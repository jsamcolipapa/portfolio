import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Contact } from './features/contact/contact';
import { Experience } from './features/experience/experience';
import { Home } from './features/home/home';
import { Projects } from './features/projects/projects';
import { Skills } from './features/skills/skills';
import { Footer } from './shared/components/footer/footer';
import { Navbar } from './shared/components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, Projects, Skills, Experience, Contact, Footer],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
