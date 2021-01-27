// We have a list of points on the plane.  Find the K closest
// points to the origin (0, 0).

// (Here, the distance between two points on a plane is the
// Euclidean distance.)

// You may return the answer in any order.  The answer is
// guaranteed to be unique (except for the order that it is
// in.)

function distanceFromOrigin(point) {
  return Math.sqrt(point[0]**2 + point[1]**2);
}

function kClosest(points, k) {
  const coordinatesAndDistance = [];
  const closestCoordinates = [];

  for (point of points) {
    coordinatesAndDistance.push({
      point,
      distance: distanceFromOrigin(point),
    });
  }

  const sortedByDistance = coordinatesAndDistance.sort((a, b) => {
    return a.distance - b.distance;
  });

  sortedByDistance.slice(0, k).forEach(entry => {
    closestCoordinates.push(entry.point);
  });

  return closestCoordinates;
};

console.log(kClosest([[1,3],[-2,2]], 1));
// [[-2,2]]

console.log(kClosest([[3,3],[5,-1],[-2,4]], 2));
// [[3,3],[-2,4]]