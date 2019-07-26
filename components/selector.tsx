import Button from "@material-ui/core/Button";
import FolderIcon from '@material-ui/icons/FolderOpen'
import { RefObject, createRef } from "react";

export default (props: {onFileChange?: (f: File)=>void, style? : any}) => {
    const ref : RefObject<HTMLInputElement> = createRef();
    return (<>
        <input id="file-upload" name="file" type="file" accept=".jpg,.png,.jpeg" hidden ref={ref} 
            onChange={e => (props.onFileChange || ((_) => {}))(e.target.files[0])} />
        
        <Button style={props.style} color="primary" onClick={() => ref.current.click()}>
            <FolderIcon style={{marginRight: 4}} />
            Select a file.
        </Button>
        </>
    )
}