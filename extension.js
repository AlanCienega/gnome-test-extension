const St = imports.gi.St; //importamos St para tener elementos de interfaz de usuario
const Main = imports.ui.main; //importamos main para traer todos los elementos de UI (panel)
const Mainloop = imports.mainloop;
const GLib = imports.gi.GLib;

let panelButton, panelButtonText, timeout;

function setButtonText(){

    var arr =[]

    /*
    //agregar fecha del sistema
    var [ok, out, err, exit] = GLib.spawn_command_line_sync("date") 
    arr.push(out.toString().replace('\n', ''))
    */
    /*
    // Ejecutamos pgrep gedit para revisar si gedit se esta ejecutando
    var [ok, out, err, exit] = GLib.spawn_command_line_sync("pgrep gedit") 
        if (out>0) {
            arr.push('Gedit')
        }
    */
    /*
    // Private
    var [ok, out, err, exit] = GLib.spawn_command_line_sync('/bin/bas -c "ifconfig -a | grep tun0') 
        if (out>0) {
            arr.push('private')
        }
    */
    /*
    //fecha con javascript
    var date = new Date();
    arr.push(date)
    */
    // fecha con  GLib, recomendada para poder personalizar
    var now = GLib.DateTime.new_now_local();
    var str = now.format("%d-%m-%Y %H:%M:%S");
    arr.push(str);

    //Mostrar los comandos
    panelButtonText.set_text(arr.join('  '))
    return true;
}

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
    timeout = Mainloop.timeout_add_seconds(1.0, setButtonText)
}

function disable(){
    Main.panel._rightBox.remove_child(panelButton)
}