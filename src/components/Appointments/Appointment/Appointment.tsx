import { IAppointment } from 'utils/appointments'
import './Appointment.css'
import { useState } from 'react'
import BookModal from '../BookModal/BookModal'
import { translateDuration } from 'utils/common'

interface IAppointmentProps {
    appointment: IAppointment
}

const Appointment = (props: IAppointmentProps) => {
    const { appointment } = props
    const [showModal, setShowModal] = useState<boolean>(false)

    return (
        <>
            <button className='appointmentButton' onClick={() => setShowModal(true)}>
                <div className='serviceName marginBottom'>{appointment.serviceName}</div>
                <div className='serviceDate marginBottom'>{new Date(appointment.start).toLocaleDateString()}</div>
                <div className='serviceTime marginBottom'>{new Date(appointment.start).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                <div className='serviceDuration'>{translateDuration(appointment.duration)}</div>
            </button>
            {showModal && <BookModal appointmentId={appointment.id} onOverlayClick={() => setShowModal(false)} onCloseClick={() => setShowModal(false)} />}
        </>
    )
}

export default Appointment