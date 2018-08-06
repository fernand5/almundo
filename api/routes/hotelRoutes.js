'use strict';
module.exports = function(app) {
    var hotel = require('../controllers/hotelController');

    // Hotels Routes
    app.route('/hotels')
        .get(hotel.list_all_hotels)
        .post(hotel.create_a_hotel);


    app.route('/hotels/:hotelId')
        .get(hotel.read_a_hotel)
        .put(hotel.update_a_hotel)
        .delete(hotel.delete_a_hotel);

    app.route('/hotels/search/:hotelName/stars/:stars')
        .get(hotel.search_by_name_stars);
};