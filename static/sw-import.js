self.addEventListener('push', function(event) {
    var title = 'ET Push Message';
    event.waitUntil(
        self.registration.showNotification(title, {
            'body': 'Test message body',
            'icon': 'http://lorempixel.com/100/100/cats/1/'
        })
    );
});
