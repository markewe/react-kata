import caret from '../assets/services/caret-icon.svg'
import detail from '../assets/services/detail-icon.svg'
import oil from '../assets/services/oil-change-icon.svg'
import tires from '../assets/services/tires-icon.svg'

const apiEndpoint = process.env.API_ENDPOINT ?? ''

const iconMap: { [key: number]: string } = {
  1: oil,
  2: caret,
  3: tires,
  4: detail,
}

export interface IService {
  id: number
  name: string
  duration: number // The duration of the service in seconds.
  icon?: string
}

const getServices = async (): Promise<IService[]> => {
  try {
    const response = await fetch(`${apiEndpoint}/services`)

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const json = await response.json()
    
    for(var service of (json as IService[])) {
      service.icon = iconMap[service.id];
    }

    return json as IService[];
  } catch (error: any) {
    console.error(error.message);
    return []
  }
};

export { getServices };
