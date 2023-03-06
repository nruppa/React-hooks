import React from 'react'

function Patchtable() {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        setData(data)
    }, [])
    return (
        <div>
            Patch-table
            <table border="2px" >
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(x =>
                            <tr key={x.id}>
                                <td>{x.FirstName}</td>
                                <td>{x.LastName}</td>
                                <td>{x.title}</td>
                                <td>{x.body}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Patchtable