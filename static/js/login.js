function notifyLogin(){
    Notification.requestPermission().then(function(result){
        var myNotification = new Notification('Electron Notification', {
            'body': 'testando a notificação',
            'icon': 'http://placekitten.com/g/300/300/'
        })
    });
}

function validRamal(){
    let account = document.getElementById('Ramal').value
    let password = document.getElementById('Password').value
    let register = {
        'action': 'register',
        'account': account,
        'password': password
    }
    register = JSON.stringify(register)
    socket.send(register)
    try{
        window.location.href = `file://${__dirname}/static/templates/login.html`;
    }
    catch (e){
        console.log(e)
    }
    console.log(registered)
}
