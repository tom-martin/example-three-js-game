var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var input = new Input();

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var lastTs = 0;
var render = function (ts) {
    requestAnimationFrame( render );

    var timeDelta = (ts - lastTs)/1000;
    lastTs = ts;

    var movementSpeed = 5*timeDelta;

    if(input.isLeftPressed) {
        cube.position.x -= movementSpeed;
    }

    if(input.isRightPressed) {
        cube.position.x += movementSpeed;
    }

    if(input.isUpPressed) {
        cube.position.y += movementSpeed;
    }

    if(input.isDownPressed) {
        cube.position.y -= movementSpeed;
    }

    renderer.render(scene, camera);
};

requestAnimationFrame(render);