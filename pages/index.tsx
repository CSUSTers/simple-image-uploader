import Upload from "../components/upload";
import Head from 'next/head';
import { Card, Grid, CardContent, Typography } from "@material-ui/core";

export default props => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>
            <Grid direction="column" justify="center" alignItems="center" container style={{minHeight: "calc(100vh - 16px)"}}>
                <div style={{maxWidth: "720px"}}>
                    <Upload></Upload>
                </div>
            </Grid>
        </>
    );
}