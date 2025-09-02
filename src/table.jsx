import React from 'react'

const data = [ {
    id:1,
    first_name:'jerisma',
    last_name:'j',
    phone_no:'12345678',
    email:'j@.com'
},{
    id:2,
    first_name:'jerisma',
    last_name:'j',
    phone_no:'12345678',
    email:'j@.com'
}]

const TableComponent = () => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>firstName</th>
                    <th>LastName</th>
                    <th>Phoneno</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((e)=>(
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.first_name}</td>
                            <td>{e.last_name}</td>
                            <td>{e.phone_no}</td>
                            <td>{e. email}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}


export default TableComponent