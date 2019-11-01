import React, {Component} from "react";
import {Helmet} from "react-helmet";

// UI
import {Button} from "../components/button";
import {Select, File} from "../components/input";
import {Textarea} from "../components/input";
import {Tile as ImageTile} from "../components/image";
import {Grid, GridCell} from "../components/grid";
import {IconImage} from "../components/icon";

// UI values
import {level1} from "../components/values/shadows";

// module
import {APP_URL} from "../settings/config/env";
// route
import {routes} from "../settings/routes";

const loginPath = () => routes.login.path;
const searchPath = () => routes.search.path;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "Sign In 登录"
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("跳转登录");
        //const username = "qxj"; //e.target.elements[0].value;
        this.props.history.push(loginPath());
    }

    render() {
        return (
            <Grid gutter={true} alignCenter={true} style={{padding: "2em"}}>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <GridCell>
                    <Grid gutter={true} alignCenter={true}>
                        <GridCell justifyCenter={true}>
                            <ImageTile
                                width={300}
                                height={530}
                                shadow={level1}
                                image={`${APP_URL}/images/stock/women/1.jpg`}/>
                        </GridCell>
                        <GridCell>
                            <Grid>
                                <GridCell justifyCenter={true}>
                                    <ImageTile
                                        width={170}
                                        height={250}
                                        shadow={level1}
                                        image={`${APP_URL}/images/stock/women/2.jpg`}/>
                                </GridCell>
                            </Grid>
                            <Grid>
                                <GridCell justifyCenter={true}>
                                    <ImageTile
                                        width={170}
                                        height={250}
                                        shadow={level1}
                                        style={{marginTop: "1.9em"}}
                                        image={`${APP_URL}/images/stock/women/3.jpg`}/>
                                </GridCell>
                            </Grid>
                        </GridCell>
                    </Grid>
                </GridCell>
                <GridCell>
                    <IconImage path={searchPath()}/>
                    <Button
                        type='button'
                        theme='primary'
                        disabled={false}
                        onClick={() => this.props.history.push(loginPath())}>
                        {this.state.login}
                    </Button>
                    <Select fullWidth={true}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                    </Select>
                    <File/>
                    <Textarea fullWidth={true}/>
                </GridCell>
            </Grid>
        );
    }
}

// function Index() {
//   return (<div></div>);
// }

export default Home;
