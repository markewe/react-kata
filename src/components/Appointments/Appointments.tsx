import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './Appointments.css'
import { getAppointments, IAppointment } from "utils/appointments"
import Appointment from "./Appointment/Appointment"

const Appointments = () => {
    const params = useParams()
    const [appointments, setAppointments] = useState<IAppointment[]>([])
    const [loaded, setLoaded] = useState<boolean>(false)

    const init = async (serviceId: number) => {
        const response =  await getAppointments(serviceId)

        console.log('response', response)

        if (response.length) {
            console.log('response.length')

            setAppointments(response)
        }

        setLoaded(true)
    }

    useEffect(() => {
        console.log(params)

        if (params.id) {
            init(Number(params.id))
        }
    }, [params])

    return (
        <div className="appointmentsWrapper">
            {appointments.length && loaded ? (
                <>
                    <h1>Book Your Service Appointment</h1>
                    <p>Click on an appointment to book</p>
                    <div className="appointmentButtons">
                        {appointments.map((appointment, index) => {
                            return (
                                <Appointment appointment={appointment} key={index} />
                            )
                        })}
                    </div>
                </>
            ) : (
                <>
                    {loaded && <h1>No Appointments Available</h1>}
                    {!loaded && <h1>Loading Service Appointments</h1>}
                </>
            )}
            
        </div>
    )
}

export default Appointments