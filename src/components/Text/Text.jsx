import './Text.css';

const Text = (props) => {
    return (
        <div className='text'>
            <p className='text-content'>{props.content}</p>
        </div>
    )
};

export default Text;