import React from 'react';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Sepia = ({ text,instance }) => {
    const handleSepia = () => {
        instance.hasFilter('sepia') ?
        instance.removeFilter('sepia') :
        instance.applyFilter('sepia')
    };
    return (
        <Button onClick={handleSepia}>{text}</Button>
    )
};


Sepia.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


Sepia.defaultProps = {
    text: "Sepia",
    instance:  {}
}

