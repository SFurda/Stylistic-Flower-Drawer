document.getElementById('drawButton').addEventListener('click', () => {
    const petalCount = parseInt(document.getElementById('petalCount').value, 10);
    const circleSize = parseInt(document.getElementById('circleSize').value, 10);
    drawFlower(petalCount, circleSize);
  });
  
  // function to draw the flower
  const drawFlower = (petalCount, circleSize) => {
    const canvas = document.getElementById('flowerCanvas');
    const ctx = canvas.getContext('2d');
  
    // Calculations
    const largeCircleRadius = circleSize * 2;
    const petalCircleRadius = largeCircleRadius / petalCount * 3.25;
    const canvasSize = largeCircleRadius * 2 + petalCircleRadius * 2;
  
    // Set canvas size and clear it
    canvas.width = canvas.height = canvasSize;
    ctx.clearRect(0, 0, canvasSize, canvasSize);
  
    // Central point 
    const center = { x: canvasSize / 2, y: canvasSize / 2 };
  
    // Function to draw circles
    const drawCircle = (x, y, radius, fillColor) => {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = fillColor;
      ctx.fill();
    };
  
    // Draw the large central circle
    drawCircle(center.x, center.y, largeCircleRadius, 'red');
  
    // Draw petals around the central circle
    for (let i = 0; i < petalCount; i++) {
      const angle = i * (2 * Math.PI / petalCount);
      const petalCenter = {
        x: center.x + largeCircleRadius * Math.cos(angle),
        y: center.y + largeCircleRadius * Math.sin(angle)
      };
      drawCircle(petalCenter.x, petalCenter.y, petalCircleRadius, 'red');
    }
  
    // Draw the smaller center circle
    drawCircle(center.x, center.y, circleSize, 'yellow');
  };
  