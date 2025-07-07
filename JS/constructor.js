var myCar = {
  maxSpeed: 70,
  driver: "Umwizerwa Ruth",
  drive: function (speed, time) {
    console.log(speed * time);
  },
  logDriver: function () {
    console.log("driver name is ", this.driver);
  },
};
