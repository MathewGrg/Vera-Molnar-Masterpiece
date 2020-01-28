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
    for (var i=0; i<9; i++)
        {
            if(i>6)
                {
                    stroke(220, 200, 255);
                    r = 1;
                }
            else if(i>3)
                {
                    stroke(255, 100, 0);
                    r = 5;
                }
            else if(i>1)
                {
                    stroke(155, 0, 100);
                    r = 5;
                }
            else
                {
                    stroke(150);
                    r = 1;
                }
            
            rect(80+ i*80 + random(-r, r), 
                 80 + random(-r, r), 
                 60, 60);
        }
    
    
    // 2nd row of rectangles
    strokeWeight(4);
    for (var i=0; i<9; i++)
        {
            if(i>6)
                {
                    stroke(220, 200, 255);
                    r = 2;
                }
            else if(i>4)
                {
                    stroke(255, 100, 0);
                    r = 15;
                }
            else if(i>0)
                {
                    stroke(155, 0, 100);
                    r = 5;
                }
            else
                {
                    stroke(150);
                    r = 2;
                }
            
            rect(80+ i*80 + random(-r, r), 
                 160 + random(-r, r), 
                 60, 60);
        }
    
    // 3rd row of rectangles
    strokeWeight(6);
    for (var i=0; i<9; i++)
        {
            if(i>6)
                {
                    stroke(220, 200, 255);
                    r = 3;
                }
            else if(i>4)
                {
                    stroke(255, 100, 0);
                    r = 10;
                }
            else if(i>0)
                {
                    stroke(155, 0, 100);
                    r = 10;
                }
            else
                {
                    stroke(150);
                    r = 3;
                }
            
            rect(80+ i*80 + random(-r, r), 
                 240 + random(-r, r), 
                 60, 60);
        }
    
    
    // 4th row of rectangles
    strokeWeight(8);
    for (var i=0; i<9; i++)
        {
            if(i>6)
                {
                    stroke(220, 200, 255);
                    r = 5;
                }
            else if(i>4)
                {
                    stroke(255, 100, 0);
                    r = 15;
                }
            else if(i>0)
                {
                    stroke(155, 0, 100);
                    r = 15;
                }
            else
                {
                    stroke(150);
                    r = 5;
                }
            
            rect(80+ i*80 + random(-r, r), 
                 320 + random(-r, r), 
                 60, 60);
        }
    
    // 5th row of rectangles
    strokeWeight(6);
    for (var i=0; i<9; i++)
        {
            if(i>6)
                {
                    stroke(220, 200, 255);
                    r = 3;
                }
            else if(i>4)
                {
                    stroke(255, 100, 0);
                    r = 10;
                }
            else if(i>0)
                {
                    stroke(155, 0, 100);
                    r = 10;
                }
            else
                {
                    stroke(150);
                    r = 3;
                }
            
            rect(80+ i*80 + random(-r, r), 
                 400 + random(-r, r), 
                 60, 60);
        }
    
    
    // 6th row of rectangles
    strokeWeight(4);
    for (var i=0; i<9; i++)
        {
            if(i>6)
                {
                    stroke(220, 200, 255);
                    r = 2;
                }
            else if(i>4)
                {
                    stroke(255, 100, 0);
                    r = 7;
                }
            else if(i>0)
                {
                    stroke(155, 0, 100);
                    r = 7;
                }
            else
                {
                    stroke(150);
                    r = 2;
                }
            
            rect(80+ i*80 + random(-r, r), 
                 480 + random(-r, r), 
                 60, 60);
        }
    
    
    // 7th row of rectangles
    strokeWeight(2);
    for (var i=0; i<9; i++)
        {
            if(i>6)
                {
                    stroke(220, 200, 255);
                    r = 1;
                }
            else if(i==4 || i==5)
                {
                    stroke(255, 100, 0);
                    r = 5;
                }
            else if(i>0)
                {
                    stroke(155, 0, 100);
                    r = 5;
                }
            else
                {
                    stroke(150);
                    r = 1;
                }
            
            rect(80+ i*80 + random(-r, r), 
                 560 + random(-r, r), 
                 60, 60);
        }
}