// Imports
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  ${props => (props.justifyRight ? "justify-content: flex-end" : "")};
  ${props => (props.justifyCenter ? "justify-content: center" : "")};

  ${props => (props.alignTop ? "align-items: flex-start" : "")};
  ${props => (props.alignBottom ? "align-items: flex-end" : "")};
  ${props => (props.alignCenter ? "align-items: center" : "")};

  ${props => (props.gutter ? "margin-left: -1em" : "margin-left: 0")};
`;
// Component
const Grid = props => {
    const {
        children,

        justifyRight,
        justifyCenter,

        alignTop,
        alignBottom,
        alignCenter,

        gutter,
        ...others
    } = props;

    const GridCells = React.Children.map(children, GridCell => {
        if (!GridCell) {
            return null;
        }
        if (GridCell.props) {
            return React.cloneElement(GridCell, {gutter});
        }
        return GridCell;
    });

    return (
        <Div
            justifyRight={justifyRight}
            justifyCenter={justifyCenter}
            alignTop={alignTop}
            alignBottom={alignBottom}
            alignCenter={alignCenter}
            gutter={gutter}
            {...others}>
            {GridCells}

            {/* language=CSS
			<style jsx>{`
        div {
          display: flex;
          flex-flow: row;
          flex-wrap: wrap;

          ${justifyRight ? "justify-content: flex-end;" : ""}
          ${justifyCenter ? "justify-content: center;" : ""}

          ${alignTop ? "align-items: flex-start;" : ""}
          ${alignBottom ? "align-items: flex-end;" : ""}
          ${alignCenter ? "align-items: center;" : ""}

          ${gutter ? "margin-left: -1em;" : "margin-left: 0;"}
        }
      `}</style> */}
        </Div>
    );
};

// Component Properties
Grid.propTypes = {
    justifyRight: PropTypes.bool,
    justifyCenter: PropTypes.bool,

    alignTop: PropTypes.bool,
    alignBottom: PropTypes.bool,
    alignCenter: PropTypes.bool,

    gutter: PropTypes.bool
};

Grid.defaultProps = {
    justifyRight: false,
    justifyCenter: false,

    alignTop: false,
    alignBottom: false,
    alignCenter: false,

    gutter: false
};

export default Grid;
