function calculateTriangleArea(){
    const triangleBaseField = document.getElementById('triangle-base');
    const triangleBase = triangleBaseField.value;
    const base = parseFloat(triangleBase);
    console.log(base);

    const triangleHeightField = document.getElementById('triangle-height');
    const triangleHeight = triangleHeightField.value;
    const height = parseFloat(triangleHeight);
    console.log(height);

    //we have multiple base and height with 0.5
    const triangleArea = 0.5 * base * height;
    console.log(triangleArea);

    // show the total in area

    const triangleTotalArea = document.getElementById('triangle-area');
    triangleTotalArea.innerText = triangleArea;

}


function calculateRectangleArea(){
    // rectangle width call and action
    const rectangleWidthField = document.getElementById('rectangle-width');
    const rectangleWidth = rectangleWidthField.value;
    const width = parseFloat(rectangleWidth);
    console.log(width);

    // rectangle length call and action
    const rectangleLengthField = document.getElementById('rectangle-length');
    const rectangleLength = rectangleLengthField.value;
    const length = parseFloat(rectangleLength);
    console.log(length);

    // we have to multiple width and length.

    const rectangleArea = width * length;
    console.log(rectangleArea);

    const rectangleAreaTotal = document.getElementById('rectangle-area');
    rectangleAreaTotal.innerText = rectangleArea;


}

function calculateParallelogramArea(){
// Parallogram Base call and action
    const parallelogramBaseField = document.getElementById('parallelogram-base');
    const parallelogramBase = parallelogramBaseField.value;
    const parallelogramBaseArea = parseFloat(parallelogramBase);
    console.log(parallelogramBaseArea);

// Parallogram Height call and action

    const parallelogramHeightField = document.getElementById('parallelogram-height');
    const parallelogramHeight = parallelogramHeightField.value;
    const parallelogramHeightArea = parseFloat(parallelogramHeight);
    console.log(parallelogramHeightArea);

// we have to multiple base and height
   
   const parallelogramArea = parallelogramBaseArea * parallelogramHeightArea;
   console.log(parallelogramArea);

   const parallelogramAreaDisplay = document.getElementById('parallelogram-area');
   parallelogramAreaDisplay.innerText = parallelogramArea;

}