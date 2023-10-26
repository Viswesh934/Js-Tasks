/*Write a program to create a rectangle class that has two properties for length and breadth and a few methods to calculate the area and perimeter. Create different objects of the Rectangle class with different lengths and breadths, and call the methods to find the area and perimeter of each object.*/
class Rectangle{
    constructor(length,breadth){
        this.length=length;
        this.breadth=breadth;
    }
    area(){
        return this.length*this.breadth;
    }
    perimeter(){
        return 2*(this.length+this.breadth);
    }
}
let rect1=new Rectangle(10,20);
console.log(rect1.area());
console.log(rect1.perimeter());
let rect2=new Rectangle(5,10);
console.log(rect2.area());
console.log(rect2.perimeter());
