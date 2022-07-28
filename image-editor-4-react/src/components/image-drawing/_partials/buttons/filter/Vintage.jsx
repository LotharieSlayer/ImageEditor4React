import React from 'react';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Vintage = ({ text,instance }) => {
    const handleVintage = () => {
        instance.hasFilter('vintage') ?
        instance.removeFilter('vintage') :
        instance.applyFilter('vintage')
    };
    return (
        <Button onClick={handleVintage}>{text}</Button>
    )
};


Vintage.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


Vintage.defaultProps = {
    text: "Vintage",
    instance:  {}
}

