import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {renderIf} from "../helpers";
// UI
import {level2} from "../../components/values/shadows";
import {black, white} from "../../components/values/colors";
import {Icon} from "../../components/icon";
// Module
import Header from "./header/Header";
import Footer from "./footer/Footer";
import {connect} from "react-redux";
import {messageHide} from "./api/actions";

class Layout extends PureComponent {
    render() {
        return (
            <div>
                {/* 自定义头布局 */}
                <Header/>

                {/* Page Content */}
                <section style={{marginTop: "5em"}}>
                    {this.props.children}
                </section>

                {/* Message */}
                {renderIf(this.props.common.message.open, () => (
                    <div style={{
                        boxShadow: level2,
                        position: "fixed",
                        right: "2em",
                        bottom: "2em",
                        backgroundColor: black,
                        color: white,
                        borderRadius: "3em",
                        maxWidth: "30em"
                    }}>
                        <span style={{
                            float: "left",
                            padding: "1em 0em 1em 2em",
                            marginRight: "4em",
                            color: white
                        }}>{this.props.common.message.text}</span>

                        <Icon
                            size={1.2}
                            style={{
                                position: "absolute",
                                padding: "0.9em",
                                cursor: "pointer",
                                right: "0.5em",
                                top: 0,
                                color: white
                            }}
                            onClick={this.props.messageHide}>
                            close
                        </Icon>
                    </div>
                ))}
                <Footer/>

            </div>
        );
    }
}

// Component Properties
Layout.propTypes = {
    common: PropTypes.object.isRequired,
    messageHide: PropTypes.func.isRequired
};

// Component Properties
// Layout.defaultProps = {
//     common: {
//         message: {text: "知道了", open: true}
//     },
//     messageHide: {}
// };

const commonState = (state) => {
    return {
        common: state.common
    }
}

export default connect(commonState, {messageHide})(Layout)
