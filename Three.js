<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cyberpunk Ray Tracing UI</title>
  <style>
    body { margin: 0; overflow: hidden; background: #0f0c29; }
    canvas { display: block; }
  </style>
</head>
<body>
  <canvas id="threeCanvas"></canvas>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/stats.js/r17/Stats.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/postprocessing/EffectComposer.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/postprocessing/RenderPass.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/postprocessing/UnrealBloomPass.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/shaders/CopyShader.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/postprocessing/ShaderPass.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/postprocessing/FilmPass.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMGenerator.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js/pmrem/PMREMCubeUVPacker.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three/examples/js12