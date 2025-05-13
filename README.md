Commande pour installer Node.JS : 
- Installer l'installeur node
  
    - si l'installeur ne marche pas, ouvrir WindowsPowershell et écrire :
        -  Télécharger et installer fnm :
            winget install Schniz.fnm
        -  Télécharger et installer Node.js :
            fnm install 22
        -  Vérifier la version de Node.js :
          node -v # Doit afficher "v22.15.0".
        -  Vérifier la version de npm :
          npm -v # Doit afficher "10.9.2".
      
- Dans le terminal VSCode :
  
    npm install --save three
    npm install --save-dev vite
  
  pour installer les NPM ( nugets package )

- Dans le terminal VSCode :
  
    npx vite
  
  pour avoir le visuel en temps réel
  
------------------------------------------------------------------------------------------------------------------------

 - Dans le .js :
   
    import * as THREE from 'three';
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
    
    const controls = new OrbitControls( camera, renderer.domElement );
    const loader = new GLTFLoader();
   
pour importer les modules de base

- les réglages de bases :
  
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

  -------------------------------------------------------------------------------------------------------------------

  Pour avoir une organisation réelle et correcte des lignes précédentes, voir main.js
