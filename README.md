# InspiroDraw

InspiroDraw is a collaborative online workspace built using Next.js, Fabric.js, and Socket.io. It serves as a Miro clone, allowing users to collaborate in real-time on a digital canvas.

## Features
- **Real-Time Collaboration:** Multiple users can collaborate simultaneously on the same canvas.
- **Drawing Tools:** A variety of drawing tools, including freehand drawing, shapes, and text.
- **Shape Library:** Predefined shapes such as rectangles, squares, circles, lines, stars, speech bubbles, hearts, arrows, and triangles.
- **Socket.io Integration:** Enables real-time communication and synchronization between users.
- **Responsive Design:** Works across different devices and screen sizes.
- **User Authentication:** (Optional) Implement user authentication for personalized boards.

## Technology Stack
- **Next.js:** A React framework for building server-rendered applications.
- **Fabric.js:** A powerful and simple-to-use library for working with HTML5 canvas.
- **Socket.io:** A library for real-time web applications, enabling bidirectional communication between clients and the server.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom user interfaces.
- **Firebase:** A platform for building web and mobile applications, providing services such as user authentication and real-time databases.
- **Express:** A web application framework for Node.js, providing a robust set of features for web and mobile applications.
- **Jest:** A JavaScript testing framework for unit testing.

## Getting Started
### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository: `git clone https://github.com/yourusername/inspirodraw.git`
2. Change to the project directory: `cd inspirodraw`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

## Usage
### Creating a Board
1. Open the InspiroDraw application.
2. Click on "Create New Board."
3. Customize your board by adding shapes, text, or drawings.

### Real-Time Collaboration
1. Share the board link with collaborators.
2. Changes made by one user are instantly reflected for all collaborators.
3. Socket.io is used to synchronize changes between users. 

### Drawing and Shapes
1. Use the drawing tools on the sidebar to sketch your ideas.
2. Access the shape library to add predefined shapes to your canvas.

## Project Structure
Provide an overview of the project's directory structure and key files.

The project is structured as follows:
### Frontend
- **Pages:** Contains the Next.js pages for the application.
- **Public:** Contains static assets such as images and fonts.
- **Svgs:** Contains SVG files for the shape library.
- **Context:** contains BaordContext.tsx, which provides the board state and methods for manipulating the board along with the current user's information and methods for collaborating with other users.

More on the Context folder:
# BoardContext and BoardProvider Documentation

The `BoardContext` and `BoardProvider` components facilitate state management and communication within the application. They play a crucial role in managing the collaborative drawing board.

## `BoardContext`

### Purpose

`BoardContext` serves as a central context to store and provide shared state and functions related to the collaborative drawing board. It is utilized to manage various aspects, such as board information, user interactions, and editor instances.

### Properties

1. `createBoard`: Function to create a new drawing board.
2. `joinBoard`: Function to join an existing drawing board.
3. `boardName`: State variable to store the name of the drawing board.
4. `setBoardName`: Function to update the `boardName` state.
5. `path`: State variable to store the path information for drawing events.
6. `setPath`: Function to update the `path` state.
7. `newJoin`: State variable indicating a new user joining the board.
8. `setNewJoin`: Function to update the `newJoin` state.
9. `boardId`: State variable to store the ID of the drawing board.
10. `setBoardId`: Function to update the `boardId` state.
11. `username`: State variable to store the username of the current user.
12. `setUsername`: Function to update the `username` state.
13. `editor`: State variable to store the instance of the FabricJSEditor.
14. `setEditor`: Function to update the `editor` state.
15. `addCircle`: Function to add a circle to the drawing board.
16. `addRectangle`: Function to add a rectangle to the drawing board.
17. `addTriangle`: Function to add a triangle to the drawing board.
18. `addStraightLine`: Function to add a straight line to the drawing board.

### Usage

This context is consumed by various components to access shared state and functions related to the collaborative drawing board.

## `BoardProvider`

### Purpose

`BoardProvider` is a wrapper component that utilizes the `BoardContext`. It provides the application with the necessary context values and functions for managing the collaborative drawing board.

### Properties

1. `children`: ReactNode representing the child components within the `BoardProvider`.

### Functions

1. `joinBoard`: Asynchronous function to join an existing drawing board.
2. `createBoard`: Asynchronous function to create a new drawing board.
3. `addCircle`: Function to add a circle to the drawing board.
4. `addRectangle`: Function to add a rectangle to the drawing board.
5. `addTriangle`: Function to add a triangle to the drawing board.
6. `addStraightLine`: Function to add a straight line to the drawing board.

### Usage

Wrap the application components with `BoardProvider` to enable access to the shared context throughout the application.

```typescript

const BoardProvider = ({ children }: { children: React.ReactNode }) => {
    // ... (Other state variables and functions)

    // Function to add a circle to the board
    const addCircle = () => {
        // ... (Circle creation code)
    };

    // Function to add a rectangle to the board
    const addRectangle = () => {
        // ... (Rectangle creation code)
    };

    // Function to add a triangle to the board
    const addTriangle = () => {
        // ... (Triangle creation code)
    };

    // Function to add a straight line to the board
    const addStraightLine = () => {
        // ... (Straight line creation code)
    };

    useEffect(() => {
        // ... (Other useEffect hooks)

        return () => {
            // ... (Cleanup code)
        };
    }, []);

    // ... (Other useEffect hooks)

    return (
        <BoardContext.Provider value={{
            // ... (Other context values and functions)
            addCircle,
            addRectangle,
            addTriangle,
            addStraightLine,
        }}>
            {children}
        </BoardContext.Provider>
    );
}; 
```

### Backend
- **server.js:** Contains the Express server for the application.
- **controllers:** Contains the controllers for the application. UserControllers handles user authentication and BoardControllers handles board creation and deletion. While SocketController handles socket events.
- **firebase:** Contains the Firebase configuration file.

## Configuration
Explain any configuration options or settings that users can modify.

## Troubleshooting
Include common issues and solutions.

## Contributing
Provide guidelines for contributors, including how to report issues and submit pull requests.

## License
MIT License

---

