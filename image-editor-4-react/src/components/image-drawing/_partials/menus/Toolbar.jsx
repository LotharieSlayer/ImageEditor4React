import React, { useState } from "react";
import { Stack, SlideFade, IconButton, useDisclosure } from "@chakra-ui/react";
import { useColor } from "react-color-palette";
import PropTypes from "prop-types";
import "react-color-palette/lib/css/styles.css";
import "boxicons";

//* MENUS *//
import { Draw } from "../buttons/draw/Draw";
import { Line } from "../buttons/draw/Line";
import { Arrow } from "../buttons/draw/Arrow";
import { TextObject } from "../buttons/text/TextObject";

import { Select } from "../buttons/utils/Select";
import { Download } from "../buttons/utils/Download";

import { ShapeMenu } from "../buttons/shape/ShapeMenu";
import { FlipMenu } from "../buttons/flip/FlipMenu";
import { FilterMenu } from "../buttons/filter/FilterMenu";
import { ColorMenu } from "../buttons/color/ColorMenu";
import { FontColorMenu } from "../buttons/color/FontColorMenu";
import { ThickMenu } from "../buttons/thickness/ThickMenu";
import { Save } from "../buttons/utils/Save";

export const Toolbar = ({ editorInstance, functionToSave }) => {
  // COULEURS
  const [color, setColor] = useColor("hex", "#00d6ff");
  const [textColor, setTextColor] = useColor("hex", "#ff7000");

  // BOUTON SELECIONNE
  const [btnSelected, setBtnSelected] = useState("select");

  // EPAISSEUR DU TRAIT (Drawing) & CONTOUR (Shape)
  const [thicknessValue, setThicknessValue] = useState(10);

  // STATE DE L'OBJET EN COURS D'UTILISATION
  const [objectActiveID, setObjectActiveID] = useState(null);

  // AFFICHER LA TOOLBAR OU NON
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

  return (
    <Stack>
      <Stack>
        {isOpen && (
          <IconButton
            onClick={onToggle}
            icon={<box-icon type="solid" name="chevron-up" animation="tada" />}
            isRound
            size="lg"
            marginBottom={3}
            padding={5}
            bgColor="white"
            boxShadow="lg"
          />
        )}
        {!isOpen && (
          <IconButton
            onClick={onToggle}
            icon={<box-icon type="solid" name="chevron-down" />}
            isRound
            size="lg"
            marginBottom={3}
            padding={6}
            bgColor="white"
            boxShadow="lg"
          />
        )}
      </Stack>
      <SlideFade in={isOpen} offsetY="-20px" unmountOnExit>
        <Stack
          bgColor="white"
          paddingX={4}
          paddingY={8}
          borderRadius={500}
          boxShadow="lg"
        >
          <Select
            instance={editorInstance}
            isActive={btnSelected === "select"}
            setBtnSelected={setBtnSelected}
          />

          <Draw
            instance={editorInstance}
            color={color}
            thicknessValue={thicknessValue}
            isActive={btnSelected === "draw"}
            setBtnSelected={setBtnSelected}
          />
          <Line
            instance={editorInstance}
            color={color}
            thicknessValue={thicknessValue}
            isActive={btnSelected === "line"}
            setBtnSelected={setBtnSelected}
          />
          <Arrow
            instance={editorInstance}
            color={color}
            thicknessValue={thicknessValue}
            isActive={btnSelected === "arrow"}
            setBtnSelected={setBtnSelected}
          />

          <FlipMenu
            instance={editorInstance}
            color={color}
            setBtnSelected={setBtnSelected}
          />
          <ShapeMenu
            instance={editorInstance}
            color={color}
            thicknessValue={thicknessValue}
            setBtnSelected={setBtnSelected}
          />
          <TextObject
            instance={editorInstance}
            color={textColor}
            setObjectActiveID={setObjectActiveID}
            isActive={btnSelected === "textObject"}
            setBtnSelected={setBtnSelected}
          />
          <FilterMenu
            instance={editorInstance}
            color={color}
            setBtnSelected={setBtnSelected}
          />
          <ThickMenu
            instance={editorInstance}
            thicknessValue={thicknessValue}
            setThicknessValue={setThicknessValue}
            setBtnSelected={setBtnSelected}
          />

          <ColorMenu
            instance={editorInstance}
            color={color}
            setColor={setColor}
            setBtnSelected={setBtnSelected}
          />
          <FontColorMenu
            instance={editorInstance}
            color={textColor}
            setColor={setTextColor}
            objectActiveID={objectActiveID}
            setBtnSelected={setBtnSelected}
          />
        </Stack>
        <Stack>
          {typeof functionToSave !== "undefined" && (
            <Save instance={editorInstance} functionToSave={functionToSave} />
          )}
          <Download instance={editorInstance} />
        </Stack>
      </SlideFade>
    </Stack>
  );
};

Toolbar.propTypes = {
  editorInstance: PropTypes.instanceOf(Object),
  functionToSave: PropTypes.func,
};

Toolbar.defaultProps = {
  editorInstance: {},
  functionToSave: undefined,
};
