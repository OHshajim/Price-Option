import PropTypes from 'prop-types'; // ES6
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { type, price, features } = option
    console.log(features);
    return (
        <div className='bg-[#5d8499] text-black font-semibold m-3 text-center p-5 rounded-xl flex flex-col'>
            <h2>
                <span className='text-3xl'>{price}</span>
                <span>/mon</span>
            </h2>
            <h3 className='text-2xl font-bold mb-3'>{type}</h3>
            <div className='flex-grow my-2'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='py-3 bg-blue-950 w-full rounded-xl my-3 text-white hover:bg-blue-800'>Book Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;