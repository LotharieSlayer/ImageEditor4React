import React from 'react';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Blur = ({ text,instance }) => {
    const handleBlur = () => {
        instance.hasFilter('blur') ?
        instance.removeFilter('blur') :
        instance.applyFilter('blur', { blur: 0.1 })
    };
    return (
        <Button onClick={handleBlur}>{text}</Button>
    )
};


Blur.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


Blur.defaultProps = {
    text: "Blur",
    instance:  {}
}

