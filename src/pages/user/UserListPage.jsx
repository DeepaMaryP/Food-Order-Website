import { useEffect, useState } from 'react'

const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough"
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org"
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh"
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net"
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven"
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info"
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz"
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview"
        },
        "phone": "(254)954-1289",
        "website": "demarco.info"
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy"
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org"
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth"
        },
        "phone": "210.067.6132",
        "website": "elvis.io"
    }
]

function UserListPage() {
    return (
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <h1 className='text-center font-bold text-lg'>Manage Users</h1>
            <table className="w-5/6 mx-auto mt-4 text-sm text-left rtl:text-right">
                <thead className='text-xs text-white uppercase bg-orange-300 dark:bg-blue-900 dark:text-gray-400'>
                    <tr>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Email</th>
                        <th scope="col" className="px-6 py-3">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            <tr className='border-b dark:border-gray-700 border-gray-200' key={user.id}>
                                <td className='px-6 py-4 font-medium  whitespace-nowrap dark:text-blue-900'>
                                    {user.name}</td>
                                <td className='px-6 py-4'>{user.email}</td>
                                <td className='px-6 py-4'>{user.phone}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default UserListPage
