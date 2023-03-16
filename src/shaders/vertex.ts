export default /* glsl */ `

uniform float uTime;
uniform float uScale;
uniform float uSize;

varying vec3 vPosition;

attribute vec3 aRandom;

void main() {
  vPosition = position;

  vec3 pos = position;
  float time = uTime * 4.;

  pos.x += sin(time * aRandom.x) * 0.01;
  pos.y += cos(time * aRandom.y) * 0.01;
  pos.z += cos(time * aRandom.z) * 0.01;

  pos.x *= uScale + sin(pos.z * 4. + time) * (1.0 - uScale);
  pos.y *= uScale + cos(pos.x * 4. + time) * (1.0 - uScale);
  pos.z *= uScale + cos(pos.y * 4. + time) * (1.0 - uScale);

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = uSize / -mvPosition.z;
}
`;
