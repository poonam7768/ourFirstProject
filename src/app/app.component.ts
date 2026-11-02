import { Component } from '@angular/core';
import { Ibook, Icourse, Icustomer, Imovie, Iorder, Iproduct, Istd, Iteacher, Ivehicle } from './modules/student';
import { bookArr, courseArr, customerArr, movieArr, orderArr, productArr, stdArr, teacherArr, vehicleArr } from './const/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'I Love Angular';
  userName = "i Am Jhon";
  skills :Array<string> = ["Angular","Javascript","Typescript"]
  posts:Array<string> = ["Angular-Developer","fullStack-Developer","Backend-developer","FrontEnd-Developer"]
  colors:Array<string> = ["white","yellow","green","blue","red","orange","grey","pink","brown"]
  Animal:Array<string> = ["lion","tiger","Elephant","Cheeta","snake"]
  para = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eveniet dolorum veritatis ipsum esse eos corporis laboriosam? Nostrum ullam natus quos eveniet corporis, consequuntur dolorum unde adipisci aspernatur distinctio consequatur.'
  paragraph ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus praesentium harum est atque mollitia sit hic non architecto qui ipsum laudantium unde saepe, doloremque amet provident quod fugiat deserunt repellendus.'


  students: Array<Istd> = stdArr
  products : Array<Iproduct> = productArr
  course : Array<Icourse> = courseArr
  book:Array<Ibook> = bookArr
  customer:Array<Icustomer> = customerArr
  order:Array<Iorder> = orderArr
  movie:Array<Imovie> = movieArr
  teacher:Array<Iteacher> = teacherArr
  vehicle:Array<Ivehicle> = vehicleArr
}
