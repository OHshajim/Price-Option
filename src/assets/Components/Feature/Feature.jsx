import PropTypes from 'prop-types'; // ES6
import { FaChevronCircleRight } from "react-icons/fa";

const Feature = ({ feature }) => {
    return (
        <div>
            <p className='text-start flex items-center gap-1'> <FaChevronCircleRight />
                {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}
export default Feature;