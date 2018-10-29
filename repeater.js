//Add Field
$(document).on('click','.add-feature', function (event) {
    event.preventDefault();
    var input_group = $(this).parents('.input-group');
    var cloned = input_group.clone().insertAfter(input_group);
    cloned.find('input').val('');
    cloned.find('.remove-feature').removeClass('d-none');
});
//Remove Field
$(document).on('click','.remove-feature', function (event) {
    event.preventDefault();
    var input_group = $(this).parents('.input-group');
    input_group.remove();
});