import React, { useEffect, useRef } from "react";
import { Stack, HStack } from "@chakra-ui/react";
import ImageEditor from "@toast-ui/react-image-editor";
import PropTypes from "prop-types";
import "react-color-palette/lib/css/styles.css";
import "boxicons";

//* MENU *//
import { Toolbar } from "./_partials/menus/Toolbar";
import { UndoRedoDesc } from "./_partials/menus/UndoRedoDesc";
import { Trash } from "./_partials/menus/Trash";
import useWindowDimensions from "./_hooks/useWindowDimensions";

/**
 * @author Guée Lothaire
 */
export const ImageDrawing = ({
  fileLink,
  fileName,
  title,
  desc,
  functionToSave,
}) => {
  // Référence de l'instance d'édition
  const editorRef = useRef();
  const editorInstance = editorRef.current?.getInstance();

  // FULLSCREEN
  const { height, width } = useWindowDimensions();

  /** Quand les développeurs auront corrigé le problème de la méthode loadImageFromURL() avec React,
   * il ne faudra plus inclure toute la partie 'includeUI' ci-dessous.
   */
  const props = () => ({
    // INCLUDE UI
    includeUI: {
      loadImage: {
        path: fileLink,
        name: fileName,
      },
      initMenu: "",
      uiSize: {
        width: { width },
        height: { height },
      },
    },
    cssMaxWidth: width,
    cssMaxHeight: height,
    selectionStyle: {
      cornerColor: "darkgray",
      cornerStyle: "circle",
      cornerSize: 20,
    },
    usageStatistics: false,
  });

  // A cause de l'UI incluse il faut cependant supprimer un noeud se trouvant en fin de page qui nous gêne
  const rootElement = document.getElementById("root");
  useEffect(() => {
    if (rootElement.parentElement.lastChild.nodeName === "svg")
      rootElement.parentElement.lastChild.remove();

    if (editorInstance) {
      editorInstance.resizeCanvasDimension({ width, height });
    }
  }, [rootElement, editorInstance, width, height]);

  // Modifications des classes CSS de l'éditeur dû à l'includeUI
  const classes = {
    editor: {
      "& .tui-image-editor-container": {
        overflow: "hidden",
      },
      // Enlever l'help menu pour accéder à "l'historique"
      "& .tui-image-editor-header, .tui-image-editor-help-menu, .tui-image-editor-controls, .tui-image-editor-submenu":
        {
          display: "none",
        },
      "& .tui-image-editor-main-container": {
        backgroundColor: "transparent !important",
      },
    },
    ui: {
      "& .tui-image-editor-header": {
        display: "none",
      },
    },
  };

  // Composant
  return (
    <HStack
      display="flex"
      justifyContent="center"
      bgColor="darkgray"
      css={classes.editor}
    >
      {" "}
      {/* ref={rootRef} POUR LE CONTAINER */}
      <ImageEditor ref={editorRef} {...props(fileLink, fileName)} />
      <Stack position="absolute" left={2} top={4}>
        <UndoRedoDesc
          editorInstance={editorInstance}
          fileName={fileName}
          title={title}
          desc={desc}
        />
      </Stack>
      <Stack position="absolute" right={5} top={4}>
        <Toolbar
          editorInstance={editorInstance}
          functionToSave={functionToSave}
        />
      </Stack>
      <Stack position="absolute" left={2} bottom={5}>
        <Trash editorInstance={editorInstance} />
      </Stack>
    </HStack>
  );
};

ImageDrawing.propTypes = {
  fileLink: PropTypes.string.isRequired,
  fileName: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  functionToSave: PropTypes.func,
};

ImageDrawing.defaultProps = {
  fileName: "Unknown.png",
  title: "Document n°42",
  desc: "/",
  functionToSave: undefined,
};
