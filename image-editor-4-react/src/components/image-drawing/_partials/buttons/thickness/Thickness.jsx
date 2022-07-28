import React from 'react';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const Thickness = ({ text, instance }) => {

    const defaultValue = 10;

    return (
        <Slider
            aria-label={text}
            defaultValue={defaultValue}
            min={1}
            max={100}
            name={text}
            onChange={(val) => {
                instance.setBrush({ width: val });
                // Même chose que pour la couleur, on reset toutes les formes avec la nouvelle épaisseur
                instance.setDrawingShape('triangle',    { strokeWidth: val });
                instance.setDrawingShape('rect',        { strokeWidth: val });
                instance.setDrawingShape('circle',      { strokeWidth: val });
            }}>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>
    )
};

Thickness.propTypes = {
    text: PropTypes.string,
    instance: PropTypes.instanceOf(Object),
}


Thickness.defaultProps = {
    text: "Thickness",
    instance: {}
}

