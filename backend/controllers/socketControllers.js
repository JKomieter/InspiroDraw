const { getDocs, collection, where, query } = require("firebase/firestore");
const { db } = require("../firebase/config");

const boards = {};

const boardHandler = (socket) => {
    const drawHandler = ({ boardId, path }) => {
        // send the path to all users in the room
        console.log('draw', boardId, path)
        socket.to(boardId).emit('draw-broadcast', { path });
    };

    const joinBoard = async ({ boardId, username }) => {
        console.log(boards[boardId], 'boards', boardId, username)
        try {
            if (boards[boardId] && boards[boardId].sessionOpen) {
                socket.join(boardId);
                boards[boardId].users.push({ username, socketId: socket.id });
                socket.to(boardId).emit('user-joined', { username });
                socket.broadcast.emit('user-joined-broadcast', { board: boards[boardId] });
            } else {
                console.log('Board not found');
            }
        } catch (error) {
            console.log('Failed to join board:', error);
        }
    };


    const generateBoardId = () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    };


    const createBoard = async ({ boardName, username }) => {
        try {
            const boardId = generateBoardId();
            const socketId = socket.id;
            // create board
            boards[boardId] = { users: [{ username, socketId }], boardName, sessionOpen: true, initiator: username, boardId };
            socket.join(boardId);
            // notify initiator that board was created
            socket.emit('board-created', { board: boards[boardId] });
            // notify all other users that board was created
            socket.broadcast.emit('board-created', { board: boards[boardId] });
        } catch (error) {
            console.log('Failed to create board:', error);
        }
    };
   
    socket.on('draw', drawHandler);
    socket.on('create-board', createBoard);
    socket.on('join-board', joinBoard);
};

module.exports = boardHandler;
