import { useState } from "react"
import Navbar from "../components/navbar"
import bookingData from "../dummy/bookings.json"

function Bookings() {

    const[bookings, setBookings] = useState(bookingData)
    return(
        <div>
            <Navbar/>
            <h2 className="page-header"> Bookings</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>UserName</th>
                        <th>Property Title</th>
                        <th>Address</th>
                        <th>From Data</th>
                        <th>To Data</th>
                        <th>Rent</th>
                    </tr>
                </thead>

                <tbody>
                    {bookings.map((booking,index)=>{
                        return(
                            <tr>
                                <td>{index + 1}</td>
                                <td>{booking.userName}</td>
                                <td>{booking.propertyTitle}</td>
                                <td>{booking.propertyAddress}</td>
                                <td>{booking.fromDate}</td>
                                <td>{booking.toDate}</td>
                                <td>{booking.rent}</td>


                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Bookings