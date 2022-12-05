import PropTypes from 'prop-types';

export default function Block({ style, text }) {
  return (
    <div>
      {style === 'heading'
        ? <h1>{text}</h1>
        : <p>{text}</p>}
    </div>
  );
}

Block.propTypes = {
  style: PropTypes.element.isRequired,
  text: PropTypes.element.isRequired,
};
