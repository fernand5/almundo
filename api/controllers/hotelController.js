var mongoose = require('mongoose'),
    Hotel = mongoose.model('Hotels');

exports.list_all_hotels = function(req, res) {
    Hotel.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.create_a_hotel = function(req, res) {
    var new_hotel = new Hotel(req.body);
    new_hotel.save(function(err, hotel) {
        if (err)
            res.send(err);
        res.json(hotel);
    });
};


exports.read_a_hotel = function(req, res) {
    Hotel.find( {id: req.params.hotelId}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.update_a_hotel = function(req, res) {
    Hotel.findOneAndUpdate({_id: req.params.hotelId}, req.body, {new: true}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.delete_a_hotel = function(req, res) {
    Hotel.remove({
        _id: req.params.hotelId
    }, function(err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Hotel successfully deleted' });
    });
};

exports.search_by_name_stars = function(req, res) {
    let stars = req.params.stars.split(" ");
    var nameToSearch = req.params.hotelName;
    var starsTosearch = []

    if(nameToSearch == 'all'){
        nameToSearch = new RegExp('.*', 'i');
    } else {
        nameToSearch = new RegExp(req.params.hotelName, 'i');
    }
    if(stars[0] == 'all'){
        starsTosearch =[1,2,3,4,5];
    } else {
        starsTosearch = stars.map(function (x) {
            return parseInt(x, 10);
        });
    }


    Hotel.find({name: nameToSearch, stars : { $in:   starsTosearch }}).sort({ stars: -1 }).exec(function(err, result) {
        if (err)
            res.send(err);
        res.json(result);
    });
};
