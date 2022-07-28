import React from 'react';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Lighten = ({ text, instance, color }) => {

    const handleLighten = () => {
        instance.hasFilter('blendColor') ?
        instance.removeFilter('blendColor') :
        instance.applyFilter('blendColor', { mode: 'lighten', color: color.hex })
    };
    return (
        <Button onClick={handleLighten}>{text}</Button>
    )
};


Lighten.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
    color: PropTypes.instanceOf(Object)
}


Lighten.defaultProps = {
    text: "Lighten",
    instance: {},
    color: {}
}

