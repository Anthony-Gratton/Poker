export function tr(msg:string, dialogue:boolean =false, con:boolean =true){
    if(dialogue)
        alert(msg);
    if(con)
        console.log(msg);

}

export const urlServeur ="http://localhost/poker420-sf/public/index.php/";