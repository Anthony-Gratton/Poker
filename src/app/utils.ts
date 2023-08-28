export const urlServeur = "http://localhost/poker-sf/public/index.php"


export function tr(msg: string, dialog: Boolean = false, conso: Boolean = true) {
    if (dialog) {
        alert(msg);
    }
    if (conso) {
        console.log(msg)
    }
}