const St = imports.gi.St; //importamos St para tener elementos de interfaz de usuario
const Main = imports.ui.main; //importamos main para traer todos los elementos de UI (panel)

let panelButton, panelButtonText;

function init(){
    panelButton = new St.Bin({
        style_class:"panel.button"
    })

    panelButtonText = new St.Label({
        style_class:"examplePanelText",
        text:"iniciando"
    })

    panelButton.set_child(panelButtonText)
}

function enable(){
    Main.panel._rightBox.insert_child_at_index(panelButton,1)
}

function disable(){
    Main.panel._rightBox.remove_child(panelButton)
}