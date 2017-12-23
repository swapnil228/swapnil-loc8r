var mongoose = require('mongoose');

var openingTimeSchema = new mongoose.Schema({
  days: {
    type: String,
    required: true
  },
  opening: String,
  closing: String,
  closed: {
    type: Boolean,
    required: true
  }
});

var reviewSchema = new mongoose.Schema({
  author: String,
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  reviewText: String,
  createdOn: {
    type: Date,
    "default": Date.now
  }
});

var locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: String,
  rating: {
    type: Number,
    "default": 0,
    min: 0,
    max: 5
  },
  facilities: [String],
  coords: {
    type: [Number],
    index: '2dsphere'
  },
  openingTimes: [openingTimeSchema],
  reviews: [reviewSchema]

});

mongoose.model('Location', locationSchema);


// db.locations.save({
//   name: 'Toit',
//   address: '125 High Street, Reading, RG6 1PS',
//   rating: 3,
//   facilities: ['Hot drinks', 'Food', 'Premium wifi'],
//   coords: [-0.9690884, 51.455041],
//   openingTimes: [{
//     days: 'Monday - Friday',
//     opening: '7:00am',
//     closing: '7:00pm',
//     closed: false
//   }, {
//     days: 'Saturday',
//     opening: '8:00am',
//     closing: '5:00pm',
//     closed: false
//   }, {
//     days: 'Sunday',
//     closed: true
//   }],
//   reviews: {
//     author: 'Simon Holmes',
//     id: ObjectId(),
//     rating: 5,
//     timestamp: new Date("Jul 16, 2013"),
//     reviewText: "What a great place. I can't say enough good things about it."
//   }
// })
