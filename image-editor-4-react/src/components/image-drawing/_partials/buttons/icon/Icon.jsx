import React from 'react';
import { IconButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const Icon = ({ text, instance, setBtnSelected }) => {
    const handleIcon = () => {
        setBtnSelected('none')
        instance.addIcon('arrow')
    };
    return (
        <IconButton
            icon={<box-icon name="popsicle" />}
            onClick={handleIcon}
            isRound
            bgColor='white'
        >
            {text}
        </IconButton>
    )
};


Icon.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
    setBtnSelected: PropTypes.func.isRequired
}


Icon.defaultProps = {
    text: "Icon",
    instance: {},
}

