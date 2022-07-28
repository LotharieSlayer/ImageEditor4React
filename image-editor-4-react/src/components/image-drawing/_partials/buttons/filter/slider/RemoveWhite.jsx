import React from 'react';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export const RemoveWhite = ({ text, instance }) => {

    const defaultValue = 0;

    return (
        <Slider
            aria-label={text}
            defaultValue={defaultValue}
            min={0}
            max={100}
            name={text}
            onChange={(val) => {
            if(val < 2)
                instance.removeFilter('removeColor')
            else
                instance.applyFilter('removeColor', { color: '#FFFFFF', useAlpha: true, distance: val / 255 })}
            }>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>
    )
};


RemoveWhite.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


RemoveWhite.defaultProps = {
    text: "RemoveWhite",
    instance: {}
}

