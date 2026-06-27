class Car{
  #brand;
  #model;
  speed;
  isTrunkOpen;

  constructor(carDetails){
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
    this.speed = 0;
    this.isTrunkOpen = false;
  }

  displayInfo(){
    console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, isTrunkOpen: ${this.isTrunkOpen}`);
  }
  go(){
    if(!this.isTrunkOpen){
      this.speed += 5;
      if(this.speed > 200){
        this.speed = 200;
      }
    }
  }
  brake(){
    this.speed -= 5;
    if(this.speed < 0){
      this.speed = 0;
    }
  }
  openTrunk(){
    if(this.speed === 0){
      this.isTrunkOpen = true;
    }
  }
  closeTrunk(){
    this.isTrunkOpen = false;
  }

}

class RaceCar extends Car{
  acceleration;

  constructor(carDetails){
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }


  go(){
    if(!this.isTrunkOpen){
      this.speed += this.acceleration;
      if(this.speed > 300){
        this.speed = 300;
      }
    }
  }
  openTrunk(){
    return '';
  }
  closeTrunk(){
    return '';
  }

}

const car1 = new Car({
  brand: 'toyota',
  model: 'Corolla'
});

const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3'
});

const car3 = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
  acceleration: 20
});

console.log(car1);
console.log(car2);
car1.displayInfo();
car2.displayInfo();

car1.openTrunk();
car1.go();
car1.go();
car1.brake();
car1.go();
car1.openTrunk();
car1.displayInfo();

car3.openTrunk();
car3.go();
car3.go();
car3.brake();
car3.go();
car3.openTrunk();
car3.displayInfo();
