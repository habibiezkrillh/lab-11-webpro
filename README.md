# Shape Container Project

## Overview

This project allows users to add and remove customizable shapes (circles or squares) to/from a container. Users can select the shape type and color. Shapes are animated when added or removed.

## HTML Structure

### Sections

1. **shapeContainerWrapper**:
    - Contains the entire shape area.
    - Styled to have padding, a border, and fixed width to center the container.

2. **shapeContainer**:
    - Holds and arranges the shapes using flexbox.

3. **controls**:
    - Contains buttons and inputs for controlling the shapes.

4. **shapeControls**:
    - Subsections within controls for each input element.

### CSS Styles

- **.shapeContainerWrapper**:
    - Adds padding and border for better visual structure and centers the container.
- **.shapeContainer**:
    - Uses flexbox to wrap shapes, ensuring they align properly within the container.
- **.controls**:
    - Adds margin to separate control section from the container.
- **.shapeControls**:
    - Adds margin to space out individual control elements.
- **.shape**:
    - Basic styles for shapes including margin and transition for animations.
- **.circle**:
    - Adds border-radius for circular shapes.

## JavaScript Functionality

### Task 2: Adding Shapes

- **addShape Function**:
    - Retrieves selected shape type and color.
    - Creates a shape div with the specified properties.
    - Appends the shape to the container and animates it sliding in from the left.

### Task 3: Removing Shapes

- **removeShape Function**:
    - Selects the last shape added.
    - Removes the shape with a fade-out animation.

### Task 4: Enhancements

- Prevents spamming of add/remove actions using flags (`adding` and `removing`) to ensure one action completes before another starts.

### Task 5: Customization

- Allows user to select the shape type (circle or square) and color using respective input elements.

## How to Use

1. Open the `index.html` file in a browser.
2. Use the dropdown to select the shape type.
3. Use the color input to select the shape color.
4. Click "Add Shape" to add the shape to the container.
5. Click "Remove Shape" to remove the last shape added.

## Future Enhancements (Optional)

- Allow users to input the size of the shape for further customization.

## Notes

- Ensure jQuery is included for the script to work.
- Code is commented for better understanding and readability.

 
 
