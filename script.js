TinyTurtle.apply(window, [undefined, 400, 400]);

function triangle(){
forward(100);
right(120);
forward(100);
right(120);
forward(100);

}
function rectangle(){
    forward(100);
    right(90);
    forward(50);
    right(90);
    forward(100);
    right(90);
    forward(50);
}
function square(){
    forward(100);
    right(90);
    forward(100);
    right(90);
    forward(100);
    right(90);
    forward(100);
    right(90);
}
function hexagon(){
    for (i = 0; i < 6; i++){
    forward(50);
    right(60);
    }
   
}

// Type your function call below


hexagon();

stamp();
