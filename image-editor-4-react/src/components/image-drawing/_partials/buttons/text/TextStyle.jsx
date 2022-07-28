import React from 'react';
import { Button, Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const TextStyle = ({ id,instance }) => {

    const handleBold = () => {
        instance.changeTextStyle(id, {
            fontStyle: 'bold'
        });
    };

    const handleUnderline = () => {
        instance.changeTextStyle(id, {
            fontStyle: 'underline'
        });
    };

    const handleItalic = () => {
        instance.changeTextStyle(id, {
            fontStyle: 'italic'
        });
    };



    return (
        <Stack>
            <Button onClick={handleBold}>B</Button>
            <Button onClick={handleUnderline}>U</Button>
            <Button onClick={handleItalic}>I</Button>
        </Stack>
    )
};


TextStyle.propTypes = {
    id: PropTypes.number.isRequired,
    instance: PropTypes.instanceOf(Object),
}


TextStyle.defaultProps = {
    instance:  {}
}

