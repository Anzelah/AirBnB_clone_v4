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
