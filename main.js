import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

// -----------------------------------------------------------------------------
// Création de scène et caméra pour le cube
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 5000 );

// Création controles caméra
// const controls = new OrbitControls( camera, renderer.domElement );
// const loader = new GLTFLoader();

// Obligatoire responsive
		let camera2, scene2, renderer2;
			function onWindowResize() {

				const canvasWidth = window.innerWidth;
				const canvasHeight = window.innerHeight;

				renderer2.setSize( canvasWidth, canvasHeight );

				camera2.aspect = canvasWidth / canvasHeight;
				camera2.updateProjectionMatrix();

				render();

			}

// -----------------------------------------------------------------------------

// Création texte morgane
const loaderbonjour = new FontLoader();
loaderbonjour.load( 'font/Huntrela_Regular (1).json', function ( font ) {
	const geometry = new TextGeometry( 'Bonjour', {
        font: font,
        size: 2,
        height: 0.10,
		depth: 0.5,
        curveSegments: 5,
        bevelEnabled: false,
    } );

geometry.center();
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
// Position de la police
mesh.position.set(0, 2, -5)

camera.position.set(0, 2, 5);
camera.lookAt(0, 0, 0);
renderer.render(scene, camera);
} );

//------------------------------------------------------------------------------ 

// Création d'une lumière
let hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4)
scene.add(hemiLight)

scene.add(new THREE.AxesHelper(500))

// -----------------------------------------------------------------------------

// Création du cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: "purple" } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

// -----------------------------------------------------------------------------

// Rendu de scène pour le cube
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// -----------------------------------------------------------------------------

// Animation du cube
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );



// Création d'un triangle
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
// camera.position.set( 0, 0, 100 );
// camera.lookAt( 0, 0, 0 );

// const scene = new THREE.Scene();

// //create a blue LineBasicMaterial
// const material = new THREE.LineBasicMaterial( { color: "purple" } );

// const points = [];
// points.push( new THREE.Vector3( - 20, 0, 0 ) );
// points.push( new THREE.Vector3( 0, 25, 0 ) );
// points.push( new THREE.Vector3( 20, 0, 0 ) );
// points.push( new THREE.Vector3( -20, 0, 0))

// const geometry = new THREE.BufferGeometry().setFromPoints( points );

// const line = new THREE.Line( geometry, material );

// // scene.add( line );
// renderer.render( scene, camera );