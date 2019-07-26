import { CSSProperties, useState, useEffect } from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import Done from '@material-ui/icons/Done'

export default (props) => {
    let { progress } = props;
    let centerContainer = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    let styles : CSSProperties = {
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, .5)",
        backdropFilter: "blur(10px)",
        position: "absolute",
        left: 0,
        top: 0,
        margin: 0,
        padding: 0,
        transition: "all .5s easy-in-out",
        ...centerContainer
    }

    return (
        <div style={styles}>
            {   progress >= 100 &&
                <Done style={{color: "white", position: "absolute"}}></Done>
            }
            <CircularProgress style={{color: "white"}} {
                ...(
                    progress > 0 && progress <= 100 ? 
                    {variant:"static", value: progress} :
                    {} 
                    )
                }>
            </CircularProgress>
        </div>
    )
}