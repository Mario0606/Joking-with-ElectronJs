
let socket
let registered = false

function websocketStart(){
    var MachineID = document.getElementById('MachineID')
    if(socket == null){
        try{
            host = `ws://${MachineID.value}:9000`
            console.log(host)
            socket = new WebSocket(host);
            
            socket.onopen = function(e) {
                MachineID.className = "form-control is-valid"
                document.getElementById('Ramal').disabled = false
                document.getElementById('Password').disabled = false
            };
        
            socket.onmessage = function(event) {
                console.log(event)
                if(event.data['action'] == 'register'){
                    console.log('action register')
                    registered = true
                }
            };
        
            socket.onclose = function(event) {
            if (event.wasClean) {
                alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
            } else {
                // e.g. server process killed or network down
                // event.code is usually 1006 in this case
                // alert('[close] Connection died');
                return
            }
            };
        
            socket.onerror = function(error) {
                MachineID.className = "form-control is-invalid"
            };
        }
        catch (e){
            MachineID.className = "form-control is-invalid"
        }
    }
    else {
        console.log('websocket já conectado')
    }
}