// Create a command-line application for the parking lot
// system with the following requirements.

var parkingLot = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

var floorFor = {
  floor_0: ["Truck", 0],
  floor_1: ["Car", 1],
  floor_2: ["Bike", 2],
};

function addFloorParkingLot(numberOFFloor) {
  var floor = [0, 0, 0, 0];
  for (var i = 0; i < numberOFFloor; i++) {
    parkingLot.push(floor);
  }
}

function floorAllotedWhichTypeOfVehicles(floor_no, typeofVehicles) {
  for (var i = 0; i < parkingLot.length; i++) {
    if (i === floor_no) {
      var floorKey = `floor_${floor_no}`;
      floorFor[floorKey] = [typeofVehicles, floor_no];
      console.log(
        `Floor No ${floor_no} is Alloted ${typeofVehicles} type Of vehicle`
      );
    }
  }
}

// 0floor,1Floor,2floor.
function parkingLotSlotFloors(floor_no, numberOFSlot) {
  for (var i = 0; i < parkingLot.length; i++) {
    if (i === floor_no) {
      for (var j = 0; j < numberOFSlot; j++) {
        parkingLot[floor_no].push(0);
      }
    }
  }
}

var findVehicle = (vehicleNoDetail) => {
  for (let i = 0; i < parkingLot; i++) {
    for (var j = 0; j < parkingLot[i]; j++) {
      if (parkingLot[i][j] != 0) {
        if (parkingLot[i][j].vehicleNo === vehicleNoDetail) {
          return parkingLot[i][j];
        }
      }
    }
  }

  return "Please Provide Correct vehicle Number";
};

var allotedParkingSlot = (vehicle, noOfHoursePark, rentOfPERHours) => {
  var array = [];

  var type = vehicle.vehicleType;

  for (var k in floorFor) {
    if (floorFor[k][0] === type) {
      array.push(floorFor[k][1]);
    }
  }

  var flag = false;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < parkingLot[i].length; j++) {
      if (parkingLot[array[i]][j] == 0) {
        parkingLot[array[i]][j] = vehicle;

        return new tickets(
          array[i],
          j,
          noOfHoursePark,
          rentOfPERHours,
          vehicle
        );
      }
    }
  }

  return "Parking Slot Is Not Present..";
};

class vehicle {
  vehicleNo;
  vehicleColor;
  vehicleOwnerName;
  vehicleType;

  constructor(vehicleNo, vehicleColor, vehicleOwnerName, vehicleType) {
    this.vehicleNo = vehicleNo;
    this.vehicleColor = vehicleColor;
    this.vehicleOwnerName = vehicleOwnerName;
    this.vehicleType = vehicleType;
  }
}

class tickets {
  floor_no;
  slot_no;
  number_hoursPark;
  totalParkingFeesPerHours;
  vehicle;

  constructor(
    floor_no,
    slot_no,
    number_hoursPark,
    totalParkingFeesPerHours,
    vehicle
  ) {
    this.floor_no = floor_no;
    this.slot_no = slot_no;
    this.number_hoursPark = number_hoursPark;
    this.totalParkingFeesPerHours = totalParkingFeesPerHours;
    this.vehicle = vehicle;
  }
}

console.log(parkingLot);
console.log(floorFor);

addFloorParkingLot(2);
console.log(parkingLot);

floorAllotedWhichTypeOfVehicles(3, "Car");
console.log(floorFor);

parkingLotSlotFloors(2, 5);

console.log(parkingLot);

floorAllotedWhichTypeOfVehicles(4, "Car");
console.log(floorFor);

var t1 = allotedParkingSlot(
  new vehicle("Mh 15 SL7777", "red", "Sahil Lagad", "Car"),
  3,
  20
);

console.log(t1);
