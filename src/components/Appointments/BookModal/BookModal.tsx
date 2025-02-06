import { useState } from 'react'
import './BookModal.css'
import success from '../../../assets/icons/success-icon.svg'
import { bookAppointment } from 'utils/appointments'

interface IBookModalProps {
    appointmentId: string
    onCloseClick?: () => void
    onOverlayClick?: () => void
}

const BookModal = (props: IBookModalProps) => {
    const { appointmentId, onCloseClick, onOverlayClick } = props
    enum FormStates {
        Form,
        Success,
        Failure,
    }
    const [formState, setFormState] = useState<FormStates>(FormStates.Form)

    const onSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const { email, customerName, make, model, modelYear } = event.target
            const response = await bookAppointment({
                appointmentId,
                email: email.value,
                customerName: customerName.value,
                make: make.value,
                model: model.value,
                modelYear: modelYear.value,
            })
    
            setFormState(response.booked ? FormStates.Success : FormStates.Failure)
            // setFormState(response.booked ? FormStates.Failure : FormStates.Success)
        } catch (error) {
            console.error(error)
        }
    }

    const renderForm = () => {
        switch (formState) {
            case FormStates.Form:
                return (
                    <>
                        <h2 className='bookModalFormHeader'>Fill out your info</h2>
                        <form onSubmit={onSubmit}>
                            <div className='bookModalFormFields'>
                                <div className='bookModalFormRow'>
                                    <label htmlFor='email' className='bookModalFormColumn bookModalFormLabel'>Email:</label>
                                    <input name='email' className='bookModalFormColumn bookModalFormInput' required type='email' />
                                </div>
                                <div className='bookModalFormRow'>
                                    <label htmlFor='customerName' className='bookModalFormColumn bookModalFormLabel'>Name:</label>
                                    <input name='customerName' className='bookModalFormColumn bookModalFormInput' required />
                                </div>
                                <div className='bookModalFormRow'>
                                    <label htmlFor='make' className='bookModalFormColumn bookModalFormLabel'>Make:</label>
                                    <input name='make' className='bookModalFormColumn bookModalFormInput' />
                                </div>
                                <div className='bookModalFormRow'>
                                    <label htmlFor='model' className='bookModalFormColumn bookModalFormLabel'>Model:</label>
                                    <input name='model' className='bookModalFormColumn bookModalFormInput' />
                                </div>
                                <div className='bookModalFormRow'>
                                    <label htmlFor='modelYear' className='bookModalFormColumn bookModalFormLabel'>Year:</label>
                                    <input name='modelYear' className='bookModalFormColumn bookModalFormInput' type='number' />
                                </div>
                                <button type='submit' className='bookModalFormSubmit'>Book Now</button>
                            </div>
                        </form>
                    </>
                )
            case FormStates.Success:
                return (
                    <>
                        <img className='successIcon' src={success} />
                        <h2>Your appointment is booked</h2>
                    </>
                )
            case FormStates.Failure:
                return (
                    <p>There was an error booking your appointment. Please try again.</p>
                )
        }
    }

    return (
        <>
            <div className='bookModalForm'>
                <button className='bookModalCloseButton' onClick={onCloseClick}>X</button>
                {renderForm()}
            </div>
            <div className='overlay' onClick={onOverlayClick} />
        </>
    )
}

export default BookModal