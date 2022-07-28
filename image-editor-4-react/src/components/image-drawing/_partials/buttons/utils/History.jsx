import React from 'react';
import { IconButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const History = ({ text, instance }) => {

    const handleHistory = () => {
        instance.initHistory()
        instance.toggleHistoryMenu()
    };
    return (
        <IconButton
            icon={<box-icon name="history" />}
            onClick={handleHistory}
            isRound
            bgColor='white'
        >
            {text}
        </IconButton>
    )
};


History.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


History.defaultProps = {
    text: "History",
    instance: {}
}

