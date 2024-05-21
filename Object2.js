//Function to find Area and Perimeter of a Rectangle.
function RectangleObject(Rectangle){
    let Area=(Rectangle.L*Rectangle.B);
    let Perimeter=2*(Rectangle.L+Rectangle.B);

    //returning the Value of Area and Perrimeter.
    return{Area,Perimeter}
}

//Taking the input of a Rectangle.
const Rectangle={
    L:10,
    B:20
}

//Calling the Function to Print  the Area and Perimeter of Rectangle.
let rectangle=RectangleObject(Rectangle)
console.log(rectangle)