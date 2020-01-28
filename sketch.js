function setup()
{
    createCanvas(850, 700);
}

function draw()
{
    background(0);
    noFill();
    
    // variable to make use of random();
    // to have a slightly varying randomly generated x and y values
    var r;
    
    
    // first row of rectangles
    strokeWeight(2);
    
    
    for (var j=0; j<7; j++)
        {
            for (var i=0; i<9; i++)
                {
                    if(i>6)
                        {
                            stroke(10*i*j, 200, 255);
                            r = 1+j;
                        }
                    else if(i>4)
                        {
                            stroke(255, 100, 0*i*j);
                            r = 5+j;
                        }
                    else if(i>3)
                        {
                            stroke(155, 200, 10*i*j);
                            r = 5+j;
                        }
                    else if(i>1)
                        {
                            stroke(155, 10*i*j, 100);
                            r = j;
                        }
                    else
                        {
                            stroke(20*j*i, 10, 220);
                            r = 1+j;
                        }

                    rect(80+ i*80 + random(-r, r), 
                         80+ j*80 + random(-r, r), 
                         60, 60);
                }
        }
}