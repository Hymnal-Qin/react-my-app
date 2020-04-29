import React from "react";

// UI
import {Grid, GridCell} from "../../components/grid";

// Module
import Clock from "../../modules/Clock";

const Footer = props => {
    return (
        <footer>
            <Grid alignCenter={true} style={{marginTop: "1.5em"}}>
                <GridCell style={{textAlign: "right", paddingRight: "1.0em"}}>
                    © 2019 App, Inc.
                </GridCell>

                <GridCell style={{textAlign: "left", paddingLeft: "1.0em"}}>
                    <Clock/>
                </GridCell>
            </Grid>
        </footer>
    );
};

export default Footer;
