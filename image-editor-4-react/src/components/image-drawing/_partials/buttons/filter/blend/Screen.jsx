import React from 'react';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Screen = ({ text, instance, color }) => {

    const handleScreen = () => {
        instance.hasFilter('blendColor') ?
        instance.removeFilter('blendColor') :
        instance.applyFilter('blendColor', { mode: 'screen', color: '#00FF00' })
    };
    return (
        <Button onClick={handleScreen}>{text}</Button>
    )
};


Screen.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
    color: PropTypes.instanceOf(Object)
}


Screen.defaultProps = {
    text: "Screen",
    instance: {},
    color: {}
}

