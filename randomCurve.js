
//make animation of the curve
function anim(count,i)
{
 let array_of_points=matrix_of_points[i];
  DrawCurve(array_of_points[count]);
  
}

function CP() {
  let cp = floor(random(0, width));
  return cp
}

function CreatePoints(num){
  let points = [];
  let x1s = [];
	let x2s = [];
  let y1s = [];
	let y2s = [];

	for (var i = 0; i < num/2; i++) {
		x1s.push(random(10+width/4, 3*width/4-10));
		x2s.push(random(10+width/4, 3*width/4-10));
		y1s.push(random(10, height-10));
		y2s.push(random(10, height-10));
	}

	x1s.sort((a, b) => a - b);
	x2s.sort((a, b) => b - a);
	y1s.sort((a, b) => a - b);
	y2s.sort((a, b) => b - a);

	for (var i = 0; i < num/2; i++) {
		points.push(x1s[i],y1s[i]);
	}
	for (var i = 0; i < num/2; i++) {
		points.push(x2s[i],y2s[i]);
	}
	return points
}

function DrawCurve(points) {
  for (let i = 0; i < points.length; i += 2) {
    let p = [];
    for (let add = 0; add < 8; add += 1) {
      if ((i + add) < points.length) {
        p.push(points[i + add]);
      } else {
        p.push(points[i + add - points.length]);
      }

    }
    curve(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7]);
    p = [];
  }
}

function randn_bm() {
    var u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}