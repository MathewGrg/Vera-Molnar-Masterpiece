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
    
    
    // for loop for the rows
    for (var j=0; j<7; j++)
        {
            // for loop for the columns
            for (var i=0; i<9; i++)
                {
                    if(i>6)
                        {
                            strokeWeight(1);
                            stroke(10*i*j, 200, 255);
                            r = j+i;
                        }
                    else if(i>4)
                        {
                            strokeWeight(2);
                            stroke(255, 100, 0*i*j);
                            r = 5+j;
                        }
                    else if(i>3)
                        {
                            strokeWeight(4);
                            stroke(155, 200, 10*i*j);
                            r = 8+j;
                        }
                    else if(i>1)
                        {
                            strokeWeight(5);
                            stroke(155, 10*i*j, 100);
                            r = 5+j;
                        }
                    else
                        {
                            strokeWeight(6);
                            stroke(20*j*i, 10*j*i, 105+j+i);
                            r = 1+i+j;
                        }

                    // j*80 for each x on the row
                    // i* 80 for y on each column 
                    rect(80+ i*80 + random(-r, r), 
                         80+ j*80 + random(-r, r), 
                         60, 60);
                    
                } // end of column's loop
            
            
        } // end of row' for loop
    
    
} // end of draw()