$(document).ready(function() {
    let shapeContainer = $('#shapeContainer');
    let addingShape = false;
    let removingShape = false;

    $('#addShape').click(async function() {
        if (addingShape || removingShape) return;
        addingShape = true;

        let shapeType = $('#shapeType').val();
        let shapeColor = $('#shapeColor').val();
        let shapeSize = 50; // Default size

        let shape = $('<div></div>')
            .addClass('shape ' + shapeType)
            .css({
                'background-color': shapeColor,
                'width': shapeSize + 'px',
                'height': shapeSize + 'px',
                'display': 'none'
            });

        shapeContainer.append(shape);
        await shape.slideDown().promise();
        addingShape = false;
    });

    $('#removeShape').click(async function() {
        if (addingShape || removingShape) return;
        removingShape = true;

        let lastShape = shapeContainer.children().last();
        if (lastShape.length > 0) {
            await lastShape.fadeOut().promise();
            lastShape.remove();
        }
        removingShape = false;
    });
});
