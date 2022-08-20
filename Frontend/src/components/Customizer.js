import "../index.css";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(props.modelname);
  console.log(nodes);
  console.log(materials);

  const [meshArray, setMeshArray] = useState([]);

  useEffect(() => {
    showModel();
  }, []);

  const showModel = () => {
    return Object.keys(nodes)
      .filter((node) => nodes[node].type === "Mesh")
      .map((obj, i) => {
        let cur_mat = materials[Object.keys(materials)[i]];
        // console.log(cur_mat.name);
        // console.log(props);
        return (
          <mesh
            geometry={nodes[obj].geometry}
            material={cur_mat}
            material-color={props.customMat[i]}
          />
        );
      });
  };

  return (
    <group ref={group} {...props} dispose={null} scale={8}>
      {showModel()}
    </group>
  );
}

function Customizer() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const { modelname } = useParams();

  const [mesh, setMesh] = useState("#ffffff");
  const [stripes, setStripes] = useState("#ffffff");
  const [sole, setSole] = useState("#ffffff");
  const [laces, setLaces] = useState("#ffffff");
  const [band, setBand] = useState("#ffffff");
  const [patch, setPatch] = useState("#ffffff");
  const [caps, setCaps] = useState("#ffffff");
  const [inner, setInner] = useState("#ffffff");

  // const modelName = `models/${modelname}/scene.gltf`;
  const modelName = "Astronaut.glb";
  // const modelName = "models/shoe1/scene.gltf";  // starts as a blank model in zoomed view,has to put every detail
  // const modelName = "models/shoe2/scene.gltf"; // works as sole color changes which is also changing the shoe colour
  // const modelName = "models/shoe3/scene.gltf";   //not working properly
  // const modelName = "models/shoe4/scene.gltf";   //not working properly
  // const modelName = "models/shoe5/scene.gltf";      //not working properly
  // const modelName = "models/shoe6/scene.gltf";   //there is only tint of colour
  // const modelName = "models/shoe7/scene.gltf"       //not showing anything
  // const modelName = "models/shoe8/scene.gltf"    // only one option but changes whole colour of shoe
  // const modelName = "models/shoe9/scene.gltf"    //  not working ,rootnode option but changes to colour is not dynamic
  // const modelName = "models/shoe10/scene.gltf"   // only base color changes
  //const modelName = "models/shoe11/scene.gltf"    //  not showing anything
  // const modelName = "models/shoe12/scene.gltf"   //only one option but changes whole colour of shoe
  // const modelName = "models/shoe13/scene.gltf"   // showing but not working
  // const modelName = "models/t-shirt1/scene.gltf"  //not showing anything
  // const modelName = "models/t-shirt2/scene.gltf"   // working but only one colour changes.
  // const modelName = "models/t-shirt3/scene.gltf"   //showing but not working
  // const modelName = "models/t-shirt4/scene.gltf"   // working but out of view
  //  const modelName = "models/t-shirt5/scene.gltf"   //not showing anything
  //  const modelName = "models/t-shirt6/scene.gltf"  //showing but not working
  // const modelName = "models/t-shirt7/scene.gltf"   // working but out of view
  // const modelName = "models/chair1/scene.gltf"  //showing but not working
  // const modelName = "models/chair2/scene.gltf"
  // const modelName = "models/chair3/scene.gltf"
  // const modelName = "models/chair4/scene.gltf"
  // const modelName = "models/chair5/scene.gltf"
  // const modelName = "models/chair6/scene.gltf"
  // const modelName = "models/chair7/scene.gltf"
  // const modelName = "models/chair8/scene.gltf"
  // const modelName = "models/jeans1/scene.gltf"
  // const modelName = "models/jeans2/scene.gltf"
  // const modelName = "models/jeans3/scene.gltf"
  // const modelName = "models/jeans4/scene.gltf"
  // const modelName = "models/jeans5/scene.gltf"
  // const modelName = "models/jeans6/scene.gltf"
  // const modelName = "models/jeans7/scene.gltf"
  // const modelName = "models/jeans8/scene.gltf"

  // const modelName = "models/car/scene.gltf";     //car
  // const modelName = "models/figurine/scene.gltf";  //person

  console.log(modelName);
  const { nodes, materials } = useGLTF(modelName);
  console.log(nodes);
  console.log(materials);
  const [customMat, setCustomMat] = useState(
    Array.from(Object.keys(materials), (a) => "#fff")
  );
  console.log(customMat);

  const updateCustomMat = (i, val) => {
    let newCustomMat = customMat;
    newCustomMat[i] = val;
    setCustomMat([...newCustomMat]);
  };

  return (
    <div className="App">
      <div className="row" style={{ marginTop: "5vh" }}>
        <div className="col-md-8">
          <div
            className="product-canvas border border-warning border-3 rounded-2"
            style={{ marginLeft: "10px" }}
          >
            <Canvas style={{ height: "80vh" }}>
              <Suspense fallback={null}>
                <ambientLight />
                <spotLight
                  intensity={0.9}
                  angle={0.1}
                  penumbra={1}
                  position={[10, 15, 10]}
                  castShadow
                />
                <Model
                  customMat={customMat}
                  modelname={modelName}
                  customColors={{
                    mesh: mesh,
                    stripes: stripes,
                    sole: sole,
                    laces: laces,
                    band: band,
                    patch: patch,
                    caps: caps,
                    inner: inner,
                  }}
                />
                <OrbitControls
                  enablePan={true}
                  enableZoom={true}
                  enableRotate={true}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>
        {/* colour chooser */}
        <div className="col-md-4">
          <div className="card-c pallete-card">
            <div className="card-body">
              <h2 className="text-center">Color chooser</h2>
              <hr />
              {customMat.map((mat, i) => (
                <div className="card-body" style={{ paddingTop: "10px" }}>
                  <h4 style={{ display: "inline" }} for="mesh">
                    {Object.keys(materials)[i].toUpperCase()}
                  </h4>
                  {"  "}&nbsp;&nbsp;&nbsp;
                  <input
                    type="color"
                    id="mesh"
                    name="mesh"
                    value={mat}
                    onChange={(e) => updateCustomMat(i, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* <div className="colors container mt-2 border border-3 border-danger">
          
            <div className="row">
              <div className="col-md-3 mt-4">
                <div className="cards">
                  
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Customizer;
