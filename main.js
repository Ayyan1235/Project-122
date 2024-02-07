function preload(){whjr = loadImage("https://upload.wikimedia.org/wikipedia/commons/1/15/WhiteHat_Jr.webp");}

     function setup()
     {
        canvas = createCanvas(640,480);
        canvas.position(320,240);
      
     }

     function draw() {
        image(whjr, 220, 220, 200, 100);

        fill(255,0,0);
        stroke(255,0,0);
        circle(30,20,40);
        
        fill(0,0,255);
        stroke(0,0,255);
        circle(30,420,40);

        fill(255,0,255);
        stroke(255,0,255);
        circle(590,420,40);

        fill(0,255,0);
        stroke(0,255,0);
        circle(590,20,40);

        fill(255,0,0);
        stroke(255,0,0);
        rect(30,20,20,5000);
        
        fill(0,0,255);
        stroke(0,0,255);
        rect(30,420,5000,20);

        fill(255,0,255);
        stroke(255,0,255);
        rect(590,20,20,5000);

        fill(0,255,0);
        stroke(0,255,0);
        rect(30,20,5000,20);

        
       
     }

     function take_snapshot()
     {
        save('web-image.png');
     }
     