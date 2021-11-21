const db = {
    items: [
        {
            id: 1,
            name: 'banana',
            price:300
        },
        {
            id: 2,
            name: 'apple',
            price:50
        },
        {
            id: 3,
            name: 'kiwi',
            price:90
        },
        {
            id: 4,
            name: 'tyre',
            price:850
        },
        {
            id: 5,
            name: 'books',
            price:2000
        },
        {
            id: 6,
            name: 'gloves',
            price:160
        }
    ]

}

jsonDataBase = JSON.stringify(db); //converting db object to josn format
console.log(jsonDataBase);         //printing on console to save the value in database.json