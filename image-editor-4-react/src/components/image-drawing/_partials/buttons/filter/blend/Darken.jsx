import React from 'react';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Darken = ({ text, instance, color }) => {

    const handleDarken = () => {
        instance.hasFilter('blendColor') ?
        instance.removeFilter('blendColor') :
        instance.applyFilter('blendColor', { mode: 'darken', color: color.hex })
    };
    return (
        <Button onClick={handleDarken}>{text}</Button>
    )
};


Darken.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
    color: PropTypes.instanceOf(Object)
}


Darken.defaultProps = {
    text: "Darken",
    instance: {},
    color: {}
}

