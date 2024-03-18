import PropTypes from 'prop-types'; // ES6
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {type,price,features}=option
    console.log(features);
    return (
        <div className='bg-[#5d8499] text-black font-semibold m-3 text-center p-5 rounded-xl '>
            <h2>
                <span className='text-3xl'>{price}</span>
                <span>/mon</span>
            </h2>
            <h3 className='text-2xl'>{type}</h3>
            {
                features.map((feature,index)=><Feature key={index} feature={feature}></Feature>)
            }
            <Feature></Feature>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;