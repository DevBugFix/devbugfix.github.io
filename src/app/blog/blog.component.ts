import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit {
  public posts:Observable<ScullyRoute[]>;
  public bannerURL:string='';
  constructor(private scully:ScullyRoutesService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.posts=this.scully.available$.pipe((map(routeList=>{
        return routeList.filter((route:ScullyRoute)=>{
            return route.route.startsWith(`/blog/`);
        })
    })));
    this.getImageByPost();
  }
  getImageByPost()
  {
    console.log("router",this.router);
    console.log("route",this.route.root);

    const slug=this.route.snapshot.params['slug'];
    this.posts.subscribe(x=>{
     console.log("x=>",x);
      const item=x.find(y=>y.route.trim()==location.pathname.trim());
      if(item)
      {
       this.bannerURL= item.bannerURL;
      }

    })
  }
}
