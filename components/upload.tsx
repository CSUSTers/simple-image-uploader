import Button from '@material-ui/core/Button';
import ClouldUploadIcon from '@material-ui/icons/CloudUpload';
import Selector from './selector';
import Progress from './progress';
import { useState } from 'react';
import { CardContent, CardMedia, Grid, Paper, Snackbar, Typography } from '@material-ui/core';
import { CSSProperties } from 'react';
import { uploadFile } from '../services/upload';


export default (props) => {
    const [file, setFile] = useState(undefined);
    const [uploading, setUploading] = useState(false);
    const [url, setURL] = useState(undefined);
    const [progress, setProgress] = useState(undefined);

    const wrapper: CSSProperties = {
        position: "relative",
        margin: 0,
        padding: 0,
        overflow: "hidden"
    }
    const imageStyle: CSSProperties = {
        transition: "filter .5s easy-in-out",
        filter: uploading ? "blur(10px)" : undefined,
        maxWidth: "100%",
        marginBottom: "-5px"
    }
    function handleFileSelect(f: File) {
        setFile(f);
    }
    async function handleUpadte() {
        setUploading(true);
        setProgress(-1);
        let url = await uploadFile(file);
        setProgress(100);
        setURL(url);
    }
    function reset() {
        setFile(undefined);
        setUploading(false);
        setURL(undefined);
        setProgress(undefined);
    }
    return (
        <Grid item>
            <Grid container spacing={2} direction="column">
                <Grid item>
                    <Paper>
                        {file &&
                            <div style={{ ...wrapper }}>
                                <img src={URL.createObjectURL(file)} style={imageStyle}></img>
                                {uploading &&
                                    <Progress progress={progress}></Progress>
                                }
                            </div>
                        }
                        {!uploading &&
                            <Selector onFileChange={handleFileSelect} style={{ width: "100%" }}></Selector>
                        }
                    </Paper>
                </Grid>
                {!uploading && file &&
                    <Grid item>
                        <Button color="primary" variant="contained" style={{ width: "100%" }} onClick={handleUpadte}>
                            <ClouldUploadIcon style={{ marginRight: 4 }} />
                            upload
                        </Button>
                    </Grid>
                }
                <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}}
                  open={!!url}
                  message={<Typography variant="body1">从 <a href={url} style={{color: "white"}}>{url}</a> 访问你的图片。</Typography>}
                  action={[<Button onClick={reset} color="secondary">再传一张</Button>]}>
                </Snackbar>
            </Grid>
        </Grid>
    );
}