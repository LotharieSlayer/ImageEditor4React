import React from 'react';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Sharpen = ({ text,instance }) => {
    const handleSharpen = () => {
        instance.hasFilter('sharpen') ?
        instance.removeFilter('sharpen') :
        instance.applyFilter('sharpen')
    };
    return (
        <Button onClick={handleSharpen}>{text}</Button>
    )
};


Sharpen.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


Sharpen.defaultProps = {
    text: "Sharpen",
    instance:  {}
}

