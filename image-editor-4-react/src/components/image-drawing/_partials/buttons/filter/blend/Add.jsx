import React from 'react';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Add = ({ text, instance, color }) => {

    const handleAdd = () => {
        // State locked si je fais le remove puis le apply direct (meme avec un then), try avec while(!instance.removeFilter){instance.removeFilter} ?
        instance.hasFilter('blendColor') ?
        instance.removeFilter('blendColor') :
        instance.applyFilter('blendColor', { mode: 'add', color: color.hex })
    };
    return (
        <Button onClick={handleAdd}>{text}</Button>
    )
};


Add.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
    color: PropTypes.instanceOf(Object)
}


Add.defaultProps = {
    text: "Add",
    instance: {},
    color: {}
}

