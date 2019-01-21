let arrayOfEllipses = [];
let widthOfEllipses = 25;
let minDistance = 200;
let showLinesBetweenCursorAndCloseAtoms = false;

    class atom {

        constructor (xPos,yPos) {
            this.velocity = 0;
            this.xStartPos = xPos;
            this.yStartPos = yPos;
            this.xPos = xPos;
            this.yPos = yPos;
            this.width = widthOfEllipses;
        }
    
        create() {
            ellipse(this.xPos,this.yPos, this.width, this.width)
        }
    
    }


    function calculateDistanceBetween(element1, element2) {
        return Math.sqrt(Math.pow((element2.xPos - element1.xPos), 2) + Math.pow((element2.yPos - element1.yPos),2))
    }

    function calulateDistanceBetweenAtomAndPointer(element) {
        return Math.sqrt(Math.pow((element.xPos - mouseX), 2) + Math.pow((element.yPos - mouseY),2))
    }



    function differenceBetweenElementXAndPointerX(element) {
        return element.xPos - mouseX
    }

    function differenceBetweenElementYAndPointerY(element) {
        return element.yPos - mouseY
    }

    function differenceBetweenElementXAndStartX(element) {
        return element.xPos - element.xStartPos
    }

    function differenceBetweenElementYAndStartY(element) {
        return element.yPos - element.yStartPos
    }





    function createAllAtoms(numberOfRows, numberOfColumns) {


        for (let rows = 0; rows < numberOfRows ; rows++) {
            arrayOfEllipses[rows] = [];
            for (let cols = 0; cols < numberOfColumns ; cols++) {
                arrayOfEllipses[rows][cols] = new atom(50 + widthOfEllipses * rows * 2, 50 + widthOfEllipses * cols * 2);
            }
            
        }
    }

    function updateAllAtoms() {
        for (let rows = 0; rows < arrayOfEllipses.length; rows++) { 
            for (let cols = 0; cols < arrayOfEllipses[0].length; cols++) {
                arrayOfEllipses[rows][cols].create()
            }
            
        }
    }

    



    



function setup() {

    createCanvas(1880,900);
    background(0);
    createAllAtoms(30,12);
    
}



function draw() {
    background(0);
    updateAllAtoms();

    
    
    for (let rows = 0; rows < arrayOfEllipses.length; rows++) { 
        for (let cols = 0; cols < arrayOfEllipses[0].length; cols++){

            if (calulateDistanceBetweenAtomAndPointer(arrayOfEllipses[rows][cols]) < minDistance ) {

                arrayOfEllipses[rows][cols].xPos -= (differenceBetweenElementXAndPointerX(arrayOfEllipses[rows][cols])/100);
                arrayOfEllipses[rows][cols].yPos -= (differenceBetweenElementYAndPointerY(arrayOfEllipses[rows][cols])/100);
                stroke(255)

                if (showLinesBetweenCursorAndCloseAtoms) {
                    line(mouseX,mouseY,arrayOfEllipses[rows][cols].xPos,arrayOfEllipses[rows][cols].yPos)
                } 

                
    
    
            } else {
    
                arrayOfEllipses[rows][cols].velocity = 0;
    
    
                if (differenceBetweenElementXAndStartX(arrayOfEllipses[rows][cols]) > 0 ){
                    
                    arrayOfEllipses[rows][cols].xPos-= 0.5
    
                } else if (differenceBetweenElementXAndStartX(arrayOfEllipses[rows][cols]) < 0){
    
                    arrayOfEllipses[rows][cols].xPos+= 0.5
    
                }
    
                if (differenceBetweenElementYAndStartY(arrayOfEllipses[rows][cols]) > 0 ){
    
                    arrayOfEllipses[rows][cols].yPos-= 0.5
    
                } else if (differenceBetweenElementYAndStartY(arrayOfEllipses[rows][cols]) < 0){
    
                    arrayOfEllipses[rows][cols].yPos+= 0.5
                }
    
            }

        }

        
    }

    
    
}










