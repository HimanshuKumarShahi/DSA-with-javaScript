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




// Scenario A: Train (Linear Constant Speed)
const trainSpeed = 60; 
const trainTime = 120; 
console.log(`[TRAIN] Distance Traveled: ${Kinematics.calcDistance(trainSpeed, trainTime)} m`);

