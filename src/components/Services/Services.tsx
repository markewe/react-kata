import { useEffect, useState } from 'react'
import './Services.css'
import { getServices, IService } from 'utils/services'
import Service from './Service/Service'

const Services = () => {
    const [services, setServices] = useState<IService[]>([])

    const init = async () => {
        setServices(await getServices())
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <div className='servicesWrapper'>
            {services.length ? (
                <>
                    <h1>Our Services</h1>
                    <p>Click on a service to book an appointment</p>
                    <div className='serviceLinks'>
                        {services.map((service, index) => {
                            return (
                                <Service service={service} key={index} />
                            )
                        })}
                    </div>
                </>
            ) : (
                <h1>Loading Services...</h1>
            )}
        </div>
    )
}

export default Services