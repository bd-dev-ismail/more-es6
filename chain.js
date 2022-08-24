const user = [
    {id:1, name: 'Sabbir', job: 'doctor'},
    {id:2, name: 'tushar', job: 'shop'},
    {id:3, name: 'nihsat', job: 'dokan'}
];
// console.log(user[0].name);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'rahin', job: 'kadder dokan'},
        {id: 2, name: 'honey', job: 'business'}
    ]
}
const fristJob = data.data[0].job;
// console.log(data.data[0].job);
const user2 = {
    id: 343,
    name: 'sajib',
    address: {
        street: {
            frist: 'gulsan',
            floor: 'third floor',
            side: 'left'
        },
        postOffice: 'sador',
        city: 'Dhaka'
    }
}
const user2Floor = user2.address?.stret?.floor;
console.log(user2Floor)
