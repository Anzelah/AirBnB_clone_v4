$(document).ready(function () {
  let selectedAmenities = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      selectedAmenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete selectedAmenities[$(this).data('id')];
    }
    let amenitiesList = Object.values(selectedAmenities);
    if (amenitiesList.length > 0) {
      $('div.amenities > h4').text(Object.values(selectedAmenities).join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
    if (textStatus === 'success') {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    }
  });
});

$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  type: 'POST',
  data: '{}',
  contentType: 'application/json',
  dataType: 'json',
  success: function (data) {
    for (let i = 0; i < data.length; i++) {
      let place = data[i];

      let guest = place.max_guest === 1 ? ' Guest' : ' Guests';
      let rooms = place.number_rooms === 1 ? ' Bedroom' : ' Bedrooms';
      let bath = place.number_bathrooms === 1 ? ' Bathroom' : ' Bathrooms';

      $('section.places').append('<article><div class="title_box"><h2>' + place.name + '</h2><div class="price_by_night">$' + place.price_by_night + '</div></div><div class="information"><div class="max_guest">' + place.max_guest + guest + '</div><div class="number_rooms">' + place.number_rooms + rooms + '</div><div class="number_bathrooms">' + place.number_bathrooms + bath + '</div><div class="description"><p>' + place.description + '</p></div></article>');
    }
  }
});

$(':button').click(function () {
  amenitiesList
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'POST',
    data: JSON.stringify({"amenities": amenitiesList}),
    contentType: 'application/json',
    dataType: 'json',
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        let place = data[i];

        let guest = place.max_guest === 1 ? ' Guest' : ' Guests';
        let rooms = place.number_rooms === 1 ? ' Bedroom' : ' Bedrooms';
        let bath = place.number_bathrooms === 1 ? ' Bathroom' : ' Bathrooms';

        $('section.places').append('<article><div class="title_box"><h2>' + place.name + '</h2><div class="price_by_night">$' + place.price_by_night + '</div></div><div class="information"><div class="max_guest">' + place.max_guest + guest + '</div><div class="number_rooms">' + place.number_rooms + rooms + '</div><div class="number_bathrooms">' + place.number_bathrooms + bath + '</div><div class="description"><p>' + place.description + '</p></div></article>');
      }
    }
  });
});
