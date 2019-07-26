import fetch from 'isomorphic-fetch';

const url = "https://csust.xyz";
const api = "/api/upload"

async function uploadFile(f: File) : Promise<string> {
    const form = new FormData();
    form.set("file", f);
    const result = await fetch(`${url}${api}`, {method: "POST", body: form});
    const json = await result.json();
    if (parseInt(json.status) != 0) {
        throw new Error(`oops! ${JSON.stringify(json)}`);
    }
    return `${url}/i/${json.id}`;
}

export {
    uploadFile
};