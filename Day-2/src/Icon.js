import {Clock1,Clock10,Clock11,Clock12,Clock2,Clock3,Clock4,Clock5,CloudDrizzle,CloudFog,CloudHail,CloudLightning,Cloud,Cloudy,CloudSnow,CloudSunRain}
from 'lucide-react';
const Icon=()=>{
    return(
        <div className='lp'>
        <table border={5} bgcolor='yellow' className='f1' >
            <tr>
                <td><Clock1 /></td>
                <td><Clock10 /></td>
                <td><Clock11 /></td>
                <td><Clock12 /></td>
            </tr>
            <tr>
                <td><Clock2 /></td>
                <td><Clock3 /></td>
                <td><Clock4 /></td>
                <td><Clock5 /></td>
            </tr>
            <tr>
                <td><CloudDrizzle /></td>
                <td><CloudFog /></td>
                <td><CloudLightning /></td>
                <td><CloudHail /></td>
            </tr>
            <tr>
                <td><CloudSnow /></td>
                <td><CloudSunRain /></td>
                <td><Cloud /></td>
                <td><Cloudy /></td>
            </tr>
        </table>
        </div>
    )
}
export default Icon;