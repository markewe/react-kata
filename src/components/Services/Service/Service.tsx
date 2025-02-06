import { IService } from 'utils/services'
import './Service.css'
import { translateDuration } from 'utils/common'

interface IServiceProps {
    service: IService
}

const Service = (props: IServiceProps) => {
    const { service } = props

    return (
        <a href={`./appointments/${service.id}`} className='serviceLink'>
            <div className='serviceName'>{service.name}</div>
            {service.icon && <img className='serviceIcon' src={service.icon} />}
            <div className='serviceDuration'>Duration: {translateDuration(service.duration)}</div>
        </a>
    )
}

export default Service