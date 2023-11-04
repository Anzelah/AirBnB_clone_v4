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

$(function () {
  const url = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(url, function (data, textStatus) {
    if (textStatus === 'success') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});
