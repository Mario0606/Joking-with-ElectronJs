function notifyLogin(){
    Notification.requestPermission().then(function(result){
        var myNotification = new Notification('Electron Notification', {
            'body': 'testando a notificação',
            'icon': 'http://placekitten.com/g/300/300/'
        })
    });
}

function onLoad(){
    var x = document.forms["ipverify"]["account"].value;
    var y = document.forms["ipverify"]["account"].id;
    if (x == "") {
        document.getElementById(y).oninvalid="ip inválido"
        console.log('blabla')
        return false;
    }
    else {
        document.getElementById(y).class="form-control is-valid"
    }
}