import { User } from '../Models/User';

let user: User =  
{
    id: '01',
    name: 'Tarsis Reded',
    nickName: 'IBATS',
    email: 'tarsisrdd@hotmail.com',
    darkTheme: false,
    isAdmin: false
}

let data = {
    roomsOptions:
        ['Sala', 'Quarto', 'Cozinha', 'Sala de Jantar', 'Quarto de Jogos'],
    roomsHouse: [
        { key: '0', value: 'Sala', room: 'Sala' },
        { key: '1', value: 'Cozinha', room: 'Cozinha' },
        { key: '2', value: 'Quarto', room: 'Quarto' },
        { key: '3', value: 'Sala de Jantar', room: "Sala_de_Jantar" },
        { key: '4', value: 'Quarto de Jogos', room: "Quarto_de_Jogos" }
    ],
    devicesOptions: [
        { key: '0', value: 'Todos os dispositivos', type: 'all' },
        { key: '1', value: 'Lampada', type: 'lamp' },
        { key: '2', value: 'Tomada', type: 'socket' },
        { key: '3', value: 'Computador', type: 'computer' },
        { key: '4', value: 'Ar Condicionado', type: 'air' },
        { key: '5', value: 'Ventilador', type: 'fan' },
        { key: '6', value: 'Cortina', type: 'curtain' },
        { key: '7', value: 'Led', type: 'light' }
    ],
    devices: [
        { id: '0', title: 'Ventidador 01', name: 'fan_1', type: 'fan', state: false, partHome: 'Sala', desc: '', on: true },
        { id: '1', title: 'Ventilador 02', name: 'fan_2', type: 'fan', state: true, partHome: 'Sala', desc: '', on: true },
        { id: '2', title: 'Computador 01', name: 'computer_1', type: 'computer', state: false, partHome: 'Sala', desc: '', on: true },
        { id: '3', title: 'Computador 02', name: 'computer_2', type: 'computer', state: true, partHome: 'Sala', desc: '', on: true },
        { id: '4', title: 'Lâmpada 01', name: 'light_1', type: 'lamp', state: false, partHome: 'Cozinha', desc: '', on: true },
        { id: '5', title: 'Lâmpada 02', name: 'light_2', type: 'lamp', state: true, partHome: 'Cozinha', desc: '', on: true },
        { id: '6', title: 'Tomada 01', name: 'socket_1', type: 'socket', state: false, partHome: 'Quarto', desc: '', on: true },
        { id: '7', title: 'Tomada 02', name: 'socket_2', type: 'socket', state: true, partHome: 'Quarto', desc: '', on: true },
        { id: '8', title: 'Computador 01', name: 'computer_1', type: 'computer', state: false, partHome: 'Sala_de_Jantar', desc: '', on: true },
        { id: '9', title: 'Computador 02', name: 'computer_2', type: 'computer', state: true, partHome: 'Sala_de_Jantar', desc: '', on: true },
        { id: '10', title: 'Computador 01', name: 'computer_1', type: 'computer', state: false, partHome: 'Quarto_de_Jogos', desc: '', on: true },
        { id: '11', title: 'Computador 02', name: 'computer_2', type: 'computer', state: true, partHome: 'Quarto_de_Jogos', desc: '', on: true },
        { id: '12', title: 'Tomada 01', name: 'socket_1', type: 'socket', state: false, partHome: 'Quarto_de_Jogos', desc: '', on: true },
        { id: '13', title: 'Tomada 02', name: 'socket_2', type: 'socket', state: true, partHome: 'Quarto_de_Jogos', desc: '', on: true },
        { id: '14', title: 'Lâmpada 01', name: 'light_1', type: 'lamp', state: false, partHome: 'Quarto_de_Jogos', desc: '', on: true },
        { id: '15', title: 'Lâmpada 02', name: 'light_2', type: 'lamp', state: true, partHome: 'Quarto_de_Jogos', desc: '', on: true },
        { id: '16', title: 'Ar Cond 01', name: 'air_1', type: 'air', state: false, partHome: 'Quarto_de_Jogos', desc: '', on: true },
        { id: '17', title: 'Ar Cond 02', name: 'air_2', type: 'air', state: true, partHome: 'Quarto_de_Jogos', desc: '', on: true }
    ]
}

let rooms = {
    dataRooms: [
        {
            Sala: [
                { id: '0', title: 'Ventidador 01', name: 'fan_1', type: 'fan', state: false, partHome: 'Sala', desc: '', on: true },
                { id: '1', title: 'Ventilador 02', name: 'fan_2', type: 'fan', state: true, partHome: 'Sala', desc: '', on: true },
                { id: '2', title: 'Computador 01', name: 'computer_1', type: 'computer', state: false, partHome: 'Sala', desc: '', on: true },
                { id: '3', title: 'Computador 02', name: 'computer_2', type: 'computer', state: true, partHome: 'Sala', desc: '', on: true },
            ]
        },
        {
            Cozinha: [
                { id: '0', title: 'Lâmpada 01', name: 'light_1', type: 'lamp', state: false, partHome: 'Cozinha', desc: '', on: true },
                { id: '1', title: 'Lâmpada 02', name: 'light_2', type: 'lamp', state: true, partHome: 'Cozinha', desc: '', on: true },
            ]
        },
        {
            Quarto: [
                { id: '0', title: 'Tomada 01', name: 'socket_1', type: 'socket', state: false, partHome: 'Quarto', desc: '', on: true },
                { id: '1', title: 'Tomada 02', name: 'socket_2', type: 'socket', state: true, partHome: 'Quarto', desc: '', on: true },
            ]
        },
        {
            Sala_de_Jantar: [
                { id: '0', title: 'Computador 01', name: 'computer_1', type: 'computer', state: false, partHome: 'Sala_de_Jantar', desc: '', on: true },
                { id: '1', title: 'Computador 02', name: 'computer_2', type: 'computer', state: true, partHome: 'Sala_de_Jantar', desc: '', on: true },
            ]
        },
        {
            Quarto_de_Jogos: [
                { id: '0', title: 'Computador 01', name: 'computer_1', type: 'computer', state: false, partHome: 'Quarto_de_Jogos', desc: '', on: true },
                { id: '1', title: 'Computador 02', name: 'computer_2', type: 'computer', state: true, partHome: 'Quarto_de_Jogos', desc: '', on: true },
                { id: '2', title: 'Tomada 01', name: 'socket_1', type: 'socket', state: false, partHome: 'Quarto_de_Jogos', desc: '', on: true },
                { id: '3', title: 'Tomada 02', name: 'socket_2', type: 'socket', state: true, partHome: 'Quarto_de_Jogos', desc: '', on: true },
                { id: '4', title: 'Lâmpada 01', name: 'light_1', type: 'lamp', state: false, partHome: 'Quarto_de_Jogos', desc: '', on: true },
                { id: '5', title: 'Lâmpada 02', name: 'light_2', type: 'lamp', state: true, partHome: 'Quarto_de_Jogos', desc: '', on: true },
                { id: '6', title: 'Ar Cond 01', name: 'air_1', type: 'air', state: false, partHome: 'Quarto_de_Jogos', desc: '', on: true },
                { id: '7', title: 'Ar Cond 02', name: 'air_2', type: 'air', state: true, partHome: 'Quarto_de_Jogos', desc: '', on: true },
            ]
        }
    ]
};

// let roomsInfos = 
// {room: [
//     { },
//     { id: '1', title: 'Ventilador 02', name: 'fan_2', type: 'fan', state: true, partHome: 'Sala', desc: '', on: true },
   
// ]
// }
// let dataRoomsTeste = {
//     dataRooms: [
//         { id: '0', title: 'Ventidador 01', name: 'fan_1', type: 'fan', state: false, partHome: 'Sala', desc: '', on: true },
//         { id: '1', title: 'Ventilador 02', name: 'fan_2', type: 'fan', state: true, partHome: 'Sala', desc: '', on: true },
//         { id: '2', title: 'Computador 01', name: 'computer_1', type: 'computer', state: false, partHome: 'Sala', desc: '', on: true },
//         { id: '3', title: 'Computador 02', name: 'computer_2', type: 'computer', state: true, partHome: 'Sala', desc: '', on: true },
//         { id: '4', title: 'Lâmpada 01', name: 'light_1', type: 'lamp', state: false, partHome: 'Cozinha', desc: '', on: true },
//         { id: '5', title: 'Lâmpada 02', name: 'light_2', type: 'lamp', state: true, partHome: 'Cozinha', desc: '', on: true },
//         { id: '6', title: 'Tomada 01', name: 'socket_1', type: 'socket', state: false, partHome: 'Quarto', desc: '', on: true },
//         { id: '7', title: 'Tomada 02', name: 'socket_2', type: 'socket', state: true, partHome: 'Quarto', desc: '', on: true },
//         { id: '8', title: 'Computador 01', name: 'computer_1', type: 'computer', state: false, partHome: 'Sala_de_Jantar', desc: '', on: true },
//         { id: '9', title: 'Computador 02', name: 'computer_2', type: 'computer', state: true, partHome: 'Sala_de_Jantar', desc: '', on: true },
//         { id: '10', title: 'Computador 01', name: 'computer_1', type: 'computer', state: false, partHome: 'Quarto_de_Jogos', desc: '', on: true },
//         { id: '11', title: 'Computador 02', name: 'computer_2', type: 'computer', state: true, partHome: 'Quarto_de_Jogos', desc: '', on: true },
//         { id: '12', title: 'Tomada 01', name: 'socket_1', type: 'socket', state: false, partHome: 'Quarto_de_Jogos', desc: '', on: true },
//         { id: '13', title: 'Tomada 02', name: 'socket_2', type: 'socket', state: true, partHome: 'Quarto_de_Jogos', desc: '', on: true },
//         { id: '14', title: 'Lâmpada 01', name: 'light_1', type: 'lamp', state: false, partHome: 'Quarto_de_Jogos', desc: '', on: true },
//         { id: '15', title: 'Lâmpada 02', name: 'light_2', type: 'lamp', state: true, partHome: 'Quarto_de_Jogos', desc: '', on: true },
//         { id: '16', title: 'Ar Cond 01', name: 'air_1', type: 'air', state: false, partHome: 'Quarto_de_Jogos', desc: '', on: true },
//         { id: '17', title: 'Ar Cond 02', name: 'air_2', type: 'air', state: true, partHome: 'Quarto_de_Jogos', desc: '', on: true }
//     ]
// };


export { data, rooms, user };