import * as THREE from 'three';

			import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
			import { FontLoader } from 'three/addons/loaders/FontLoader.js';
            import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
            
			let camera, scene, renderer;
            init();

            // Création du cube
            const geometry = new THREE.BoxGeometry( 1, 1, 1 );
            const material = new THREE.MeshBasicMaterial( { color: "purple" } );
            const cube = new THREE.Mesh( geometry, material );
            camera.position.z = 5;
            
            // -----------------------------------------------------------------------------
            
            // Rendu de scène pour le cube
            const renderer2 = new THREE.WebGLRenderer({antialias: true});
            renderer2.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );
            rotate();
            scene.add( cube );
			

			function init( ) {

				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.set( 0, - 400, 600 );

				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0xf0f0f0 );

                const myLoader = new FontLoader();
                myLoader.load( 'font/ROBO_Regular.json', function ( font ) {
                    const geometry = new TextGeometry( 'Hello !', {
                        font: font,
                        size: 3,
                        height: 0.25,
                        depth: 0.5,
                        curveSegments: 8,
                        bevelEnabled: false,
                        bevelThickness: 0.125,
                        bevelSize: 0.025,
                        bevelOffset: 0,
                        bevelSegments: 1
                    } );
                    geometry.center();
                    // material, mesh
                    const material = new THREE.MeshNormalMaterial();
                    const mesh = new THREE.Mesh(geometry, material);
                    scene.add(mesh);
                    // render
                    mesh.position.set(0, 2, -5)
                    camera.position.set(0, 2, 5);
                    camera.lookAt(0, 0, 0);
                    renderer.render(scene, camera);
                
                } );

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );

				const controls = new OrbitControls( camera, renderer.domElement );
				controls.target.set( 0, 0, 0 );
				controls.update();

				controls.addEventListener( 'change', render );

				window.addEventListener( 'resize', onWindowResize );

			} // end init

            
            
            // -----------------------------------------------------------------------------
            
            // Animation du cube

            
            
            

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

				render();

			}

			function render() {

				renderer.render( scene, camera );

			}

            function rotate(){
                cube.rotation.x += 0.01;
                renderer.render (scene, camera);
                renderer.setAnimationLoop(rotate);
            }
            