# React Three Fiber Shoe Model Viewer

This project is a 3D shoe model viewer built with React Three Fiber. It uses the `@react-three/fiber` library to render a 3D model of a shoe, specifically an Air Max, allowing users to view it with a rotating animation. The model is loaded from an OBJ file, and a basic material is applied to give it color and shading.
## Video



https://github.com/user-attachments/assets/3d0af4ec-6426-40b8-87f8-15624c4d3ec5


## Features

- **3D Model Rendering:** Uses Three.js and React Three Fiber to render a 3D shoe model.
- **Model Animation:** Rotates the shoe model continuously for a dynamic viewing experience.
- **Lighting and Shadows:** Incorporates ambient and point lighting to enhance the model's appearance with shadows.
- **Scalable and Customizable:** Easily adjust the model's scale, color, and materials.

## Installation

To get started with this project, you'll need to clone the repository and install the necessary dependencies.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/react-three-fiber-shoe-viewer.git
   cd react-three-fiber-shoe-viewer
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

4. **Access the application:**

   Open your web browser and go to `http://localhost:3000` to view the application.

## Usage

- **Rotate the model:** The shoe model rotates automatically. You can customize the rotation speed and axis in the `useFrame` hook.
- **Modify appearance:** Change the color, metalness, and roughness of the shoe by adjusting the material properties in the `Shoe` component.

## Code Overview

- **Shoe Component:** Loads the OBJ file, parses it into a Three.js object, and applies materials and animations.
- **App Component:** Sets up the 3D scene, including lighting and a ground plane for shadows.

## Customization

To customize the appearance and behavior of the shoe model, you can modify the following:

- **Material Properties:** In the `Shoe` component, adjust the `color`, `metalness`, and `roughness` properties to change the material's appearance.
- **Rotation Speed:** Modify the rotation speed in the `useFrame` hook to control how fast the shoe spins.
- **Lighting:** Adjust the intensity and position of the `ambientLight` and `pointLight` to change the scene's lighting effects.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---
