import React from 'react';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Invert = ({ text,instance }) => {
    const handleInvert = () => {
        instance.hasFilter('invert') ?
        instance.removeFilter('invert') :
        instance.applyFilter('invert')
    };
    return (
        <Button onClick={handleInvert}>{text}</Button>
    )
};


Invert.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


Invert.defaultProps = {
    text: "Invert",
    instance:  {}
}

