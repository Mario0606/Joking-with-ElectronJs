var socket = null
var registered = false

function websocketStart() {
    var machineId = document.getElementById('machine-id')

    if (!machineId.value) {
        return;
    }

    if (socket == null) {
        try {
            socket = new WebSocket(`ws://${machineId.value}:9000`)

            socket.onopen = function(e) {
                machineId.className = "form-control is-valid"
                // Disable others inputs
                document.getElementById('Ramal').disabled = false
                document.getElementById('Password').disabled = false
            }
        
            socket.onmessage = function(event) {
                console.log(event)
                if (event.data['action'] == 'register') {
                    console.log('action register')
                    registered = true
                }
            }
        
            socket.onclose = function(event) {
                if (event.wasClean) {
                    alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
                } else {
                    // e.g. server process killed or network down
                    // event.code is usually 1006 in this case
                    // alert('[close] Connection died');
                    return
                }
            }
        
            socket.onerror = function(error) {
                machineId.className = "form-control is-invalid"
            }
        } catch (e) {
            machineId.className = "form-control is-invalid"
        }
    } else {
        console.log('websocket já conectado')
    }
}