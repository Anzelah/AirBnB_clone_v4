$ ( document ).ready(function () {
	let checkedAmenities = {};
	$( "input:checkbox" ).change(function () {
		var amenityId = $(this).data('id')
		if ($(this).prop('checked')) {
		checkedAmenities[amenityId] = $(this).data('name');
		} else {
			delete checkedAmenities[amenityId];
		}
		amenities = Object.values(checkedAmenities);
		if (amenities.length) > 0 {
			$( "div.amenities h4" ).text(amenities).join(', ');
		} else {
			$( "div.amenities h4" ).html(&nbsp);
		}
	});
});
