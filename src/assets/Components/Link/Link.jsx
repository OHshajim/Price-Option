import PropTypes from 'prop-types'; // ES6

const Link = ({route}) => {
    return (
        <div>
            <li className='hover:bg-slate-900 py-2 px-4 rounded-xl '>
                    <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};
Link.propTypes = {
    route: PropTypes.object
}

export default Link;