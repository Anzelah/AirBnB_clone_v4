$(document).ready(function () {
  let checkedAmenities = {};
  $('input:checkbox').change(function () {
    let amenityId = $(this).data('id');
    if ($(this).prop('checked')) {
      checkedAmenities[amenityId] = $(this).data('name');
    } else {
      delete checkedAmenities[amenityId];
    }
    let amenities = Object.values(checkedAmenities);
    $('div.amenities h4').text(amenities).join(', ');
  });
});
