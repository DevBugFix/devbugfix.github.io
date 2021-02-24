import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import {map}from 'rxjs/operators'
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  public posts:Observable<ScullyRoute[]>;
  constructor(private scully:ScullyRoutesService) { }

  ngOnInit(): void {
    this.posts=this.scully.available$.pipe((map(routeList=>{
        return routeList.filter((route:ScullyRoute)=>{
            return route.route.startsWith(`/blog/`);
        })
    })));
  }

}
