import React from 'react';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Grayscale = ({ text,instance }) => {
    const handleGrayscale = () => {
        instance.hasFilter('grayscale') ?
        instance.removeFilter('grayscale') :
        instance.applyFilter('grayscale')
    };
    return (
        <Button onClick={handleGrayscale}>{text}</Button>
    )
};


Grayscale.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


Grayscale.defaultProps = {
    text: "Grayscale",
    instance:  {}
}

