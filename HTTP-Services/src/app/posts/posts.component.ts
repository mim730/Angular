import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  //customersObservable : Observable<Customer[]>;

  posts = {};
  private url='https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    http.get(this.url)
    .subscribe(response =>{
      this.posts=response;

    });
  }

  createPost(input: HTMLInputElement){
    let post1: any = { title: input.value}
    this.http.post(this.url, JSON.stringify(post1))
    .subscribe(response => {
      //post1.id = response.id;
      console.log(response)

    });

  }

  ngOnInit() {
  }

}
