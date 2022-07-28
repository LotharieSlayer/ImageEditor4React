import React from 'react';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Multiply = ({ text, instance, color }) => {

    const handleMultiply = () => {
        instance.hasFilter('blendColor') ?
        instance.removeFilter('blendColor') :
        instance.applyFilter('blendColor', { mode: 'multiply', color: color.hex })
    };
    return (
        <Button onClick={handleMultiply}>{text}</Button>
    )
};


Multiply.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
    color: PropTypes.instanceOf(Object)
}


Multiply.defaultProps = {
    text: "Multiply",
    instance: {},
    color: {}
}

