$(document).ready(function () {
  const checkedAmenities = {};
  $('input:checkbox').change(function () {
    const amenityId = $(this).data('id');
    if ($(this).prop('checked')) {
      checkedAmenities[amenityId] = $(this).data('name');
    } else {
      delete checkedAmenities[amenityId];
    }
    const amenities = Object.values(checkedAmenities);
    if (amenities.length > 0) {
      $('div.amenities h4').text(amenities).join(', ');
    } else {
      $('div.amenities h4').html('&nbsp;');
    }
  });
});
