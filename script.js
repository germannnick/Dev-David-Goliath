// document.addEventListener("DOMContentLoaded", event =>{
//   const rock = document.getElementById('rock');
//   const resetButton = document.getElementById('reset');
  
//   let rockSpot;
//    // This window section was added with help of AI to get rid of an error
//   window.addEventListener('load', ()=> {
//     rockSpot ={
//       left: rock.offsetLeft + "%",
//       top: rock.offsetTop + "%"
//     };
//     resetButton.addEventListener('onclick', rockSpot)
//   });

// function slung(event){
//   event.dataTransfer.setDate("Text", event.target.id);
// }
document.addEventListener('DOMContentLoaded', function() {
  const draggableElement = document.getElementById('shot');

  let isDragging = false,
      initialX,
      initialY,

  function setInitialPosition() {
      xOffset = draggableElement.offsetLeft;
      yOffset = draggableElement.offsetTop;
  }

  // Call setInitialPosition when the window loads to get the initial position
  window.addEventListener('load', setInitialPosition);

  // Start dragging
  draggableElement.addEventListener('mousedown', dragStart);
  // Stop dragging
  document.addEventListener('mouseup', dragEnd);
  // Dragging in progress
  document.addEventListener('mousemove', drag);

  function dragStart(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;

    if (e.target === draggableElement) {
      isDragging = true;
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
  }

  function slung(event) {
    if (isDragging) {
      e.preventDefault();
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;

      // Update offsets for the next move or end
      xOffset = currentX;
      yOffset = currentY;

      // Set the element's new position:
      setTranslate(currentX, currentY, draggableElement);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
  }

  // Optional: Reset button functionality
  const resetButton = document.getElementById('resetButton');
  if (resetButton) {
    resetButton.addEventListener('click', function() {
      setTranslate(xOffset, yOffset, draggableElement); // Reset to initial position
      // Reset offsets if needed
      xOffset = draggableElement.offsetLeft;
      yOffset = draggableElement.offsetTop;
    });
  }
});