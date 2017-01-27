const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/trip-planner');

var Place = db.define('places',{
  address : {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  location:{
    type: Sequelize.ARRAY(Sequelize.FLOAT)
  }
})

var Hotel = db.define('hotels',{
  name : {
    type: Sequelize.STRING
  },
  num_stars: {
    type: Sequelize.INTEGER
  },
  amenities: {
    type: Sequelize.STRING
  }
})

var Activity = db.define('activities',{
  name : {
    type: Sequelize.STRING
  },
  age_range : {
    type: Sequelize.STRING
  }
});

var Restaurant = db.define('restaurants',{
  name : {
    type: Sequelize.STRING
  },
  cuisine : {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  }
});

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = {
  Place,
  Hotel,
  Activity,
  Restaurant,
  db
}
