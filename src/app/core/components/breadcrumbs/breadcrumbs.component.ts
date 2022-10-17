import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoursesService } from 'src/app/courses/services/courses.service';

type breadCrumbsType = { text: string, path?: string }[];

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {

  breadCrumbs: breadCrumbsType;

  public sub: Subscription;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.initBreadCrumbs(this.router.url);
    this.sub = this.router.events.subscribe((event) => this.updateBreadCrumbs(event as RouterEvent));
  }

  initBreadCrumbs(url: string) {
    this.breadCrumbs = this.routeBreadCrumbsFactory(url)();
  }

  updateBreadCrumbs(routerEvent: RouterEvent) {
    if (routerEvent instanceof NavigationEnd) {
      this.breadCrumbs = this.routeBreadCrumbsFactory(routerEvent.urlAfterRedirects)();
    }
  }

  routeBreadCrumbsFactory(url: string = ''): () => breadCrumbsType {
    const urlArr = url[0] === '/' ? url.split('/').slice(1) : url.split('/');
    switch (urlArr[0]) {
      case 'courses':
        return () => this.getCoursesBreadCrumbs(urlArr);
      default:
        return () => this.getCoursesBreadCrumbs(['']);
    }
  }

  getCoursesBreadCrumbs(urlArr: string[]): breadCrumbsType {
    if (urlArr.length === 1) {
      return [{ text: 'Courses' }];
    }

    const crumbs = [{ text: 'Courses', path: 'courses' }];

    if (urlArr[1] === 'new') {
      return [...crumbs, { text: 'New Courses' }];
    }
    if (urlArr[1].match(/^[0-9]*$/)) {
      const id = +urlArr[1];
      return [...crumbs, { text: this.coursesService.getCourse(id).title }];
    }
    return crumbs;
  }

  redirect(path: string) {
    this.router.navigateByUrl(path);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
