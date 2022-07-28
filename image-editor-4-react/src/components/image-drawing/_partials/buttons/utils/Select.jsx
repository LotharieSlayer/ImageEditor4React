import React from 'react';
import { IconButton, Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';



export const Select = ({ text, instance, isActive, setBtnSelected }) => {

    // Stop le mode Drawing qui permet de faire de la séléction d'objets notamment
    const handleSelect = async () => {
        setBtnSelected('select')
        await instance.stopDrawingMode();
    };
    return (
        <Stack>
            {!isActive && <IconButton isRound bgColor='white' icon={<box-icon name="pointer"/>} onClick={handleSelect} isActive={isActive} />}
            {isActive && <IconButton isRound bgColor='white' icon={<box-icon name="pointer" type="solid" animation="tada" />} onClick={handleSelect} isActive={isActive} />}
        </Stack>
    )
};


Select.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
    isActive: PropTypes.bool,
    setBtnSelected: PropTypes.func.isRequired
}


Select.defaultProps = {
    text: "Select",
    instance: {},
    isActive: false
}

