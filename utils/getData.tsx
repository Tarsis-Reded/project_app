
let data = {
    roomsOptions: ['Sala', 'Quarto', 'Cozinha', 'Sala de Jantar'],
    roomsHouse: [
        { key: '1', value: 'Sala' },
        { key: '2', value: 'Cozinha' },
        { key: '3', value: 'Quarto' },
        { key: '4', value: 'Sala de Jantar' }
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
        { id: '0', title: 'Tomada 01', name: 'socket_1', type: 'socket', state: false, partHome: 'Quarto' },
        { id: '1', title: 'Tomada 02', name: 'socket_2', type: 'socket', state: true, partHome: 'Quarto' },
        { id: '2', title: 'Ar Cond 01', name: 'air_1', type: 'air', state: false, partHome: 'Quarto' },
        { id: '3', title: 'Ar Cond 02', name: 'air_2', type: 'air', state: true, partHome: 'Quarto' },
        { id: '4', title: 'Lâmpada 01', name: 'light_1', type: 'light', state: false, partHome: 'Quarto' },
        { id: '5', title: 'Lâmpada 02', name: 'light_2', type: 'light', state: true, partHome: 'Quarto' },
        { id: '6', title: 'Ventidador 01', name: 'fan_1', type: 'fan', state: false, partHome: 'Sala' },
        { id: '7', title: 'Ventilador 02', name: 'fan_2', type: 'fan', state: true, partHome: 'Sala' },
        { id: '8', title: 'Computador 01', name: 'computer_1', type: 'computer', state: false, partHome: 'Sala' },
        { id: '9', title: 'Computador 02', name: 'computer_2', type: 'computer', state: true, partHome: 'Sala' },
    ]
}

let rooms = {
    dataRooms: [
        {
            Sala: [
                { id: '0', title: 'Ventidador 01', name: 'fan_1', type: 'fan', state: false, partHome: 'Sala' },
                { id: '1', title: 'Ventilador 02', name: 'fan_2', type: 'fan', state: true, partHome: 'Sala' },
                { id: '2', title: 'Computador 01', name: 'computer_1', type: 'computer', state: false, partHome: 'Sala' },
                { id: '3', title: 'Computador 02', name: 'computer_2', type: 'computer', state: true, partHome: 'Sala' }
            ]
        },
        {
            Cozinha: [
                { id: '0', title: 'Lâmpada 01', name: 'light_1', type: 'light', state: false, partHome: 'Cozinha' },
                { id: '1', title: 'Lâmpada 02', name: 'light_2', type: 'light', state: true, partHome: 'Cozinha' },
            ]
        },
        {
            Quarto: [
                { id: '0', title: 'Tomada 01', name: 'socket_1', type: 'socket', state: false, partHome: 'Quarto' },
                { id: '1', title: 'Tomada 02', name: 'socket_2', type: 'socket', state: true, partHome: 'Quarto' },
            ]
        },
        {
            SalaDeJantar: [
                { id: '8', title: 'Computador 01', name: 'computer_1', type: 'computer', state: false, partHome: 'SalaDeJantar' },
                { id: '9', title: 'Computador 02', name: 'computer_2', type: 'computer', state: true, partHome: 'SalaDeJantar' },
            ]
        }
    ]
};


const roomsHouse = [
    { key: '1', value: 'Sala' },
    { key: '2', value: 'Cozinha' },
    { key: '3', value: 'Quarto' },
    { key: '4', value: 'Sala de Jantar' }
]

const devicesOptions = [
    { key: '1', value: 'Lampada' },
    { key: '2', value: 'Tomada' },
    { key: '3', value: 'Computador' },
    { key: '4', value: 'Ar Condicionado' },
    { key: '5', value: 'Ventilador' },
    { key: '6', value: 'Cortina' },
]

let devices = [
    { id: '0', title: 'Tomada 01', name: 'socket_1', type: 'socket', state: false, partHome: 'Quarto' },
    { id: '1', title: 'Tomada 02', name: 'socket_2', type: 'socket', state: true, partHome: 'Quarto' },
    { id: '2', title: 'Ar Cond 01', name: 'air_1', type: 'air', state: false, partHome: 'Quarto' },
    { id: '3', title: 'Ar Cond 02', name: 'air_2', type: 'air', state: true, partHome: 'Quarto' },
    { id: '4', title: 'Lâmpada 01', name: 'light_1', type: 'light', state: false, partHome: 'Quarto' },
    { id: '5', title: 'Lâmpada 02', name: 'light_2', type: 'light', state: true, partHome: 'Quarto' },
    { id: '6', title: 'Ventidador 01', name: 'fan_1', type: 'fan', state: false, partHome: 'Sala' },
    { id: '7', title: 'Ventilador 02', name: 'fan_2', type: 'fan', state: true, partHome: 'Sala' },
    { id: '8', title: 'Computador 01', name: 'computer_1', type: 'computer', state: false, partHome: 'Sala' },
    { id: '9', title: 'Computador 02', name: 'computer_2', type: 'computer', state: true, partHome: 'Sala' },
];

export { data, rooms, roomsHouse, devices, devicesOptions };