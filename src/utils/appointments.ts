const apiEndpoint = process.env.API_ENDPOINT ?? ''

export interface IAppointment {
    id: string
    serviceName:  string // The name of the service appointment.
    serviceId: number // The id of the service.
    start: Date // The start date & time of the appointment.
    duration: number // The duration of the appointment in seconds.
    booked?: boolean // A boolean indicating whether or not the appointment has been booked.
    email?: string // An optional property indicating the booked customer's email;
    customerName?: string // An optional property indicating the booked customer's full name;
    modelYear?: number // An optional property indicating the booked customer's vehicle year;
    make?: string // An optional property indicating the booked customer's vehicle make;
    model?: string // An optional property indicating the booked customer's vehicle model;
}

export interface IBookAppointment {
  appointmentId: string
  email: string // The customer's contact email address.
  customerName: string // The customer's full name.
  make: string // The make of the vehicle they are servicing.
  model: string // The model of the vehicle they are servicing.
  modelYear: number // The year of the model they are servicing.
}

export const bookAppointment = async (appointment: IBookAppointment): Promise<Partial<IAppointment>> => {
  const { appointmentId } = appointment



  try {
    const response = await fetch(`${apiEndpoint}/appointments/book/${appointmentId}`,
      { 
        headers: {
          "Content-Type": "application/json",
        },
        method: 'PATCH',
        body: JSON.stringify(appointment)
      }
    )

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const json = await response.json()

    return json as IAppointment;
  } catch (error: any) {
    console.error(error.message);
    return { booked: false }
  }
};

export const getAppointments = async (serviceId: number): Promise<IAppointment[]> => {
  try {
    const response = await fetch(`${apiEndpoint}/appointments/${serviceId}`)

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const json = await response.json()

    return json as IAppointment[];
  } catch (error: any) {
    console.error(error.message);
    return []
  }
};
