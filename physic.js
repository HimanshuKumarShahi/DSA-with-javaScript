// 1. Kinematics Calculator 
class Kinematics {
  // Scalar: Speed = Distance / Time
  static calcSpeed(distance, time) {
    return distance / time;
  }

  // Scalar: Distance = Speed * Time
  static calcDistance(speed, time) {
    return speed * time;
  }

  // Vector: Acceleration = (Final Velocity - Initial Velocity) / Time
  static calcAcceleration(initialVelocity, finalVelocity, time) {
    return (finalVelocity - initialVelocity) / time;
  }

  // Vector: Displacement = ut + 0.5 * a * t^2
  static calcDisplacement(initialVelocity, time, acceleration) {
    return (initialVelocity * time) + (0.5 * acceleration * Math.pow(time, 2));
  }

  // Vector: Final Velocity = u + at
  static calcFinalVelocity(initialVelocity, acceleration, time) {
    return initialVelocity + (acceleration * time);
  }
}

// 2. Vector Mathematics 
class Vector2D {
  constructor(magnitude, directionDegrees, label) {
    this.magnitude = magnitude;
    this.direction = directionDegrees; 
    this.label = label;
  }

  getComponents() {
    const radians = this.direction * (Math.PI / 180);
    return {
      x: this.magnitude * Math.cos(radians),
      y: this.magnitude * Math.sin(radians)
    };
  }

  add(otherVector) {
    const v1 = this.getComponents();
    const v2 = otherVector.getComponents();
    const rx = v1.x + v2.x;
    const ry = v1.y + v2.y;

    const resultantMagnitude = Math.sqrt(rx * rx + ry * ry);
    let resultantDirection = Math.atan2(ry, rx) * (180 / Math.PI);
    if (resultantDirection < 0) resultantDirection += 360;

    return new Vector2D(resultantMagnitude, resultantDirection, `Resultant of ${this.label} & ${otherVector.label}`);
  }
}



// Scenario A: Train (Linear Constant Speed)
const trainSpeed = 60; 
const trainTime = 120; 
console.log(`[TRAIN] Distance Traveled: ${Kinematics.calcDistance(trainSpeed, trainTime)} m`);

