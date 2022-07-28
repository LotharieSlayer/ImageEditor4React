import React from 'react';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Diff = ({ text, instance, color }) => {

    const handleDiff = () => {
        instance.hasFilter('blendColor') ?
        instance.removeFilter('blendColor') :
        instance.applyFilter('blendColor', { mode: 'diff', color: color.hex })
    };
    return (
        <Button onClick={handleDiff}>{text}</Button>
    )
};


Diff.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
    color: PropTypes.instanceOf(Object)
}


Diff.defaultProps = {
    text: "Diff",
    instance: {},
    color: {}
}

